//import {useRouter}
import {useRouter} from 'next/router';

import {header, cat1, cat2, cat1Imgs, cat2Imgs, cat3, cat3Imgs} from '../../data/cate_content'
import Display from '../../comps/Display';
export default function Categories(){
  const r = useRouter();

  //retrieving something from URL
  const{page, type} = r.query;

    //UI for when there is a page variable in the router
 // if(page !== undefined){
   // return <div>
     // Here is Category {page}
    //</div>
  //}

    //UI for when there is NO page variable in the router
  return <div>
    <h1>Categories #{page} - {type}</h1>
    <button onClick={
      ()=>console.log(r)
    }>Check router in console</button>


<button onClick={
      ()=>r.replace({
        pathname:"/categories",
      //setting something into URL
        query:{
          //shortcut to do if/else -> ? :
          // shortcut version of sayin if page is undefined, then page:1, else page:Number(page) + 1
        page: page === undefined ? 1 : Number(page)+1,//add 1 to the current page
        type:"sports"
      }})
    }>Try Router</button>


    <button onClick={
      ()=>alert(page)
    }>What page are you on?</button>

{/* USE CATE_CONTENT AND ROUTER TO SHOW DIFFERENT CATEGORIES*/}
    <hr />
    <div>
      <h1>{header}</h1>

{/* Clicking on the div routes to type="fo" */}
      <div>
        <div onClick={
          ()=>r.replace({
            pathname:"/categories",
            query:{
              type:cat1.route
            }
          })
        }>{cat1.title}</div>
{/* Clicking on the div routes to type="an" */}
        <div onClick={
          ()=>r.replace({
            pathname:"/categories",
            query:{
              type:cat2.route
            }
          })
        }>{cat2.title}</div>

<div onClick={
          ()=>r.replace({
            pathname:"/categories",
            query:{
              type:cat3.route
            }
          })
        }>{cat3.title}</div>

        
      </div>

      {/*SHOW IMAGES*/}
      <div>
        {
        type === "an" && <div>Show the animals!
          {
            //diplay arr={cat2Imgs} />
            //cat2Imgs.map((o,i)=><img src={o} height={100} />)
          }
          <Display arr={cat1Imgs} />
        </div>
        }
      </div>

      <div>
        {type === "fo" && <div>Show the food!
        <Display arr={cat2Imgs} />
        </div>
        }
      </div>

      <div>
        {type === "bo" && <div>Show the books!
        <Display arr={cat3Imgs} />
        </div>
        }
      </div>

    </div>
  </div>
}

/* 
POPULAR SHORTUTS WITH CONDITIONS
1. ? :
2. &&
3. ||

if boolean condition is true then use value1 else value2
value1 could be a data type (string, int, array etc),values could be an UI element
1. boolean condition ? value1 : value2

if boolean condition is true then use value
2. boolean condition && value

if value1 is usable use it, else use value2 
3. use value1 || use value2 
*/