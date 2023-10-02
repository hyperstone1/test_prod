!(function () {
  var e = {
      34: function () {
        document.addEventListener('DOMContentLoaded', () => {
          const e = document.querySelectorAll('.banner__card'),
            t = (document.querySelector('.banner__slider'), document.querySelector('.modal')),
            s = document.querySelectorAll('.control'),
            i = document.querySelectorAll('.modal__close'),
            r = document.querySelectorAll('.form__navigation-link'),
            n = t.querySelector('.register'),
            a = t.querySelector('.login');
          t.querySelectorAll('.form-btn');
          let o = null;
          const l = document.querySelectorAll('.form'),
            u = document.querySelectorAll('.form__input-email'),
            d = document.querySelectorAll('.form__input-pass'),
            c = document.querySelector('.link-contacts'),
            p = document.querySelector('.contacts'),
            h = p.querySelector('.contacts__close'),
            f = document.querySelector('.product__close'),
            m = document.querySelector('.product'),
            g = document.querySelectorAll('.result__card-buy'),
            v = document.querySelectorAll('.banner__buy-btn'),
            b = document.querySelectorAll('.categories__card'),
            S = document.querySelectorAll('.category__list'),
            k = document.querySelector('.list__close'),
            E = document.querySelector('.list');
          function w(e) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
          }
          function x(e) {
            return console.log(e), /^(?=.*\d).{3,}$/.test(e);
          }
          b.forEach((e) => {
            e.addEventListener('click', () => {
              const t = e.dataset.category;
              S.forEach((s) => {
                if (s.classList.contains(t)) {
                  S.forEach((e) => {
                    e.classList.remove('visible');
                  }),
                    b.forEach((e) => {
                      e.classList.remove('active');
                    }),
                    e.classList.add('active');
                  const t = s.closest('.list');
                  return (
                    console.log('container: ', t),
                    t.classList.add('visible'),
                    s.classList.add('visible'),
                    void console.log(s)
                  );
                }
              });
            });
          }),
            k.addEventListener('click', () => {
              E.classList.remove('visible'),
                S.forEach((e) => {
                  e.classList.remove('visible');
                }),
                b.forEach((e) => {
                  e.classList.remove('active');
                });
            }),
            v.length > 0 &&
              v.forEach((e) => {
                e.addEventListener('click', () => {
                  m.classList.add('visible');
                });
              }),
            g.length > 0 &&
              g.forEach((e) => {
                e.addEventListener('click', () => {
                  m.classList.add('visible');
                });
              }),
            c.addEventListener('click', () => {
              p.classList.add('visible');
            }),
            h &&
              h.addEventListener('click', () => {
                p.classList.remove('visible');
              }),
            f &&
              f.addEventListener('click', () => {
                m.classList.remove('visible');
              }),
            p.addEventListener('click', (e) => {
              e.target.closest('.contacts_container') || p.classList.remove('visible');
            }),
            u.forEach((e) => {
              e.addEventListener('input', function () {
                const e = w(this.value);
                this.classList.toggle('invalid', !e);
              });
            }),
            d.forEach((e) => {
              e.addEventListener('input', function () {
                console.log(this.value);
                const e = x(this.value);
                this.classList.toggle('invalid', !e);
              });
            });
          const y = document.querySelectorAll('.result__card-price--old');
          function C(t) {
            const s = t.target.closest('.banner__card');
            t.target.closest('.banner__slider')
              ? s &&
                s !== o &&
                ((o = s),
                e.forEach((e) => {
                  e === o
                    ? (e.classList.remove('blur'), e.classList.add('hover'))
                    : (e.classList.add('blur'), e.classList.remove('hover'));
                }))
              : ((o = null),
                e.forEach((e) => {
                  e.classList.remove('blur'), e.classList.remove('hover');
                }));
          }
          function _() {
            window.innerWidth < 769
              ? window.removeEventListener('mousemove', C)
              : window.addEventListener('mousemove', C);
          }
          l.forEach((e) => {
            e.addEventListener('submit', function (s) {
              s.preventDefault();
              const i = s.target.querySelector('input[name="email"]'),
                r = s.target.querySelector('input[name="pass"]'),
                n = s.target.querySelector('.pass-confirm');
              console.log(`${i}, ${r}`);
              const a = w(i.value),
                o = x(r.value),
                l = null;
              let u = null;
              if (
                (e.classList.contains('form-register')
                  ? ((u = 'register'),
                    (l = n.value === r.value),
                    console.log('isPassConfirm: ', l),
                    l
                      ? (n.classList.remove('invalid'), r.classList.remove('invalid'))
                      : (n.classList.add('invalid'), r.classList.add('invalid')))
                  : (u = 'login'),
                a && o)
              ) {
                const s = new FormData(e);
                t.classList.remove(u),
                  localStorage.setItem('auth', !0),
                  y.forEach((e) => {
                    e.classList.add('visible');
                  }),
                  document.querySelectorAll('.cabinet__list').forEach((e) => {
                    e.classList.contains('authorized')
                      ? e.classList.add('visible')
                      : e.classList.add('invisible');
                  }),
                  fetch('/register', { method: 'POST', body: s })
                    .then((e) => e.text())
                    .then((e) => console.log(e))
                    .catch((e) => console.log(e)),
                  console.log(s);
              } else i.classList.toggle('invalid', !a), r.classList.toggle('invalid', !o);
            });
          }),
            i.forEach((e) => {
              e.addEventListener('click', () => {
                console.log('click'), t.classList.remove('favorites', 'login', 'cart', 'register');
              });
            }),
            s.forEach((e) => {
              e.addEventListener('click', (i) => {
                if (!e.classList.contains('header__controls-user')) {
                  const i = e.dataset.modal,
                    r = t.querySelector(`.${i}`);
                  s.forEach((e) => {
                    const s = e.dataset.modal;
                    t.querySelector(`.${s}`).classList.remove('visible'), t.classList.remove(s);
                  }),
                    r.classList.add('visible'),
                    console.log(r),
                    t.classList.add(i);
                }
              });
            }),
            r.forEach((e) => {
              e.addEventListener('click', () => {
                e.classList.contains('link-register')
                  ? (t.classList.remove('favorites', 'login', 'cart', 'register'),
                    t.classList.add('register'),
                    a.classList.remove('visible'),
                    n.classList.add('visible'))
                  : (t.classList.remove('favorites', 'login', 'cart', 'register'),
                    t.classList.add('login'),
                    n.classList.remove('visible'),
                    a.classList.add('visible'));
              });
            }),
            window.addEventListener('resize', _),
            window.addEventListener('load', _);
        });
      },
    },
    t = {};
  function s(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var n = (t[i] = { exports: {} });
    return e[i](n, n.exports, s), n.exports;
  }
  !(function () {
    'use strict';
    function e(e) {
      return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
    }
    function t(s, i) {
      void 0 === s && (s = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((r) => {
          void 0 === s[r]
            ? (s[r] = i[r])
            : e(i[r]) && e(s[r]) && Object.keys(i[r]).length > 0 && t(s[r], i[r]);
        });
    }
    const i = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: '' },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return { initEvent() {} };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return [];
          },
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
    };
    function r() {
      const e = 'undefined' != typeof document ? document : {};
      return t(e, i), e;
    }
    const n = {
      document: i,
      navigator: { userAgent: '' },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          },
        };
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia() {
        return {};
      },
      requestAnimationFrame(e) {
        return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
      },
      cancelAnimationFrame(e) {
        'undefined' != typeof setTimeout && clearTimeout(e);
      },
    };
    function a() {
      const e = 'undefined' != typeof window ? window : {};
      return t(e, n), e;
    }
    function o(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function l() {
      return Date.now();
    }
    function u(e) {
      return (
        'object' == typeof e &&
        null !== e &&
        e.constructor &&
        'Object' === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function d() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ['__proto__', 'constructor', 'prototype'];
      for (let i = 1; i < arguments.length; i += 1) {
        const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != r &&
          ((s = r),
          !('undefined' != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const s = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              n = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== n &&
              n.enumerable &&
              (u(e[i]) && u(r[i])
                ? r[i].__swiper__
                  ? (e[i] = r[i])
                  : d(e[i], r[i])
                : !u(e[i]) && u(r[i])
                ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : d(e[i], r[i]))
                : (e[i] = r[i]));
          }
        }
      }
      var s;
      return e;
    }
    function c(e, t, s) {
      e.style.setProperty(t, s);
    }
    function p(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const r = a(),
        n = -t.translate;
      let o,
        l = null;
      const u = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(t.cssModeFrameID);
      const d = s > n ? 'next' : 'prev',
        c = (e, t) => ('next' === d && e >= t) || ('prev' === d && e <= t),
        p = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const e = Math.max(Math.min((o - l) / u, 1), 0),
            a = 0.5 - Math.cos(e * Math.PI) / 2;
          let d = n + a * (s - n);
          if ((c(d, s) && (d = s), t.wrapperEl.scrollTo({ [i]: d }), c(d, s)))
            return (
              (t.wrapperEl.style.overflow = 'hidden'),
              (t.wrapperEl.style.scrollSnapType = ''),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [i]: d });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(p);
        };
      p();
    }
    function h(e, t) {
      return void 0 === t && (t = ''), [...e.children].filter((e) => e.matches(t));
    }
    function f(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function m(e, t) {
      return a().getComputedStyle(e, null).getPropertyValue(t);
    }
    function g(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function v(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function b(e, t, s) {
      const i = a();
      return s
        ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue('width' === t ? 'margin-right' : 'margin-top'),
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom'),
            )
        : e.offsetWidth;
    }
    let S, k, E;
    function w() {
      return (
        S ||
          (S = (function () {
            const e = a(),
              t = r();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                'scrollBehavior' in t.documentElement.style,
              touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
            };
          })()),
        S
      );
    }
    var x = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ('function' != typeof t) return i;
        const r = s ? 'unshift' : 'push';
        return (
          e.split(' ').forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ('function' != typeof t) return i;
        function r() {
          i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
          t.apply(i, n);
        }
        return (r.__emitterProxy = t), i.on(e, r, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ('function' != typeof e) return s;
        const i = t ? 'unshift' : 'push';
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(' ').forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, r) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(r, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
        return (
          'string' == typeof n[0] || Array.isArray(n[0])
            ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
            : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
          s.unshift(i),
          (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const y = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`);
        if (s) {
          let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t && e.isElement && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
            t && t.remove();
        }
      },
      C = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute('loading');
      },
      _ = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            'auto' === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          r = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const s = r,
            n = [s - t];
          return (
            n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
            void e.slides.forEach((t, s) => {
              n.includes(t.column) && C(e, s);
            })
          );
        }
        const n = r + i - 1;
        if (e.params.rewind || e.params.loop)
          for (let i = r - t; i <= n + t; i += 1) {
            const t = ((i % s) + s) % s;
            (t < r || t > n) && C(e, t);
          }
        else
          for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1)
            i !== r && (i > n || i < r) && C(e, i);
      };
    var A = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(m(i, 'padding-left') || 0, 10) -
              parseInt(m(i, 'padding-right') || 0, 10)),
            (s =
              s -
              parseInt(m(i, 'padding-top') || 0, 10) -
              parseInt(m(i, 'padding-bottom') || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                marginRight: 'marginBottom',
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { wrapperEl: r, slidesEl: n, size: a, rtlTranslate: o, wrongRTL: l } = e,
          u = e.virtual && i.virtual.enabled,
          d = u ? e.virtual.slides.length : e.slides.length,
          p = h(n, `.${e.params.slideClass}, swiper-slide`),
          f = u ? e.virtual.slides.length : p.length;
        let g = [];
        const v = [],
          S = [];
        let k = i.slidesOffsetBefore;
        'function' == typeof k && (k = i.slidesOffsetBefore.call(e));
        let E = i.slidesOffsetAfter;
        'function' == typeof E && (E = i.slidesOffsetAfter.call(e));
        const w = e.snapGrid.length,
          x = e.slidesGrid.length;
        let y = i.spaceBetween,
          C = -k,
          _ = 0,
          A = 0;
        if (void 0 === a) return;
        'string' == typeof y && y.indexOf('%') >= 0
          ? (y = (parseFloat(y.replace('%', '')) / 100) * a)
          : 'string' == typeof y && (y = parseFloat(y)),
          (e.virtualSize = -y),
          p.forEach((e) => {
            o ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
              (e.style.marginBottom = ''),
              (e.style.marginTop = '');
          }),
          i.centeredSlides &&
            i.cssMode &&
            (c(r, '--swiper-centered-offset-before', ''),
            c(r, '--swiper-centered-offset-after', ''));
        const T = i.grid && i.grid.rows > 1 && e.grid;
        let M;
        T && e.grid.initSlides(f);
        const L =
          'auto' === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter((e) => void 0 !== i.breakpoints[e].slidesPerView)
            .length > 0;
        for (let r = 0; r < f; r += 1) {
          let n;
          if (
            ((M = 0),
            p[r] && (n = p[r]),
            T && e.grid.updateSlide(r, n, f, t),
            !p[r] || 'none' !== m(n, 'display'))
          ) {
            if ('auto' === i.slidesPerView) {
              L && (p[r].style[t('width')] = '');
              const a = getComputedStyle(n),
                o = n.style.transform,
                l = n.style.webkitTransform;
              if (
                (o && (n.style.transform = 'none'),
                l && (n.style.webkitTransform = 'none'),
                i.roundLengths)
              )
                M = e.isHorizontal() ? b(n, 'width', !0) : b(n, 'height', !0);
              else {
                const e = s(a, 'width'),
                  t = s(a, 'padding-left'),
                  i = s(a, 'padding-right'),
                  r = s(a, 'margin-left'),
                  o = s(a, 'margin-right'),
                  l = a.getPropertyValue('box-sizing');
                if (l && 'border-box' === l) M = e + r + o;
                else {
                  const { clientWidth: s, offsetWidth: a } = n;
                  M = e + t + i + r + o + (a - s);
                }
              }
              o && (n.style.transform = o),
                l && (n.style.webkitTransform = l),
                i.roundLengths && (M = Math.floor(M));
            } else
              (M = (a - (i.slidesPerView - 1) * y) / i.slidesPerView),
                i.roundLengths && (M = Math.floor(M)),
                p[r] && (p[r].style[t('width')] = `${M}px`);
            p[r] && (p[r].swiperSlideSize = M),
              S.push(M),
              i.centeredSlides
                ? ((C = C + M / 2 + _ / 2 + y),
                  0 === _ && 0 !== r && (C = C - a / 2 - y),
                  0 === r && (C = C - a / 2 - y),
                  Math.abs(C) < 0.001 && (C = 0),
                  i.roundLengths && (C = Math.floor(C)),
                  A % i.slidesPerGroup == 0 && g.push(C),
                  v.push(C))
                : (i.roundLengths && (C = Math.floor(C)),
                  (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup == 0 &&
                    g.push(C),
                  v.push(C),
                  (C = C + M + y)),
              (e.virtualSize += M + y),
              (_ = M),
              (A += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + E),
          o &&
            l &&
            ('slide' === i.effect || 'coverflow' === i.effect) &&
            (r.style.width = `${e.virtualSize + y}px`),
          i.setWrapperSize && (r.style[t('width')] = `${e.virtualSize + y}px`),
          T && e.grid.updateWrapperSize(M, g, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < g.length; s += 1) {
            let r = g[s];
            i.roundLengths && (r = Math.floor(r)), g[s] <= e.virtualSize - a && t.push(r);
          }
          (g = t),
            Math.floor(e.virtualSize - a) - Math.floor(g[g.length - 1]) > 1 &&
              g.push(e.virtualSize - a);
        }
        if (u && i.loop) {
          const t = S[0] + y;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup,
              ),
              r = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) g.push(g[g.length - 1] + r);
          }
          for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1)
            1 === i.slidesPerGroup && g.push(g[g.length - 1] + t),
              v.push(v[v.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === g.length && (g = [0]), 0 !== y)) {
          const s = e.isHorizontal() && o ? 'marginLeft' : t('marginRight');
          p.filter((e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1).forEach((e) => {
            e.style[s] = `${y}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          S.forEach((t) => {
            e += t + (y || 0);
          }),
            (e -= y);
          const t = e - a;
          g = g.map((e) => (e <= 0 ? -k : e > t ? t + E : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (S.forEach((t) => {
              e += t + (y || 0);
            }),
            (e -= y),
            e < a)
          ) {
            const t = (a - e) / 2;
            g.forEach((e, s) => {
              g[s] = e - t;
            }),
              v.forEach((e, s) => {
                v[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, { slides: p, snapGrid: g, slidesGrid: v, slidesSizesGrid: S }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          c(r, '--swiper-centered-offset-before', -g[0] + 'px'),
            c(r, '--swiper-centered-offset-after', e.size / 2 - S[S.length - 1] / 2 + 'px');
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (f !== d && e.emit('slidesLengthChange'),
          g.length !== w &&
            (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
          v.length !== x && e.emit('slidesGridLengthChange'),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(u || i.cssMode || ('slide' !== i.effect && 'fade' !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          f <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let r,
          n = 0;
        'number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
        const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !i) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (r = 0; r < s.length; r += 1)
          if (void 0 !== s[r]) {
            const e = s[r].offsetHeight;
            n = e > n ? e : n;
          }
        (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: r, snapGrid: n } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        r && (a = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let o = s.spaceBetween;
        'string' == typeof o && o.indexOf('%') >= 0
          ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
          : 'string' == typeof o && (o = parseFloat(o));
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let u = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (u -= i[0].swiperSlideOffset);
          const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
            c =
              (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
            p = -(a - u),
            h = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) || (h > 1 && h <= t.size) || (p <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (l.progress = r ? -d : d),
            (l.originalProgress = r ? -c : c);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = t;
        const l = n,
          u = a;
        if (0 === i) (r = 0), (n = !0), (a = !0);
        else {
          r = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (n = s || r <= 0), (a = o || r >= 1), s && (r = 0), o && (r = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            r = t.slidesGrid[s],
            n = t.slidesGrid[i],
            a = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= r ? (l - r) / a : (l + a - n) / a), o > 1 && (o -= 1);
        }
        Object.assign(t, { progress: r, progressLoop: o, isBeginning: n, isEnd: a }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          n && !l && t.emit('reachBeginning toEdge'),
          a && !u && t.emit('reachEnd toEdge'),
          ((l && !n) || (u && !a)) && t.emit('fromEdge'),
          t.emit('progress', r);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
          n = e.virtual && s.virtual.enabled,
          a = (e) => h(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
          }),
          n)
        )
          if (s.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = a(`[data-swiper-slide-index="${t}"]`));
          } else o = a(`[data-swiper-slide-index="${r}"]`);
        else o = t[r];
        if (o) {
          o.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]), i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o } = t;
        let l,
          u = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === u &&
            (u = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (r = e)
                    : i >= t[e] && i < t[e + 1] && (r = e + 1)
                  : i >= t[e] && (r = e);
              return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
            })(t)),
          i.indexOf(s) >= 0)
        )
          l = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, u);
          l = e + Math.floor((u - e) / r.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), u === n))
          return (
            l !== o && ((t.snapIndex = l), t.emit('snapIndexChange')),
            void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(u)))
          );
        let c;
        (c =
          t.virtual && r.virtual.enabled && r.loop
            ? d(u)
            : t.slides[u]
            ? parseInt(t.slides[u].getAttribute('data-swiper-slide-index') || u, 10)
            : u),
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: c,
            previousIndex: n,
            activeIndex: u,
          }),
          t.initialized && _(t),
          t.emit('activeIndexChange'),
          t.emit('snapIndexChange'),
          a !== c && t.emit('realIndexChange'),
          (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let r,
          n = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (n = !0), (r = e);
              break;
            }
        if (!i || !n) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(i.getAttribute('data-swiper-slide-index'), 10))
            : (t.clickedIndex = r),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    function T(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
      const { activeIndex: n, previousIndex: a } = t;
      let o = i;
      if (
        (o || (o = n > a ? 'next' : n < a ? 'prev' : 'reset'),
        t.emit(`transition${r}`),
        s && n !== a)
      ) {
        if ('reset' === o) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          'next' === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
      }
    }
    var M = {
      slideTo: function (e, t, s, i, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          'string' == typeof e && (e = parseInt(e, 10));
        const n = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: u,
          previousIndex: d,
          activeIndex: c,
          rtlTranslate: h,
          wrapperEl: f,
          enabled: m,
        } = n;
        if ((n.animating && o.preventInteractionOnTransition) || (!m && !i && !r)) return !1;
        const g = Math.min(n.params.slidesPerGroupSkip, a);
        let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        const b = -l[v];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < u.length; e += 1) {
            const t = -Math.floor(100 * b),
              s = Math.floor(100 * u[e]),
              i = Math.floor(100 * u[e + 1]);
            void 0 !== u[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (a = e)
                : t >= s && t < i && (a = e + 1)
              : t >= s && (a = e);
          }
        if (n.initialized && a !== c) {
          if (
            !n.allowSlideNext &&
            (h ? b > n.translate && b > n.minTranslate() : b < n.translate && b < n.minTranslate())
          )
            return !1;
          if (!n.allowSlidePrev && b > n.translate && b > n.maxTranslate() && (c || 0) !== a)
            return !1;
        }
        let S;
        if (
          (a !== (d || 0) && s && n.emit('beforeSlideChangeStart'),
          n.updateProgress(b),
          (S = a > c ? 'next' : a < c ? 'prev' : 'reset'),
          (h && -b === n.translate) || (!h && b === n.translate))
        )
          return (
            n.updateActiveIndex(a),
            o.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            'slide' !== o.effect && n.setTranslate(b),
            'reset' !== S && (n.transitionStart(s, S), n.transitionEnd(s, S)),
            !1
          );
        if (o.cssMode) {
          const e = n.isHorizontal(),
            s = h ? b : -b;
          if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
              t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                ? ((n._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? 'scrollLeft' : 'scrollTop'] = s;
                  }))
                : (f[e ? 'scrollLeft' : 'scrollTop'] = s),
              t &&
                requestAnimationFrame(() => {
                  (n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1);
                });
          } else {
            if (!n.support.smoothScroll)
              return p({ swiper: n, targetPosition: s, side: e ? 'left' : 'top' }), !0;
            f.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
          }
          return !0;
        }
        return (
          n.setTransition(t),
          n.setTranslate(b),
          n.updateActiveIndex(a),
          n.updateSlidesClasses(),
          n.emit('beforeTransitionStart', t, i),
          n.transitionStart(s, S),
          0 === t
            ? n.transitionEnd(s, S)
            : n.animating ||
              ((n.animating = !0),
              n.onSlideToWrapperTransitionEnd ||
                (n.onSlideToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.wrapperEl.removeEventListener(
                      'transitionend',
                      n.onSlideToWrapperTransitionEnd,
                    ),
                    (n.onSlideToWrapperTransitionEnd = null),
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(s, S));
                }),
              n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          'string' == typeof e && (e = parseInt(e, 10));
        const r = this;
        let n = e;
        return (
          r.params.loop &&
            (r.virtual && r.params.virtual.enabled
              ? (n += r.virtual.slidesBefore)
              : (n = r.getSlideIndexByData(n))),
          r.slideTo(n, t, s, i)
        );
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { enabled: r, params: n, animating: a } = i;
        if (!r) return i;
        let o = n.slidesPerGroup;
        'auto' === n.slidesPerView &&
          1 === n.slidesPerGroup &&
          n.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic('current', !0), 1));
        const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
          u = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (a && !u && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: 'next' }), (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: u } = i;
        if (!l) return i;
        const d = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (u && !d && r.loopPreventsSliding) return !1;
          i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = c(o ? i.translate : -i.translate),
          h = n.map((e) => c(e));
        let f = n[h.indexOf(p) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          n.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== f &&
            ((m = a.indexOf(f)),
            m < 0 && (m = i.activeIndex - 1),
            'auto' === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((m = m - i.slidesPerViewDynamic('previous', !0) + 1), (m = Math.max(m, 0)))),
          r.rewind && i.isBeginning)
        ) {
          const r =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(r, e, t, s);
        }
        return i.slideTo(m, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const r = this;
        let n = r.activeIndex;
        const a = Math.min(r.params.slidesPerGroupSkip, n),
          o = a + Math.floor((n - a) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[o]) {
          const e = r.snapGrid[o];
          l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[o - 1];
          l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup);
        }
        return (
          (n = Math.max(n, 0)), (n = Math.min(n, r.slidesGrid.length - 1)), r.slideTo(n, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        let r,
          n = e.clickedIndex;
        const a = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
            t.centeredSlides
              ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (n = e.getSlideIndex(h(s, `${a}[data-swiper-slide-index="${r}"]`)[0])),
                  o(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n)
              : n > e.slides.length - i
              ? (e.loopFix(),
                (n = e.getSlideIndex(h(s, `${a}[data-swiper-slide-index="${r}"]`)[0])),
                o(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n);
        } else e.slideTo(n);
      },
    };
    function L(e) {
      const t = this,
        s = r(),
        i = a(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: o, touches: u, enabled: d } = t;
      if (!d) return;
      if (!o.simulateTouch && 'mouse' === e.pointerType) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let c = e;
      c.originalEvent && (c = c.originalEvent);
      let p = c.target;
      if ('wrapper' === o.touchEventsTarget && !t.wrapperEl.contains(p)) return;
      if ('which' in c && 3 === c.which) return;
      if ('button' in c && c.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const h = !!o.noSwipingClass && '' !== o.noSwipingClass,
        f = e.composedPath ? e.composedPath() : e.path;
      h && c.target && c.target.shadowRoot && f && (p = f[0]);
      const m = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
        g = !(!c.target || !c.target.shadowRoot);
      if (
        o.noSwiping &&
        (g
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === r() || s === a()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
                })(t)
              );
            })(m, p)
          : p.closest(m))
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !p.closest(o.swipeHandler)) return;
      (u.currentX = c.pageX), (u.currentY = c.pageY);
      const v = u.currentX,
        b = u.currentY,
        S = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        k = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (S && (v <= k || v >= i.innerWidth - k)) {
        if ('prevent' !== S) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (u.startX = v),
        (u.startY = b),
        (n.touchStartTime = l()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (n.allowThresholdMove = !1);
      let E = !0;
      p.matches(n.focusableElements) && ((E = !1), 'SELECT' === p.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== p &&
          s.activeElement.blur();
      const w = E && t.allowTouchMove && o.touchStartPreventDefault;
      (!o.touchStartForcePreventDefault && !w) || p.isContentEditable || c.preventDefault(),
        o.freeMode &&
          o.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !o.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit('touchStart', c);
    }
    function P(e) {
      const t = r(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: o, enabled: u } = s;
      if (!u) return;
      if (!n.simulateTouch && 'mouse' === e.pointerType) return;
      let d = e;
      if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
        return void (i.startMoving && i.isScrolling && s.emit('touchMoveOpposite', d));
      const c = i.evCache.findIndex((e) => e.pointerId === d.pointerId);
      c >= 0 && (i.evCache[c] = d);
      const p = i.evCache.length > 1 ? i.evCache[0] : d,
        h = p.pageX,
        f = p.pageY;
      if (d.preventedByNestedSwiper) return (a.startX = h), void (a.startY = f);
      if (!s.allowTouchMove)
        return (
          d.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: h,
              startY: f,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: h,
              currentY: f,
            }),
            (i.touchStartTime = l()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (f < a.startY && s.translate <= s.maxTranslate()) ||
            (f > a.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (h < a.startX && s.translate <= s.maxTranslate()) ||
          (h > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements))
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit('touchMove', d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (a.currentX = h), (a.currentY = f);
      const m = a.currentX - a.startX,
        g = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(m ** 2 + g ** 2) < s.params.threshold) return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) || (s.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : m * m + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
            (i.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit('touchMoveOpposite', d),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) || (i.startMoving = !0)),
        i.isScrolling || (s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && d.cancelable && d.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
      let v = s.isHorizontal() ? m : g,
        b = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
      n.oneWayMovement && ((v = Math.abs(v) * (o ? 1 : -1)), (b = Math.abs(b) * (o ? 1 : -1))),
        (a.diff = v),
        (v *= n.touchRatio),
        o && ((v = -v), (b = -b));
      const S = s.touchesDirection;
      (s.swipeDirection = v > 0 ? 'prev' : 'next'), (s.touchesDirection = b > 0 ? 'prev' : 'next');
      const k = s.params.loop && !n.cssMode;
      if (!i.isMoved) {
        if (
          (k && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit('sliderFirstMove', d);
      }
      let E;
      i.isMoved &&
        S !== s.touchesDirection &&
        k &&
        Math.abs(v) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (E = !0)),
        s.emit('sliderMove', d),
        (i.isMoved = !0),
        (i.currentTranslate = v + i.startTranslate);
      let w = !0,
        x = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (x = 0),
        v > 0
          ? (k &&
              !E &&
              i.currentTranslate >
                (n.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) &&
              s.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
            i.currentTranslate > s.minTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** x)))
          : v < 0 &&
            (k &&
              !E &&
              i.currentTranslate <
                (n.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) &&
              s.loopFix({
                direction: 'next',
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ('auto' === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** x))),
        w && (d.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          'next' === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          'prev' === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) || n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        n.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function F(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type) &&
          (!['pointercancel', 'contextmenu'].includes(e.type) ||
            (!t.browser.isSafari && !t.browser.isWebView)))
      )
        return;
      const { params: r, touches: n, rtlTranslate: a, slidesGrid: u, enabled: d } = t;
      if (!d) return;
      if (!r.simulateTouch && 'mouse' === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit('touchEnd', c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      r.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const p = l(),
        h = p - s.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit('tap click', c),
          h < 300 && p - s.lastClickTime < 300 && t.emit('doubleTap doubleClick', c);
      }
      if (
        ((s.lastClickTime = l()),
        o(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let f;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (f = r.followFinger ? (a ? t.translate : -t.translate) : -s.currentTranslate),
        r.cssMode)
      )
        return;
      if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
      let m = 0,
        g = t.slidesSizesGrid[0];
      for (let e = 0; e < u.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== u[e + t]
          ? f >= u[e] && f < u[e + t] && ((m = e), (g = u[e + t] - u[e]))
          : f >= u[e] && ((m = e), (g = u[u.length - 1] - u[u.length - 2]));
      }
      let v = null,
        b = null;
      r.rewind &&
        (t.isBeginning
          ? (b =
              r.virtual && r.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (v = 0));
      const S = (f - u[m]) / g,
        k = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (h > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        'next' === t.swipeDirection &&
          (S >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : m + k) : t.slideTo(m)),
          'prev' === t.swipeDirection &&
            (S > 1 - r.longSwipesRatio
              ? t.slideTo(m + k)
              : null !== b && S < 0 && Math.abs(S) > r.longSwipesRatio
              ? t.slideTo(b)
              : t.slideTo(m));
      } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation || (c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl)
          ? ('next' === t.swipeDirection && t.slideTo(null !== v ? v : m + k),
            'prev' === t.swipeDirection && t.slideTo(null !== b ? b : m))
          : c.target === t.navigation.nextEl
          ? t.slideTo(m + k)
          : t.slideTo(m);
      }
    }
    function D() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = a && t.loop;
      !('auto' === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function V(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function B() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
        r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit('setTranslate', e.translate, !1);
    }
    function I(e) {
      const t = this;
      y(t, e.target),
        t.params.cssMode ||
          ('auto' !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let O = !1;
    function z() {}
    const N = (e, t) => {
        const s = r(),
          { params: i, el: n, wrapperEl: a, device: o } = e,
          l = !!i.nested,
          u = 'on' === t ? 'addEventListener' : 'removeEventListener',
          d = t;
        n[u]('pointerdown', e.onTouchStart, { passive: !1 }),
          s[u]('pointermove', e.onTouchMove, { passive: !1, capture: l }),
          s[u]('pointerup', e.onTouchEnd, { passive: !0 }),
          s[u]('pointercancel', e.onTouchEnd, { passive: !0 }),
          s[u]('pointerout', e.onTouchEnd, { passive: !0 }),
          s[u]('pointerleave', e.onTouchEnd, { passive: !0 }),
          s[u]('contextmenu', e.onTouchEnd, { passive: !0 }),
          (i.preventClicks || i.preventClicksPropagation) && n[u]('click', e.onClick, !0),
          i.cssMode && a[u]('scroll', e.onScroll),
          i.updateOnWindowResize
            ? e[d](
                o.ios || o.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                D,
                !0,
              )
            : e[d]('observerUpdate', D, !0),
          n[u]('load', e.onLoad, { capture: !0 });
      },
      R = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var q = {
      init: !0,
      direction: 'horizontal',
      oneWayMovement: !1,
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: 'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function G(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          r = s[i];
        'object' == typeof r && null !== r
          ? (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && 'enabled' in r
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                'object' != typeof e[i] || 'enabled' in e[i] || (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                d(t, s))
              : d(t, s))
          : d(t, s);
      };
    }
    const j = {
        eventsEmitter: x,
        update: A,
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
            const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
            if (t.virtualTranslate) return s ? -i : i;
            if (t.cssMode) return i;
            let n = (function (e, t) {
              void 0 === t && (t = 'x');
              const s = a();
              let i, r, n;
              const o = (function (e) {
                const t = a();
                let s;
                return (
                  t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                  !s && e.currentStyle && (s = e.currentStyle),
                  s || (s = e.style),
                  s
                );
              })(e);
              return (
                s.WebKitCSSMatrix
                  ? ((r = o.transform || o.webkitTransform),
                    r.split(',').length > 6 &&
                      (r = r
                        .split(', ')
                        .map((e) => e.replace(',', '.'))
                        .join(', ')),
                    (n = new s.WebKitCSSMatrix('none' === r ? '' : r)))
                  : ((n =
                      o.MozTransform ||
                      o.OTransform ||
                      o.MsTransform ||
                      o.msTransform ||
                      o.transform ||
                      o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
                    (i = n.toString().split(','))),
                'x' === t &&
                  (r = s.WebKitCSSMatrix
                    ? n.m41
                    : 16 === i.length
                    ? parseFloat(i[12])
                    : parseFloat(i[4])),
                'y' === t &&
                  (r = s.WebKitCSSMatrix
                    ? n.m42
                    : 16 === i.length
                    ? parseFloat(i[13])
                    : parseFloat(i[5])),
                r || 0
              );
            })(r, e);
            return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
          },
          setTranslate: function (e, t) {
            const s = this,
              { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
            let o,
              l = 0,
              u = 0;
            s.isHorizontal() ? (l = i ? -e : e) : (u = e),
              r.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
              (s.previousTranslate = s.translate),
              (s.translate = s.isHorizontal() ? l : u),
              r.cssMode
                ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -l : -u)
                : r.virtualTranslate ||
                  (s.isHorizontal()
                    ? (l -= s.cssOverflowAdjustment())
                    : (u -= s.cssOverflowAdjustment()),
                  (n.style.transform = `translate3d(${l}px, ${u}px, 0px)`));
            const d = s.maxTranslate() - s.minTranslate();
            (o = 0 === d ? 0 : (e - s.minTranslate()) / d),
              o !== a && s.updateProgress(e),
              s.emit('setTranslate', s.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, s, i, r) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === s && (s = !0),
              void 0 === i && (i = !0);
            const n = this,
              { params: a, wrapperEl: o } = n;
            if (n.animating && a.preventInteractionOnTransition) return !1;
            const l = n.minTranslate(),
              u = n.maxTranslate();
            let d;
            if (((d = i && e > l ? l : i && e < u ? u : e), n.updateProgress(d), a.cssMode)) {
              const e = n.isHorizontal();
              if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -d;
              else {
                if (!n.support.smoothScroll)
                  return p({ swiper: n, targetPosition: -d, side: e ? 'left' : 'top' }), !0;
                o.scrollTo({ [e ? 'left' : 'top']: -d, behavior: 'smooth' });
              }
              return !0;
            }
            return (
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(d),
                  s && (n.emit('beforeTransitionStart', t, r), n.emit('transitionEnd')))
                : (n.setTransition(t),
                  n.setTranslate(d),
                  s && (n.emit('beforeTransitionStart', t, r), n.emit('transitionStart')),
                  n.animating ||
                    ((n.animating = !0),
                    n.onTranslateToWrapperTransitionEnd ||
                      (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.wrapperEl.removeEventListener(
                            'transitionend',
                            n.onTranslateToWrapperTransitionEnd,
                          ),
                          (n.onTranslateToWrapperTransitionEnd = null),
                          delete n.onTranslateToWrapperTransitionEnd,
                          s && n.emit('transitionEnd'));
                      }),
                    n.wrapperEl.addEventListener(
                      'transitionend',
                      n.onTranslateToWrapperTransitionEnd,
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              ((s.wrapperEl.style.transitionDuration = `${e}ms`),
              (s.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
              s.emit('setTransition', e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              T({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0), T({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
          },
        },
        slide: M,
        loop: {
          loopCreate: function (e) {
            const t = this,
              { params: s, slidesEl: i } = t;
            !s.loop ||
              (t.virtual && t.params.virtual.enabled) ||
              (h(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
                e.setAttribute('data-swiper-slide-index', t);
              }),
              t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : 'next' }));
          },
          loopFix: function (e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: i,
              setTranslate: r,
              activeSlideIndex: n,
              byController: a,
              byMousewheel: o,
            } = void 0 === e ? {} : e;
            const l = this;
            if (!l.params.loop) return;
            l.emit('beforeLoopFix');
            const { slides: u, allowSlidePrev: d, allowSlideNext: c, slidesEl: p, params: h } = l;
            if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && h.virtual.enabled))
              return (
                s &&
                  (h.centeredSlides || 0 !== l.snapIndex
                    ? h.centeredSlides && l.snapIndex < h.slidesPerView
                      ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                      : l.snapIndex === l.snapGrid.length - 1 &&
                        l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                    : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
                (l.allowSlidePrev = d),
                (l.allowSlideNext = c),
                void l.emit('loopFix')
              );
            const f =
              'auto' === h.slidesPerView
                ? l.slidesPerViewDynamic()
                : Math.ceil(parseFloat(h.slidesPerView, 10));
            let m = h.loopedSlides || f;
            m % h.slidesPerGroup != 0 && (m += h.slidesPerGroup - (m % h.slidesPerGroup)),
              (l.loopedSlides = m);
            const g = [],
              v = [];
            let b = l.activeIndex;
            void 0 === n
              ? (n = l.getSlideIndex(
                  l.slides.filter((e) => e.classList.contains(h.slideActiveClass))[0],
                ))
              : (b = n);
            const S = 'next' === i || !i,
              k = 'prev' === i || !i;
            let E = 0,
              w = 0;
            if (n < m) {
              E = Math.max(m - n, h.slidesPerGroup);
              for (let e = 0; e < m - n; e += 1) {
                const t = e - Math.floor(e / u.length) * u.length;
                g.push(u.length - t - 1);
              }
            } else if (n > l.slides.length - 2 * m) {
              w = Math.max(n - (l.slides.length - 2 * m), h.slidesPerGroup);
              for (let e = 0; e < w; e += 1) {
                const t = e - Math.floor(e / u.length) * u.length;
                v.push(t);
              }
            }
            if (
              (k &&
                g.forEach((e) => {
                  (l.slides[e].swiperLoopMoveDOM = !0),
                    p.prepend(l.slides[e]),
                    (l.slides[e].swiperLoopMoveDOM = !1);
                }),
              S &&
                v.forEach((e) => {
                  (l.slides[e].swiperLoopMoveDOM = !0),
                    p.append(l.slides[e]),
                    (l.slides[e].swiperLoopMoveDOM = !1);
                }),
              l.recalcSlides(),
              'auto' === h.slidesPerView && l.updateSlides(),
              h.watchSlidesProgress && l.updateSlidesOffset(),
              s)
            )
              if (g.length > 0 && k)
                if (void 0 === t) {
                  const e = l.slidesGrid[b],
                    t = l.slidesGrid[b + E] - e;
                  o
                    ? l.setTranslate(l.translate - t)
                    : (l.slideTo(b + E, 0, !1, !0),
                      r &&
                        ((l.touches[l.isHorizontal() ? 'startX' : 'startY'] += t),
                        (l.touchEventsData.currentTranslate = l.translate)));
                } else
                  r &&
                    (l.slideToLoop(t, 0, !1, !0),
                    (l.touchEventsData.currentTranslate = l.translate));
              else if (v.length > 0 && S)
                if (void 0 === t) {
                  const e = l.slidesGrid[b],
                    t = l.slidesGrid[b - w] - e;
                  o
                    ? l.setTranslate(l.translate - t)
                    : (l.slideTo(b - w, 0, !1, !0),
                      r &&
                        ((l.touches[l.isHorizontal() ? 'startX' : 'startY'] += t),
                        (l.touchEventsData.currentTranslate = l.translate)));
                } else l.slideToLoop(t, 0, !1, !0);
            if (
              ((l.allowSlidePrev = d),
              (l.allowSlideNext = c),
              l.controller && l.controller.control && !a)
            ) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: r,
                activeSlideIndex: n,
                byController: !0,
              };
              Array.isArray(l.controller.control)
                ? l.controller.control.forEach((t) => {
                    !t.destroyed &&
                      t.params.loop &&
                      t.loopFix({ ...e, slideTo: t.params.slidesPerView === h.slidesPerView && s });
                  })
                : l.controller.control instanceof l.constructor &&
                  l.controller.control.params.loop &&
                  l.controller.control.loopFix({
                    ...e,
                    slideTo: l.controller.control.params.slidesPerView === h.slidesPerView && s,
                  });
            }
            l.emit('loopFix');
          },
          loopDestroy: function () {
            const e = this,
              { params: t, slidesEl: s } = e;
            if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e) => {
              const t =
                void 0 === e.swiperSlideIndex
                  ? 1 * e.getAttribute('data-swiper-slide-index')
                  : e.swiperSlideIndex;
              i[t] = e;
            }),
              e.slides.forEach((e) => {
                e.removeAttribute('data-swiper-slide-index');
              }),
              i.forEach((e) => {
                s.append(e);
              }),
              e.recalcSlides(),
              e.slideTo(e.realIndex, 0);
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = 'move'),
              (s.style.cursor = e ? 'grabbing' : 'grab'),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor =
                ''),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = r(),
              { params: s } = e;
            (e.onTouchStart = L.bind(e)),
              (e.onTouchMove = P.bind(e)),
              (e.onTouchEnd = F.bind(e)),
              s.cssMode && (e.onScroll = B.bind(e)),
              (e.onClick = V.bind(e)),
              (e.onLoad = I.bind(e)),
              O || (t.addEventListener('touchstart', z), (O = !0)),
              N(e, 'on');
          },
          detachEvents: function () {
            N(this, 'off');
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: r } = e,
              n = i.breakpoints;
            if (!n || (n && 0 === Object.keys(n).length)) return;
            const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const o = (a in n ? n[a] : void 0) || e.originalParams,
              l = R(e, i),
              u = R(e, o),
              c = i.enabled;
            l && !u
              ? (r.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                u &&
                (r.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && 'column' === o.grid.fill) ||
                  (!o.grid.fill && 'column' === i.grid.fill)) &&
                  r.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
                if (void 0 === o[t]) return;
                const s = i[t] && i[t].enabled,
                  r = o[t] && o[t].enabled;
                s && !r && e[t].disable(), !s && r && e[t].enable();
              });
            const p = o.direction && o.direction !== i.direction,
              h = i.loop && (o.slidesPerView !== i.slidesPerView || p);
            p && s && e.changeDirection(), d(e.params, o);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !f ? e.disable() : !c && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit('_beforeBreakpoint', o),
              h && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit('breakpoint', o);
          },
          getBreakpoint: function (e, t, s) {
            if ((void 0 === t && (t = 'window'), !e || ('container' === t && !s))) return;
            let i = !1;
            const r = a(),
              n = 'window' === t ? r.innerHeight : s.clientHeight,
              o = Object.keys(e).map((e) => {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  const t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: n, value: a } = o[e];
              'window' === t
                ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = n)
                : a <= s.clientWidth && (i = n);
            }
            return i || 'max';
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: r, device: n } = e,
              a = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    'object' == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : 'string' == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  'initialized',
                  s.direction,
                  { 'free-mode': e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  { 'grid-column': s.grid && s.grid.rows > 1 && 'column' === s.grid.fill },
                  { android: n.android },
                  { ios: n.ios },
                  { 'css-mode': s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { 'watch-progress': s.watchSlidesProgress },
                ],
                s.containerModifierClass,
              );
            t.push(...a), r.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      $ = {};
    class U {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
        1 === i.length &&
        i[0].constructor &&
        'Object' === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
          t || (t = {}),
          (t = d({}, t)),
          e && !t.el && (t.el = e);
        const o = r();
        if (t.el && 'string' == typeof t.el && o.querySelectorAll(t.el).length > 1) {
          const e = [];
          return (
            o.querySelectorAll(t.el).forEach((s) => {
              const i = d({}, t, { el: s });
              e.push(new U(i));
            }),
            e
          );
        }
        const l = this;
        var u;
        (l.__swiper__ = !0),
          (l.support = w()),
          (l.device =
            (void 0 === (u = { userAgent: t.userAgent }) && (u = {}),
            k ||
              (k = (function (e) {
                let { userAgent: t } = void 0 === e ? {} : e;
                const s = w(),
                  i = a(),
                  r = i.navigator.platform,
                  n = t || i.navigator.userAgent,
                  o = { ios: !1, android: !1 },
                  l = i.screen.width,
                  u = i.screen.height,
                  d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                let c = n.match(/(iPad).*OS\s([\d_]+)/);
                const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                  h = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  f = 'Win32' === r;
                let m = 'MacIntel' === r;
                return (
                  !c &&
                    m &&
                    s.touch &&
                    [
                      '1024x1366',
                      '1366x1024',
                      '834x1194',
                      '1194x834',
                      '834x1112',
                      '1112x834',
                      '768x1024',
                      '1024x768',
                      '820x1180',
                      '1180x820',
                      '810x1080',
                      '1080x810',
                    ].indexOf(`${l}x${u}`) >= 0 &&
                    ((c = n.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (m = !1)),
                  d && !f && ((o.os = 'android'), (o.android = !0)),
                  (c || h || p) && ((o.os = 'ios'), (o.ios = !0)),
                  o
                );
              })(u)),
            k)),
          (l.browser =
            (E ||
              (E = (function () {
                const e = a();
                let t = !1;
                function s() {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0
                  );
                }
                if (s()) {
                  const s = String(e.navigator.userAgent);
                  if (s.includes('Version/')) {
                    const [e, i] = s
                      .split('Version/')[1]
                      .split(' ')[0]
                      .split('.')
                      .map((e) => Number(e));
                    t = e < 16 || (16 === e && i < 2);
                  }
                }
                return {
                  isSafari: t || s(),
                  needPerspectiveFix: t,
                  isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                    e.navigator.userAgent,
                  ),
                };
              })()),
            E)),
          (l.eventsListeners = {}),
          (l.eventsAnyListeners = []),
          (l.modules = [...l.__modules__]),
          t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const c = {};
        l.modules.forEach((e) => {
          e({
            params: t,
            swiper: l,
            extendParams: G(t, c),
            on: l.on.bind(l),
            once: l.once.bind(l),
            off: l.off.bind(l),
            emit: l.emit.bind(l),
          });
        });
        const p = d({}, q, c);
        return (
          (l.params = d({}, p, $, t)),
          (l.originalParams = d({}, l.params)),
          (l.passedParams = d({}, t)),
          l.params &&
            l.params.on &&
            Object.keys(l.params.on).forEach((e) => {
              l.on(e, l.params.on[e]);
            }),
          l.params && l.params.onAny && l.onAny(l.params.onAny),
          Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return 'horizontal' === l.params.direction;
            },
            isVertical() {
              return 'vertical' === l.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: l.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          l.emit('_swiper'),
          l.params.init && l.init(),
          l
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = g(h(t, `.${s.slideClass}, swiper-slide`)[0]);
        return g(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = h(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(' ')
          .filter(
            (t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit('_containerClasses', t.join(' '));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ''
          : e.className
              .split(' ')
              .filter(
                (e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass),
              )
              .join(' ');
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit('_slideClass', s, i);
        }),
          e.emit('_slideClasses', t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = 'current'), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: n,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[o] ? i[o].swiperSlideSize : 0;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ('current' === e)
          for (let e = o + 1; e < i.length; e += 1)
            (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
        else for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && y(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
          i(), s.autoHeight && e.updateAutoHeight();
        else {
          if (('auto' === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
            const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update');
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
          e === i ||
            ('horizontal' !== e && 'vertical' !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              'vertical' === e ? (t.style.width = '') : (t.style.height = '');
            }),
            s.emit('changeDirection'),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && 'rtl' === e) ||
          (!t.rtl && 'ltr' === e) ||
          ((t.rtl = 'rtl' === e),
          (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl'))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (('string' == typeof s && (s = document.querySelector(s)), !s)) return !1;
        (s.swiper = t),
          s.parentNode &&
            s.parentNode.host &&
            'SWIPER-CONTAINER' === s.parentNode.host.nodeName &&
            (t.isElement = !0);
        const i = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
        let r =
          s && s.shadowRoot && s.shadowRoot.querySelector
            ? s.shadowRoot.querySelector(i())
            : h(s, i())[0];
        return (
          !r &&
            t.params.createElements &&
            ((r = f('div', t.params.wrapperClass)),
            s.append(r),
            h(s, `.${t.params.slideClass}`).forEach((e) => {
              r.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: 'rtl' === s.dir.toLowerCase() || 'rtl' === m(s, 'direction'),
            rtlTranslate:
              'horizontal' === t.params.direction &&
              ('rtl' === s.dir.toLowerCase() || 'rtl' === m(s, 'direction')),
            wrongRTL: '-webkit-box' === m(r, 'display'),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit('beforeInit'),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          s.forEach((e) => {
            e.complete
              ? y(t, e)
              : e.addEventListener('load', (e) => {
                  y(t, e.target);
                });
          }),
          _(t),
          (t.initialized = !0),
          _(t),
          t.emit('init'),
          t.emit('afterInit'),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, el: r, wrapperEl: n, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit('beforeDestroy'),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              r.removeAttribute('style'),
              n.removeAttribute('style'),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ),
                    e.removeAttribute('style'),
                    e.removeAttribute('data-swiper-slide-index');
                })),
            s.emit('destroy'),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        d($, e);
      }
      static get extendedDefaults() {
        return $;
      }
      static get defaults() {
        return q;
      }
      static installModule(e) {
        U.prototype.__modules__ || (U.prototype.__modules__ = []);
        const t = U.prototype.__modules__;
        'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => U.installModule(e)), U)
          : (U.installModule(e), U);
      }
    }
    var H, Y;
    function W(e) {
      return 'object' == typeof e && 'function' == typeof e.to;
    }
    function X(e) {
      e.parentElement.removeChild(e);
    }
    function K(e) {
      return null != e;
    }
    function Z(e) {
      e.preventDefault();
    }
    function Q(e) {
      return 'number' == typeof e && !isNaN(e) && isFinite(e);
    }
    function J(e, t, s) {
      s > 0 &&
        (ie(e, t),
        setTimeout(function () {
          re(e, t);
        }, s));
    }
    function ee(e) {
      return Math.max(Math.min(e, 100), 0);
    }
    function te(e) {
      return Array.isArray(e) ? e : [e];
    }
    function se(e) {
      var t = (e = String(e)).split('.');
      return t.length > 1 ? t[1].length : 0;
    }
    function ie(e, t) {
      e.classList && !/\s/.test(t) ? e.classList.add(t) : (e.className += ' ' + t);
    }
    function re(e, t) {
      e.classList && !/\s/.test(t)
        ? e.classList.remove(t)
        : (e.className = e.className.replace(
            new RegExp('(^|\\b)' + t.split(' ').join('|') + '(\\b|$)', 'gi'),
            ' ',
          ));
    }
    function ne(e) {
      var t = void 0 !== window.pageXOffset,
        s = 'CSS1Compat' === (e.compatMode || '');
      return {
        x: t ? window.pageXOffset : s ? e.documentElement.scrollLeft : e.body.scrollLeft,
        y: t ? window.pageYOffset : s ? e.documentElement.scrollTop : e.body.scrollTop,
      };
    }
    function ae(e, t) {
      return 100 / (t - e);
    }
    function oe(e, t, s) {
      return (100 * t) / (e[s + 1] - e[s]);
    }
    function le(e, t) {
      for (var s = 1; e >= t[s]; ) s += 1;
      return s;
    }
    Object.keys(j).forEach((e) => {
      Object.keys(j[e]).forEach((t) => {
        U.prototype[t] = j[e][t];
      });
    }),
      U.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const r = a();
          let n = null,
            o = null;
          const l = () => {
              t && !t.destroyed && t.initialized && (i('beforeResize'), i('resize'));
            },
            u = () => {
              t && !t.destroyed && t.initialized && i('orientationchange');
            };
          s('init', () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((n = new ResizeObserver((e) => {
                  o = r.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let r = s,
                      n = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: a } = e;
                      (a && a !== t.el) ||
                        ((r = i ? i.width : (s[0] || s).inlineSize),
                        (n = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (r === s && n === i) || l();
                  });
                })),
                n.observe(t.el))
              : (r.addEventListener('resize', l), r.addEventListener('orientationchange', u));
          }),
            s('destroy', () => {
              o && r.cancelAnimationFrame(o),
                n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                r.removeEventListener('resize', l),
                r.removeEventListener('orientationchange', u);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: r } = e;
          const n = [],
            o = a(),
            l = function (e, s) {
              void 0 === s && (s = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void r('observerUpdate', e[0]);
                const s = function () {
                  r('observerUpdate', e[0]);
                };
                o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0);
              });
              i.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                n.push(i);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i('init', () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = v(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.hostEl, { childList: t.params.observeSlideChildren }),
                  l(t.wrapperEl, { attributes: !1 });
              }
            }),
            i('destroy', () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]),
      (function (e) {
        (e.Range = 'range'),
          (e.Steps = 'steps'),
          (e.Positions = 'positions'),
          (e.Count = 'count'),
          (e.Values = 'values');
      })(H || (H = {})),
      (function (e) {
        (e[(e.None = -1)] = 'None'),
          (e[(e.NoValue = 0)] = 'NoValue'),
          (e[(e.LargeValue = 1)] = 'LargeValue'),
          (e[(e.SmallValue = 2)] = 'SmallValue');
      })(Y || (Y = {}));
    var ue = (function () {
        function e(e, t, s) {
          var i;
          (this.xPct = []),
            (this.xVal = []),
            (this.xSteps = []),
            (this.xNumSteps = []),
            (this.xHighestCompleteStep = []),
            (this.xSteps = [s || !1]),
            (this.xNumSteps = [!1]),
            (this.snap = t);
          var r = [];
          for (
            Object.keys(e).forEach(function (t) {
              r.push([te(e[t]), t]);
            }),
              r.sort(function (e, t) {
                return e[0][0] - t[0][0];
              }),
              i = 0;
            i < r.length;
            i++
          )
            this.handleEntryPoint(r[i][1], r[i][0]);
          for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++)
            this.handleStepPoint(i, this.xNumSteps[i]);
        }
        return (
          (e.prototype.getDistance = function (e) {
            for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++) t[s] = oe(this.xVal, e, s);
            return t;
          }),
          (e.prototype.getAbsoluteDistance = function (e, t, s) {
            var i,
              r = 0;
            if (e < this.xPct[this.xPct.length - 1]) for (; e > this.xPct[r + 1]; ) r++;
            else e === this.xPct[this.xPct.length - 1] && (r = this.xPct.length - 2);
            s || e !== this.xPct[r + 1] || r++, null === t && (t = []);
            var n = 1,
              a = t[r],
              o = 0,
              l = 0,
              u = 0,
              d = 0;
            for (
              i = s
                ? (e - this.xPct[r]) / (this.xPct[r + 1] - this.xPct[r])
                : (this.xPct[r + 1] - e) / (this.xPct[r + 1] - this.xPct[r]);
              a > 0;

            )
              (o = this.xPct[r + 1 + d] - this.xPct[r + d]),
                t[r + d] * n + 100 - 100 * i > 100
                  ? ((l = o * i), (n = (a - 100 * i) / t[r + d]), (i = 1))
                  : ((l = ((t[r + d] * o) / 100) * n), (n = 0)),
                s
                  ? ((u -= l), this.xPct.length + d >= 1 && d--)
                  : ((u += l), this.xPct.length - d >= 1 && d++),
                (a = t[r + d] * n);
            return e + u;
          }),
          (e.prototype.toStepping = function (e) {
            return (function (e, t, s) {
              if (s >= e.slice(-1)[0]) return 100;
              var i = le(s, e),
                r = e[i - 1],
                n = e[i],
                a = t[i - 1],
                o = t[i];
              return (
                a +
                (function (e, t) {
                  return oe(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
                })([r, n], s) /
                  ae(a, o)
              );
            })(this.xVal, this.xPct, e);
          }),
          (e.prototype.fromStepping = function (e) {
            return (function (e, t, s) {
              if (s >= 100) return e.slice(-1)[0];
              var i = le(s, t),
                r = e[i - 1],
                n = e[i],
                a = t[i - 1];
              return (function (e, t) {
                return (t * (e[1] - e[0])) / 100 + e[0];
              })([r, n], (s - a) * ae(a, t[i]));
            })(this.xVal, this.xPct, e);
          }),
          (e.prototype.getStep = function (e) {
            return (function (e, t, s, i) {
              if (100 === i) return i;
              var r = le(i, e),
                n = e[r - 1],
                a = e[r];
              return s
                ? i - n > (a - n) / 2
                  ? a
                  : n
                : t[r - 1]
                ? e[r - 1] +
                  (function (e, t) {
                    return Math.round(e / t) * t;
                  })(i - e[r - 1], t[r - 1])
                : i;
            })(this.xPct, this.xSteps, this.snap, e);
          }),
          (e.prototype.getDefaultStep = function (e, t, s) {
            var i = le(e, this.xPct);
            return (
              (100 === e || (t && e === this.xPct[i - 1])) && (i = Math.max(i - 1, 1)),
              (this.xVal[i] - this.xVal[i - 1]) / s
            );
          }),
          (e.prototype.getNearbySteps = function (e) {
            var t = le(e, this.xPct);
            return {
              stepBefore: {
                startValue: this.xVal[t - 2],
                step: this.xNumSteps[t - 2],
                highestStep: this.xHighestCompleteStep[t - 2],
              },
              thisStep: {
                startValue: this.xVal[t - 1],
                step: this.xNumSteps[t - 1],
                highestStep: this.xHighestCompleteStep[t - 1],
              },
              stepAfter: {
                startValue: this.xVal[t],
                step: this.xNumSteps[t],
                highestStep: this.xHighestCompleteStep[t],
              },
            };
          }),
          (e.prototype.countStepDecimals = function () {
            var e = this.xNumSteps.map(se);
            return Math.max.apply(null, e);
          }),
          (e.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
          }),
          (e.prototype.convert = function (e) {
            return this.getStep(this.toStepping(e));
          }),
          (e.prototype.handleEntryPoint = function (e, t) {
            var s;
            if (!Q((s = 'min' === e ? 0 : 'max' === e ? 100 : parseFloat(e))) || !Q(t[0]))
              throw new Error("noUiSlider: 'range' value isn't numeric.");
            this.xPct.push(s), this.xVal.push(t[0]);
            var i = Number(t[1]);
            s ? this.xSteps.push(!isNaN(i) && i) : isNaN(i) || (this.xSteps[0] = i),
              this.xHighestCompleteStep.push(0);
          }),
          (e.prototype.handleStepPoint = function (e, t) {
            if (t)
              if (this.xVal[e] !== this.xVal[e + 1]) {
                this.xSteps[e] =
                  oe([this.xVal[e], this.xVal[e + 1]], t, 0) / ae(this.xPct[e], this.xPct[e + 1]);
                var s = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                  i = Math.ceil(Number(s.toFixed(3)) - 1),
                  r = this.xVal[e] + this.xNumSteps[e] * i;
                this.xHighestCompleteStep[e] = r;
              } else this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e];
          }),
          e
        );
      })(),
      de = {
        to: function (e) {
          return void 0 === e ? '' : e.toFixed(2);
        },
        from: Number,
      },
      ce = {
        target: 'target',
        base: 'base',
        origin: 'origin',
        handle: 'handle',
        handleLower: 'handle-lower',
        handleUpper: 'handle-upper',
        touchArea: 'touch-area',
        horizontal: 'horizontal',
        vertical: 'vertical',
        background: 'background',
        connect: 'connect',
        connects: 'connects',
        ltr: 'ltr',
        rtl: 'rtl',
        textDirectionLtr: 'txt-dir-ltr',
        textDirectionRtl: 'txt-dir-rtl',
        draggable: 'draggable',
        drag: 'state-drag',
        tap: 'state-tap',
        active: 'active',
        tooltip: 'tooltip',
        pips: 'pips',
        pipsHorizontal: 'pips-horizontal',
        pipsVertical: 'pips-vertical',
        marker: 'marker',
        markerHorizontal: 'marker-horizontal',
        markerVertical: 'marker-vertical',
        markerNormal: 'marker-normal',
        markerLarge: 'marker-large',
        markerSub: 'marker-sub',
        value: 'value',
        valueHorizontal: 'value-horizontal',
        valueVertical: 'value-vertical',
        valueNormal: 'value-normal',
        valueLarge: 'value-large',
        valueSub: 'value-sub',
      },
      pe = '.__tooltips',
      he = '.__aria';
    function fe(e, t) {
      if (!Q(t)) throw new Error("noUiSlider: 'step' is not numeric.");
      e.singleStep = t;
    }
    function me(e, t) {
      if (!Q(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      e.keyboardPageMultiplier = t;
    }
    function ge(e, t) {
      if (!Q(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      e.keyboardMultiplier = t;
    }
    function ve(e, t) {
      if (!Q(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      e.keyboardDefaultStep = t;
    }
    function be(e, t) {
      if ('object' != typeof t || Array.isArray(t))
        throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === t.min || void 0 === t.max)
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      e.spectrum = new ue(t, e.snap || !1, e.singleStep);
    }
    function Se(e, t) {
      if (((t = te(t)), !Array.isArray(t) || !t.length))
        throw new Error("noUiSlider: 'start' option is incorrect.");
      (e.handles = t.length), (e.start = t);
    }
    function ke(e, t) {
      if ('boolean' != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.");
      e.snap = t;
    }
    function Ee(e, t) {
      if ('boolean' != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.");
      e.animate = t;
    }
    function we(e, t) {
      if ('number' != typeof t)
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      e.animationDuration = t;
    }
    function xe(e, t) {
      var s,
        i = [!1];
      if (
        ('lower' === t ? (t = [!0, !1]) : 'upper' === t && (t = [!1, !0]), !0 === t || !1 === t)
      ) {
        for (s = 1; s < e.handles; s++) i.push(t);
        i.push(!1);
      } else {
        if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
          throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        i = t;
      }
      e.connect = i;
    }
    function ye(e, t) {
      switch (t) {
        case 'horizontal':
          e.ort = 0;
          break;
        case 'vertical':
          e.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function Ce(e, t) {
      if (!Q(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
      0 !== t && (e.margin = e.spectrum.getDistance(t));
    }
    function _e(e, t) {
      if (!Q(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2))
        throw new Error(
          "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.",
        );
    }
    function Ae(e, t) {
      var s;
      if (!Q(t) && !Array.isArray(t))
        throw new Error(
          "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
        );
      if (Array.isArray(t) && 2 !== t.length && !Q(t[0]) && !Q(t[1]))
        throw new Error(
          "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
        );
      if (0 !== t) {
        for (
          Array.isArray(t) || (t = [t, t]),
            e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])],
            s = 0;
          s < e.spectrum.xNumSteps.length - 1;
          s++
        )
          if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var i = t[0] + t[1],
          r = e.spectrum.xVal[0];
        if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - r) > 1)
          throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function Te(e, t) {
      switch (t) {
        case 'ltr':
          e.dir = 0;
          break;
        case 'rtl':
          e.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function Me(e, t) {
      if ('string' != typeof t)
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var s = t.indexOf('tap') >= 0,
        i = t.indexOf('drag') >= 0,
        r = t.indexOf('fixed') >= 0,
        n = t.indexOf('snap') >= 0,
        a = t.indexOf('hover') >= 0,
        o = t.indexOf('unconstrained') >= 0,
        l = t.indexOf('drag-all') >= 0,
        u = t.indexOf('smooth-steps') >= 0;
      if (r) {
        if (2 !== e.handles)
          throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        Ce(e, e.start[1] - e.start[0]);
      }
      if (o && (e.margin || e.limit))
        throw new Error(
          "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit",
        );
      e.events = {
        tap: s || n,
        drag: i,
        dragAll: l,
        smoothSteps: u,
        fixed: r,
        snap: n,
        hover: a,
        unconstrained: o,
      };
    }
    function Le(e, t) {
      if (!1 !== t)
        if (!0 === t || W(t)) {
          e.tooltips = [];
          for (var s = 0; s < e.handles; s++) e.tooltips.push(t);
        } else {
          if ((t = te(t)).length !== e.handles)
            throw new Error('noUiSlider: must pass a formatter for all handles.');
          t.forEach(function (e) {
            if ('boolean' != typeof e && !W(e))
              throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
          }),
            (e.tooltips = t);
        }
    }
    function Pe(e, t) {
      if (t.length !== e.handles)
        throw new Error('noUiSlider: must pass a attributes for all handles.');
      e.handleAttributes = t;
    }
    function Fe(e, t) {
      if (!W(t)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      e.ariaFormat = t;
    }
    function De(e, t) {
      if (
        !(function (e) {
          return W(e) && 'function' == typeof e.from;
        })(t)
      )
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      e.format = t;
    }
    function Ve(e, t) {
      if ('boolean' != typeof t)
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      e.keyboardSupport = t;
    }
    function Be(e, t) {
      e.documentElement = t;
    }
    function Ie(e, t) {
      if ('string' != typeof t && !1 !== t)
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      e.cssPrefix = t;
    }
    function Oe(e, t) {
      if ('object' != typeof t) throw new Error("noUiSlider: 'cssClasses' must be an object.");
      'string' == typeof e.cssPrefix
        ? ((e.cssClasses = {}),
          Object.keys(t).forEach(function (s) {
            e.cssClasses[s] = e.cssPrefix + t[s];
          }))
        : (e.cssClasses = t);
    }
    function ze(e) {
      var t = {
          margin: null,
          limit: null,
          padding: null,
          animate: !0,
          animationDuration: 300,
          ariaFormat: de,
          format: de,
        },
        s = {
          step: { r: !1, t: fe },
          keyboardPageMultiplier: { r: !1, t: me },
          keyboardMultiplier: { r: !1, t: ge },
          keyboardDefaultStep: { r: !1, t: ve },
          start: { r: !0, t: Se },
          connect: { r: !0, t: xe },
          direction: { r: !0, t: Te },
          snap: { r: !1, t: ke },
          animate: { r: !1, t: Ee },
          animationDuration: { r: !1, t: we },
          range: { r: !0, t: be },
          orientation: { r: !1, t: ye },
          margin: { r: !1, t: Ce },
          limit: { r: !1, t: _e },
          padding: { r: !1, t: Ae },
          behaviour: { r: !0, t: Me },
          ariaFormat: { r: !1, t: Fe },
          format: { r: !1, t: De },
          tooltips: { r: !1, t: Le },
          keyboardSupport: { r: !0, t: Ve },
          documentElement: { r: !1, t: Be },
          cssPrefix: { r: !0, t: Ie },
          cssClasses: { r: !0, t: Oe },
          handleAttributes: { r: !1, t: Pe },
        },
        i = {
          connect: !1,
          direction: 'ltr',
          behaviour: 'tap',
          orientation: 'horizontal',
          keyboardSupport: !0,
          cssPrefix: 'noUi-',
          cssClasses: ce,
          keyboardPageMultiplier: 5,
          keyboardMultiplier: 1,
          keyboardDefaultStep: 10,
        };
      e.format && !e.ariaFormat && (e.ariaFormat = e.format),
        Object.keys(s).forEach(function (r) {
          if (K(e[r]) || void 0 !== i[r]) s[r].t(t, K(e[r]) ? e[r] : i[r]);
          else if (s[r].r) throw new Error("noUiSlider: '" + r + "' is required.");
        }),
        (t.pips = e.pips);
      var r = document.createElement('div'),
        n = void 0 !== r.style.msTransform,
        a = void 0 !== r.style.transform;
      return (
        (t.transformRule = a ? 'transform' : n ? 'msTransform' : 'webkitTransform'),
        (t.style = [
          ['left', 'top'],
          ['right', 'bottom'],
        ][t.dir][t.ort]),
        t
      );
    }
    function Ne(e, t, s) {
      var i,
        r,
        n,
        a,
        o,
        l,
        u,
        d = window.navigator.pointerEnabled
          ? { start: 'pointerdown', move: 'pointermove', end: 'pointerup' }
          : window.navigator.msPointerEnabled
          ? { start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp' }
          : { start: 'mousedown touchstart', move: 'mousemove touchmove', end: 'mouseup touchend' },
        c =
          window.CSS &&
          CSS.supports &&
          CSS.supports('touch-action', 'none') &&
          (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, 'passive', {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener('test', null, t);
            } catch (e) {}
            return e;
          })(),
        p = e,
        h = t.spectrum,
        f = [],
        m = [],
        g = [],
        v = 0,
        b = {},
        S = e.ownerDocument,
        k = t.documentElement || S.documentElement,
        E = S.body,
        w = 'rtl' === S.dir || 1 === t.ort ? 0 : 100;
      function x(e, t) {
        var s = S.createElement('div');
        return t && ie(s, t), e.appendChild(s), s;
      }
      function y(e, s) {
        var i = x(e, t.cssClasses.origin),
          r = x(i, t.cssClasses.handle);
        if (
          (x(r, t.cssClasses.touchArea),
          r.setAttribute('data-handle', String(s)),
          t.keyboardSupport &&
            (r.setAttribute('tabindex', '0'),
            r.addEventListener('keydown', function (e) {
              return (function (e, s) {
                if (A() || T(s)) return !1;
                var i = ['Left', 'Right'],
                  r = ['Down', 'Up'],
                  n = ['PageDown', 'PageUp'],
                  a = ['Home', 'End'];
                t.dir && !t.ort ? i.reverse() : t.ort && !t.dir && (r.reverse(), n.reverse());
                var o,
                  l = e.key.replace('Arrow', ''),
                  u = l === n[0],
                  d = l === n[1],
                  c = l === r[0] || l === i[0] || u,
                  p = l === r[1] || l === i[1] || d,
                  g = l === a[1];
                if (!(c || p || l === a[0] || g)) return !0;
                if ((e.preventDefault(), p || c)) {
                  var v = c ? 0 : 1,
                    b = ce(s)[v];
                  if (null === b) return !1;
                  !1 === b && (b = h.getDefaultStep(m[s], c, t.keyboardDefaultStep)),
                    (b *= d || u ? t.keyboardPageMultiplier : t.keyboardMultiplier),
                    (b = Math.max(b, 1e-7)),
                    (b *= c ? -1 : 1),
                    (o = f[s] + b);
                } else o = g ? t.spectrum.xVal[t.spectrum.xVal.length - 1] : t.spectrum.xVal[0];
                return (
                  ae(s, h.toStepping(o), !0, !0),
                  j('slide', s),
                  j('update', s),
                  j('change', s),
                  j('set', s),
                  !1
                );
              })(e, s);
            })),
          void 0 !== t.handleAttributes)
        ) {
          var n = t.handleAttributes[s];
          Object.keys(n).forEach(function (e) {
            r.setAttribute(e, n[e]);
          });
        }
        return (
          r.setAttribute('role', 'slider'),
          r.setAttribute('aria-orientation', t.ort ? 'vertical' : 'horizontal'),
          0 === s
            ? ie(r, t.cssClasses.handleLower)
            : s === t.handles - 1 && ie(r, t.cssClasses.handleUpper),
          (i.handle = r),
          i
        );
      }
      function C(e, s) {
        return !!s && x(e, t.cssClasses.connect);
      }
      function _(e, s) {
        return !(!t.tooltips || !t.tooltips[s]) && x(e.firstChild, t.cssClasses.tooltip);
      }
      function A() {
        return p.hasAttribute('disabled');
      }
      function T(e) {
        return r[e].hasAttribute('disabled');
      }
      function M() {
        o &&
          (G('update' + pe),
          o.forEach(function (e) {
            e && X(e);
          }),
          (o = null));
      }
      function L() {
        M(),
          (o = r.map(_)),
          q('update' + pe, function (e, s, i) {
            if (o && t.tooltips && !1 !== o[s]) {
              var r = e[s];
              !0 !== t.tooltips[s] && (r = t.tooltips[s].to(i[s])), (o[s].innerHTML = r);
            }
          });
      }
      function P(e, t) {
        return e.map(function (e) {
          return h.fromStepping(t ? h.getStep(e) : e);
        });
      }
      function F() {
        a && (X(a), (a = null));
      }
      function D(e) {
        F();
        var s = (function (e) {
            var t,
              s = (function (e) {
                if (e.mode === H.Range || e.mode === H.Steps) return h.xVal;
                if (e.mode === H.Count) {
                  if (e.values < 2)
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                  for (var t = e.values - 1, s = 100 / t, i = []; t--; ) i[t] = t * s;
                  return i.push(100), P(i, e.stepped);
                }
                return e.mode === H.Positions
                  ? P(e.values, e.stepped)
                  : e.mode === H.Values
                  ? e.stepped
                    ? e.values.map(function (e) {
                        return h.fromStepping(h.getStep(h.toStepping(e)));
                      })
                    : e.values
                  : [];
              })(e),
              i = {},
              r = h.xVal[0],
              n = h.xVal[h.xVal.length - 1],
              a = !1,
              o = !1,
              l = 0;
            return (
              (t = s.slice().sort(function (e, t) {
                return e - t;
              })),
              (s = t.filter(function (e) {
                return !this[e] && (this[e] = !0);
              }, {}))[0] !== r && (s.unshift(r), (a = !0)),
              s[s.length - 1] !== n && (s.push(n), (o = !0)),
              s.forEach(function (t, r) {
                var n,
                  u,
                  d,
                  c,
                  p,
                  f,
                  m,
                  g,
                  v,
                  b,
                  S = t,
                  k = s[r + 1],
                  E = e.mode === H.Steps;
                for (
                  E && (n = h.xNumSteps[r]),
                    n || (n = k - S),
                    void 0 === k && (k = S),
                    n = Math.max(n, 1e-7),
                    u = S;
                  u <= k;
                  u = Number((u + n).toFixed(7))
                ) {
                  for (
                    g = (p = (c = h.toStepping(u)) - l) / (e.density || 1),
                      b = p / (v = Math.round(g)),
                      d = 1;
                    d <= v;
                    d += 1
                  )
                    i[(f = l + d * b).toFixed(5)] = [h.fromStepping(f), 0];
                  (m = s.indexOf(u) > -1 ? Y.LargeValue : E ? Y.SmallValue : Y.NoValue),
                    !r && a && u !== k && (m = 0),
                    (u === k && o) || (i[c.toFixed(5)] = [u, m]),
                    (l = c);
                }
              }),
              i
            );
          })(e),
          i = e.filter,
          r = e.format || {
            to: function (e) {
              return String(Math.round(e));
            },
          };
        return (a = p.appendChild(
          (function (e, s, i) {
            var r,
              n,
              a = S.createElement('div'),
              o =
                (((r = {})[Y.None] = ''),
                (r[Y.NoValue] = t.cssClasses.valueNormal),
                (r[Y.LargeValue] = t.cssClasses.valueLarge),
                (r[Y.SmallValue] = t.cssClasses.valueSub),
                r),
              l =
                (((n = {})[Y.None] = ''),
                (n[Y.NoValue] = t.cssClasses.markerNormal),
                (n[Y.LargeValue] = t.cssClasses.markerLarge),
                (n[Y.SmallValue] = t.cssClasses.markerSub),
                n),
              u = [t.cssClasses.valueHorizontal, t.cssClasses.valueVertical],
              d = [t.cssClasses.markerHorizontal, t.cssClasses.markerVertical];
            function c(e, s) {
              var i = s === t.cssClasses.value,
                r = i ? o : l;
              return s + ' ' + (i ? u : d)[t.ort] + ' ' + r[e];
            }
            return (
              ie(a, t.cssClasses.pips),
              ie(a, 0 === t.ort ? t.cssClasses.pipsHorizontal : t.cssClasses.pipsVertical),
              Object.keys(e).forEach(function (r) {
                !(function (e, r, n) {
                  if ((n = s ? s(r, n) : n) !== Y.None) {
                    var o = x(a, !1);
                    (o.className = c(n, t.cssClasses.marker)),
                      (o.style[t.style] = e + '%'),
                      n > Y.NoValue &&
                        (((o = x(a, !1)).className = c(n, t.cssClasses.value)),
                        o.setAttribute('data-value', String(r)),
                        (o.style[t.style] = e + '%'),
                        (o.innerHTML = String(i.to(r))));
                  }
                })(r, e[r][0], e[r][1]);
              }),
              a
            );
          })(s, i, r),
        ));
      }
      function V() {
        var e = i.getBoundingClientRect(),
          s = 'offset' + ['Width', 'Height'][t.ort];
        return 0 === t.ort ? e.width || i[s] : e.height || i[s];
      }
      function B(e, s, i, r) {
        var n = function (n) {
            var a,
              o,
              l = (function (e, t, s) {
                var i = 0 === e.type.indexOf('touch'),
                  r = 0 === e.type.indexOf('mouse'),
                  n = 0 === e.type.indexOf('pointer'),
                  a = 0,
                  o = 0;
                if (
                  (0 === e.type.indexOf('MSPointer') && (n = !0),
                  'mousedown' === e.type && !e.buttons && !e.touches)
                )
                  return !1;
                if (i) {
                  var l = function (t) {
                    var i = t.target;
                    return (
                      i === s || s.contains(i) || (e.composed && e.composedPath().shift() === s)
                    );
                  };
                  if ('touchstart' === e.type) {
                    var u = Array.prototype.filter.call(e.touches, l);
                    if (u.length > 1) return !1;
                    (a = u[0].pageX), (o = u[0].pageY);
                  } else {
                    var d = Array.prototype.find.call(e.changedTouches, l);
                    if (!d) return !1;
                    (a = d.pageX), (o = d.pageY);
                  }
                }
                return (
                  (t = t || ne(S)),
                  (r || n) && ((a = e.clientX + t.x), (o = e.clientY + t.y)),
                  (e.pageOffset = t),
                  (e.points = [a, o]),
                  (e.cursor = r || n),
                  e
                );
              })(n, r.pageOffset, r.target || s);
            return (
              !!l &&
              !(A() && !r.doNotReject) &&
              ((a = p),
              (o = t.cssClasses.tap),
              !(
                (a.classList
                  ? a.classList.contains(o)
                  : new RegExp('\\b' + o + '\\b').test(a.className)) && !r.doNotReject
              ) &&
                !(e === d.start && void 0 !== l.buttons && l.buttons > 1) &&
                (!r.hover || !l.buttons) &&
                (c || l.preventDefault(), (l.calcPoint = l.points[t.ort]), void i(l, r)))
            );
          },
          a = [];
        return (
          e.split(' ').forEach(function (e) {
            s.addEventListener(e, n, !!c && { passive: !0 }), a.push([e, n]);
          }),
          a
        );
      }
      function I(e) {
        var s,
          r,
          n,
          a,
          o,
          l,
          u =
            (100 *
              (e -
                ((s = i),
                (r = t.ort),
                (n = s.getBoundingClientRect()),
                (o = (a = s.ownerDocument).documentElement),
                (l = ne(a)),
                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                r ? n.top + l.y - o.clientTop : n.left + l.x - o.clientLeft))) /
            V();
        return (u = ee(u)), t.dir ? 100 - u : u;
      }
      function O(e, t) {
        'mouseout' === e.type &&
          'HTML' === e.target.nodeName &&
          null === e.relatedTarget &&
          N(e, t);
      }
      function z(e, s) {
        if (
          -1 === navigator.appVersion.indexOf('MSIE 9') &&
          0 === e.buttons &&
          0 !== s.buttonsProperty
        )
          return N(e, s);
        var i = (t.dir ? -1 : 1) * (e.calcPoint - s.startCalcPoint);
        W(i > 0, (100 * i) / s.baseSize, s.locations, s.handleNumbers, s.connect);
      }
      function N(e, s) {
        s.handle && (re(s.handle, t.cssClasses.active), (v -= 1)),
          s.listeners.forEach(function (e) {
            k.removeEventListener(e[0], e[1]);
          }),
          0 === v &&
            (re(p, t.cssClasses.drag),
            se(),
            e.cursor && ((E.style.cursor = ''), E.removeEventListener('selectstart', Z))),
          t.events.smoothSteps &&
            (s.handleNumbers.forEach(function (e) {
              ae(e, m[e], !0, !0, !1, !1);
            }),
            s.handleNumbers.forEach(function (e) {
              j('update', e);
            })),
          s.handleNumbers.forEach(function (e) {
            j('change', e), j('set', e), j('end', e);
          });
      }
      function R(e, s) {
        if (!s.handleNumbers.some(T)) {
          var i;
          1 === s.handleNumbers.length &&
            ((i = r[s.handleNumbers[0]].children[0]), (v += 1), ie(i, t.cssClasses.active)),
            e.stopPropagation();
          var n = [],
            a = B(d.move, k, z, {
              target: e.target,
              handle: i,
              connect: s.connect,
              listeners: n,
              startCalcPoint: e.calcPoint,
              baseSize: V(),
              pageOffset: e.pageOffset,
              handleNumbers: s.handleNumbers,
              buttonsProperty: e.buttons,
              locations: m.slice(),
            }),
            o = B(d.end, k, N, {
              target: e.target,
              handle: i,
              listeners: n,
              doNotReject: !0,
              handleNumbers: s.handleNumbers,
            }),
            l = B('mouseout', k, O, {
              target: e.target,
              handle: i,
              listeners: n,
              doNotReject: !0,
              handleNumbers: s.handleNumbers,
            });
          n.push.apply(n, a.concat(o, l)),
            e.cursor &&
              ((E.style.cursor = getComputedStyle(e.target).cursor),
              r.length > 1 && ie(p, t.cssClasses.drag),
              E.addEventListener('selectstart', Z, !1)),
            s.handleNumbers.forEach(function (e) {
              j('start', e);
            });
        }
      }
      function q(e, t) {
        (b[e] = b[e] || []),
          b[e].push(t),
          'update' === e.split('.')[0] &&
            r.forEach(function (e, t) {
              j('update', t);
            });
      }
      function G(e) {
        var t = e && e.split('.')[0],
          s = t ? e.substring(t.length) : e;
        Object.keys(b).forEach(function (e) {
          var i = e.split('.')[0],
            r = e.substring(i.length);
          (t && t !== i) ||
            (s && s !== r) ||
            ((function (e) {
              return e === he || e === pe;
            })(r) &&
              s !== r) ||
            delete b[e];
        });
      }
      function j(e, s, i) {
        Object.keys(b).forEach(function (r) {
          var n = r.split('.')[0];
          e === n &&
            b[r].forEach(function (e) {
              e.call(fe, f.map(t.format.to), s, f.slice(), i || !1, m.slice(), fe);
            });
        });
      }
      function $(e, s, i, n, a, o, l) {
        var u;
        return (
          r.length > 1 &&
            !t.events.unconstrained &&
            (n &&
              s > 0 &&
              ((u = h.getAbsoluteDistance(e[s - 1], t.margin, !1)), (i = Math.max(i, u))),
            a &&
              s < r.length - 1 &&
              ((u = h.getAbsoluteDistance(e[s + 1], t.margin, !0)), (i = Math.min(i, u)))),
          r.length > 1 &&
            t.limit &&
            (n &&
              s > 0 &&
              ((u = h.getAbsoluteDistance(e[s - 1], t.limit, !1)), (i = Math.min(i, u))),
            a &&
              s < r.length - 1 &&
              ((u = h.getAbsoluteDistance(e[s + 1], t.limit, !0)), (i = Math.max(i, u)))),
          t.padding &&
            (0 === s && ((u = h.getAbsoluteDistance(0, t.padding[0], !1)), (i = Math.max(i, u))),
            s === r.length - 1 &&
              ((u = h.getAbsoluteDistance(100, t.padding[1], !0)), (i = Math.min(i, u)))),
          l || (i = h.getStep(i)),
          !((i = ee(i)) === e[s] && !o) && i
        );
      }
      function U(e, s) {
        var i = t.ort;
        return (i ? s : e) + ', ' + (i ? e : s);
      }
      function W(e, s, i, r, n) {
        var a = i.slice(),
          o = r[0],
          l = t.events.smoothSteps,
          u = [!e, e],
          d = [e, !e];
        (r = r.slice()),
          e && r.reverse(),
          r.length > 1
            ? r.forEach(function (e, t) {
                var i = $(a, e, a[e] + s, u[t], d[t], !1, l);
                !1 === i ? (s = 0) : ((s = i - a[e]), (a[e] = i));
              })
            : (u = d = [!0]);
        var c = !1;
        r.forEach(function (e, t) {
          c = ae(e, i[e] + s, u[t], d[t], !1, l) || c;
        }),
          c &&
            (r.forEach(function (e) {
              j('update', e), j('slide', e);
            }),
            null != n && j('drag', o));
      }
      function Q(e, s) {
        return t.dir ? 100 - e - s : e;
      }
      function se() {
        g.forEach(function (e) {
          var t = m[e] > 50 ? -1 : 1,
            s = 3 + (r.length + t * e);
          r[e].style.zIndex = String(s);
        });
      }
      function ae(e, s, i, n, a, o) {
        return (
          a || (s = $(m, e, s, i, n, !1, o)),
          !1 !== s &&
            ((function (e, s) {
              (m[e] = s), (f[e] = h.fromStepping(s));
              var i = 'translate(' + U(Q(s, 0) - w + '%', '0') + ')';
              (r[e].style[t.transformRule] = i), oe(e), oe(e + 1);
            })(e, s),
            !0)
        );
      }
      function oe(e) {
        if (n[e]) {
          var s = 0,
            i = 100;
          0 !== e && (s = m[e - 1]), e !== n.length - 1 && (i = m[e]);
          var r = i - s,
            a = 'translate(' + U(Q(s, r) + '%', '0') + ')',
            o = 'scale(' + U(r / 100, '1') + ')';
          n[e].style[t.transformRule] = a + ' ' + o;
        }
      }
      function le(e, s) {
        return null === e || !1 === e || void 0 === e
          ? m[s]
          : ('number' == typeof e && (e = String(e)),
            !1 !== (e = t.format.from(e)) && (e = h.toStepping(e)),
            !1 === e || isNaN(e) ? m[s] : e);
      }
      function ue(e, s, i) {
        var r = te(e),
          n = void 0 === m[0];
        (s = void 0 === s || s),
          t.animate && !n && J(p, t.cssClasses.tap, t.animationDuration),
          g.forEach(function (e) {
            ae(e, le(r[e], e), !0, !1, i);
          });
        var a = 1 === g.length ? 0 : 1;
        if (n && h.hasNoSize() && ((i = !0), (m[0] = 0), g.length > 1)) {
          var o = 100 / (g.length - 1);
          g.forEach(function (e) {
            m[e] = e * o;
          });
        }
        for (; a < g.length; ++a)
          g.forEach(function (e) {
            ae(e, m[e], !0, !0, i);
          });
        se(),
          g.forEach(function (e) {
            j('update', e), null !== r[e] && s && j('set', e);
          });
      }
      function de(e) {
        if ((void 0 === e && (e = !1), e)) return 1 === f.length ? f[0] : f.slice(0);
        var s = f.map(t.format.to);
        return 1 === s.length ? s[0] : s;
      }
      function ce(e) {
        var s = m[e],
          i = h.getNearbySteps(s),
          r = f[e],
          n = i.thisStep.step,
          a = null;
        if (t.snap)
          return [r - i.stepBefore.startValue || null, i.stepAfter.startValue - r || null];
        !1 !== n && r + n > i.stepAfter.startValue && (n = i.stepAfter.startValue - r),
          (a =
            r > i.thisStep.startValue
              ? i.thisStep.step
              : !1 !== i.stepBefore.step && r - i.stepBefore.highestStep),
          100 === s ? (n = null) : 0 === s && (a = null);
        var o = h.countStepDecimals();
        return (
          null !== n && !1 !== n && (n = Number(n.toFixed(o))),
          null !== a && !1 !== a && (a = Number(a.toFixed(o))),
          [a, n]
        );
      }
      ie((l = p), t.cssClasses.target),
        0 === t.dir ? ie(l, t.cssClasses.ltr) : ie(l, t.cssClasses.rtl),
        0 === t.ort ? ie(l, t.cssClasses.horizontal) : ie(l, t.cssClasses.vertical),
        ie(
          l,
          'rtl' === getComputedStyle(l).direction
            ? t.cssClasses.textDirectionRtl
            : t.cssClasses.textDirectionLtr,
        ),
        (i = x(l, t.cssClasses.base)),
        (function (e, s) {
          var i = x(s, t.cssClasses.connects);
          (r = []), (n = []).push(C(i, e[0]));
          for (var a = 0; a < t.handles; a++) r.push(y(s, a)), (g[a] = a), n.push(C(i, e[a + 1]));
        })(t.connect, i),
        (u = t.events).fixed ||
          r.forEach(function (e, t) {
            B(d.start, e.children[0], R, { handleNumbers: [t] });
          }),
        u.tap &&
          B(
            d.start,
            i,
            function (e) {
              e.stopPropagation();
              var s = I(e.calcPoint),
                i = (function (e) {
                  var t = 100,
                    s = !1;
                  return (
                    r.forEach(function (i, r) {
                      if (!T(r)) {
                        var n = m[r],
                          a = Math.abs(n - e);
                        (a < t || (a <= t && e > n) || (100 === a && 100 === t)) &&
                          ((s = r), (t = a));
                      }
                    }),
                    s
                  );
                })(s);
              !1 !== i &&
                (t.events.snap || J(p, t.cssClasses.tap, t.animationDuration),
                ae(i, s, !0, !0),
                se(),
                j('slide', i, !0),
                j('update', i, !0),
                t.events.snap
                  ? R(e, { handleNumbers: [i] })
                  : (j('change', i, !0), j('set', i, !0)));
            },
            {},
          ),
        u.hover &&
          B(
            d.move,
            i,
            function (e) {
              var t = I(e.calcPoint),
                s = h.getStep(t),
                i = h.fromStepping(s);
              Object.keys(b).forEach(function (e) {
                'hover' === e.split('.')[0] &&
                  b[e].forEach(function (e) {
                    e.call(fe, i);
                  });
              });
            },
            { hover: !0 },
          ),
        u.drag &&
          n.forEach(function (e, s) {
            if (!1 !== e && 0 !== s && s !== n.length - 1) {
              var i = r[s - 1],
                a = r[s],
                o = [e],
                l = [i, a],
                c = [s - 1, s];
              ie(e, t.cssClasses.draggable),
                u.fixed && (o.push(i.children[0]), o.push(a.children[0])),
                u.dragAll && ((l = r), (c = g)),
                o.forEach(function (t) {
                  B(d.start, t, R, { handles: l, handleNumbers: c, connect: e });
                });
            }
          }),
        ue(t.start),
        t.pips && D(t.pips),
        t.tooltips && L(),
        G('update' + he),
        q('update' + he, function (e, s, i, n, a) {
          g.forEach(function (e) {
            var s = r[e],
              n = $(m, e, 0, !0, !0, !0),
              o = $(m, e, 100, !0, !0, !0),
              l = a[e],
              u = String(t.ariaFormat.to(i[e]));
            (n = h.fromStepping(n).toFixed(1)),
              (o = h.fromStepping(o).toFixed(1)),
              (l = h.fromStepping(l).toFixed(1)),
              s.children[0].setAttribute('aria-valuemin', n),
              s.children[0].setAttribute('aria-valuemax', o),
              s.children[0].setAttribute('aria-valuenow', l),
              s.children[0].setAttribute('aria-valuetext', u);
          });
        });
      var fe = {
        destroy: function () {
          for (
            G(he),
              G(pe),
              Object.keys(t.cssClasses).forEach(function (e) {
                re(p, t.cssClasses[e]);
              });
            p.firstChild;

          )
            p.removeChild(p.firstChild);
          delete p.noUiSlider;
        },
        steps: function () {
          return g.map(ce);
        },
        on: q,
        off: G,
        get: de,
        set: ue,
        setHandle: function (e, t, s, i) {
          if (!((e = Number(e)) >= 0 && e < g.length))
            throw new Error('noUiSlider: invalid handle number, got: ' + e);
          ae(e, le(t, e), !0, !0, i), j('update', e), s && j('set', e);
        },
        reset: function (e) {
          ue(t.start, e);
        },
        disable: function (e) {
          null != e
            ? (r[e].setAttribute('disabled', ''), r[e].handle.removeAttribute('tabindex'))
            : (p.setAttribute('disabled', ''),
              r.forEach(function (e) {
                e.handle.removeAttribute('tabindex');
              }));
        },
        enable: function (e) {
          null != e
            ? (r[e].removeAttribute('disabled'), r[e].handle.setAttribute('tabindex', '0'))
            : (p.removeAttribute('disabled'),
              r.forEach(function (e) {
                e.removeAttribute('disabled'), e.handle.setAttribute('tabindex', '0');
              }));
        },
        __moveHandles: function (e, t, s) {
          W(e, t, m, s);
        },
        options: s,
        updateOptions: function (e, i) {
          var r = de(),
            n = [
              'margin',
              'limit',
              'padding',
              'range',
              'animate',
              'snap',
              'step',
              'format',
              'pips',
              'tooltips',
            ];
          n.forEach(function (t) {
            void 0 !== e[t] && (s[t] = e[t]);
          });
          var a = ze(s);
          n.forEach(function (s) {
            void 0 !== e[s] && (t[s] = a[s]);
          }),
            (h = a.spectrum),
            (t.margin = a.margin),
            (t.limit = a.limit),
            (t.padding = a.padding),
            t.pips ? D(t.pips) : F(),
            t.tooltips ? L() : M(),
            (m = []),
            ue(K(e.start) ? e.start : r, i);
        },
        target: p,
        removePips: F,
        removeTooltips: M,
        getPositions: function () {
          return m.slice();
        },
        getTooltips: function () {
          return o;
        },
        getOrigins: function () {
          return r;
        },
        pips: D,
      };
      return fe;
    }
    var Re = function (e, t) {
      if (!e || !e.nodeName)
        throw new Error('noUiSlider: create requires a single element, got: ' + e);
      if (e.noUiSlider) throw new Error('noUiSlider: Slider was already initialized.');
      var s = Ne(e, ze(t), t);
      return (e.noUiSlider = s), s;
    };
    const qe = document.createElement('div');
    qe.classList = 'search_bar';
    const Ge = document.createElement('input');
    (Ge.classList = 'search_bar__input'), (Ge.type = 'text'), (Ge.placeholder = 'Поиск...');
    const je = document.createElement('div');
    je.classList = 'search_bar__icon';
    const $e = document.createElement('button');
    ($e.classList = 'search_bar__close'),
      (je.innerHTML =
        '\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">\n        <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#D9FF5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M23 22L18 17" stroke="#D9FF5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n'),
      ($e.innerHTML =
        '\n    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <g clip-path="url(#clip0_2719_6178)">\n        <path d="M21 1L1 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M1 1L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_2719_6178">\n        <rect width="22" height="22" fill="white"/>\n        </clipPath>\n        </defs>\n    </svg>\n'),
      qe.appendChild(je),
      qe.appendChild(Ge),
      qe.appendChild($e),
      document.querySelector('.header__search-inp');
    const Ue = document.querySelector('.header__search'),
      He = (document.querySelector('.header'), document.querySelector('.header_container')),
      Ye = document.querySelector('.result'),
      We = document.querySelector('.cabinet'),
      Xe = document.querySelector('.header__controls-user'),
      Ke = document.querySelectorAll('.cabinet__list-item'),
      Ze = document.querySelector('.modal');
    function Qe(e) {
      return 'string' == typeof e || e instanceof String;
    }
    function Je(e) {
      var t;
      return (
        'object' == typeof e &&
        null != e &&
        'Object' === (null == e || null == (t = e.constructor) ? void 0 : t.name)
      );
    }
    function et(e, t) {
      return Array.isArray(t)
        ? et(e, (e, s) => t.includes(s))
        : Object.entries(e).reduce((e, s) => {
            let [i, r] = s;
            return t(r, i) && (e[i] = r), e;
          }, {});
    }
    document.querySelector('.form-login'),
      Xe.addEventListener('click', () => {
        We.classList.toggle('visible');
      }),
      Ke.forEach((e) => {
        e.addEventListener('click', () => {
          console.log(Ze);
          const t = e.dataset.modal;
          t
            ? (document.querySelector(`.${t}`).classList.add('visible'), Ze.classList.add(t))
            : (localStorage.clear(),
              We.querySelectorAll('.cabinet__list').forEach((e) => {
                e.classList.contains('authorized')
                  ? e.classList.remove('visible')
                  : e.classList.remove('invisible');
              }));
        });
      }),
      Ue.addEventListener('click', (e) => {
        const t = document.querySelector('.search_bar');
        t && (t.classList.contains('opac') || t.classList.contains('appear'))
          ? e.preventDefault()
          : t
          ? (t.classList.add('opac'),
            Ye.classList.add('opac'),
            setTimeout(() => {
              t.classList.remove('opac'),
                He.removeChild(t),
                (qe.querySelector('input').value = ''),
                Ye.classList.remove('opac'),
                Ye.classList.remove('visible');
            }, 480))
          : (qe.classList.add('appear'),
            He.appendChild(qe),
            qe.addEventListener('input', (e) => {
              console.log(e.target.value),
                Ye.classList.contains('visible') || Ye.classList.add('visible'),
                '' !== e.target.value.trim()
                  ? (Ye.querySelector('.result__list').classList.add('visible'),
                    Ye.querySelector('.result__null').classList.remove('visible'))
                  : (Ye.querySelector('.result__null').classList.add('visible'),
                    Ye.querySelector('.result__list').classList.remove('visible'));
            }),
            setTimeout(() => {
              qe.classList.remove('appear');
            }, 480),
            document.querySelector('.search_bar__close').addEventListener('click', () => {
              qe.classList.add('opac'),
                Ye.classList.add('opac'),
                setTimeout(() => {
                  qe.classList.remove('opac'),
                    He.contains(qe) && He.removeChild(qe),
                    (qe.querySelector('input').value = ''),
                    Ye.classList.remove('opac'),
                    Ye.classList.remove('visible');
                }, 480);
            }));
      }),
      s(34);
    const tt = 'NONE',
      st = 'LEFT',
      it = 'FORCE_LEFT',
      rt = 'RIGHT',
      nt = 'FORCE_RIGHT';
    function at(e) {
      return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    }
    function ot(e, t) {
      if (t === e) return !0;
      const s = Array.isArray(t),
        i = Array.isArray(e);
      let r;
      if (s && i) {
        if (t.length != e.length) return !1;
        for (r = 0; r < t.length; r++) if (!ot(t[r], e[r])) return !1;
        return !0;
      }
      if (s != i) return !1;
      if (t && e && 'object' == typeof t && 'object' == typeof e) {
        const s = t instanceof Date,
          i = e instanceof Date;
        if (s && i) return t.getTime() == e.getTime();
        if (s != i) return !1;
        const n = t instanceof RegExp,
          a = e instanceof RegExp;
        if (n && a) return t.toString() == e.toString();
        if (n != a) return !1;
        const o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          if (!Object.prototype.hasOwnProperty.call(e, o[r])) return !1;
        for (r = 0; r < o.length; r++) if (!ot(e[o[r]], t[o[r]])) return !1;
        return !0;
      }
      return (
        !(!t || !e || 'function' != typeof t || 'function' != typeof e) &&
        t.toString() === e.toString()
      );
    }
    class lt {
      constructor(e) {
        for (
          Object.assign(this, e);
          this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);

        )
          --this.oldSelection.start;
      }
      get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      get insertedCount() {
        return this.cursorPos - this.startChangePos;
      }
      get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      get removedCount() {
        return Math.max(
          this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length,
          0,
        );
      }
      get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      get head() {
        return this.value.substring(0, this.startChangePos);
      }
      get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      get removeDirection() {
        return !this.removedCount || this.insertedCount
          ? tt
          : (this.oldSelection.end !== this.cursorPos &&
              this.oldSelection.start !== this.cursorPos) ||
            this.oldSelection.end !== this.oldSelection.start
          ? st
          : rt;
      }
    }
    function ut(e, t) {
      return new ut.InputMask(e, t);
    }
    function dt(e) {
      if (null == e) throw new Error('mask property should be defined');
      return e instanceof RegExp
        ? ut.MaskedRegExp
        : Qe(e)
        ? ut.MaskedPattern
        : e === Date
        ? ut.MaskedDate
        : e === Number
        ? ut.MaskedNumber
        : Array.isArray(e) || e === Array
        ? ut.MaskedDynamic
        : ut.Masked && e.prototype instanceof ut.Masked
        ? e
        : ut.Masked && e instanceof ut.Masked
        ? e.constructor
        : e instanceof Function
        ? ut.MaskedFunction
        : (console.warn('Mask not found for mask', e), ut.Masked);
    }
    function ct(e) {
      if (!e) throw new Error('Options in not defined');
      if (ut.Masked) {
        if (e.prototype instanceof ut.Masked) return { mask: e };
        const { mask: t, ...s } =
          e instanceof ut.Masked ? { mask: e } : Je(e) && e.mask instanceof ut.Masked ? e : {};
        if (t) {
          const e = t.mask;
          return { ...et(t, (e, t) => !t.startsWith('_')), mask: t.constructor, _mask: e, ...s };
        }
      }
      return Je(e) ? { ...e } : { mask: e };
    }
    function pt(e) {
      if (ut.Masked && e instanceof ut.Masked) return e;
      const t = ct(e),
        s = dt(t.mask);
      if (!s)
        throw new Error(
          'Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask.',
        );
      return (
        t.mask === s && delete t.mask, t._mask && ((t.mask = t._mask), delete t._mask), new s(t)
      );
    }
    ut.createMask = pt;
    class ht {
      get selectionStart() {
        let e;
        try {
          e = this._unsafeSelectionStart;
        } catch {}
        return null != e ? e : this.value.length;
      }
      get selectionEnd() {
        let e;
        try {
          e = this._unsafeSelectionEnd;
        } catch {}
        return null != e ? e : this.value.length;
      }
      select(e, t) {
        if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd))
          try {
            this._unsafeSelect(e, t);
          } catch {}
      }
      get isActive() {
        return !1;
      }
    }
    ut.MaskElement = ht;
    class ft extends ht {
      constructor(e) {
        super(), (this.input = e), (this._handlers = {});
      }
      get rootElement() {
        var e, t, s;
        return null != (e = null == (t = (s = this.input).getRootNode) ? void 0 : t.call(s))
          ? e
          : document;
      }
      get isActive() {
        return this.input === this.rootElement.activeElement;
      }
      bindEvents(e) {
        Object.keys(e).forEach((t) => this._toggleEventHandler(ft.EVENTS_MAP[t], e[t]));
      }
      unbindEvents() {
        Object.keys(this._handlers).forEach((e) => this._toggleEventHandler(e));
      }
      _toggleEventHandler(e, t) {
        this._handlers[e] &&
          (this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]),
          t && (this.input.addEventListener(e, t), (this._handlers[e] = t));
      }
    }
    (ft.EVENTS_MAP = {
      selectionChange: 'keydown',
      input: 'input',
      drop: 'drop',
      click: 'click',
      focus: 'focus',
      commit: 'blur',
    }),
      (ut.HTMLMaskElement = ft);
    class mt extends ft {
      constructor(e) {
        super(e), (this.input = e), (this._handlers = {});
      }
      get _unsafeSelectionStart() {
        return null != this.input.selectionStart ? this.input.selectionStart : this.value.length;
      }
      get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
      }
      _unsafeSelect(e, t) {
        this.input.setSelectionRange(e, t);
      }
      get value() {
        return this.input.value;
      }
      set value(e) {
        this.input.value = e;
      }
    }
    ut.HTMLMaskElement = ft;
    class gt extends ft {
      get _unsafeSelectionStart() {
        const e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s < i ? s : i;
      }
      get _unsafeSelectionEnd() {
        const e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s > i ? s : i;
      }
      _unsafeSelect(e, t) {
        if (!this.rootElement.createRange) return;
        const s = this.rootElement.createRange();
        s.setStart(this.input.firstChild || this.input, e),
          s.setEnd(this.input.lastChild || this.input, t);
        const i = this.rootElement,
          r = i.getSelection && i.getSelection();
        r && (r.removeAllRanges(), r.addRange(s));
      }
      get value() {
        return this.input.textContent || '';
      }
      set value(e) {
        this.input.textContent = e;
      }
    }
    (ut.HTMLContenteditableMaskElement = gt),
      (ut.InputMask = class {
        constructor(e, t) {
          (this.el =
            e instanceof ht
              ? e
              : e.isContentEditable && 'INPUT' !== e.tagName && 'TEXTAREA' !== e.tagName
              ? new gt(e)
              : new mt(e)),
            (this.masked = pt(t)),
            (this._listeners = {}),
            (this._value = ''),
            (this._unmaskedValue = ''),
            (this._saveSelection = this._saveSelection.bind(this)),
            (this._onInput = this._onInput.bind(this)),
            (this._onChange = this._onChange.bind(this)),
            (this._onDrop = this._onDrop.bind(this)),
            (this._onFocus = this._onFocus.bind(this)),
            (this._onClick = this._onClick.bind(this)),
            (this.alignCursor = this.alignCursor.bind(this)),
            (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
            this._bindEvents(),
            this.updateValue(),
            this._onChange();
        }
        maskEquals(e) {
          var t;
          return null == e || (null == (t = this.masked) ? void 0 : t.maskEquals(e));
        }
        get mask() {
          return this.masked.mask;
        }
        set mask(e) {
          if (this.maskEquals(e)) return;
          if (!(e instanceof ut.Masked) && this.masked.constructor === dt(e))
            return void this.masked.updateOptions({ mask: e });
          const t = e instanceof ut.Masked ? e : pt({ mask: e });
          (t.unmaskedValue = this.masked.unmaskedValue), (this.masked = t);
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this.value !== e && ((this.masked.value = e), this.updateControl(), this.alignCursor());
        }
        get unmaskedValue() {
          return this._unmaskedValue;
        }
        set unmaskedValue(e) {
          this.unmaskedValue !== e &&
            ((this.masked.unmaskedValue = e), this.updateControl(), this.alignCursor());
        }
        get typedValue() {
          return this.masked.typedValue;
        }
        set typedValue(e) {
          this.masked.typedValueEquals(e) ||
            ((this.masked.typedValue = e), this.updateControl(), this.alignCursor());
        }
        get displayValue() {
          return this.masked.displayValue;
        }
        _bindEvents() {
          this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange,
          });
        }
        _unbindEvents() {
          this.el && this.el.unbindEvents();
        }
        _fireEvent(e, t) {
          const s = this._listeners[e];
          s && s.forEach((e) => e(t));
        }
        get selectionStart() {
          return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
        }
        get cursorPos() {
          return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
        }
        set cursorPos(e) {
          this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection());
        }
        _saveSelection() {
          this.displayValue !== this.el.value &&
            console.warn(
              'Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.',
            ),
            (this._selection = { start: this.selectionStart, end: this.cursorPos });
        }
        updateValue() {
          (this.masked.value = this.el.value), (this._value = this.masked.value);
        }
        updateControl() {
          const e = this.masked.unmaskedValue,
            t = this.masked.value,
            s = this.displayValue,
            i = this.unmaskedValue !== e || this.value !== t;
          (this._unmaskedValue = e),
            (this._value = t),
            this.el.value !== s && (this.el.value = s),
            i && this._fireChangeEvents();
        }
        updateOptions(e) {
          const { mask: t, ...s } = e,
            i = !this.maskEquals(t),
            r = !ot(this.masked, s);
          i && (this.mask = t), r && this.masked.updateOptions(s), (i || r) && this.updateControl();
        }
        updateCursor(e) {
          null != e && ((this.cursorPos = e), this._delayUpdateCursor(e));
        }
        _delayUpdateCursor(e) {
          this._abortUpdateCursor(),
            (this._changingCursorPos = e),
            (this._cursorChanging = setTimeout(() => {
              this.el && ((this.cursorPos = this._changingCursorPos), this._abortUpdateCursor());
            }, 10));
        }
        _fireChangeEvents() {
          this._fireEvent('accept', this._inputEvent),
            this.masked.isComplete && this._fireEvent('complete', this._inputEvent);
        }
        _abortUpdateCursor() {
          this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
        }
        alignCursor() {
          this.cursorPos = this.masked.nearestInputPos(
            this.masked.nearestInputPos(this.cursorPos, st),
          );
        }
        alignCursorFriendly() {
          this.selectionStart === this.cursorPos && this.alignCursor();
        }
        on(e, t) {
          return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this;
        }
        off(e, t) {
          if (!this._listeners[e]) return this;
          if (!t) return delete this._listeners[e], this;
          const s = this._listeners[e].indexOf(t);
          return s >= 0 && this._listeners[e].splice(s, 1), this;
        }
        _onInput(e) {
          if (((this._inputEvent = e), this._abortUpdateCursor(), !this._selection))
            return this.updateValue();
          const t = new lt({
              value: this.el.value,
              cursorPos: this.cursorPos,
              oldValue: this.displayValue,
              oldSelection: this._selection,
            }),
            s = this.masked.rawInputValue,
            i = this.masked.splice(
              t.startChangePos,
              t.removed.length,
              t.inserted,
              t.removeDirection,
              { input: !0, raw: !0 },
            ).offset,
            r = s === this.masked.rawInputValue ? t.removeDirection : tt;
          let n = this.masked.nearestInputPos(t.startChangePos + i, r);
          r !== tt && (n = this.masked.nearestInputPos(n, tt)),
            this.updateControl(),
            this.updateCursor(n),
            delete this._inputEvent;
        }
        _onChange() {
          this.displayValue !== this.el.value && this.updateValue(),
            this.masked.doCommit(),
            this.updateControl(),
            this._saveSelection();
        }
        _onDrop(e) {
          e.preventDefault(), e.stopPropagation();
        }
        _onFocus(e) {
          this.alignCursorFriendly();
        }
        _onClick(e) {
          this.alignCursorFriendly();
        }
        destroy() {
          this._unbindEvents(), (this._listeners.length = 0), delete this.el;
        }
      });
    class vt {
      static normalize(e) {
        return Array.isArray(e) ? e : [e, new vt()];
      }
      constructor(e) {
        Object.assign(this, { inserted: '', rawInserted: '', skip: !1, tailShift: 0 }, e);
      }
      aggregate(e) {
        return (
          (this.rawInserted += e.rawInserted),
          (this.skip = this.skip || e.skip),
          (this.inserted += e.inserted),
          (this.tailShift += e.tailShift),
          this
        );
      }
      get offset() {
        return this.tailShift + this.inserted.length;
      }
    }
    ut.ChangeDetails = vt;
    class bt {
      constructor(e, t, s) {
        void 0 === e && (e = ''),
          void 0 === t && (t = 0),
          (this.value = e),
          (this.from = t),
          (this.stop = s);
      }
      toString() {
        return this.value;
      }
      extend(e) {
        this.value += String(e);
      }
      appendTo(e) {
        return e.append(this.toString(), { tail: !0 }).aggregate(e._appendPlaceholder());
      }
      get state() {
        return { value: this.value, from: this.from, stop: this.stop };
      }
      set state(e) {
        Object.assign(this, e);
      }
      unshift(e) {
        if (!this.value.length || (null != e && this.from >= e)) return '';
        const t = this.value[0];
        return (this.value = this.value.slice(1)), t;
      }
      shift() {
        if (!this.value.length) return '';
        const e = this.value[this.value.length - 1];
        return (this.value = this.value.slice(0, -1)), e;
      }
    }
    class St {
      constructor(e) {
        (this._value = ''), this._update({ ...St.DEFAULTS, ...e }), (this._initialized = !0);
      }
      updateOptions(e) {
        Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e));
      }
      _update(e) {
        Object.assign(this, e);
      }
      get state() {
        return { _value: this.value, _rawInputValue: this.rawInputValue };
      }
      set state(e) {
        this._value = e._value;
      }
      reset() {
        this._value = '';
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.resolve(e, { input: !0 });
      }
      resolve(e, t) {
        void 0 === t && (t = { input: !0 }), this.reset(), this.append(e, t, ''), this.doCommit();
      }
      get unmaskedValue() {
        return this.value;
      }
      set unmaskedValue(e) {
        this.resolve(e, {});
      }
      get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
      }
      set typedValue(e) {
        this.format ? (this.value = this.format(e, this)) : (this.unmaskedValue = String(e));
      }
      get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, { raw: !0 });
      }
      set rawInputValue(e) {
        this.resolve(e, { raw: !0 });
      }
      get displayValue() {
        return this.value;
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return this.isComplete;
      }
      nearestInputPos(e, t) {
        return e;
      }
      totalInputPositions(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          Math.min(this.displayValue.length, t - e)
        );
      }
      extractInput(e, t, s) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          this.displayValue.slice(e, t)
        );
      }
      extractTail(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          new bt(this.extractInput(e, t), e)
        );
      }
      appendTail(e) {
        return Qe(e) && (e = new bt(String(e))), e.appendTo(this);
      }
      _appendCharRaw(e, t) {
        return e ? ((this._value += e), new vt({ inserted: e, rawInserted: e })) : new vt();
      }
      _appendChar(e, t, s) {
        void 0 === t && (t = {});
        const i = this.state;
        let r;
        if (
          (([e, r] = this.doPrepareChar(e, t)),
          (r = r.aggregate(this._appendCharRaw(e, t))),
          r.inserted)
        ) {
          let e,
            n = !1 !== this.doValidate(t);
          if (n && null != s) {
            const t = this.state;
            !0 === this.overwrite &&
              ((e = s.state), s.unshift(this.displayValue.length - r.tailShift));
            let i = this.appendTail(s);
            (n = i.rawInserted === s.toString()),
              (n && i.inserted) ||
                'shift' !== this.overwrite ||
                ((this.state = t),
                (e = s.state),
                s.shift(),
                (i = this.appendTail(s)),
                (n = i.rawInserted === s.toString())),
              n && i.inserted && (this.state = t);
          }
          n || ((r = new vt()), (this.state = i), s && e && (s.state = e));
        }
        return r;
      }
      _appendPlaceholder() {
        return new vt();
      }
      _appendEager() {
        return new vt();
      }
      append(e, t, s) {
        if (!Qe(e)) throw new Error('value should be string');
        const i = Qe(s) ? new bt(String(s)) : s;
        let r;
        null != t && t.tail && (t._beforeTailState = this.state), ([e, r] = this.doPrepare(e, t));
        for (let s = 0; s < e.length; ++s) {
          const n = this._appendChar(e[s], t, i);
          if (!n.rawInserted && !this.doSkipInvalid(e[s], t, i)) break;
          r.aggregate(n);
        }
        return (
          (!0 === this.eager || 'append' === this.eager) &&
            null != t &&
            t.input &&
            e &&
            r.aggregate(this._appendEager()),
          null != i && (r.tailShift += this.appendTail(i).tailShift),
          r
        );
      }
      remove(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          (this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t)),
          new vt()
        );
      }
      withValueRefresh(e) {
        if (this._refreshing || !this._initialized) return e();
        this._refreshing = !0;
        const t = this.rawInputValue,
          s = this.value,
          i = e();
        return (
          (this.rawInputValue = t),
          this.value &&
            this.value !== s &&
            0 === s.indexOf(this.value) &&
            this.append(s.slice(this.displayValue.length), {}, ''),
          delete this._refreshing,
          i
        );
      }
      runIsolated(e) {
        if (this._isolated || !this._initialized) return e(this);
        this._isolated = !0;
        const t = this.state,
          s = e(this);
        return (this.state = t), delete this._isolated, s;
      }
      doSkipInvalid(e, t, s) {
        return Boolean(this.skipInvalid);
      }
      doPrepare(e, t) {
        return void 0 === t && (t = {}), vt.normalize(this.prepare ? this.prepare(e, this, t) : e);
      }
      doPrepareChar(e, t) {
        return (
          void 0 === t && (t = {}),
          vt.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e)
        );
      }
      doValidate(e) {
        return (
          (!this.validate || this.validate(this.value, this, e)) &&
          (!this.parent || this.parent.doValidate(e))
        );
      }
      doCommit() {
        this.commit && this.commit(this.value, this);
      }
      splice(e, t, s, i, r) {
        void 0 === i && (i = tt), void 0 === r && (r = { input: !0 });
        const n = e + t,
          a = this.extractTail(n),
          o = !0 === this.eager || 'remove' === this.eager;
        let l;
        o &&
          ((i = (function (e) {
            switch (e) {
              case st:
                return it;
              case rt:
                return nt;
              default:
                return e;
            }
          })(i)),
          (l = this.extractInput(0, n, { raw: !0 })));
        let u = e;
        const d = new vt();
        if (
          (i !== tt &&
            ((u = this.nearestInputPos(e, t > 1 && 0 !== e && !o ? tt : i)), (d.tailShift = u - e)),
          d.aggregate(this.remove(u)),
          o && i !== tt && l === this.rawInputValue)
        )
          if (i === it) {
            let e;
            for (; l === this.rawInputValue && (e = this.displayValue.length); )
              d.aggregate(new vt({ tailShift: -1 })).aggregate(this.remove(e - 1));
          } else i === nt && a.unshift();
        return d.aggregate(this.append(s, r, a));
      }
      maskEquals(e) {
        return this.mask === e;
      }
      typedValueEquals(e) {
        const t = this.typedValue;
        return (
          e === t ||
          (St.EMPTY_VALUES.includes(e) && St.EMPTY_VALUES.includes(t)) ||
          (!!this.format && this.format(e, this) === this.format(this.typedValue, this))
        );
      }
    }
    (St.DEFAULTS = { skipInvalid: !0 }), (St.EMPTY_VALUES = [void 0, null, '']), (ut.Masked = St);
    class kt {
      constructor(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0), (this.chunks = e), (this.from = t);
      }
      toString() {
        return this.chunks.map(String).join('');
      }
      extend(e) {
        if (!String(e)) return;
        e = Qe(e) ? new bt(String(e)) : e;
        const t = this.chunks[this.chunks.length - 1],
          s = t && (t.stop === e.stop || null == e.stop) && e.from === t.from + t.toString().length;
        if (e instanceof bt) s ? t.extend(e.toString()) : this.chunks.push(e);
        else if (e instanceof kt) {
          if (null == e.stop) {
            let t;
            for (; e.chunks.length && null == e.chunks[0].stop; )
              (t = e.chunks.shift()), (t.from += e.from), this.extend(t);
          }
          e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
        }
      }
      appendTo(e) {
        if (!(e instanceof ut.MaskedPattern)) return new bt(this.toString()).appendTo(e);
        const t = new vt();
        for (let s = 0; s < this.chunks.length && !t.skip; ++s) {
          const i = this.chunks[s],
            r = e._mapPosToBlock(e.displayValue.length),
            n = i.stop;
          let a;
          if (null != n && (!r || r.index <= n)) {
            if (i instanceof kt || e._stops.indexOf(n) >= 0) {
              const s = e._appendPlaceholder(n);
              t.aggregate(s);
            }
            a = i instanceof kt && e._blocks[n];
          }
          if (a) {
            const s = a.appendTail(i);
            (s.skip = !1), t.aggregate(s), (e._value += s.inserted);
            const r = i.toString().slice(s.rawInserted.length);
            r && t.aggregate(e.append(r, { tail: !0 }));
          } else t.aggregate(e.append(i.toString(), { tail: !0 }));
        }
        return t;
      }
      get state() {
        return {
          chunks: this.chunks.map((e) => e.state),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex,
        };
      }
      set state(e) {
        const { chunks: t, ...s } = e;
        Object.assign(this, s),
          (this.chunks = t.map((e) => {
            const t = 'chunks' in e ? new kt() : new bt();
            return (t.state = e), t;
          }));
      }
      unshift(e) {
        if (!this.chunks.length || (null != e && this.from >= e)) return '';
        const t = null != e ? e - this.from : e;
        let s = 0;
        for (; s < this.chunks.length; ) {
          const e = this.chunks[s],
            i = e.unshift(t);
          if (e.toString()) {
            if (!i) break;
            ++s;
          } else this.chunks.splice(s, 1);
          if (i) return i;
        }
        return '';
      }
      shift() {
        if (!this.chunks.length) return '';
        let e = this.chunks.length - 1;
        for (; 0 <= e; ) {
          const t = this.chunks[e],
            s = t.shift();
          if (t.toString()) {
            if (!s) break;
            --e;
          } else this.chunks.splice(e, 1);
          if (s) return s;
        }
        return '';
      }
    }
    class Et {
      constructor(e, t) {
        (this.masked = e), (this._log = []);
        const { offset: s, index: i } =
          e._mapPosToBlock(t) ||
          (t < 0 ? { index: 0, offset: 0 } : { index: this.masked._blocks.length, offset: 0 });
        (this.offset = s), (this.index = i), (this.ok = !1);
      }
      get block() {
        return this.masked._blocks[this.index];
      }
      get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
      get state() {
        return { index: this.index, offset: this.offset, ok: this.ok };
      }
      set state(e) {
        Object.assign(this, e);
      }
      pushState() {
        this._log.push(this.state);
      }
      popState() {
        const e = this._log.pop();
        return e && (this.state = e), e;
      }
      bindBlock() {
        this.block ||
          (this.index < 0 && ((this.index = 0), (this.offset = 0)),
          this.index >= this.masked._blocks.length &&
            ((this.index = this.masked._blocks.length - 1),
            (this.offset = this.block.displayValue.length)));
      }
      _pushLeft(e) {
        for (
          this.pushState(), this.bindBlock();
          0 <= this.index;
          --this.index,
            this.offset = (null == (t = this.block) ? void 0 : t.displayValue.length) || 0
        ) {
          var t;
          if (e()) return (this.ok = !0);
        }
        return (this.ok = !1);
      }
      _pushRight(e) {
        for (
          this.pushState(), this.bindBlock();
          this.index < this.masked._blocks.length;
          ++this.index, this.offset = 0
        )
          if (e()) return (this.ok = !0);
        return (this.ok = !1);
      }
      pushLeftBeforeFilled() {
        return this._pushLeft(() => {
          if (!this.block.isFixed && this.block.value)
            return (
              (this.offset = this.block.nearestInputPos(this.offset, it)),
              0 !== this.offset || void 0
            );
        });
      }
      pushLeftBeforeInput() {
        return this._pushLeft(() => {
          if (!this.block.isFixed)
            return (this.offset = this.block.nearestInputPos(this.offset, st)), !0;
        });
      }
      pushLeftBeforeRequired() {
        return this._pushLeft(() => {
          if (!(this.block.isFixed || (this.block.isOptional && !this.block.value)))
            return (this.offset = this.block.nearestInputPos(this.offset, st)), !0;
        });
      }
      pushRightBeforeFilled() {
        return this._pushRight(() => {
          if (!this.block.isFixed && this.block.value)
            return (
              (this.offset = this.block.nearestInputPos(this.offset, nt)),
              this.offset !== this.block.value.length || void 0
            );
        });
      }
      pushRightBeforeInput() {
        return this._pushRight(() => {
          if (!this.block.isFixed)
            return (this.offset = this.block.nearestInputPos(this.offset, tt)), !0;
        });
      }
      pushRightBeforeRequired() {
        return this._pushRight(() => {
          if (!(this.block.isFixed || (this.block.isOptional && !this.block.value)))
            return (this.offset = this.block.nearestInputPos(this.offset, tt)), !0;
        });
      }
    }
    class wt {
      constructor(e) {
        Object.assign(this, e), (this._value = ''), (this.isFixed = !0);
      }
      get value() {
        return this._value;
      }
      get unmaskedValue() {
        return this.isUnmasking ? this.value : '';
      }
      get rawInputValue() {
        return this._isRawInput ? this.value : '';
      }
      get displayValue() {
        return this.value;
      }
      reset() {
        (this._isRawInput = !1), (this._value = '');
      }
      remove(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this._value.length),
          (this._value = this._value.slice(0, e) + this._value.slice(t)),
          this._value || (this._isRawInput = !1),
          new vt()
        );
      }
      nearestInputPos(e, t) {
        void 0 === t && (t = tt);
        const s = this._value.length;
        switch (t) {
          case st:
          case it:
            return 0;
          default:
            return s;
        }
      }
      totalInputPositions(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this._value.length),
          this._isRawInput ? t - e : 0
        );
      }
      extractInput(e, t, s) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this._value.length),
          void 0 === s && (s = {}),
          (s.raw && this._isRawInput && this._value.slice(e, t)) || ''
        );
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return Boolean(this._value);
      }
      _appendChar(e, t) {
        void 0 === t && (t = {});
        const s = new vt();
        if (this.isFilled) return s;
        const i = !0 === this.eager || 'append' === this.eager,
          r =
            this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !i) && !t.tail;
        return (
          r && (s.rawInserted = this.char),
          (this._value = s.inserted = this.char),
          (this._isRawInput = r && (t.raw || t.input)),
          s
        );
      }
      _appendEager() {
        return this._appendChar(this.char, { tail: !0 });
      }
      _appendPlaceholder() {
        const e = new vt();
        return this.isFilled || (this._value = e.inserted = this.char), e;
      }
      extractTail() {
        return new bt('');
      }
      appendTail(e) {
        return Qe(e) && (e = new bt(String(e))), e.appendTo(this);
      }
      append(e, t, s) {
        const i = this._appendChar(e[0], t);
        return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
      }
      doCommit() {}
      get state() {
        return { _value: this._value, _rawInputValue: this.rawInputValue };
      }
      set state(e) {
        (this._value = e._value), (this._isRawInput = Boolean(e._rawInputValue));
      }
    }
    class xt {
      constructor(e) {
        const {
          parent: t,
          isOptional: s,
          placeholderChar: i,
          displayChar: r,
          lazy: n,
          eager: a,
          ...o
        } = e;
        (this.masked = pt(o)),
          Object.assign(this, {
            parent: t,
            isOptional: s,
            placeholderChar: i,
            displayChar: r,
            lazy: n,
            eager: a,
          });
      }
      reset() {
        (this.isFilled = !1), this.masked.reset();
      }
      remove(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.value.length),
          0 === e && t >= 1 ? ((this.isFilled = !1), this.masked.remove(e, t)) : new vt()
        );
      }
      get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
      }
      get unmaskedValue() {
        return this.masked.unmaskedValue;
      }
      get rawInputValue() {
        return this.masked.rawInputValue;
      }
      get displayValue() {
        return (this.masked.value && this.displayChar) || this.value;
      }
      get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
      }
      _appendChar(e, t) {
        if ((void 0 === t && (t = {}), this.isFilled)) return new vt();
        const s = this.masked.state,
          i = this.masked._appendChar(e, this.currentMaskFlags(t));
        return (
          i.inserted &&
            !1 === this.doValidate(t) &&
            ((i.inserted = i.rawInserted = ''), (this.masked.state = s)),
          i.inserted ||
            this.isOptional ||
            this.lazy ||
            t.input ||
            (i.inserted = this.placeholderChar),
          (i.skip = !i.inserted && !this.isOptional),
          (this.isFilled = Boolean(i.inserted)),
          i
        );
      }
      append(e, t, s) {
        return this.masked.append(e, this.currentMaskFlags(t), s);
      }
      _appendPlaceholder() {
        const e = new vt();
        return (
          this.isFilled ||
            this.isOptional ||
            ((this.isFilled = !0), (e.inserted = this.placeholderChar)),
          e
        );
      }
      _appendEager() {
        return new vt();
      }
      extractTail(e, t) {
        return this.masked.extractTail(e, t);
      }
      appendTail(e) {
        return this.masked.appendTail(e);
      }
      extractInput(e, t, s) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.value.length),
          this.masked.extractInput(e, t, s)
        );
      }
      nearestInputPos(e, t) {
        void 0 === t && (t = tt);
        const s = this.value.length,
          i = Math.min(Math.max(e, 0), s);
        switch (t) {
          case st:
          case it:
            return this.isComplete ? i : 0;
          case rt:
          case nt:
            return this.isComplete ? i : s;
          default:
            return i;
        }
      }
      totalInputPositions(e, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.value.length),
          this.value.slice(e, t).length
        );
      }
      doValidate(e) {
        return (
          this.masked.doValidate(this.currentMaskFlags(e)) &&
          (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)))
        );
      }
      doCommit() {
        this.masked.doCommit();
      }
      get state() {
        return {
          _value: this.value,
          _rawInputValue: this.rawInputValue,
          masked: this.masked.state,
          isFilled: this.isFilled,
        };
      }
      set state(e) {
        (this.masked.state = e.masked), (this.isFilled = e.isFilled);
      }
      currentMaskFlags(e) {
        var t;
        return {
          ...e,
          _beforeTailState:
            (null == e || null == (t = e._beforeTailState) ? void 0 : t.masked) ||
            (null == e ? void 0 : e._beforeTailState),
        };
      }
    }
    (xt.DEFAULT_DEFINITIONS = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      '*': /./,
    }),
      (ut.MaskedRegExp = class extends St {
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          const t = e.mask;
          t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
        }
      });
    class yt extends St {
      constructor(e) {
        super({
          ...yt.DEFAULTS,
          ...e,
          definitions: Object.assign(
            {},
            xt.DEFAULT_DEFINITIONS,
            null == e ? void 0 : e.definitions,
          ),
        });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        (e.definitions = Object.assign({}, this.definitions, e.definitions)),
          super._update(e),
          this._rebuildMask();
      }
      _rebuildMask() {
        const e = this.definitions;
        (this._blocks = []),
          (this.exposeBlock = void 0),
          (this._stops = []),
          (this._maskedBlocks = {});
        const t = this.mask;
        if (!t || !e) return;
        let s = !1,
          i = !1;
        for (let r = 0; r < t.length; ++r) {
          if (this.blocks) {
            const e = t.slice(r),
              s = Object.keys(this.blocks).filter((t) => 0 === e.indexOf(t));
            s.sort((e, t) => t.length - e.length);
            const i = s[0];
            if (i) {
              const { expose: e, ...t } = ct(this.blocks[i]),
                s = pt({
                  lazy: this.lazy,
                  eager: this.eager,
                  placeholderChar: this.placeholderChar,
                  displayChar: this.displayChar,
                  overwrite: this.overwrite,
                  ...t,
                  parent: this,
                });
              s &&
                (this._blocks.push(s),
                e && (this.exposeBlock = s),
                this._maskedBlocks[i] || (this._maskedBlocks[i] = []),
                this._maskedBlocks[i].push(this._blocks.length - 1)),
                (r += i.length - 1);
              continue;
            }
          }
          let n = t[r],
            a = n in e;
          if (n === yt.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if ('{' === n || '}' === n) {
            s = !s;
            continue;
          }
          if ('[' === n || ']' === n) {
            i = !i;
            continue;
          }
          if (n === yt.ESCAPE_CHAR) {
            if ((++r, (n = t[r]), !n)) break;
            a = !1;
          }
          const o = a
            ? new xt({
                isOptional: i,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                ...ct(e[n]),
                parent: this,
              })
            : new wt({ char: n, eager: this.eager, isUnmasking: s });
          this._blocks.push(o);
        }
      }
      get state() {
        return { ...super.state, _blocks: this._blocks.map((e) => e.state) };
      }
      set state(e) {
        const { _blocks: t, ...s } = e;
        this._blocks.forEach((e, s) => (e.state = t[s])), (super.state = s);
      }
      reset() {
        super.reset(), this._blocks.forEach((e) => e.reset());
      }
      get isComplete() {
        return this.exposeBlock
          ? this.exposeBlock.isComplete
          : this._blocks.every((e) => e.isComplete);
      }
      get isFilled() {
        return this._blocks.every((e) => e.isFilled);
      }
      get isFixed() {
        return this._blocks.every((e) => e.isFixed);
      }
      get isOptional() {
        return this._blocks.every((e) => e.isOptional);
      }
      doCommit() {
        this._blocks.forEach((e) => e.doCommit()), super.doCommit();
      }
      get unmaskedValue() {
        return this.exposeBlock
          ? this.exposeBlock.unmaskedValue
          : this._blocks.reduce((e, t) => e + t.unmaskedValue, '');
      }
      set unmaskedValue(e) {
        if (this.exposeBlock) {
          const t = this.extractTail(
            this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) +
              this.exposeBlock.displayValue.length,
          );
          (this.exposeBlock.unmaskedValue = e), this.appendTail(t), this.doCommit();
        } else super.unmaskedValue = e;
      }
      get value() {
        return this.exposeBlock
          ? this.exposeBlock.value
          : this._blocks.reduce((e, t) => e + t.value, '');
      }
      set value(e) {
        if (this.exposeBlock) {
          const t = this.extractTail(
            this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) +
              this.exposeBlock.displayValue.length,
          );
          (this.exposeBlock.value = e), this.appendTail(t), this.doCommit();
        } else super.value = e;
      }
      get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
      }
      set typedValue(e) {
        if (this.exposeBlock) {
          const t = this.extractTail(
            this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) +
              this.exposeBlock.displayValue.length,
          );
          (this.exposeBlock.typedValue = e), this.appendTail(t), this.doCommit();
        } else super.typedValue = e;
      }
      get displayValue() {
        return this._blocks.reduce((e, t) => e + t.displayValue, '');
      }
      appendTail(e) {
        return super.appendTail(e).aggregate(this._appendPlaceholder());
      }
      _appendEager() {
        var e;
        const t = new vt();
        let s = null == (e = this._mapPosToBlock(this.displayValue.length)) ? void 0 : e.index;
        if (null == s) return t;
        this._blocks[s].isFilled && ++s;
        for (let e = s; e < this._blocks.length; ++e) {
          const s = this._blocks[e]._appendEager();
          if (!s.inserted) break;
          t.aggregate(s);
        }
        return t;
      }
      _appendCharRaw(e, t) {
        void 0 === t && (t = {});
        const s = this._mapPosToBlock(this.displayValue.length),
          i = new vt();
        if (!s) return i;
        for (let n = s.index; ; ++n) {
          var r;
          const s = this._blocks[n];
          if (!s) break;
          const a = s._appendChar(e, {
              ...t,
              _beforeTailState:
                null == (r = t._beforeTailState) || null == (r = r._blocks) ? void 0 : r[n],
            }),
            o = a.skip;
          if ((i.aggregate(a), o || a.rawInserted)) break;
        }
        return i;
      }
      extractTail(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        const s = new kt();
        return (
          e === t ||
            this._forEachBlocksInRange(e, t, (e, t, i, r) => {
              const n = e.extractTail(i, r);
              (n.stop = this._findStopBefore(t)),
                (n.from = this._blockStartPos(t)),
                n instanceof kt && (n.blockIndex = t),
                s.extend(n);
            }),
          s
        );
      }
      extractInput(e, t, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          void 0 === s && (s = {}),
          e === t)
        )
          return '';
        let i = '';
        return (
          this._forEachBlocksInRange(e, t, (e, t, r, n) => {
            i += e.extractInput(r, n, s);
          }),
          i
        );
      }
      _findStopBefore(e) {
        let t;
        for (let s = 0; s < this._stops.length; ++s) {
          const i = this._stops[s];
          if (!(i <= e)) break;
          t = i;
        }
        return t;
      }
      _appendPlaceholder(e) {
        const t = new vt();
        if (this.lazy && null == e) return t;
        const s = this._mapPosToBlock(this.displayValue.length);
        if (!s) return t;
        const i = s.index,
          r = null != e ? e : this._blocks.length;
        return (
          this._blocks.slice(i, r).forEach((s) => {
            if (!s.lazy || null != e) {
              var i;
              const e = s._appendPlaceholder(null == (i = s._blocks) ? void 0 : i.length);
              (this._value += e.inserted), t.aggregate(e);
            }
          }),
          t
        );
      }
      _mapPosToBlock(e) {
        let t = '';
        for (let s = 0; s < this._blocks.length; ++s) {
          const i = this._blocks[s],
            r = t.length;
          if (((t += i.displayValue), e <= t.length)) return { index: s, offset: e - r };
        }
      }
      _blockStartPos(e) {
        return this._blocks.slice(0, e).reduce((e, t) => e + t.displayValue.length, 0);
      }
      _forEachBlocksInRange(e, t, s) {
        void 0 === t && (t = this.displayValue.length);
        const i = this._mapPosToBlock(e);
        if (i) {
          const e = this._mapPosToBlock(t),
            r = e && i.index === e.index,
            n = i.offset,
            a = e && r ? e.offset : this._blocks[i.index].displayValue.length;
          if ((s(this._blocks[i.index], i.index, n, a), e && !r)) {
            for (let t = i.index + 1; t < e.index; ++t)
              s(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
            s(this._blocks[e.index], e.index, 0, e.offset);
          }
        }
      }
      remove(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        const s = super.remove(e, t);
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, r) => {
            s.aggregate(e.remove(i, r));
          }),
          s
        );
      }
      nearestInputPos(e, t) {
        if ((void 0 === t && (t = tt), !this._blocks.length)) return 0;
        const s = new Et(this, e);
        if (t === tt)
          return s.pushRightBeforeInput()
            ? s.pos
            : (s.popState(), s.pushLeftBeforeInput() ? s.pos : this.displayValue.length);
        if (t === st || t === it) {
          if (t === st) {
            if ((s.pushRightBeforeFilled(), s.ok && s.pos === e)) return e;
            s.popState();
          }
          if (
            (s.pushLeftBeforeInput(),
            s.pushLeftBeforeRequired(),
            s.pushLeftBeforeFilled(),
            t === st)
          ) {
            if ((s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e))
              return s.pos;
            if ((s.popState(), s.ok && s.pos <= e)) return s.pos;
            s.popState();
          }
          return s.ok
            ? s.pos
            : t === it
            ? 0
            : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
        }
        return t === rt || t === nt
          ? (s.pushRightBeforeInput(),
            s.pushRightBeforeRequired(),
            s.pushRightBeforeFilled()
              ? s.pos
              : t === nt
              ? this.displayValue.length
              : (s.popState(),
                s.ok ? s.pos : (s.popState(), s.ok ? s.pos : this.nearestInputPos(e, st))))
          : e;
      }
      totalInputPositions(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = 0;
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, r) => {
            s += e.totalInputPositions(i, r);
          }),
          s
        );
      }
      maskedBlock(e) {
        return this.maskedBlocks(e)[0];
      }
      maskedBlocks(e) {
        const t = this._maskedBlocks[e];
        return t ? t.map((e) => this._blocks[e]) : [];
      }
    }
    (yt.DEFAULTS = { lazy: !0, placeholderChar: '_' }),
      (yt.STOP_CHAR = '`'),
      (yt.ESCAPE_CHAR = '\\'),
      (yt.InputDefinition = xt),
      (yt.FixedDefinition = wt),
      (ut.MaskedPattern = yt);
    class Ct extends yt {
      get _matchFrom() {
        return this.maxLength - String(this.from).length;
      }
      constructor(e) {
        super(e);
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        const {
          to: t = this.to || 0,
          from: s = this.from || 0,
          maxLength: i = this.maxLength || 0,
          autofix: r = this.autofix,
          ...n
        } = e;
        (this.to = t),
          (this.from = s),
          (this.maxLength = Math.max(String(t).length, i)),
          (this.autofix = r);
        const a = String(this.from).padStart(this.maxLength, '0'),
          o = String(this.to).padStart(this.maxLength, '0');
        let l = 0;
        for (; l < o.length && o[l] === a[l]; ) ++l;
        (n.mask = o.slice(0, l).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - l)),
          super._update(n);
      }
      get isComplete() {
        return super.isComplete && Boolean(this.value);
      }
      boundaries(e) {
        let t = '',
          s = '';
        const [, i, r] = e.match(/^(\D*)(\d*)(\D*)/) || [];
        return (
          r && ((t = '0'.repeat(i.length) + r), (s = '9'.repeat(i.length) + r)),
          (t = t.padEnd(this.maxLength, '0')),
          (s = s.padEnd(this.maxLength, '9')),
          [t, s]
        );
      }
      doPrepareChar(e, t) {
        let s;
        if (
          (void 0 === t && (t = {}),
          ([e, s] = super.doPrepareChar(e.replace(/\D/g, ''), t)),
          !this.autofix || !e)
        )
          return [e, s];
        const i = String(this.from).padStart(this.maxLength, '0'),
          r = String(this.to).padStart(this.maxLength, '0'),
          n = this.value + e;
        if (n.length > this.maxLength) return ['', s];
        const [a, o] = this.boundaries(n);
        return Number(o) < this.from
          ? [i[n.length - 1], s]
          : Number(a) > this.to
          ? 'pad' === this.autofix && n.length < this.maxLength
            ? ['', s.aggregate(this.append(i[n.length - 1] + e, t))]
            : [r[n.length - 1], s]
          : [e, s];
      }
      doValidate(e) {
        const t = this.value;
        if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom) return !0;
        const [s, i] = this.boundaries(t);
        return this.from <= Number(i) && Number(s) <= this.to && super.doValidate(e);
      }
    }
    ut.MaskedRange = Ct;
    class _t extends yt {
      constructor(e) {
        const { mask: t, pattern: s, ...i } = { ..._t.DEFAULTS, ...e };
        super({ ...i, mask: Qe(t) ? t : s });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        const { mask: t, pattern: s, blocks: i, ...r } = { ..._t.DEFAULTS, ...e },
          n = Object.assign({}, _t.GET_DEFAULT_BLOCKS());
        e.min && (n.Y.from = e.min.getFullYear()),
          e.max && (n.Y.to = e.max.getFullYear()),
          e.min &&
            e.max &&
            n.Y.from === n.Y.to &&
            ((n.m.from = e.min.getMonth() + 1),
            (n.m.to = e.max.getMonth() + 1),
            n.m.from === n.m.to && ((n.d.from = e.min.getDate()), (n.d.to = e.max.getDate()))),
          Object.assign(n, this.blocks, i),
          Object.keys(n).forEach((t) => {
            const s = n[t];
            !('autofix' in s) && 'autofix' in e && (s.autofix = e.autofix);
          }),
          super._update({ ...r, mask: Qe(t) ? t : s, blocks: n });
      }
      doValidate(e) {
        const t = this.date;
        return (
          super.doValidate(e) &&
          (!this.isComplete ||
            (this.isDateExist(this.value) &&
              null != t &&
              (null == this.min || this.min <= t) &&
              (null == this.max || t <= this.max)))
        );
      }
      isDateExist(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0;
      }
      get date() {
        return this.typedValue;
      }
      set date(e) {
        this.typedValue = e;
      }
      get typedValue() {
        return this.isComplete ? super.typedValue : null;
      }
      set typedValue(e) {
        super.typedValue = e;
      }
      maskEquals(e) {
        return e === Date || super.maskEquals(e);
      }
    }
    (_t.GET_DEFAULT_BLOCKS = () => ({
      d: { mask: Ct, from: 1, to: 31, maxLength: 2 },
      m: { mask: Ct, from: 1, to: 12, maxLength: 2 },
      Y: { mask: Ct, from: 1900, to: 9999 },
    })),
      (_t.DEFAULTS = {
        mask: Date,
        pattern: 'd{.}`m{.}`Y',
        format: (e, t) =>
          e
            ? [
                String(e.getDate()).padStart(2, '0'),
                String(e.getMonth() + 1).padStart(2, '0'),
                e.getFullYear(),
              ].join('.')
            : '',
        parse: (e, t) => {
          const [s, i, r] = e.split('.').map(Number);
          return new Date(r, i - 1, s);
        },
      }),
      (ut.MaskedDate = _t);
    class At extends St {
      constructor(e) {
        super({ ...At.DEFAULTS, ...e }), (this.currentMask = void 0);
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        super._update(e),
          'mask' in e &&
            ((this.exposeMask = void 0),
            (this.compiledMasks = Array.isArray(e.mask)
              ? e.mask.map((e) => {
                  const { expose: t, ...s } = ct(e),
                    i = pt({
                      overwrite: this._overwrite,
                      eager: this._eager,
                      skipInvalid: this._skipInvalid,
                      ...s,
                    });
                  return t && (this.exposeMask = i), i;
                })
              : []));
      }
      _appendCharRaw(e, t) {
        void 0 === t && (t = {});
        const s = this._applyDispatch(e, t);
        return (
          this.currentMask &&
            s.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))),
          s
        );
      }
      _applyDispatch(e, t, s) {
        void 0 === e && (e = ''), void 0 === t && (t = {}), void 0 === s && (s = '');
        const i = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
          r = this.rawInputValue,
          n = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : r,
          a = r.slice(n.length),
          o = this.currentMask,
          l = new vt(),
          u = null == o ? void 0 : o.state;
        if (((this.currentMask = this.doDispatch(e, { ...t }, s)), this.currentMask))
          if (this.currentMask !== o) {
            if ((this.currentMask.reset(), n)) {
              const e = this.currentMask.append(n, { raw: !0 });
              l.tailShift = e.inserted.length - i.length;
            }
            a && (l.tailShift += this.currentMask.append(a, { raw: !0, tail: !0 }).tailShift);
          } else u && (this.currentMask.state = u);
        return l;
      }
      _appendPlaceholder() {
        const e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e;
      }
      _appendEager() {
        const e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendEager()), e;
      }
      appendTail(e) {
        const t = new vt();
        return (
          e && t.aggregate(this._applyDispatch('', {}, e)),
          t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e))
        );
      }
      currentMaskFlags(e) {
        var t, s;
        return {
          ...e,
          _beforeTailState:
            ((null == (t = e._beforeTailState) ? void 0 : t.currentMaskRef) === this.currentMask &&
              (null == (s = e._beforeTailState) ? void 0 : s.currentMask)) ||
            e._beforeTailState,
        };
      }
      doDispatch(e, t, s) {
        return void 0 === t && (t = {}), void 0 === s && (s = ''), this.dispatch(e, this, t, s);
      }
      doValidate(e) {
        return (
          super.doValidate(e) &&
          (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)))
        );
      }
      doPrepare(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepare(e, t);
        if (this.currentMask) {
          let e;
          ([s, e] = super.doPrepare(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
        }
        return [s, i];
      }
      doPrepareChar(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepareChar(e, t);
        if (this.currentMask) {
          let e;
          ([s, e] = super.doPrepareChar(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
        }
        return [s, i];
      }
      reset() {
        var e;
        null == (e = this.currentMask) || e.reset(), this.compiledMasks.forEach((e) => e.reset());
      }
      get value() {
        return this.exposeMask
          ? this.exposeMask.value
          : this.currentMask
          ? this.currentMask.value
          : '';
      }
      set value(e) {
        this.exposeMask
          ? ((this.exposeMask.value = e),
            (this.currentMask = this.exposeMask),
            this._applyDispatch())
          : (super.value = e);
      }
      get unmaskedValue() {
        return this.exposeMask
          ? this.exposeMask.unmaskedValue
          : this.currentMask
          ? this.currentMask.unmaskedValue
          : '';
      }
      set unmaskedValue(e) {
        this.exposeMask
          ? ((this.exposeMask.unmaskedValue = e),
            (this.currentMask = this.exposeMask),
            this._applyDispatch())
          : (super.unmaskedValue = e);
      }
      get typedValue() {
        return this.exposeMask
          ? this.exposeMask.typedValue
          : this.currentMask
          ? this.currentMask.typedValue
          : '';
      }
      set typedValue(e) {
        if (this.exposeMask)
          return (
            (this.exposeMask.typedValue = e),
            (this.currentMask = this.exposeMask),
            void this._applyDispatch()
          );
        let t = String(e);
        this.currentMask &&
          ((this.currentMask.typedValue = e), (t = this.currentMask.unmaskedValue)),
          (this.unmaskedValue = t);
      }
      get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : '';
      }
      get isComplete() {
        var e;
        return Boolean(null == (e = this.currentMask) ? void 0 : e.isComplete);
      }
      get isFilled() {
        var e;
        return Boolean(null == (e = this.currentMask) ? void 0 : e.isFilled);
      }
      remove(e, t) {
        const s = new vt();
        return (
          this.currentMask &&
            s.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()),
          s
        );
      }
      get state() {
        var e;
        return {
          ...super.state,
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map((e) => e.state),
          currentMaskRef: this.currentMask,
          currentMask: null == (e = this.currentMask) ? void 0 : e.state,
        };
      }
      set state(e) {
        const { compiledMasks: t, currentMaskRef: s, currentMask: i, ...r } = e;
        t && this.compiledMasks.forEach((e, s) => (e.state = t[s])),
          null != s && ((this.currentMask = s), (this.currentMask.state = i)),
          (super.state = r);
      }
      extractInput(e, t, s) {
        return this.currentMask ? this.currentMask.extractInput(e, t, s) : '';
      }
      extractTail(e, t) {
        return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t);
      }
      doCommit() {
        this.currentMask && this.currentMask.doCommit(), super.doCommit();
      }
      nearestInputPos(e, t) {
        return this.currentMask
          ? this.currentMask.nearestInputPos(e, t)
          : super.nearestInputPos(e, t);
      }
      get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
      }
      set overwrite(e) {
        this._overwrite = e;
      }
      get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
      }
      set eager(e) {
        this._eager = e;
      }
      get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
      }
      set skipInvalid(e) {
        this._skipInvalid = e;
      }
      maskEquals(e) {
        return Array.isArray(e)
          ? this.compiledMasks.every((t, s) => {
              if (!e[s]) return;
              const { mask: i, ...r } = e[s];
              return ot(t, r) && t.maskEquals(i);
            })
          : super.maskEquals(e);
      }
      typedValueEquals(e) {
        var t;
        return Boolean(null == (t = this.currentMask) ? void 0 : t.typedValueEquals(e));
      }
    }
    (At.DEFAULTS = void 0),
      (At.DEFAULTS = {
        dispatch: (e, t, s, i) => {
          if (!t.compiledMasks.length) return;
          const r = t.rawInputValue,
            n = t.compiledMasks.map((n, a) => {
              const o = t.currentMask === n,
                l = o ? n.displayValue.length : n.nearestInputPos(n.displayValue.length, it);
              return (
                n.rawInputValue !== r ? (n.reset(), n.append(r, { raw: !0 })) : o || n.remove(l),
                n.append(e, t.currentMaskFlags(s)),
                n.appendTail(i),
                {
                  index: a,
                  weight: n.rawInputValue.length,
                  totalInputPositions: n.totalInputPositions(
                    0,
                    Math.max(l, n.nearestInputPos(n.displayValue.length, it)),
                  ),
                }
              );
            });
          return (
            n.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions),
            t.compiledMasks[n[0].index]
          );
        },
      }),
      (ut.MaskedDynamic = At),
      (ut.MaskedEnum = class extends yt {
        constructor(e) {
          super(e);
        }
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          const { enum: t, ...s } = e;
          if (t) {
            const e = t.map((e) => e.length),
              i = Math.min(...e),
              r = Math.max(...e) - i;
            (s.mask = '*'.repeat(i)), r && (s.mask += '[' + '*'.repeat(r) + ']'), (this.enum = t);
          }
          super._update(s);
        }
        doValidate(e) {
          return this.enum.some((e) => 0 === e.indexOf(this.unmaskedValue)) && super.doValidate(e);
        }
      }),
      (ut.MaskedFunction = class extends St {
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          super._update({ ...e, validate: e.mask });
        }
      });
    class Tt extends St {
      constructor(e) {
        super({ ...Tt.DEFAULTS, ...e });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        super._update(e), this._updateRegExps();
      }
      _updateRegExps() {
        const e = '^' + (this.allowNegative ? '[+|\\-]?' : ''),
          t = (this.scale ? '(' + at(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        (this._numberRegExp = new RegExp(e + '\\d*' + t)),
          (this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(at).join('') + ']', 'g')),
          (this._thousandsSeparatorRegExp = new RegExp(at(this.thousandsSeparator), 'g'));
      }
      _removeThousandsSeparators(e) {
        return e.replace(this._thousandsSeparatorRegExp, '');
      }
      _insertThousandsSeparators(e) {
        const t = e.split(this.radix);
        return (
          (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)),
          t.join(this.radix)
        );
      }
      doPrepareChar(e, t) {
        void 0 === t && (t = {});
        const [s, i] = super.doPrepareChar(
          this._removeThousandsSeparators(
            this.scale && this.mapToRadix.length && ((t.input && t.raw) || (!t.input && !t.raw))
              ? e.replace(this._mapToRadixRegExp, this.radix)
              : e,
          ),
          t,
        );
        return (
          e && !s && (i.skip = !0),
          !s || this.allowPositive || this.value || '-' === s || i.aggregate(this._appendChar('-')),
          [s, i]
        );
      }
      _separatorsCount(e, t) {
        void 0 === t && (t = !1);
        let s = 0;
        for (let i = 0; i < e; ++i)
          this._value.indexOf(this.thousandsSeparator, i) === i &&
            (++s, t && (e += this.thousandsSeparator.length));
        return s;
      }
      _separatorsCountFromSlice(e) {
        return (
          void 0 === e && (e = this._value),
          this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
        );
      }
      extractInput(e, t, s) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          ([e, t] = this._adjustRangeWithSeparators(e, t)),
          this._removeThousandsSeparators(super.extractInput(e, t, s))
        );
      }
      _appendCharRaw(e, t) {
        if ((void 0 === t && (t = {}), !this.thousandsSeparator)) return super._appendCharRaw(e, t);
        const s = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          i = this._separatorsCountFromSlice(s);
        this._value = this._removeThousandsSeparators(this.value);
        const r = super._appendCharRaw(e, t);
        this._value = this._insertThousandsSeparators(this._value);
        const n = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          a = this._separatorsCountFromSlice(n);
        return (
          (r.tailShift += (a - i) * this.thousandsSeparator.length),
          (r.skip = !r.rawInserted && e === this.thousandsSeparator),
          r
        );
      }
      _findSeparatorAround(e) {
        if (this.thousandsSeparator) {
          const t = e - this.thousandsSeparator.length + 1,
            s = this.value.indexOf(this.thousandsSeparator, t);
          if (s <= e) return s;
        }
        return -1;
      }
      _adjustRangeWithSeparators(e, t) {
        const s = this._findSeparatorAround(e);
        s >= 0 && (e = s);
        const i = this._findSeparatorAround(t);
        return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t];
      }
      remove(e, t) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.displayValue.length),
          ([e, t] = this._adjustRangeWithSeparators(e, t));
        const s = this.value.slice(0, e),
          i = this.value.slice(t),
          r = this._separatorsCount(s.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + i));
        const n = this._separatorsCountFromSlice(s);
        return new vt({ tailShift: (n - r) * this.thousandsSeparator.length });
      }
      nearestInputPos(e, t) {
        if (!this.thousandsSeparator) return e;
        switch (t) {
          case tt:
          case st:
          case it: {
            const s = this._findSeparatorAround(e - 1);
            if (s >= 0) {
              const i = s + this.thousandsSeparator.length;
              if (e < i || this.value.length <= i || t === it) return s;
            }
            break;
          }
          case rt:
          case nt: {
            const t = this._findSeparatorAround(e);
            if (t >= 0) return t + this.thousandsSeparator.length;
          }
        }
        return e;
      }
      doValidate(e) {
        let t = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (t) {
          const e = this.number;
          t =
            t &&
            !isNaN(e) &&
            (null == this.min || this.min >= 0 || this.min <= this.number) &&
            (null == this.max || this.max <= 0 || this.number <= this.max);
        }
        return t && super.doValidate(e);
      }
      doCommit() {
        if (this.value) {
          const e = this.number;
          let t = e;
          null != this.min && (t = Math.max(t, this.min)),
            null != this.max && (t = Math.min(t, this.max)),
            t !== e && (this.unmaskedValue = this.format(t, this));
          let s = this.value;
          this.normalizeZeros && (s = this._normalizeZeros(s)),
            this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)),
            (this._value = s);
        }
        super.doCommit();
      }
      _normalizeZeros(e) {
        const t = this._removeThousandsSeparators(e).split(this.radix);
        return (
          (t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, s, i) => t + i)),
          e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + '0'),
          t.length > 1 && ((t[1] = t[1].replace(/0*$/, '')), t[1].length || (t.length = 1)),
          this._insertThousandsSeparators(t.join(this.radix))
        );
      }
      _padFractionalZeros(e) {
        if (!e) return e;
        const t = e.split(this.radix);
        return (
          t.length < 2 && t.push(''), (t[1] = t[1].padEnd(this.scale, '0')), t.join(this.radix)
        );
      }
      doSkipInvalid(e, t, s) {
        void 0 === t && (t = {});
        const i =
          0 === this.scale &&
          e !== this.thousandsSeparator &&
          (e === this.radix || e === Tt.UNMASKED_RADIX || this.mapToRadix.includes(e));
        return super.doSkipInvalid(e, t, s) && !i;
      }
      get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(
          this.radix,
          Tt.UNMASKED_RADIX,
        );
      }
      set unmaskedValue(e) {
        super.unmaskedValue = e;
      }
      get typedValue() {
        return this.parse(this.unmaskedValue, this);
      }
      set typedValue(e) {
        this.rawInputValue = this.format(e, this).replace(Tt.UNMASKED_RADIX, this.radix);
      }
      get number() {
        return this.typedValue;
      }
      set number(e) {
        this.typedValue = e;
      }
      get allowNegative() {
        return (null != this.min && this.min < 0) || (null != this.max && this.max < 0);
      }
      get allowPositive() {
        return (null != this.min && this.min > 0) || (null != this.max && this.max > 0);
      }
      typedValueEquals(e) {
        return (
          (super.typedValueEquals(e) ||
            (Tt.EMPTY_VALUES.includes(e) && Tt.EMPTY_VALUES.includes(this.typedValue))) &&
          !(0 === e && '' === this.value)
        );
      }
    }
    (Tt.UNMASKED_RADIX = '.'),
      (Tt.EMPTY_VALUES = [...St.EMPTY_VALUES, 0]),
      (Tt.DEFAULTS = {
        mask: Number,
        radix: ',',
        thousandsSeparator: '',
        mapToRadix: [Tt.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: (e) => e.toLocaleString('en-US', { useGrouping: !1, maximumFractionDigits: 20 }),
      }),
      (ut.MaskedNumber = Tt);
    const Mt = { MASKED: 'value', UNMASKED: 'unmaskedValue', TYPED: 'typedValue' };
    function Lt(e, t, s) {
      void 0 === t && (t = Mt.MASKED), void 0 === s && (s = Mt.MASKED);
      const i = pt(e);
      return (e) => i.runIsolated((i) => ((i[t] = e), i[s]));
    }
    (ut.PIPE_TYPE = Mt),
      (ut.createPipe = Lt),
      (ut.pipe = function (e, t, s, i) {
        return Lt(t, s, i)(e);
      });
    try {
      globalThis.IMask = ut;
    } catch {}
    document.addEventListener('DOMContentLoaded', () => {
      const e = document.querySelector('.form-order'),
        t = document.querySelector('.form__input-name'),
        s =
          (document.querySelector('.form__input-address'),
          document.querySelector('.form__input-phone')),
        i = document.querySelector('.success'),
        r = document.querySelector('.order');
      function n(e) {
        const t = s.getAttribute('maxlength');
        return e.length === Number(t);
      }
      function a(e) {
        return e.length >= 3 && e.length <= 14;
      }
      s && ut(s, { mask: '+{7}(000)000-00-00' }),
        e &&
          e.addEventListener('submit', (o) => {
            console.log(o), o.preventDefault();
            const l = a(t.value),
              u = n(s.value);
            if (l && u) {
              const t = new FormData(e);
              fetch('/order', { method: 'POST', body: t })
                .then((e) => e.text())
                .then((e) => {
                  i.classList.add('visible'), r.classList.add('invisible');
                })
                .catch((e) => console.log(e));
            } else t.classList.toggle('invalid', !l), s.classList.toggle('invalid', !u);
          }),
        t &&
          t.addEventListener('input', function () {
            const e = a(this.value);
            this.classList.toggle('invalid', !e);
          }),
        s &&
          s.addEventListener('input', function () {
            const e = n(this.value);
            this.classList.toggle('invalid', !e);
          });
    });
    var Pt = {
      load: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : '//api-maps.yandex.ru/2.1/?lang=en_RU';
        return (
          this.promise ||
            (this.promise = new Promise(function (t, s) {
              var i = document.createElement('script');
              (i.onload = t),
                (i.onerror = s),
                (i.type = 'text/javascript'),
                (i.src = e),
                document.body.appendChild(i);
            }).then(function () {
              var t,
                s =
                  null === (t = e.match(/[\\?&]ns=([^&#]*)/))
                    ? ''
                    : decodeURIComponent(t[1].replace(/\+/g, ' '));
              return (
                s && 'ymaps' !== s && (0, eval)('var ymaps = '.concat(s, ';')),
                new Promise(function (e) {
                  return ymaps.ready(e);
                })
              );
            })),
          this.promise
        );
      },
    };
    function Ft(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let n = h(e.el, `.${i[r]}`)[0];
              n || ((n = f('div', i[r])), (n.className = i[r]), e.el.append(n)),
                (s[r] = n),
                (t[r] = n);
            }
          }),
        s
      );
    }
    function Dt(e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
          navigationDisabledClass: 'swiper-navigation-disabled',
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function a(e) {
        let s;
        return e && 'string' == typeof e && t.isElement && ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ('string' == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                'string' == typeof e &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function o(e, s) {
        const i = t.params.navigation;
        (e = n(e)).forEach((e) => {
          e &&
            (e.classList[s ? 'add' : 'remove'](...i.disabledClass.split(' ')),
            'BUTTON' === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? 'add' : 'remove'](i.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return o(s, !1), void o(e, !1);
        o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind);
      }
      function u(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), r('navigationPrev'));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r('navigationNext'));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = Ft(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev',
          })),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = a(e.nextEl),
          i = a(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }), (s = n(s)), (i = n(i));
        const r = (s, i) => {
          s && s.addEventListener('click', 'next' === i ? d : u),
            !t.enabled && s && s.classList.add(...e.lockClass.split(' '));
        };
        s.forEach((e) => r(e, 'next')), i.forEach((e) => r(e, 'prev'));
      }
      function p() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = n(e)), (s = n(s));
        const i = (e, s) => {
          e.removeEventListener('click', 'next' === s ? d : u),
            e.classList.remove(...t.params.navigation.disabledClass.split(' '));
        };
        e.forEach((e) => i(e, 'next')), s.forEach((e) => i(e, 'prev'));
      }
      i('init', () => {
        !1 === t.params.navigation.enabled ? h() : (c(), l());
      }),
        i('toEdge fromEdge lock unlock', () => {
          l();
        }),
        i('destroy', () => {
          p();
        }),
        i('enable disable', () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = n(e)),
            (s = n(s)),
            [...e, ...s]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList[t.enabled ? 'remove' : 'add'](t.params.navigation.lockClass),
              );
        }),
        i('click', (e, s) => {
          let { nextEl: i, prevEl: a } = t.navigation;
          (i = n(i)), (a = n(a));
          const o = s.target;
          if (t.params.navigation.hideOnClick && !a.includes(o) && !i.includes(o)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
              r(!0 === e ? 'navigationShow' : 'navigationHide'),
              [...i, ...a]
                .filter((e) => !!e)
                .forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
          }
        });
      const h = () => {
        t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')),
            c(),
            l();
        },
        disable: h,
        update: l,
        init: c,
        destroy: p,
      });
    }
    function Vt(e) {
      return (
        void 0 === e && (e = ''),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, '\\$1')
          .replace(/ /g, '.')}`
      );
    }
    function Bt(e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const n = 'swiper-pagination';
      let a;
      s({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: 'bullets',
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let o = 0;
      const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function u() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
          (e.classList.add(`${i}-${s}`),
          (e = e[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
            e.classList.add(`${i}-${s}-${s}`));
      }
      function c(e) {
        const s = e.target.closest(Vt(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = g(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e = t.realIndex,
            s = t.getSlideIndexByData(i),
            r = t.getSlideIndexByData(t.realIndex);
          if (s > t.slides.length - t.loopedSlides) {
            const i = t.activeIndex;
            t.loopFix({ direction: s > r ? 'next' : 'prev', activeSlideIndex: s, slideTo: !1 }),
              i === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
          }
          t.slideToLoop(i);
        } else t.slideTo(i);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (u()) return;
        let i,
          n,
          c = t.pagination.el;
        c = l(c);
        const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          h = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((n = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((i = t.snapIndex), (n = t.previousSnapIndex))
            : ((n = t.previousIndex || 0), (i = t.activeIndex || 0)),
          'bullets' === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
        ) {
          const r = t.pagination.bullets;
          let l, u, p;
          if (
            (s.dynamicBullets &&
              ((a = b(r[0], t.isHorizontal() ? 'width' : 'height', !0)),
              c.forEach((e) => {
                e.style[t.isHorizontal() ? 'width' : 'height'] =
                  a * (s.dynamicMainBullets + 4) + 'px';
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== n &&
                ((o += i - (n || 0)),
                o > s.dynamicMainBullets - 1 ? (o = s.dynamicMainBullets - 1) : o < 0 && (o = 0)),
              (l = Math.max(i - o, 0)),
              (u = l + (Math.min(r.length, s.dynamicMainBullets) - 1)),
              (p = (u + l) / 2)),
            r.forEach((e) => {
              const t = [
                ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
                  (e) => `${s.bulletActiveClass}${e}`,
                ),
              ]
                .map((e) => ('string' == typeof e && e.includes(' ') ? e.split(' ') : e))
                .flat();
              e.classList.remove(...t);
            }),
            c.length > 1)
          )
            r.forEach((e) => {
              const r = g(e);
              r === i
                ? e.classList.add(...s.bulletActiveClass.split(' '))
                : t.isElement && e.setAttribute('part', 'bullet'),
                s.dynamicBullets &&
                  (r >= l && r <= u && e.classList.add(...`${s.bulletActiveClass}-main`.split(' ')),
                  r === l && d(e, 'prev'),
                  r === u && d(e, 'next'));
            });
          else {
            const e = r[i];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(' ')),
              t.isElement &&
                r.forEach((e, t) => {
                  e.setAttribute('part', t === i ? 'bullet-active' : 'bullet');
                }),
              s.dynamicBullets)
            ) {
              const e = r[l],
                t = r[u];
              for (let e = l; e <= u; e += 1)
                r[e] && r[e].classList.add(...`${s.bulletActiveClass}-main`.split(' '));
              d(e, 'prev'), d(t, 'next');
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(r.length, s.dynamicMainBullets + 4),
              n = (a * i - a) / 2 - p * a,
              o = e ? 'right' : 'left';
            r.forEach((e) => {
              e.style[t.isHorizontal() ? o : 'top'] = `${n}px`;
            });
          }
        }
        c.forEach((e, n) => {
          if (
            ('fraction' === s.type &&
              (e.querySelectorAll(Vt(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
              e.querySelectorAll(Vt(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(h);
              })),
            'progressbar' === s.type)
          ) {
            let r;
            r = s.progressbarOpposite
              ? t.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : t.isHorizontal()
              ? 'horizontal'
              : 'vertical';
            const n = (i + 1) / h;
            let a = 1,
              o = 1;
            'horizontal' === r ? (a = n) : (o = n),
              e.querySelectorAll(Vt(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          'custom' === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, i + 1, h)), 0 === n && r('paginationRender', e))
            : (0 === n && r('paginationRender', e), r('paginationUpdate', e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? 'add' : 'remove'](s.lockClass);
        });
      }
      function h() {
        const e = t.params.pagination;
        if (u()) return;
        const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
        let i = t.pagination.el;
        i = l(i);
        let n = '';
        if ('bullets' === e.type) {
          let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (n += e.renderBullet.call(t, s, e.bulletClass))
              : (n += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${
                  e.bulletClass
                }"></${e.bulletElement}>`);
        }
        'fraction' === e.type &&
          (n = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          'progressbar' === e.type &&
            (n = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((s) => {
            'custom' !== e.type && (s.innerHTML = n || ''),
              'bullets' === e.type &&
                t.pagination.bullets.push(...s.querySelectorAll(Vt(e.bulletClass)));
          }),
          'custom' !== e.type && r('paginationRender', i[0]);
      }
      function f() {
        t.params.pagination = Ft(t, t.originalParams.pagination, t.params.pagination, {
          el: 'swiper-pagination',
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        'string' == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
          s || 'string' != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              'string' == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 && (s = s.filter((e) => v(e, '.swiper')[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = l(s)),
            s.forEach((s) => {
              'bullets' === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || '').split(' ')),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                'bullets' === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (o = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                'progressbar' === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener('click', c),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function m() {
        const e = t.params.pagination;
        if (u()) return;
        let s = t.pagination.el;
        s &&
          ((s = l(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || '').split(' ')),
                s.removeEventListener('click', c));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(' ')),
            );
      }
      i('changeDirection', () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = l(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
          });
      }),
        i('init', () => {
          !1 === t.params.pagination.enabled ? S() : (f(), h(), p());
        }),
        i('activeIndexChange', () => {
          void 0 === t.snapIndex && p();
        }),
        i('snapIndexChange', () => {
          p();
        }),
        i('snapGridLengthChange', () => {
          h(), p();
        }),
        i('destroy', () => {
          m();
        }),
        i('enable disable', () => {
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass),
            ));
        }),
        i('lock unlock', () => {
          p();
        }),
        i('click', (e, s) => {
          const i = s.target,
            n = l(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            n &&
            n.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = n[0].classList.contains(t.params.pagination.hiddenClass);
            r(!0 === e ? 'paginationShow' : 'paginationHide'),
              n.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass));
          }
        });
      const S = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = l(e)),
          e.forEach((e) => e.classList.add(t.params.pagination.paginationDisabledClass))),
          m();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) => e.classList.remove(t.params.pagination.paginationDisabledClass))),
            f(),
            h(),
            p();
        },
        disable: S,
        render: h,
        update: p,
        init: f,
        destroy: m,
      });
    }
    Pt.load('https://api-maps.yandex.ru/2.1/?lang=ru')
      .then((e) => {
        const t = new e.Map('map', { center: [55.751574, 37.573856], zoom: 13 }),
          s = e.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
          ),
          i = new e.Placemark([55.751574, 37.573856], {
            hintContent: 'Метка',
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../../assets/images/common/placemark.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: s,
          });
        t.geoObjects.add(i);
      })
      .catch((e) => console.log('Failed to load Yandex Maps', e)),
      document.querySelector('.blog__top');
    const It = document.querySelector('.category__list-filter'),
      Ot = document.querySelector('.filter'),
      zt = document.querySelector('.filter__price-range'),
      Nt = document.querySelectorAll('.filter__price-inp'),
      Rt = document.querySelector('.blog__count-current'),
      qt = document.querySelector('.blog__count-last');
    if (
      (new U('.blog__list', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: { el: '.blog__list-pagination' },
        modules: [Dt, Bt],
        on: {
          init: function (e) {
            console.log(e.slides),
              (Rt.textContent = e.activeIndex + 3),
              (qt.textContent = e.slides.length);
          },
          slideChange: function (e) {
            Rt.textContent = e.activeIndex + 3;
          },
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: { el: '.blog__list-pagination' },
            modules: [Dt, Bt],
          },
        },
      }),
      It &&
        It.addEventListener('click', () => {
          Ot.classList.toggle('visible');
        }),
      zt &&
        (Re(zt, {
          start: [67e3, 521e3],
          connect: !0,
          tooltips: !0,
          range: { min: [0], max: [521e3] },
          format: {
            to: function (e) {
              return parseInt(e).toLocaleString('ru-RU') + '';
            },
            from: function (e) {
              return e.replace('', '');
            },
          },
        }),
        zt.noUiSlider.on('update', function (e, t) {
          Nt[t].value = e[t];
        }),
        Nt.forEach(function (e, t) {
          e.addEventListener('input', function () {
            const e = this.value,
              t = this.selectionStart,
              s = e.length,
              i = e
                .replace(/[^0-9]/g, '')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                .toLocaleString('ru-RU'),
              r = i.length - s;
            (this.value = i),
              r < 0 && t <= i.indexOf(' ')
                ? this.setSelectionRange(i.indexOf(' ') + 1, i.indexOf(' ') + 1)
                : this.setSelectionRange(t + r, t + r);
          }),
            e.addEventListener('change', function () {
              console.log(this.value.replace(/\s/g, '')),
                zt.noUiSlider.setHandle(t, this.value.replace(/\s/g, ''));
            });
        })),
      window.innerWidth < 769)
    ) {
      new U('.banner_container', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: !0,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderFraction: function (e, t) {
            return (
              '<span class="' +
              e +
              '"></span> <span class="pagination__space"></span> <span class="' +
              t +
              '"></span>'
            );
          },
          formatFractionCurrent: function (e) {
            return '0' + e;
          },
          formatFractionTotal: function (e) {
            return '0' + e;
          },
        },
        modules: [Bt],
        on: {
          init: function (e) {
            const t = e.activeIndex;
            e.slides[t].classList.add('hover');
          },
          slideChange: function (e) {
            const t = document.querySelector('.banner'),
              s = e.activeIndex;
            e.slides.forEach((i) => {
              if (i === e.slides[s]) {
                e.slides[s].classList.add('hover');
                const i = window.getComputedStyle(e.slides[s]).getPropertyValue('background-color');
                t.style.backgroundColor = i;
              } else i.classList.remove('hover');
            });
          },
        },
      });
      const e = document.getElementById('curve');
      e && e.setAttribute('d', 'M 49.175 242.03 Q -10 89.175 40 0');
    }
    new U('.categories__list', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      enabled: !0,
      breakpoints: { 769: { enabled: !1 } },
    });
  })();
})();
