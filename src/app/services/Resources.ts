import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ResourcesService {

    // Attributes
    $http: Http;

    // Methods
    constructor ($http: Http) {
        this.$http = $http;
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

}