import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Data } from './Data';

@Injectable()
export class ResourcesService {

    // Attributes
    $http: Http;
    data: Data;
    domain: string;
    sessionid: string;

    // Methods
    constructor ($http: Http, data: Data) {
        this.$http = $http;
        this.data = data;
        this.domain = 'http://localhost:3000';
        this.sessionid = this.data.get('sessionId') || '';
    }

    private processUrl (url: string, params: any) {
        if (!params) params = {};
            var urlParams = (url.match(/\:([a-zA-Z])+/g) || []);
            urlParams.forEach(function(param) {
            param = param.substring(1,param.length);
            if (!params[param]) {
                url = url.replace(':'+param+'/', '');
                url = url.replace(':'+param, '');
                return;
            }
            url = url.replace(':'+param, params[param]);
        });
        return url;
    }

    private resolveRequest (data: { url: string, method: string, body?: any, query?: any, urlParams?: any }) {
        data.query = data.query || {};
        var fUrl = this.processUrl(data.url, data.urlParams || {});
        fUrl = this.domain + fUrl;
        if (data.query && Object.keys(data.query).length) {
            fUrl += '?' + Object.keys(data.query).map((k) => {
                return k+'='+data.query[k];
            }).join('&');
        }
        return this.$http.request(fUrl, {
            method: data.method,
            body: (data.body || {}),
        });
    }

    public loginUsingEmailPassword (email, password) {
        return new Observable((observer) => {
            this.resolveRequest({
                url: '/auth/login',
                method: 'POST',
                body: {
                    email: email,
                    password: password,
                }
            }).subscribe((resp) => {
                var data = resp.json();
                this.sessionid = data._id;
                this.data.set('sessionId', data._id);
                observer.next(data);
                observer.complete();
            }, (err) => {
                observer.error(err);
                observer.complete();
            });
        });
    }

    public getUserInSession () {
        return this.resolveRequest({
            method: 'GET',
            url: '/auth/me'
        }).map((resp) => { return resp.json(); });
    }
}