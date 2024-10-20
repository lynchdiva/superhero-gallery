'use strict';

const cardsData = JSON.parse(`[
  {
    "name": "Бетмен",
    "universe": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "url": "https://sun9-73.userapi.com/impg/Qmk7-z2NCG0dw98nOLQFRNiCUMD3RYliZJ2O2A/lH3_bZdD0IY.jpg?size=547x397&quality=95&sign=83995456f5a8123e1ae54faf57dd21a5&type=albumU",
    "info": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
  },
  {
    "name": "Супермен",
    "universe": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
    "url": "https://sun9-15.userapi.com/impg/cvgSvTncrsDDIl8x7FFTupYXpeX9xHLPk6drbA/s9WDAiH-UuE.jpg?size=547x397&quality=95&sign=0936347f7b69e6d9b4459e5cdb52e589&type=album",
    "info": "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
  },
  {
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "url": "https://sun9-2.userapi.com/impg/-Zf-LiHgHKl8JST6if6sbjoS7Kl4aAcNgd7SNg/hh_8E21hrGM.jpg?size=547x397&quality=95&sign=b1e86b4a2c4bbe04003edf35ee997ba3&type=album",
    "info": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
  },
  {
    "name": "Спайдер-мен/Человек-паук",
    "universe": "Marvel Comics",
    "alterego": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "superpowers": "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
    "url": "https://sun9-79.userapi.com/impg/3w65uO7YnsuXTTgQU3Fi3TjvmRsRkfuksMO9yw/J_DHYSdcLmM.jpg?size=547x397&quality=95&sign=b9ab3ffd1f7e8e4537ad2f52a382bd37&type=album",
    "info": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:) Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание."
  },
  {
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterego": "Стивен Роджерс",
    "occupation": "супер-солдат",
    "friends": "Мстители",
    "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    "url": "https://sun9-80.userapi.com/impg/vB-aPqAwk550kMRRGRXvDeX_QuTNowz3eRBPUQ/KKXTXsgu44U.jpg?size=547x397&quality=95&sign=5f1ee9138fa268c353ec6d93fe6c96e2&type=album",
    "info": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)"
  },
  {
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterego": "нет; полное имя — Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpowers": "всё, что может бог, плюс молот Мьелнир",
    "url": "https://sun9-51.userapi.com/impg/ibI4WKLDlDjSftmn_Yb61H-J09iPspB_Eu3QJg/IcMchQDMPnM.jpg?size=547x397&quality=95&sign=075bb3e0b813b1f8f27001694f6470b0&type=album",
    "info": "Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии."
  },
  {
    "name": "Халк",
    "universe": "Marvel Comics",
    "alterego": "Брюс Беннер",
    "occupation": "супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpowers": "сверхчеловеческая сила и скорость, выносливость, полёт",
    "url": "https://sun9-13.userapi.com/impg/ogPvzEByYniYEpa_vqRTtUZa_s3--Ujvgbd-WA/W_iELO5YNRA.jpg?size=547x397&quality=95&sign=115d5ef01ccb12b2ecc1b568f55e0f59&type=album",
    "info": "Идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
  },
  {
    "name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterego": "Диана Принс",
    "occupation": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полёт",
    "url": "https://sun9-10.userapi.com/impg/cZyvL2H26at2DBVgUOLGUrGSBfdEWq8UOBu9CQ/iZH7qeXxy_0.jpg?size=547x397&quality=95&sign=92b76aa9ee79a0b998f742a55846747f&type=album",
    "info": "Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Своё настоящее имя Диана она получила в честь древнегреческой богини охоты, а суперспособности от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
  },
  {
    "name": "Черная вдова",
    "universe": "Marvel Comics",
    "alterego": "Наташа Романофф",
    "occupation": "супергероиня, шпионка",
    "friends": "Мстители",
    "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    "url": "https://sun9-51.userapi.com/impg/rAarCPdAOofpb-1WgOtODI9w1GAtvutZOFO-SQ/pqbgXeTl42E.jpg?size=547x397&quality=95&sign=10e34c1fc0bfb2d5f375135b9437fead&type=album",
    "info": "Супергероиня российского происхождения, родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал её опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. Там же ей вживили сыворотку Суперсолдата, как у Капитана Америки, но в советском варианте. Благодаря ей, Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка даёт эффект замедленного старения. По мнению фанатов, самое главное преимущество Чёрной Вдовы — то, что её сыграла красотка Скарлетт Йоханссон :)"
  },
  {
    "name": "Дэдпул",
    "universe": "Marvel Comics",
    "alterego": "Уэйд Уинстон Уилсон",
    "occupation": "антигерой, наёмник",
    "friends": "частично Мстители, Человек-паук, Росомаха",
    "superpowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    "url": "https://sun9-28.userapi.com/impg/s95wKGaLbgjJpA8KITpm3gKe_ivx1XQxewUX5Q/QvY5jOgrres.jpg?size=728x382&quality=95&sign=9ea03fdc9d53dfece6557a6f9ea83d0a&type=album",
    "info": "Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, чёрное чувство юмора: за него Дэдпула прозвали «Болтливым наёмником»"
  }
]`);

cardsData.forEach(cardData => createCard(cardData));

function createCard(cardData) {
  const gallery = document.querySelector('.gallery');
  const cardContainer = document.createElement('div');

  cardContainer.classList.add('card__animation-container');

  cardContainer.innerHTML = `<div class="card__animation-container">
          <div class="card-other-side">
            <p class="card-other-side__info">${cardData.info}</p>
          </div>
          <div class="card">
            <h2 class="card__title">${cardData.name}</h2>
            <button class="card__button-rotate" type="button"></button>
            <p class="card__text">
              <span class="card__desc">Вселенная: </span>${cardData.universe}
            </p>
            <p class="card__text">
              <span class="card__desc">Альтер Эго: </span>${cardData.alterego}
            </p>
            <p class="card__text">
              <span class="card__desc">Род деятельсности: </span>${cardData.occupation}
            </p>
            <p class="card__text">
              <span class="card__desc">Друзья: </span>${cardData.friends}
            </p>
            <p class="card__text">
              <span class="card__desc">Суперсилы: </span>${cardData.superpowers}
            </p>
            <div class="card__box-img">
              <img class="card__img" src="${cardData.url}" alt="${cardData.name}" />
            </div>
            <div class="card__rating-container">
              <label class="card__star-label">
                <input
                  class="card__star-radio"
                  type="radio"
                  name="rating"
                  value="1"
                  id="star1"
                />
              </label>
              <label class="card__star-label">
                <input
                  class="card__star-radio"
                  type="radio"
                  name="rating"
                  value="2"
                  id="star2"
                />
              </label>
              <label class="card__star-label">
                <input
                  class="card__star-radio"
                  type="radio"
                  name="rating"
                  value="3"
                  id="star3"
                />
              </label>
              <label class="card__star-label">
                <input
                  class="card__star-radio"
                  type="radio"
                  name="rating"
                  value="4"
                  id="star4"
                />
              </label>
              <label class="card__star-label">
                <input
                  class="card__star-radio"
                  type="radio"
                  name="rating"
                  value="5"
                  id="star5"
                />
              </label>
            </div>
          </div>
        </div>`;

  gallery.append(cardContainer);
}

const animationContainers = document.querySelectorAll(
  '.card__animation-container'
);

animationContainers.forEach(container =>
  container.addEventListener('click', function flipCard() {
    container.classList.toggle('card__animation-container_flip');
  })
);

const ratingContainers = document.querySelectorAll('.card__rating-container');

ratingContainers.forEach(container => {
  addHighlightEffectToStars(container);

  const ratingButtons = container.querySelectorAll('.card__star-radio');

  ratingButtons.forEach(button => {
    button.addEventListener('change', function () {
      removeHighlightEffectToStars(container);

      const rating = button.value;

      setRating(rating, container);

      saveRatingInLocalStorage(rating, button);
    });
  });
});

restoreRatings();

function addHighlightEffectToStars(container) {
  container.addEventListener('mouseover', toogleHighlightStars);
  container.addEventListener('mouseout', toogleHighlightStars);
}

function removeHighlightEffectToStars(container) {
  container.removeEventListener('mouseover', toogleHighlightStars);
  container.removeEventListener('mouseout', toogleHighlightStars);
}

function toogleHighlightStars(e) {
  if (e.target.tagName === 'LABEL') {
    const allStars = this.querySelectorAll('.card__star-label');
    const radioButton = e.target.querySelector('.card__star-radio');
    const starNum = +radioButton.value;

    for (let i = 0; i < starNum; i++) {
      allStars[i].classList.toggle('card__star-label_filled');
    }
  }
}

function setRating(rating, container) {
  const allStars = container.querySelectorAll('.card__star-label');

  for (let i = 0; i < rating; i++) {
    allStars[i].classList.add('card__star-label_filled');
  }

  for (let i = allStars.length; i > rating; i--) {
    allStars[i - 1].classList.remove('card__star-label_filled');
  }
}

function saveRatingInLocalStorage(rating, ratingButton) {
  const key = ratingButton
    .closest('.card')
    .querySelector('.card__title').textContent;

  if (!localStorage.getItem('ratings')) {
    localStorage.setItem('ratings', JSON.stringify([]));
  }

  const ratings = JSON.parse(localStorage.getItem('ratings'));

  let keyFound = false;

  if (ratings.length === 0) {
    ratings.push({
      name: key,
      rating: rating
    });
  }

  ratings.forEach(data => {
    if (data.name === key) {
      data.rating = rating;
      keyFound = true;
    }
  });

  if (!keyFound) {
    ratings.push({
      name: key,
      rating: rating
    });
  }

  localStorage.setItem('ratings', JSON.stringify(ratings));
}

function restoreRatings() {
  const ratings = JSON.parse(localStorage.getItem('ratings'));

  if (!ratings) return;

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const name = card.querySelector('.card__title').textContent;

    const container = card.querySelector('.card__rating-container');

    for (let data of ratings) {
      if (data.name === name) {
        setRating(data.rating, container);

        removeHighlightEffectToStars(container);
      }
    }
  });
}
