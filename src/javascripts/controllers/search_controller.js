import { Controller } from '@hotwired/stimulus'; 
export default class extends Controller {
  static targets = ["searchBar", "keyword"]
  connect() {    
    console.log('search connected')
  }

  showSearchBar() {
    this.searchBarTarget.classList.remove("hidden")
    this.keywordTarget.focus()
  }

  hideSearchBar() {
    this.searchBarTarget.classList.add("hidden")
  }
}
