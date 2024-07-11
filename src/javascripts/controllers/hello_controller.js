import { Controller } from '@hotwired/stimulus'; 
export default class extends Controller {
  connect() {    
    console.log('hello connected')
    //fetch("/apps/inst/info",{
    let rootUrl = this.element.getAttribute('data-root-url')
    fetch(`${rootUrl}/apps/inst/info`,{
      method: 'GET'
    }).then(response=>response.text())
      .then(data=>{
        console.log(data)
      })
  }
}
