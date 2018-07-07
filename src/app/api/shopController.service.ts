/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Category } from '../model/category';
import { PageShop } from '../model/pageShop';
import { Shop } from '../model/shop';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ShopControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createCategory
     * 
     * @param category category
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCategoryUsingPOST(category: Category, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createCategoryUsingPOST(category: Category, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createCategoryUsingPOST(category: Category, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createCategoryUsingPOST(category: Category, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling createCategoryUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/category`,
            category,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * createShop
     * 
     * @param categoryId categoryId
     * @param shop shop
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createShopUsingPOST(categoryId: number, shop: Shop, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createShopUsingPOST(categoryId: number, shop: Shop, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createShopUsingPOST(categoryId: number, shop: Shop, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createShopUsingPOST(categoryId: number, shop: Shop, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling createShopUsingPOST.');
        }
        if (shop === null || shop === undefined) {
            throw new Error('Required parameter shop was null or undefined when calling createShopUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/category/${encodeURIComponent(String(categoryId))}/shops`,
            shop,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteCategory
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCategoryUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public deleteCategoryUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public deleteCategoryUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public deleteCategoryUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCategoryUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<boolean>(`${this.basePath}/category/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllShopsByCategoryId
     * 
     * @param categoryId categoryId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllShopsByCategoryIdUsingGET(categoryId: number, observe?: 'body', reportProgress?: boolean): Observable<PageShop>;
    public getAllShopsByCategoryIdUsingGET(categoryId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageShop>>;
    public getAllShopsByCategoryIdUsingGET(categoryId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageShop>>;
    public getAllShopsByCategoryIdUsingGET(categoryId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling getAllShopsByCategoryIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<PageShop>(`${this.basePath}/category/${encodeURIComponent(String(categoryId))}/shops`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCategories
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategoriesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Category>>;
    public getCategoriesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Category>>>;
    public getCategoriesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Category>>>;
    public getCategoriesUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<Category>>(`${this.basePath}/categories`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCategory
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategoryUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Category>;
    public getCategoryUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Category>>;
    public getCategoryUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Category>>;
    public getCategoryUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCategoryUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Category>(`${this.basePath}/category/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateCategory
     * 
     * @param id id
     * @param category category
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCategoryUsingPUT(id: number, category: Category, observe?: 'body', reportProgress?: boolean): Observable<Category>;
    public updateCategoryUsingPUT(id: number, category: Category, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Category>>;
    public updateCategoryUsingPUT(id: number, category: Category, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Category>>;
    public updateCategoryUsingPUT(id: number, category: Category, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCategoryUsingPUT.');
        }
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling updateCategoryUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<Category>(`${this.basePath}/category/${encodeURIComponent(String(id))}`,
            category,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}