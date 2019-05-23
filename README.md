# WEBANIMATIES, 2018/2019 by Agung Tarumampen

Link naar website: https://agunovvski.github.io/webanimaties/


## Poster

![main poster](https://assets.fontsinuse.com/static/use-media-items/47/46045/upto-700xauto/583e7014/2_Moderna-Museet_MMM-plakat_353_500.jpeg?resolution=0)
![alternative posterse](https://i.etsystatic.com/8628069/r/il/3e628e/1070729354/il_794xN.1070729354_7gah.jpg)

De gekozen poster is van de Zweedse Moderna Museet (museum) dat hoort bij een series advertenties. Ik heb beide posters gecombineerd zodat ik gebruik kon maken van de illustraties om het te laten animeren en bij de main poster de letters te animeren.


### Interactie

Ik heb toegevoegd:

* Click `svgElement[i].addEventListener('click', triggerSVG);`
* Hover `.container-grid div:hover`
* Double Click `p.addEventListener('dblclick', scaleThis);`
* Load `window.addEventListener('load', revealAnimation);`
* Keyboard Event `document.addEventListener('keydown', logKey);`
* Wheel `h1.addEventListener('wheel', zoom);`
* Context Menu (rechtermuis click) `p.addEventListener('contextmenu', glowThis);`

Met deze events trigger trigger ik van allerlei animaties en transities.

### Animatie

Animeer mijn SVG's met:
```@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}```

Scale letters animatie met: 
```@keyframes scaleIt {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}```

Glowing animation met: 
```@keyframes glowing {

  0% {
    -moz-box-shadow: 0px 0px 0px 0px rgb(199, 60, 17);
    box-shadow: 0px 0px 0px 0px rgb(199, 60, 17);
  }


  40% {
    -moz-box-shadow: 0px 0px 30px 10px rgb(199, 60, 17);
    box-shadow: 0px 0px 30px 10px rgb(199, 60, 17);
  }

  60% {
    -moz-box-shadow: 0px 0px 40px 7px rgb(199, 60, 17);
    box-shadow: 0px 0px 40px 7px rgb(199, 60, 17);
  }

  95% {
    -moz-box-shadow: 0px 0px 50px 5px rgb(199, 60, 17);
    box-shadow: 0px 0px 50px 5px rgb(199, 60, 17);
  }

  100% {
    -moz-box-shadow: 0px 0px 0px 0px rgb(199, 60, 17);
    box-shadow: 0px 0px 0px 0px rgb(199, 60, 17);
  }
  
}```


### Responsiveness



