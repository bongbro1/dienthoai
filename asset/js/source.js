// SLIDERS SECTION_ONE
export function carousel_banner () {
  const list_imgs = document.querySelector('#js_list_imgs')
  const list_dots = document.querySelectorAll('#js_list_dots li')
  const list_banner_title = document.querySelectorAll('#js_list_banner_title li')

  var value = 0;
  var width_element = 856; // kích thước của slide SECTION_ONE

  list_banner_title.forEach(li => {
    li.addEventListener('click', () => {
      const current_element = document.querySelector('#js_list_banner_title .active')
      let current_index = [...list_banner_title].indexOf(current_element);
      let click_index = [...list_banner_title].indexOf(li);
    
      let count = click_index - current_index;
      value = value + count * width_element;
    
      [...list_banner_title][current_index].classList.remove('active');
      [...list_banner_title][click_index].classList.add('active');
    
      [...list_dots][current_index].classList.remove('active');
      [...list_dots][click_index].classList.add('active');
     
      list_imgs.style.transform = `translateX(${-value}px)`;
    })
  });
  setInterval(() => {
    value += 856;
    var indexOfList = value / 856;
    if (indexOfList === list_dots.length) {
      indexOfList = 0;
      value = 0;
      
      [...list_banner_title][list_dots.length-1].classList.remove('active');
      [...list_dots][list_dots.length-1].classList.remove('active');
    }

    [...list_banner_title][Math.max(0, indexOfList-1)].classList.remove('active'); // trong trường hợp indexOfList = 0
    [...list_banner_title][indexOfList].classList.add('active');

    [...list_dots][Math.max(0, indexOfList-1)].classList.remove('active'); // trong trường hợp indexOfList = 0
    [...list_dots][indexOfList].classList.add('active');

    list_imgs.style.transform = `translateX(${-value}px)`;
  }, 3000);
}

// SECTION_TWO
export function slide_img_product () {
  const list_btn_prev = document.querySelectorAll('#product_img_prev');
  const list_btn_next = document.querySelectorAll('#product_img_next');
  const buttons = document.querySelectorAll('.list_product_img button');

  buttons.forEach(element => {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
    })
  });
  var value_list_img_product = 0;

  list_btn_prev.forEach(btn_product_img_prev => {
    btn_product_img_prev.addEventListener('click', () => {
        const list_img_product = btn_product_img_prev.parentNode.querySelector('#js_list_img_product'); // lay khung slide
        value_list_img_product += 180;
        let count = list_img_product.querySelectorAll('img').length - 1;
        if (value_list_img_product > 0)
          value_list_img_product = -count*180;
        value_list_img_product = Math.min(0, value_list_img_product);
        list_img_product.style.transform = `translateX(${value_list_img_product}px)`;
        console.log(value_list_img_product);
      })
  });

  list_btn_next.forEach(btn_product_img_next => {
    btn_product_img_next.addEventListener('click', () => {
      const list_img_product = btn_product_img_next.parentNode.querySelector('#js_list_img_product'); // lay khung slide
      value_list_img_product -= 180;
      let count = list_img_product.querySelectorAll('img').length - 1;
      if (value_list_img_product < -count*180)
        value_list_img_product = 0;
      value_list_img_product = Math.max(-count*180, value_list_img_product);
      list_img_product.style.transform = `translateX(${value_list_img_product}px)`;
      console.log(value_list_img_product);
    })
  })

}
// // BTN_VIEWMORE
export function activeBtn_viewMore () {
  const lst_btn_viewMore = document.querySelectorAll('#btn_viewMore'); // trả về tất cả các btn có id là 'btn_viewMore'
  lst_btn_viewMore.forEach(btn_viewMore => {
    btn_viewMore.addEventListener('click', ()=>{
      let index = [...lst_btn_viewMore].indexOf(btn_viewMore) + 1;
      let string = "#js_viewMore".concat(index);
      const viewMore = document.querySelector(string);
      viewMore.classList.add('open');
      btn_viewMore.classList.add('close');
    })
  })
}

// // SECTION_THREE
export function slider_row () {
  function hideShowControlButton (count, buttons) {
    if (count <= 5) {
      buttons.forEach (button => {
        button.style.display = 'none';
      })
    }
  }
  function xuLy (string) {
    const list_btn_slide = document.querySelectorAll(`.${string} .control_slider button`);
    const inner_slide = document.querySelector(`.${string} #js_inner_slide`);
    let count = inner_slide.querySelectorAll('.col-12d5').length;
  
    //hide button when count < number element of inner_slide (count <= 5)
    hideShowControlButton(count, list_btn_slide);
  
    let value_inner_slide = 0;
    list_btn_slide.forEach(btn_slide => {
      btn_slide.addEventListener('click', () => {
        
        if (btn_slide.classList.contains('js_slider_prev')) {
          value_inner_slide += 260;
  
          if (value_inner_slide > 0) {
            value_inner_slide = -(count - 5) * 260;
            inner_slide.style.transition = `all ease-in-out 1s`;
          }
          else
            inner_slide.style.transition = `all ease-in-out 0.4s`;
          inner_slide.style.transform = `translateX(${value_inner_slide}px)`;
        }
        else {
          value_inner_slide -= 260;
          if (value_inner_slide < -(count - 5) * 260) {
            value_inner_slide = 0;
            inner_slide.style.transition = `all ease-in-out 1s`;
          }
          else
            inner_slide.style.transition = `all ease-in-out 0.4s`;
          inner_slide.style.transform = `translateX(${value_inner_slide}px)`;
        }
        console.log(value_inner_slide);
      })
    });
  }

  // kích hoạt tính năng slide của các list_product được truyền vào hàm
  for (const string of arguments) {
    xuLy(string);
  }
}


// --------------------- APPLE ----------------------
const body = document.querySelector('body');
export function showSelectOption () {
  var list_has_childs = document.querySelectorAll('#js_has_child');
  
  
  
  list_has_childs.forEach(has_child => {
    has_child.addEventListener('click', () => {
      if (has_child.classList.contains('active'))
        has_child.classList.remove('active');
      else
        has_child.classList.add('active');
    })
  })
}

export function activeNumberPage () {
  const list_pages = document.querySelectorAll('#js_list_pages .page');
  const current_page = document.querySelector('#js_list_pages .active');
  const btn_prev = document.querySelector('#js_btn_prev');
  const btn_next = document.querySelector('#js_btn_next');
  const total_page = document.querySelector('#js_total_page');

  var cuurent_index = [...list_pages].indexOf(current_page);
  var total_index = Number.parseInt(total_page.textContent);


  var click_index = 0;
  list_pages.forEach (page => {
    page.addEventListener('click', () => {
      click_index = [...list_pages].indexOf(page);

      [...list_pages][click_index].classList.add('active');
      [...list_pages][cuurent_index].classList.remove('active');

      cuurent_index = click_index;
    })
  })

  btn_prev.addEventListener('click', () => {
    if (cuurent_index > 0) {
      cuurent_index --;
      [...list_pages][cuurent_index + 1].classList.remove('active');
      [...list_pages][cuurent_index].classList.add('active');
    }
  })
  btn_next.addEventListener('click', () => {
    if (cuurent_index < total_index-1) {
      cuurent_index ++;
      [...list_pages][cuurent_index - 1].classList.remove('active');
      [...list_pages][cuurent_index].classList.add('active');
    }
  })

  
}