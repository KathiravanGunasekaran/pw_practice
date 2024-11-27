import { Page,Locator,expect } from "@playwright/test";

export class searchCourse{
    page:Page;
    isbn:Locator;
    searchBtn:Locator;
    bookisbn:Locator;

    constructor(page:Page){
        this.page=page;
        this.isbn= page.locator("");
        this.searchBtn=page.locator("");
        this.bookisbn=page.locator("");
    }

    async fill(){
        await this.isbn.type("");
        await this.searchBtn.click();
    }

    async examine(){
        const value=await this.bookisbn.getAttribute('value');
        await console.log(value);
        await expect(value).toBe("");
        await this.bookisbn.click();
    }

}
