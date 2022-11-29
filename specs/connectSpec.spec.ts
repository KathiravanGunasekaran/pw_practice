import {test,expect,Page} from '@playwright/test'; // importing from libraries
import { bookDetails } from '../pageObjects/bookDetails.page';
import { landingPage } from '../pageObjects/landingPage.page';
import { searchCourse } from '../pageObjects/searchCourse.page';
import { signIn } from '../pageObjects/signIn.page';

/* 

    fixtures are needed ie., Page and Browser Global fixture
    Browser is for invoke the browser. So passing as a params will do it
    Will enclose it in curly braces.else, it will act as normal string param

*/

test.describe.serial("Test scenarios",async()=>{
    let page: Page;
    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
    });
    
    test("Test 01",async()=>{     
        let Signin = new signIn(page);
        let Landingpage = new landingPage(page);
         await Signin.goto();
         await Signin.check();
         await Signin.fill();
       
        await page.waitForTimeout(3000);
         
    });

    test("Landing page test 02",async()=>{
        let Landingpage = new landingPage(page);
        await Landingpage.check();
        await Landingpage.addCourseBtn.click();
        await page.waitForTimeout(3000);

    })

    test("Search book 03",async()=>{
        let Searchcourse = new searchCourse(page);
        await Searchcourse.fill();
        await Searchcourse.examine();
        await page.waitForTimeout(3000);
    })
    // test("Course Info 04",async()=>{
    //     let Bookdetails= new bookDetails(page);
    //     Bookdetails.fill();
    // })

})
