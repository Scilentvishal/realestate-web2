$('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    centerPadding: '60px',
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    centerPadding: '60px',
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 468,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  var gallery = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href',
    overlay: true,
    nav: true,
    navText: ['&#8249;', '&#8250;'],
    animationSlide: true,
    animationSpeed: 250,
    captionsData: 'title',
    close: true,
    closeText: ['&#x2716;'],


  });

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);
  const images = document.querySelectorAll('.forlight');
  images.forEach(image => {
    image.addEventListener('click', e => {
      lightbox.classList.add('active');
      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
    })
  })
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwHQ5G12qOq7pwx2GNLY48ykqWfOjPJffGBQAW5Df7LjCroN8DG9h-VohN0Sc1mJp9d/exec';
  const form = document.forms['google-sheet'];
  const form1 = document.forms['google-sheet1'];


  form.addEventListener('submit', e => {
    e.preventDefault();
    var contact = $("#fnumber").val();
    console.log(contact);
    if (contact > 6000000000) {
      if (contact.length == 10) {
        if (isNaN(contact)) {
          alert("Please Enter Valid Number.");
        }
        else {
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
              close();
              $(form).trigger("reset");
              window.open('Thank-you.html', '_blank');
            })
            .catch(error => console.error('Error!', error.message))
        }
      } else {
        alert("Please Enter 10 Digit Number.");
      }
    }
    else {
      alert("Please Enter Valid Number.");
    }
  })
  form1.addEventListener('submit', e => {
    e.preventDefault();
    var contact = $("#number").val();
    console.log(contact);
    if (contact > 6000000000) {
      if (contact.length == 10) {
        if (isNaN(contact)) {
          alert("Please Enter Valid Number.");
        }
        else {
          fetch(scriptURL, { method: 'POST', body: new FormData(form1) })
            .then(response => {
              $(form1).trigger("reset");
              window.open('Thank-you.html', '_blank');
            })
            .catch(error => console.error('Error!', error.message))
        }
      } else {
        alert("Please Enter 10 Digit Number.");
      }
    }
    else {
      alert("Please Enter Valid Number.");
    }
  })
  $(document).ready(function () {
    $('#exampleModal').modal('show');
    setTimeout(function () {
      $('#exampleModal').modal('show');
    }, 5000);
  });