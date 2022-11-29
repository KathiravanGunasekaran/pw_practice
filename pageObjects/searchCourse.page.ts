import { Page,Locator,expect } from "@playwright/test";

export class searchCourse{
    page:Page;
    isbn:Locator;
    searchBtn:Locator;
    bookisbn:Locator;

    constructor(page:Page){
        this.page=page;
        // this.isbn=page.locator("input.form-control mgh-courseSearch-textbox");
        this.isbn= page.locator("[placeholder='Search title, author, or subject']");
       // this.searchBtn= page.locator("xpath=//button[@class='mgh-courseSearch-button enable-button']");
        this.searchBtn=page.locator("button.mgh-courseSearch-button");
        this.bookisbn=page.locator(".mgh-book-title");
    }

    async fill(){
        await this.isbn.type("0000006425");
        await this.searchBtn.click();
    }

    async examine(){
        const value=await this.bookisbn.getAttribute('value');
        await console.log(value);
        await expect(value).toBe("0000006425");
        await this.bookisbn.click();
    }

}