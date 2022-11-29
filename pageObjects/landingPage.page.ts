import { Page,Locator,expect } from "@playwright/test";

export class landingPage{

    page:Page;
    pageHeading:Locator;
    addCourseBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.pageHeading= page.locator("h1.large-header large-6 columns");
        this.addCourseBtn= page.locator("a#addCourse");
    }

    async check(){
        //await this.page.waitForTimeout(5000);
        await expect(this.page).toHaveTitle("McGraw-Hill Connect | My Courses");
        //console.log(await this.pageHeading.textContent());
       // await expect(this.pageHeading).toContainText("My courses");
    }
    
}
