import WebpartListSelectors from '../config/webpart-list-selectors'

function handleSearchClear(callback) {
  if (!callback) {
    throw new Error("callback variable is not defined.")
  }
  let clearButton = document.querySelector(WebpartListSelectors.clearButton)

  if (clearButton) {
    clearButton["onclick"] = () => {
      setTimeout(() => {
        callback()
      }, 200)
    }
  }
}

function handleBackButton(callback) {
  if (!callback) {
    throw new Error("callback variable is not defined.")
  }
  let backButton = document.querySelector(WebpartListSelectors.backButton)

  if (backButton) {
    backButton["onclick"] = () => {
      setTimeout(() => {
        callback()
      }, 200)
    }
  }
}

function handleSearch(callback) {
  if (!callback) {
    throw new Error("callback variable is not defined.")
  }
  // console.log("Handle search")
  const searchBox = document.querySelector(WebpartListSelectors.searchBox)

  if (searchBox) {
    searchBox["onkeydown"] = () => {
      // console.log("Search")
      setTimeout(() => {
        callback()
        handleSearchClear(callback)
      }, 50)
      setTimeout(() => {
        callback()
      }, 500)

    }
  }

}

function handleSeeAllClick(callback) {
  if (!callback) {
    throw new Error("callback variable is not defined.")
  }

  const seeAllButtons = document.querySelectorAll(WebpartListSelectors.seeAllButtons)

  if (seeAllButtons.length) {
    for (let i = 0; i < seeAllButtons.length; i++) {
      seeAllButtons[i]["onclick"] = () => {

        setTimeout(() => {
          callback()
        }, 50)
        setTimeout(() => {
          callback()
        }, 500)
      }
    }
  }
}

function handleCategoryLinkClick(callback) {
  if (!callback) {
    throw new Error("callback variable was not defined.")
  }

  let button = document.querySelector(WebpartListSelectors.categoryLinks)

  if (button) {
    button["onclick"] = () => {
      // console.log("Cat click")
      setTimeout(() => {
        callback()
      }, 10)
    }
  }

}

function handleCategoryChange(callback) {
  if (!callback) {
    throw new Error('callback variable was not defined.')
  }
  setTimeout(() => {
    let categoryList = document.querySelectorAll(WebpartListSelectors.categoryListLinks)
    console.log(categoryList.length)

    for (let i = 0; i < categoryList.length; i++) {
      // for (let category of categoryList) {
      let category = categoryList[i]
      console.log(category)
      category["onclick"] = () => {
        console.log("Cat Change")

        setTimeout(() => {
          callback()
        }, 300)
        setTimeout(() => {
          callback()
        }, 50)
      }
    }
  }, 50)

}

export {
  handleBackButton,
  handleCategoryChange,
  handleCategoryLinkClick,
  handleSearch,
  handleSearchClear,
  handleSeeAllClick
}
