import {Page,Locator,Expect} from '@playwright/test'
import { searchCourse } from './searchCourse.page'
 

export class bookDetails{

    page:Page;
    cName:Locator;
    timeZone:Locator;
    startDate:Locator;
    endDate:Locator;
    sName:Locator;
    selectSection:Locator;
    previousBtn:Locator;
    cancelBtn:Locator;
    createBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.cName= page.locator("");
        this.timeZone=page.locator("");
        this.startDate= page.locator("");
        this.endDate= page.locator("");
        this.sName= page.locator("");
        this.selectSection= page.locator("");
        this.previousBtn= page.locator("");
        this.cancelBtn= page.locator("");
        this.createBtn= page.locator("");
    }

    async fill(){
        await this.cName.fill("");
        await this.sName.fill("Test Auto 1");
    }

}
