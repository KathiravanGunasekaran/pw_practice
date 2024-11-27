import { Page,Locator,expect } from "@playwright/test";

export class landingPage{

    page:Page;
    pageHeading:Locator;
    addCourseBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.pageHeading= page.locator("");
        this.addCourseBtn= page.locator("");
    }

    async check(){
        await expect(this.page).toHaveTitle("");  
    }
    
}
