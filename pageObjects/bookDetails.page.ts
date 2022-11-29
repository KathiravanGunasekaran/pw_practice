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
        this.cName= page.locator("#courseNameValue");
        this.timeZone=page.locator("#selectedTimezone");
        this.startDate= page.locator("sectionStartDate");
        this.endDate= page.locator("sectionEndDate");
        this.sName= page.locator("sectionName");
        this.selectSection= page.locator("selectSection");
        this.previousBtn= page.locator("prev-button");
        this.cancelBtn= page.locator("cancel-button");
        this.createBtn= page.locator("create-button");
    }

    async fill(){
        await this.cName.fill("Test Autobot Kathir");
        //await this.timeZone.selectOption((label:''));
        await this.sName.fill("Test Auto 1");
        //this.selectSection.click();
    }

   // let SearchCourse = new searchCourse(page); 

}