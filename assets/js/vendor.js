var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var w, v, T, b, y, e, g, t;
  function _(t, e, i, n) {
    i === n && (i = n - (n - e) / 1e6),
      t === e && (e = t + (i - t) / 1e6),
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = n),
      (this.da = n - t),
      (this.ca = i - t),
      (this.ba = e - t);
  }
  function S(t, e, i, n) {
    var o = { a: t },
      r = {},
      s = {},
      a = { c: n },
      l = (t + e) / 2,
      c = (i + n) / 2,
      u = ((i = ((u = (e + i) / 2) + c) / 2) - (e = (l + u) / 2)) / 8;
    return (
      (o.b = l + (t - l) / 4),
      (r.b = e + u),
      (o.c = r.a = (o.b + r.b) / 2),
      (r.c = s.a = (e + i) / 2),
      (s.b = i - u),
      (a.b = c + (n - c) / 4),
      (s.c = a.a = (s.b + a.b) / 2),
      [o, r, s, a]
    );
  }
  function d(t, e, i, n, o, r) {
    var s,
      a,
      l,
      c,
      u,
      h,
      d,
      p,
      f = {},
      m = [],
      g = r || t[0];
    for (a in ((o =
      "string" == typeof o
        ? "," + o + ","
        : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
    null == e && (e = 1),
    t[0]))
      m.push(a);
    if (1 < t.length) {
      for (p = t[t.length - 1], d = !0, s = m.length; -1 < --s; )
        if (((a = m[s]), 0.05 < Math.abs(g[a] - p[a]))) {
          d = !1;
          break;
        }
      d &&
        ((t = t.concat()),
        r && t.unshift(r),
        t.push(t[1]),
        (r = t[t.length - 3]));
    }
    for (v.length = T.length = b.length = 0, s = m.length; -1 < --s; )
      (a = m[s]),
        (y[a] = -1 !== o.indexOf("," + a + ",")),
        (f[a] = (function (t, e, i, n) {
          var o,
            r,
            s,
            a,
            l,
            c,
            u = [];
          if (n)
            for (r = (t = [n].concat(t)).length; -1 < --r; )
              "string" == typeof (c = t[r][e]) &&
                "=" === c.charAt(1) &&
                (t[r][e] = n[e] + Number(c.charAt(0) + c.substr(2)));
          if ((o = t.length - 2) < 0)
            return (u[0] = new _(t[0][e], 0, 0, t[0][e])), u;
          for (r = 0; r < o; r++)
            (s = t[r][e]),
              (a = t[r + 1][e]),
              (u[r] = new _(s, 0, 0, a)),
              i &&
                ((l = t[r + 2][e]),
                (v[r] = (v[r] || 0) + (a - s) * (a - s)),
                (T[r] = (T[r] || 0) + (l - a) * (l - a)));
          return (u[r] = new _(t[r][e], 0, 0, t[r + 1][e])), u;
        })(t, a, y[a], r));
    for (s = v.length; -1 < --s; )
      (v[s] = Math.sqrt(v[s])), (T[s] = Math.sqrt(T[s]));
    if (!n) {
      for (s = m.length; -1 < --s; )
        if (y[a])
          for (h = (l = f[m[s]]).length - 1, c = 0; c < h; c++)
            (u = l[c + 1].da / T[c] + l[c].da / v[c] || 0),
              (b[c] = (b[c] || 0) + u * u);
      for (s = b.length; -1 < --s; ) b[s] = Math.sqrt(b[s]);
    }
    for (s = m.length, c = i ? 4 : 1; -1 < --s; )
      (function (t, e, i, n, o) {
        for (
          var r,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            f = t.length - 1,
            m = 0,
            g = t[0].a,
            y = 0;
          y < f;
          y++
        )
          (r = (a = t[m]).a),
            (s = a.d),
            (c = t[m + 1].d),
            (c = o
              ? ((h = v[y]),
                (p = (((d = T[y]) + h) * e * 0.25) / ((!n && b[y]) || 0.5)),
                s -
                  ((l = s - (s - r) * (n ? 0.5 * e : 0 !== h ? p / h : 0)) +
                    ((((p = s + (c - s) * (n ? 0.5 * e : 0 !== d ? p / d : 0)) -
                      l) *
                      ((3 * h) / (h + d) + 0.5)) /
                      4 || 0)))
              : s -
                ((l = s - (s - r) * e * 0.5) + (p = s + (c - s) * e * 0.5)) /
                  2),
            (p += c),
            (a.c = c = l += c),
            (a.b = 0 !== y ? g : (g = a.a + 0.6 * (a.c - a.a))),
            (a.da = s - r),
            (a.ca = c - r),
            (a.ba = g - r),
            i
              ? ((u = S(r, g, c, s)),
                t.splice(m, 1, u[0], u[1], u[2], u[3]),
                (m += 4))
              : m++,
            (g = p);
        ((a = t[m]).b = g),
          (a.c = g + 0.4 * (a.d - g)),
          (a.da = a.d - a.a),
          (a.ca = a.c - a.a),
          (a.ba = g - a.a),
          i &&
            ((u = S(a.a, g, a.c, a.d)), t.splice(m, 1, u[0], u[1], u[2], u[3]));
      })((l = f[(a = m[s])]), e, i, n, y[a]),
        d && (l.splice(0, c), l.splice(l.length - c, c));
    return f;
  }
  function p(t, e) {
    var i,
      n,
      o,
      r,
      s = [],
      a = [],
      l = 0,
      c = 0,
      u = (e = e >> 0 || 6) - 1,
      h = [],
      d = [];
    for (i in t)
      !(function (t, e, i) {
        for (
          var n, o, r, s, a, l, c, u, h, d, p = 1 / i, f = t.length;
          -1 < --f;

        )
          for (
            r = (h = t[f]).a,
              s = h.d - r,
              a = h.c - r,
              l = h.b - r,
              o = 0,
              c = 1;
            c <= i;
            c++
          )
            (n =
              o -
              (o =
                ((d = p * c) * d * s + 3 * (u = 1 - d) * (d * a + u * l)) * d)),
              (e[(d = f * i + c - 1)] = (e[d] || 0) + n * n);
      })(t[i], s, e);
    for (o = s.length, n = 0; n < o; n++)
      (l += Math.sqrt(s[n])),
        (d[(r = n % e)] = l),
        r == u &&
          ((c += l),
          (h[(r = (n / e) >> 0)] = d),
          (a[r] = c),
          (l = 0),
          (d = []));
    return { length: c, lengths: a, segments: h };
  }
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (n, u, g) {
      function y(t) {
        for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]));
        return e;
      }
      function v(t, e, i) {
        var n,
          o,
          r = t.cycle;
        for (n in r)
          (o = r[n]),
            (t[n] = "function" == typeof o ? o(i, e[i]) : o[i % o.length]);
        delete t.cycle;
      }
      var T = function (t, e, i) {
          g.call(this, t, e, i),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = T.prototype.render);
        },
        b = 1e-10,
        _ = g._internals,
        S = _.isSelector,
        w = _.isArray,
        t = (T.prototype = g.to({}, 0.1, {})),
        P = [];
      (T.version = "2.0.1"),
        (t.constructor = T),
        (t.kill()._gc = !1),
        (T.killTweensOf = T.killDelayedCallsTo = g.killTweensOf),
        (T.getTweensOf = g.getTweensOf),
        (T.lagSmoothing = g.lagSmoothing),
        (T.ticker = g.ticker),
        (T.render = g.render),
        (t.invalidate = function () {
          return (
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            g.prototype.invalidate.call(this)
          );
        }),
        (t.updateTo = function (t, e) {
          var i,
            n = this.ratio,
            o = this.vars.immediateRender || t.immediateRender;
          for (i in (e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay)),
          t))
            this.vars[i] = t[i];
          if (this._initted || o)
            if (e) (this._initted = !1), o && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                g._onPluginEvent("_onDisable", this),
              0.998 < this._time / this._duration)
            ) {
              e = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(e, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), 0 < this._time || o)
            )
              for (var r, s = 1 / (1 - n), a = this._firstPT; a; )
                (r = a.s + a.c), (a.c *= s), (a.s = r - a.c), (a = a._next);
          return this;
        }),
        (t.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var n,
            o,
            r,
            s,
            a,
            l,
            c,
            u = this._dirty ? this.totalDuration() : this._totalDuration,
            h = this._time,
            d = this._totalTime,
            p = this._cycle,
            f = this._duration,
            m = this._rawPrevTime;
          if (
            (u - 1e-7 <= t && 0 <= t
              ? ((this._totalTime = u),
                (this._cycle = this._repeat),
                this._yoyo && 0 != (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = f),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((n = !0),
                  (o = "onComplete"),
                  (i = i || this._timeline.autoRemoveChildren)),
                0 !== f ||
                  (!this._initted && this.vars.lazy && !i) ||
                  (this._startTime === this._timeline._duration && (t = 0),
                  (m < 0 ||
                    (t <= 0 && -1e-7 <= t) ||
                    (m === b && "isPause" !== this.data)) &&
                    m !== t &&
                    ((i = !0), b < m && (o = "onReverseComplete")),
                  (this._rawPrevTime = l = !e || t || m === t ? t : b)))
              : t < 1e-7
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== d || (0 === f && 0 < m)) &&
                  ((o = "onReverseComplete"), (n = this._reversed)),
                t < 0 &&
                  ((this._active = !1),
                  0 !== f ||
                    (!this._initted && this.vars.lazy && !i) ||
                    (0 <= m && (i = !0),
                    (this._rawPrevTime = l = !e || t || m === t ? t : b))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((a = f + this._repeatDelay),
                  (this._cycle = (this._totalTime / a) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / a &&
                    d <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * a),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    ((this._time = f - this._time),
                    (c = this._yoyoEase || this.vars.yoyoEase) &&
                      (this._yoyoEase ||
                        (!0 !== c || this._initted
                          ? (this._yoyoEase = c =
                              !0 === c
                                ? this._ease
                                : c instanceof Ease
                                ? c
                                : Ease.map[c])
                          : ((c = this.vars.ease),
                            (this._yoyoEase = c =
                              c
                                ? c instanceof Ease
                                  ? c
                                  : "function" == typeof c
                                  ? new Ease(c, this.vars.easeParams)
                                  : Ease.map[c] || g.defaultEase
                                : g.defaultEase))),
                      (this.ratio = c
                        ? 1 - c.getRatio((f - this._time) / f)
                        : 0))),
                  this._time > f
                    ? (this._time = f)
                    : this._time < 0 && (this._time = 0)),
                this._easeType && !c
                  ? ((s = this._time / f),
                    (1 === (u = this._easeType) || (3 === u && 0.5 <= s)) &&
                      (s = 1 - s),
                    3 === u && (s *= 2),
                    1 === (a = this._easePower)
                      ? (s *= s)
                      : 2 === a
                      ? (s *= s * s)
                      : 3 === a
                      ? (s *= s * s * s)
                      : 4 === a && (s *= s * s * s * s),
                    1 === u
                      ? (this.ratio = 1 - s)
                      : 2 === u
                      ? (this.ratio = s)
                      : this._time / f < 0.5
                      ? (this.ratio = s / 2)
                      : (this.ratio = 1 - s / 2))
                  : c || (this.ratio = this._ease.getRatio(this._time / f))),
            h !== this._time || i || p !== this._cycle)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = h),
                  (this._totalTime = d),
                  (this._rawPrevTime = m),
                  (this._cycle = p),
                  _.lazyTweens.push(this),
                  void (this._lazy = [t, e])
                );
              !this._time || n || c
                ? n &&
                  this._ease._calcEnd &&
                  !c &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                : (this.ratio = this._ease.getRatio(this._time / f));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== h &&
                    0 <= t &&
                    (this._active = !0)),
                0 === d &&
                  (2 === this._initted && 0 < t && this._init(),
                  this._startAt &&
                    (0 <= t
                      ? this._startAt.render(t, !0, i)
                      : (o = o || "_dummyGS")),
                  !this.vars.onStart ||
                    (0 === this._totalTime && 0 !== f) ||
                    e ||
                    this._callback("onStart")),
                r = this._firstPT;
              r;

            )
              r.f
                ? r.t[r.p](r.c * this.ratio + r.s)
                : (r.t[r.p] = r.c * this.ratio + r.s),
                (r = r._next);
            this._onUpdate &&
              (t < 0 &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(t, !0, i),
              e || (this._totalTime === d && !o) || this._callback("onUpdate")),
              this._cycle !== p &&
                (e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat"))),
              !o ||
                (this._gc && !i) ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                n &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[o] && this._callback(o),
                0 === f &&
                  this._rawPrevTime === b &&
                  l !== b &&
                  (this._rawPrevTime = 0));
          } else
            d !== this._totalTime &&
              this._onUpdate &&
              (e || this._callback("onUpdate"));
        }),
        (T.to = function (t, e, i) {
          return new T(t, e, i);
        }),
        (T.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new T(t, e, i)
          );
        }),
        (T.fromTo = function (t, e, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new T(t, e, n)
          );
        }),
        (T.staggerTo = T.allTo =
          function (t, e, i, n, o, r, s) {
            n = n || 0;
            function a() {
              i.onComplete &&
                i.onComplete.apply(i.onCompleteScope || this, arguments),
                o.apply(s || i.callbackScope || this, r || P);
            }
            var l,
              c,
              u,
              h,
              d = 0,
              p = [],
              f = i.cycle,
              m = i.startAt && i.startAt.cycle;
            for (
              w(t) ||
                ("string" == typeof t && (t = g.selector(t) || t),
                S(t) && (t = y(t))),
                t = t || [],
                n < 0 && ((t = y(t)).reverse(), (n *= -1)),
                l = t.length - 1,
                u = 0;
              u <= l;
              u++
            ) {
              for (h in ((c = {}), i)) c[h] = i[h];
              if (
                (f &&
                  (v(c, t, u),
                  null != c.duration && ((e = c.duration), delete c.duration)),
                m)
              ) {
                for (h in ((m = c.startAt = {}), i.startAt))
                  m[h] = i.startAt[h];
                v(c.startAt, t, u);
              }
              (c.delay = d + (c.delay || 0)),
                u === l && o && (c.onComplete = a),
                (p[u] = new T(t[u], e, c)),
                (d += n);
            }
            return p;
          }),
        (T.staggerFrom = T.allFrom =
          function (t, e, i, n, o, r, s) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              T.staggerTo(t, e, i, n, o, r, s)
            );
          }),
        (T.staggerFromTo = T.allFromTo =
          function (t, e, i, n, o, r, s, a) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              T.staggerTo(t, e, n, o, r, s, a)
            );
          }),
        (T.delayedCall = function (t, e, i, n, o) {
          return new T(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: o,
            overwrite: 0,
          });
        }),
        (T.set = function (t, e) {
          return new T(t, 0, e);
        }),
        (T.isTweening = function (t) {
          return 0 < g.getTweensOf(t, !0).length;
        });
      var r = function (t, e) {
          for (var i = [], n = 0, o = t._first; o; )
            o instanceof g
              ? (i[n++] = o)
              : (e && (i[n++] = o), (n = (i = i.concat(r(o, e))).length)),
              (o = o._next);
          return i;
        },
        h = (T.getAllTweens = function (t) {
          return r(n._rootTimeline, t).concat(r(n._rootFramesTimeline, t));
        });
      (T.killAll = function (t, e, i, n) {
        null == e && (e = !0), null == i && (i = !0);
        for (
          var o, r, s = h(0 != n), a = s.length, l = e && i && n, c = 0;
          c < a;
          c++
        )
          (r = s[c]),
            (l ||
              r instanceof u ||
              ((o = r.target === r.vars.onComplete) && i) ||
              (e && !o)) &&
              (t
                ? r.totalTime(r._reversed ? 0 : r.totalDuration())
                : r._enabled(!1, !1));
      }),
        (T.killChildTweensOf = function (t, e) {
          if (null != t) {
            var i,
              n,
              o,
              r,
              s,
              a = _.tweenLookup;
            if (
              ("string" == typeof t && (t = g.selector(t) || t),
              S(t) && (t = y(t)),
              w(t))
            )
              for (r = t.length; -1 < --r; ) T.killChildTweensOf(t[r], e);
            else {
              for (o in ((i = []), a))
                for (n = a[o].target.parentNode; n; )
                  n === t && (i = i.concat(a[o].tweens)), (n = n.parentNode);
              for (s = i.length, r = 0; r < s; r++)
                e && i[r].totalTime(i[r].totalDuration()),
                  i[r]._enabled(!1, !1);
            }
          }
        });
      function o(t, e, i, n) {
        (e = !1 !== e), (i = !1 !== i);
        for (
          var o, r, s = h((n = !1 !== n)), a = e && i && n, l = s.length;
          -1 < --l;

        )
          (r = s[l]),
            (a ||
              r instanceof u ||
              ((o = r.target === r.vars.onComplete) && i) ||
              (e && !o)) &&
              r.paused(t);
      }
      return (
        (T.pauseAll = function (t, e, i) {
          o(!0, t, e, i);
        }),
        (T.resumeAll = function (t, e, i) {
          o(!1, t, e, i);
        }),
        (T.globalTimeScale = function (t) {
          var e = n._rootTimeline,
            i = g.ticker.time;
          return arguments.length
            ? ((e._startTime =
                i - ((i - e._startTime) * e._timeScale) / (t = t || b)),
              (e = n._rootFramesTimeline),
              (i = g.ticker.frame),
              (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
              (e._timeScale = n._rootTimeline._timeScale = t))
            : e._timeScale;
        }),
        (t.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                e
              )
            : this._time / this.duration();
        }),
        (t.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this._totalTime / this.totalDuration();
        }),
        (t.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 != (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (t.duration = function (t) {
          return arguments.length
            ? n.prototype.duration.call(this, t)
            : this._duration;
        }),
        (t.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (t.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (t.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (t.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        T
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (u, h, d) {
        function p(t) {
          h.call(this, t),
            (this._labels = {}),
            (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
            (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
            (this._sortChildren = !0),
            (this._onUpdate = this.vars.onUpdate);
          var e,
            i,
            n = this.vars;
          for (i in n)
            (e = n[i]),
              T(e) &&
                -1 !== e.join("").indexOf("{self}") &&
                (n[i] = this._swapSelfInParams(e));
          T(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
        }
        function f(t) {
          var e,
            i = {};
          for (e in t) i[e] = t[e];
          return i;
        }
        function m(t, e, i) {
          var n,
            o,
            r = t.cycle;
          for (n in r)
            (o = r[n]),
              (t[n] = "function" == typeof o ? o(i, e[i]) : o[i % o.length]);
          delete t.cycle;
        }
        function g(t) {
          for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]));
          return e;
        }
        var y = 1e-10,
          t = d._internals,
          e = (p._internals = {}),
          v = t.isSelector,
          T = t.isArray,
          b = t.lazyTweens,
          _ = t.lazyRender,
          s = _gsScope._gsDefine.globals,
          o = (e.pauseCallback = function () {}),
          e = (p.prototype = new h());
        return (
          (p.version = "2.0.1"),
          (e.constructor = p),
          (e.kill()._gc = e._forcingPlayhead = e._hasPause = !1),
          (e.to = function (t, e, i, n) {
            var o = (i.repeat && s.TweenMax) || d;
            return e ? this.add(new o(t, e, i), n) : this.set(t, i, n);
          }),
          (e.from = function (t, e, i, n) {
            return this.add(((i.repeat && s.TweenMax) || d).from(t, e, i), n);
          }),
          (e.fromTo = function (t, e, i, n, o) {
            var r = (n.repeat && s.TweenMax) || d;
            return e ? this.add(r.fromTo(t, e, i, n), o) : this.set(t, n, o);
          }),
          (e.staggerTo = function (t, e, i, n, o, r, s, a) {
            var l,
              c,
              u = new p({
                onComplete: r,
                onCompleteParams: s,
                callbackScope: a,
                smoothChildTiming: this.smoothChildTiming,
              }),
              h = i.cycle;
            for (
              "string" == typeof t && (t = d.selector(t) || t),
                v((t = t || [])) && (t = g(t)),
                (n = n || 0) < 0 && ((t = g(t)).reverse(), (n *= -1)),
                c = 0;
              c < t.length;
              c++
            )
              (l = f(i)).startAt &&
                ((l.startAt = f(l.startAt)),
                l.startAt.cycle && m(l.startAt, t, c)),
                h &&
                  (m(l, t, c),
                  null != l.duration && ((e = l.duration), delete l.duration)),
                u.to(t[c], e, l, c * n);
            return this.add(u, o);
          }),
          (e.staggerFrom = function (t, e, i, n, o, r, s, a) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, n, o, r, s, a)
            );
          }),
          (e.staggerFromTo = function (t, e, i, n, o, r, s, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, n, o, r, s, a, l)
            );
          }),
          (e.call = function (t, e, i, n) {
            return this.add(d.delayedCall(0, t, e, i), n);
          }),
          (e.set = function (t, e, i) {
            return (
              (i = this._parseTimeOrLabel(i, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = i === this._time && !this._paused),
              this.add(new d(t, 0, e), i)
            );
          }),
          (p.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming &&
              (t.smoothChildTiming = !0);
            var i,
              n,
              o,
              r,
              s = new p(t),
              t = s._timeline;
            for (
              null == e && (e = !0),
                t._remove(s, !0),
                s._startTime = 0,
                s._rawPrevTime = s._time = s._totalTime = t._time,
                o = t._first;
              o;

            )
              (r = o._next),
                (e && o instanceof d && o.target === o.vars.onComplete) ||
                  ((n = o._startTime - o._delay) < 0 && (i = 1), s.add(o, n)),
                (o = r);
            return t.add(s, 0), i && s.totalDuration(), s;
          }),
          (e.add = function (t, e, i, n) {
            var o, r, s, a, l, c;
            if (
              ("number" != typeof e &&
                (e = this._parseTimeOrLabel(e, 0, !0, t)),
              !(t instanceof u))
            ) {
              if (t instanceof Array || (t && t.push && T(t))) {
                for (
                  i = i || "normal", n = n || 0, o = e, r = t.length, s = 0;
                  s < r;
                  s++
                )
                  T((a = t[s])) && (a = new p({ tweens: a })),
                    this.add(a, o),
                    "string" != typeof a &&
                      "function" != typeof a &&
                      ("sequence" === i
                        ? (o = a._startTime + a.totalDuration() / a._timeScale)
                        : "start" === i && (a._startTime -= a.delay())),
                    (o += n);
                return this._uncache(!0);
              }
              if ("string" == typeof t) return this.addLabel(t, e);
              if ("function" != typeof t)
                throw (
                  "Cannot add " +
                  t +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              t = d.delayedCall(0, t);
            }
            if (
              (h.prototype.add.call(this, t, e),
              t._time &&
                t.render(
                  (this.rawTime() - t._startTime) * t._timeScale,
                  !1,
                  !1
                ),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (c = (l = this).rawTime() > t._startTime; l._timeline; )
                c && l._timeline.smoothChildTiming
                  ? l.totalTime(l._totalTime, !0)
                  : l._gc && l._enabled(!0, !1),
                  (l = l._timeline);
            return this;
          }),
          (e.remove = function (t) {
            if (t instanceof u) {
              this._remove(t, !1);
              var e = (t._timeline = t.vars.useFrames
                ? u._rootFramesTimeline
                : u._rootTimeline);
              return (
                (t._startTime =
                  (t._paused ? t._pauseTime : e._time) -
                  (t._reversed
                    ? t.totalDuration() - t._totalTime
                    : t._totalTime) /
                    t._timeScale),
                this
              );
            }
            if (t instanceof Array || (t && t.push && T(t))) {
              for (var i = t.length; -1 < --i; ) this.remove(t[i]);
              return this;
            }
            return "string" == typeof t
              ? this.removeLabel(t)
              : this.kill(null, t);
          }),
          (e._remove = function (t, e) {
            return (
              h.prototype._remove.call(this, t, e),
              this._last
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (e.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (e.insert = e.insertMultiple =
            function (t, e, i, n) {
              return this.add(t, e || 0, i, n);
            }),
          (e.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
          }),
          (e.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (e.addPause = function (t, e, i, n) {
            n = d.delayedCall(0, o, i, n || this);
            return (
              (n.vars.onComplete = n.vars.onReverseComplete = e),
              (n.data = "isPause"),
              (this._hasPause = !0),
              this.add(n, t)
            );
          }),
          (e.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (e.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (e._parseTimeOrLabel = function (t, e, i, n) {
            var o, r;
            if (n instanceof u && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || (n.push && T(n))))
              for (r = n.length; -1 < --r; )
                n[r] instanceof u &&
                  n[r].timeline === this &&
                  this.remove(n[r]);
            if (
              ((o =
                "number" != typeof t || e
                  ? 99999999999 < this.duration()
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof e)
            )
              return this._parseTimeOrLabel(
                e,
                i && "number" == typeof t && null == this._labels[e]
                  ? t - o
                  : 0,
                i
              );
            if (
              ((e = e || 0),
              "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
            )
              null == t && (t = o);
            else {
              if (-1 === (r = t.indexOf("=")))
                return null == this._labels[t]
                  ? i
                    ? (this._labels[t] = o + e)
                    : e
                  : this._labels[t] + e;
              (e =
                parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1))),
                (t =
                  1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : o);
            }
            return Number(t) + e;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            );
          }),
          (e.stop = function () {
            return this.paused(!0);
          }),
          (e.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (e.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (e.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              o,
              r,
              s,
              a,
              l,
              c,
              u = this._time,
              h = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._startTime,
              p = this._timeScale,
              f = this._paused;
            if (
              (u !== this._time && (t += this._time - u),
              h - 1e-7 <= t && 0 <= t)
            )
              (this._totalTime = this._time = h),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (s = "onComplete"),
                  (a = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && -1e-7 <= t) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === y) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((a = !0),
                    this._rawPrevTime > y && (s = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : y),
                (t = h + 1e-4);
            else if (t < 1e-7)
              if (
                (((this._totalTime = this._time = 0) !== u ||
                  (0 === this._duration &&
                    this._rawPrevTime !== y &&
                    (0 < this._rawPrevTime ||
                      (t < 0 && 0 <= this._rawPrevTime)))) &&
                  ((s = "onReverseComplete"), (o = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((a = o = !0), (s = "onReverseComplete"))
                    : 0 <= this._rawPrevTime && this._first && (a = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : y),
                  0 === t && o)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (o = !1), (n = n._next);
                (t = 0), this._initted || (a = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (u <= t)
                  for (n = this._first; n && n._startTime <= t && !l; )
                    n._duration ||
                      "isPause" !== n.data ||
                      n.ratio ||
                      (0 === n._startTime && 0 === this._rawPrevTime) ||
                      (l = n),
                      (n = n._next);
                else
                  for (n = this._last; n && n._startTime >= t && !l; )
                    n._duration ||
                      ("isPause" === n.data && 0 < n._rawPrevTime && (l = n)),
                      (n = n._prev);
                l &&
                  ((this._time = t = l._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = t;
            }
            if ((this._time !== u && this._first) || i || a || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== u &&
                    0 < t &&
                    (this._active = !0)),
                0 === u &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    e ||
                    this._callback("onStart")),
                u <= (c = this._time))
              )
                for (
                  n = this._first;
                  n &&
                  ((r = n._next), c === this._time && (!this._paused || f));

                )
                  (n._active || (n._startTime <= c && !n._paused && !n._gc)) &&
                    (l === n && this.pause(),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = r);
              else
                for (
                  n = this._last;
                  n &&
                  ((r = n._prev), c === this._time && (!this._paused || f));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= u && !n._paused && !n._gc)
                  ) {
                    if (l === n) {
                      for (l = n._prev; l && l.endTime() > this._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (t - l._startTime) * l._timeScale
                            : (t - l._startTime) * l._timeScale,
                          e,
                          i
                        ),
                          (l = l._prev);
                      (l = null), this.pause();
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i);
                  }
                  n = r;
                }
              this._onUpdate &&
                (e || (b.length && _(), this._callback("onUpdate"))),
                s &&
                  (this._gc ||
                    (d !== this._startTime && p === this._timeScale) ||
                    !(0 === this._time || h >= this.totalDuration()) ||
                    (o &&
                      (b.length && _(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[s] && this._callback(s)));
            }
          }),
          (e._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof p && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (e.getChildren = function (t, e, i, n) {
            n = n || -9999999999;
            for (var o = [], r = this._first, s = 0; r; )
              r._startTime < n ||
                (r instanceof d
                  ? !1 !== e && (o[s++] = r)
                  : (!1 !== i && (o[s++] = r),
                    !1 !== t &&
                      (s = (o = o.concat(r.getChildren(!0, e, i))).length))),
                (r = r._next);
            return o;
          }),
          (e.getTweensOf = function (t, e) {
            var i,
              n,
              o = this._gc,
              r = [],
              s = 0;
            for (
              o && this._enabled(!0, !0), n = (i = d.getTweensOf(t)).length;
              -1 < --n;

            )
              (i[n].timeline === this || (e && this._contains(i[n]))) &&
                (r[s++] = i[n]);
            return o && this._enabled(!1, !0), r;
          }),
          (e.recent = function () {
            return this._recent;
          }),
          (e._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (e.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, o = this._first, r = this._labels; o; )
              o._startTime >= i && (o._startTime += t), (o = o._next);
            if (e) for (n in r) r[n] >= i && (r[n] += t);
            return this._uncache(!0);
          }),
          (e._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                n = i.length,
                o = !1;
              -1 < --n;

            )
              i[n]._kill(t, e) && (o = !0);
            return o;
          }),
          (e.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; -1 < --i; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0);
          }),
          (e.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next);
            return u.prototype.invalidate.call(this);
          }),
          (e._enabled = function (t, e) {
            if (t === this._gc)
              for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
            return h.prototype._enabled.call(this, t, e);
          }),
          (e.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0;
            var n = u.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), n;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (e.totalDuration = function (t) {
            if (arguments.length)
              return t && this.totalDuration()
                ? this.timeScale(this._totalDuration / t)
                : this;
            if (this._dirty) {
              for (var e, i, n = 0, o = this._last, r = 999999999999; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  o._startTime > r &&
                  this._sortChildren &&
                  !o._paused &&
                  !this._calculatingDuration
                    ? ((this._calculatingDuration = 1),
                      this.add(o, o._startTime - o._delay),
                      (this._calculatingDuration = 0))
                    : (r = o._startTime),
                  o._startTime < 0 &&
                    !o._paused &&
                    ((n -= o._startTime),
                    this._timeline.smoothChildTiming &&
                      ((this._startTime += o._startTime / this._timeScale),
                      (this._time -= o._startTime),
                      (this._totalTime -= o._startTime),
                      (this._rawPrevTime -= o._startTime)),
                    this.shiftChildren(-o._startTime, !1, -9999999999),
                    (r = 0)),
                  n < (i = o._startTime + o._totalDuration / o._timeScale) &&
                    (n = i),
                  (o = e);
              (this._duration = this._totalDuration = n), (this._dirty = !1);
            }
            return this._totalDuration;
          }),
          (e.paused = function (t) {
            if (!t)
              for (var e = this._first, i = this._time; e; )
                e._startTime === i &&
                  "isPause" === e.data &&
                  (e._rawPrevTime = 0),
                  (e = e._next);
            return u.prototype.paused.apply(this, arguments);
          }),
          (e.usesFrames = function () {
            for (var t = this._timeline; t._timeline; ) t = t._timeline;
            return t === u._rootFramesTimeline;
          }),
          (e.rawTime = function (t) {
            return t &&
              (this._paused ||
                (this._repeat && 0 < this.time() && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
          }),
          p
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (e, a, t) {
        function i(t) {
          e.call(this, t),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo),
            (this._dirty = !0);
        }
        var x = 1e-10,
          n = a._internals,
          A = n.lazyTweens,
          M = n.lazyRender,
          l = _gsScope._gsDefine.globals,
          c = new t(null, null, 1, 0),
          t = (i.prototype = new e());
        return (
          (t.constructor = i),
          (t.kill()._gc = !1),
          (i.version = "2.0.1"),
          (t.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              e.prototype.invalidate.call(this)
            );
          }),
          (t.addCallback = function (t, e, i, n) {
            return this.add(a.delayedCall(0, t, i, n), e);
          }),
          (t.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    o = this._parseTimeOrLabel(e);
                  -1 < --n;

                )
                  i[n]._startTime === o && i[n]._enabled(!1, !1);
            return this;
          }),
          (t.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t);
          }),
          (t.tweenTo = function (t, e) {
            e = e || {};
            var i,
              n,
              o,
              r = {
                ease: c,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              s = (e.repeat && l.TweenMax) || a;
            for (n in e) r[n] = e[n];
            return (
              (r.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(r.time) - this._time) / this._timeScale ||
                0.001),
              (o = new s(this, i, r)),
              (r.onStart = function () {
                o.target.paused(!0),
                  o.vars.time === o.target.time() ||
                    i !== o.duration() ||
                    o.isFromTo ||
                    o
                      .duration(
                        Math.abs(o.vars.time - o.target.time()) /
                          o.target._timeScale
                      )
                      .render(o.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || o,
                      e.onStartParams || []
                    );
              }),
              o
            );
          }),
          (t.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            i = this.tweenTo(e, i);
            return (
              (i.isFromTo = 1),
              i.duration(Math.abs(i.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (t.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              o,
              r,
              s,
              a,
              l,
              c,
              u = this._time,
              h = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._duration,
              p = this._totalTime,
              f = this._startTime,
              m = this._timeScale,
              g = this._rawPrevTime,
              y = this._paused,
              v = this._cycle;
            if (
              (u !== this._time && (t += this._time - u),
              h - 1e-7 <= t && 0 <= t)
            )
              this._locked ||
                ((this._totalTime = h), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (s = "onComplete"),
                  (a = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && -1e-7 <= t) || g < 0 || g === x) &&
                    g !== t &&
                    this._first &&
                    ((a = !0), x < g && (s = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : x),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : (t = (this._time = d) + 1e-4);
            else if (t < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                ((this._time = 0) !== u ||
                  (0 === d &&
                    g !== x &&
                    (0 < g || (t < 0 && 0 <= g)) &&
                    !this._locked)) &&
                  ((s = "onReverseComplete"), (o = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((a = o = !0), (s = "onReverseComplete"))
                    : 0 <= g && this._first && (a = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    d || !e || t || this._rawPrevTime === t ? t : x),
                  0 === t && o)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (o = !1), (n = n._next);
                (t = 0), this._initted || (a = !0);
              }
            else if (
              (0 === d && g < 0 && (a = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((P = d + this._repeatDelay),
                  (this._cycle = (this._totalTime / P) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / P &&
                    p <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * P),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = d - this._time),
                  this._time > d
                    ? (t = (this._time = d) + 1e-4)
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if (u <= (t = this._time) || (this._repeat && v !== this._cycle))
                for (n = this._first; n && n._startTime <= t && !l; )
                  n._duration ||
                    "isPause" !== n.data ||
                    n.ratio ||
                    (0 === n._startTime && 0 === this._rawPrevTime) ||
                    (l = n),
                    (n = n._next);
              else
                for (n = this._last; n && n._startTime >= t && !l; )
                  n._duration ||
                    ("isPause" === n.data && 0 < n._rawPrevTime && (l = n)),
                    (n = n._prev);
              l &&
                l._startTime < d &&
                ((this._time = t = l._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== v && !this._locked) {
              var T = this._yoyo && 0 != (1 & v),
                b = T === (this._yoyo && 0 != (1 & this._cycle)),
                _ = this._totalTime,
                S = this._cycle,
                w = this._rawPrevTime,
                P = this._time;
              if (
                ((this._totalTime = v * d),
                this._cycle < v ? (T = !T) : (this._totalTime += d),
                (this._time = u),
                (this._rawPrevTime = 0 === d ? g - 1e-4 : g),
                (this._cycle = v),
                (this._locked = !0),
                this.render((u = T ? 0 : d), e, 0 === d),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = S),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                u !== this._time)
              )
                return;
              if (
                (b &&
                  ((this._cycle = v),
                  (this._locked = !0),
                  this.render((u = T ? d + 1e-4 : -1e-4), !0, !1)),
                (this._locked = !1),
                this._paused && !y)
              )
                return;
              (this._time = P),
                (this._totalTime = _),
                (this._cycle = S),
                (this._rawPrevTime = w);
            }
            if ((this._time !== u && this._first) || i || a || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== p &&
                    0 < t &&
                    (this._active = !0)),
                0 === p &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                u <= (c = this._time))
              )
                for (
                  n = this._first;
                  n &&
                  ((r = n._next), c === this._time && (!this._paused || y));

                )
                  (n._active ||
                    (n._startTime <= this._time && !n._paused && !n._gc)) &&
                    (l === n && this.pause(),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = r);
              else
                for (
                  n = this._last;
                  n &&
                  ((r = n._prev), c === this._time && (!this._paused || y));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= u && !n._paused && !n._gc)
                  ) {
                    if (l === n) {
                      for (l = n._prev; l && l.endTime() > this._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (t - l._startTime) * l._timeScale
                            : (t - l._startTime) * l._timeScale,
                          e,
                          i
                        ),
                          (l = l._prev);
                      (l = null), this.pause();
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i);
                  }
                  n = r;
                }
              this._onUpdate &&
                (e || (A.length && M(), this._callback("onUpdate"))),
                s &&
                  (this._locked ||
                    this._gc ||
                    (f !== this._startTime && m === this._timeScale) ||
                    !(0 === this._time || h >= this.totalDuration()) ||
                    (o &&
                      (A.length && M(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[s] && this._callback(s)));
            } else
              p !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (t.getActive = function (t, e, i) {
            for (
              var n,
                o = [],
                r = this.getChildren(
                  (t = null == t ? !0 : t),
                  (e = null == e ? !0 : e),
                  (i = null == i ? !1 : i)
                ),
                s = 0,
                a = r.length,
                l = 0;
              l < a;
              l++
            )
              (n = r[l]).isActive() && (o[s++] = n);
            return o;
          }),
          (t.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            for (var e = this.getLabelsArray(), i = e.length, n = 0; n < i; n++)
              if (e[n].time > t) return e[n].name;
            return null;
          }),
          (t.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; -1 < --i; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (t.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (t.invalidate = function () {
            return (this._locked = !1), e.prototype.invalidate.call(this);
          }),
          (t.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (t.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (t.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (e.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (t.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (t.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (t.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (t.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (t.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          i
        );
      },
      !0
    ),
    (w = 180 / Math.PI),
    (v = []),
    (T = []),
    (b = []),
    (y = {}),
    (e = _gsScope._gsDefine.globals),
    (g = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: !0,
      init: function (t, e, i) {
        (this._target = t),
          e instanceof Array && (e = { values: e }),
          (this._func = {}),
          (this._mod = {}),
          (this._props = []),
          (this._timeRes =
            null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
        var n,
          o,
          r,
          s,
          a,
          l = e.values || [],
          c = {},
          u = l[0],
          h = e.autoRotate || i.vars.orientToBezier;
        for (n in ((this._autoRotate = h
          ? h instanceof Array
            ? h
            : [["x", "y", "rotation", (!0 !== h && Number(h)) || 0]]
          : null),
        u))
          this._props.push(n);
        for (r = this._props.length; -1 < --r; )
          (n = this._props[r]),
            this._overwriteProps.push(n),
            (o = this._func[n] = "function" == typeof t[n]),
            (c[n] = o
              ? t[
                  n.indexOf("set") ||
                  "function" != typeof t["get" + n.substr(3)]
                    ? n
                    : "get" + n.substr(3)
                ]()
              : parseFloat(t[n])),
            a || (c[n] !== l[0][n] && (a = c));
        if (
          ((this._beziers =
            "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
              ? d(
                  l,
                  isNaN(e.curviness) ? 1 : e.curviness,
                  !1,
                  "thruBasic" === e.type,
                  e.correlate,
                  a
                )
              : (function (t, e, i) {
                  var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u,
                    h,
                    d,
                    p,
                    f = {},
                    m = "cubic" === (e = e || "soft") ? 3 : 2,
                    g = "soft" === e,
                    y = [];
                  if (
                    null == (t = g && i ? [i].concat(t) : t) ||
                    t.length < 1 + m
                  )
                    throw "invalid Bezier data";
                  for (h in t[0]) y.push(h);
                  for (l = y.length; -1 < --l; ) {
                    for (
                      f[(h = y[l])] = a = [], u = t.length, c = d = 0;
                      c < u;
                      c++
                    )
                      (n =
                        null == i
                          ? t[c][h]
                          : "string" == typeof (p = t[c][h]) &&
                            "=" === p.charAt(1)
                          ? i[h] + Number(p.charAt(0) + p.substr(2))
                          : Number(p)),
                        g &&
                          1 < c &&
                          c < u - 1 &&
                          (a[d++] = (n + a[d - 2]) / 2),
                        (a[d++] = n);
                    for (u = d - m + 1, c = d = 0; c < u; c += m)
                      (n = a[c]),
                        (o = a[c + 1]),
                        (r = a[c + 2]),
                        (s = 2 == m ? 0 : a[c + 3]),
                        (a[d++] = p =
                          3 == m
                            ? new _(n, o, r, s)
                            : new _(n, (2 * o + n) / 3, (2 * o + r) / 3, r));
                    a.length = d;
                  }
                  return f;
                })(l, e.type, c)),
          (this._segCount = this._beziers[n].length),
          this._timeRes &&
            ((e = p(this._beziers, this._timeRes)),
            (this._length = e.length),
            (this._lengths = e.lengths),
            (this._segments = e.segments),
            (this._l1 = this._li = this._s1 = this._si = 0),
            (this._l2 = this._lengths[0]),
            (this._curSeg = this._segments[0]),
            (this._s2 = this._curSeg[0]),
            (this._prec = 1 / this._curSeg.length)),
          (h = this._autoRotate))
        )
          for (
            this._initialRotations = [],
              h[0] instanceof Array || (this._autoRotate = h = [h]),
              r = h.length;
            -1 < --r;

          ) {
            for (s = 0; s < 3; s++)
              (n = h[r][s]),
                (this._func[n] =
                  "function" == typeof t[n] &&
                  t[
                    n.indexOf("set") ||
                    "function" != typeof t["get" + n.substr(3)]
                      ? n
                      : "get" + n.substr(3)
                  ]);
            (n = h[r][2]),
              (this._initialRotations[r] =
                (this._func[n]
                  ? this._func[n].call(this._target)
                  : this._target[n]) || 0),
              this._overwriteProps.push(n);
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (t) {
        var e,
          i,
          n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = this._segCount,
          h = this._func,
          d = this._target,
          p = t !== this._startRatio;
        if (this._timeRes) {
          if (
            ((l = this._lengths),
            (c = this._curSeg),
            (t *= this._length),
            (S = this._li),
            t > this._l2 && S < u - 1)
          ) {
            for (a = u - 1; S < a && (this._l2 = l[++S]) <= t; );
            (this._l1 = l[S - 1]),
              (this._li = S),
              (this._curSeg = c = this._segments[S]),
              (this._s2 = c[(this._s1 = this._si = 0)]);
          } else if (t < this._l1 && 0 < S) {
            for (; 0 < S && (this._l1 = l[--S]) >= t; );
            0 === S && t < this._l1 ? (this._l1 = 0) : S++,
              (this._l2 = l[S]),
              (this._li = S),
              (this._curSeg = c = this._segments[S]),
              (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
              (this._s2 = c[this._si]);
          }
          if (
            ((e = S),
            (t -= this._l1),
            (S = this._si),
            t > this._s2 && S < c.length - 1)
          ) {
            for (a = c.length - 1; S < a && (this._s2 = c[++S]) <= t; );
            (this._s1 = c[S - 1]), (this._si = S);
          } else if (t < this._s1 && 0 < S) {
            for (; 0 < S && (this._s1 = c[--S]) >= t; );
            0 === S && t < this._s1 ? (this._s1 = 0) : S++,
              (this._s2 = c[S]),
              (this._si = S);
          }
          r = (S + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else
          r =
            (t - (e = t < 0 ? 0 : 1 <= t ? u - 1 : (u * t) >> 0) * (1 / u)) * u;
        for (i = 1 - r, S = this._props.length; -1 < --S; )
          (n = this._props[S]),
            (s =
              (r * r * (o = this._beziers[n][e]).da +
                3 * i * (r * o.ca + i * o.ba)) *
                r +
              o.a),
            this._mod[n] && (s = this._mod[n](s, d)),
            h[n] ? d[n](s) : (d[n] = s);
        if (this._autoRotate)
          for (
            var f, m, g, y, v, T, b, _ = this._autoRotate, S = _.length;
            -1 < --S;

          )
            (n = _[S][2]),
              (T = _[S][3] || 0),
              (b = !0 === _[S][4] ? 1 : w),
              (o = this._beziers[_[S][0]]),
              (f = this._beziers[_[S][1]]),
              o &&
                f &&
                ((o = o[e]),
                (f = f[e]),
                (m = o.a + (o.b - o.a) * r),
                (m += ((y = o.b + (o.c - o.b) * r) - m) * r),
                (y += (o.c + (o.d - o.c) * r - y) * r),
                (g = f.a + (f.b - f.a) * r),
                (g += ((v = f.b + (f.c - f.b) * r) - g) * r),
                (v += (f.c + (f.d - f.c) * r - v) * r),
                (s = p
                  ? Math.atan2(v - g, y - m) * b + T
                  : this._initialRotations[S]),
                this._mod[n] && (s = this._mod[n](s, d)),
                h[n] ? d[n](s) : (d[n] = s));
      },
    })),
    (t = g.prototype),
    (g.bezierThrough = d),
    (g.cubicToQuadratic = S),
    (g._autoCSS = !0),
    (g.quadraticToCubic = function (t, e, i) {
      return new _(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }),
    (g._cssRegister = function () {
      var p,
        f,
        m,
        t = e.CSSPlugin;
      t &&
        ((t = t._internals),
        (p = t._parseToProxy),
        (f = t._setPluginRatio),
        (m = t.CSSPropTween),
        t._registerComplexSpecialProp("bezier", {
          parser: function (t, e, i, n, o, r) {
            e instanceof Array && (e = { values: e }), (r = new g());
            var s,
              a,
              l,
              c = e.values,
              u = c.length - 1,
              h = [],
              d = {};
            if (u < 0) return o;
            for (s = 0; s <= u; s++)
              (l = p(t, c[s], n, o, r, u !== s)), (h[s] = l.end);
            for (a in e) d[a] = e[a];
            return (
              (d.values = h),
              ((o = new m(t, "bezier", 0, 0, l.pt, 2)).data = l),
              (o.plugin = r),
              (o.setRatio = f),
              0 === d.autoRotate && (d.autoRotate = !0),
              !d.autoRotate ||
                d.autoRotate instanceof Array ||
                ((s = !0 === d.autoRotate ? 0 : Number(d.autoRotate)),
                (d.autoRotate =
                  null != l.end.left
                    ? [["left", "top", "rotation", s, !1]]
                    : null != l.end.x && [["x", "y", "rotation", s, !1]])),
              d.autoRotate &&
                (n._transform || n._enableTransforms(!1),
                (l.autoRotate = n._target._gsTransform),
                (l.proxy.rotation = l.autoRotate.rotation || 0),
                n._overwriteProps.push("rotation")),
              r._onInitTween(l.proxy, d, n._tween),
              o
            );
          },
        }));
    }),
    (t._mod = function (t) {
      for (var e, i = this._overwriteProps, n = i.length; -1 < --n; )
        (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
    }),
    (t._kill = function (t) {
      var e,
        i,
        n = this._props;
      for (e in this._beziers)
        if (e in t)
          for (
            delete this._beziers[e], delete this._func[e], i = n.length;
            -1 < --i;

          )
            n[i] === e && n.splice(i, 1);
      if ((n = this._autoRotate))
        for (i = n.length; -1 < --i; ) t[n[i][2]] && n.splice(i, 1);
      return this._super._kill.call(this, t);
    }),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (r, E) {
        var d,
          S,
          P,
          h,
          I = function () {
            r.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = I.prototype.setRatio);
          },
          c = _gsScope._gsDefine.globals,
          p = {},
          t = (I.prototype = new r("css"));
        ((t.constructor = I).version = "1.20.5"),
          (I.API = 2),
          (I.defaultTransformPerspective = 0),
          (I.defaultSkewType = "compensated"),
          (I.defaultSmoothOrigin = !0),
          (I.suffixMap = {
            top: (t = "px"),
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: "",
          });
        function s(t, e) {
          return e.toUpperCase();
        }
        function a(t, e) {
          return Z.createElementNS
            ? Z.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
            : Z.createElement(t);
        }
        function l(t) {
          return R.test(
            "string" == typeof t ? t : (t.currentStyle || t.style).filter || ""
          )
            ? parseFloat(RegExp.$1) / 100
            : 1;
        }
        function f(t) {
          _gsScope.console && console.log(t);
        }
        function w(t, e) {
          var i,
            n,
            o = (e = e || J).style;
          if (void 0 !== o[t]) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1),
              i = ["O", "Moz", "ms", "Ms", "Webkit"],
              n = 5;
            -1 < --n && void 0 === o[i[n] + t];

          );
          return 0 <= n
            ? ((nt = "-" + (ot = 3 === n ? "ms" : i[n]).toLowerCase() + "-"),
              ot + t)
            : null;
        }
        function m(t, e) {
          var i,
            n,
            o = {};
          if ((e = e || rt(t, null)))
            if ((i = e.length))
              for (; -1 < --i; )
                (-1 !== (n = e[i]).indexOf("-transform") && Ot !== n) ||
                  (o[n.replace(F, s)] = e.getPropertyValue(n));
            else
              for (i in e)
                (-1 !== i.indexOf("Transform") && It !== i) || (o[i] = e[i]);
          else if ((e = t.currentStyle || t.style))
            for (i in e)
              "string" == typeof i &&
                void 0 === o[i] &&
                (o[i.replace(F, s)] = e[i]);
          return (
            it || (o.opacity = l(t)),
            (t = Vt(t, e, !1)),
            (o.rotation = t.rotation),
            (o.skewX = t.skewX),
            (o.scaleX = t.scaleX),
            (o.scaleY = t.scaleY),
            (o.x = t.x),
            (o.y = t.y),
            Gt &&
              ((o.z = t.z),
              (o.rotationX = t.rotationX),
              (o.rotationY = t.rotationY),
              (o.scaleZ = t.scaleZ)),
            o.filters && delete o.filters,
            o
          );
        }
        function g(t, e, i, n, o) {
          var r,
            s,
            a,
            l = {},
            c = t.style;
          for (s in i)
            "cssText" !== s &&
              "length" !== s &&
              isNaN(s) &&
              (e[s] !== (r = i[s]) || (o && o[s])) &&
              -1 === s.indexOf("Origin") &&
              ("number" == typeof r || "string" == typeof r) &&
              ((l[s] =
                "auto" !== r || ("left" !== s && "top" !== s)
                  ? ("" !== r && "auto" !== r && "none" !== r) ||
                    "string" != typeof e[s] ||
                    "" === e[s].replace(B, "")
                    ? r
                    : 0
                  : lt(t, s)),
              void 0 !== c[s] && (a = new vt(c, s, c[s], a)));
          if (n) for (s in n) "className" !== s && (l[s] = n[s]);
          return { difs: l, firstMPT: a };
        }
        function A(t, e) {
          return "string" ==
            typeof (t = "function" == typeof t ? t(O, k) : t) &&
            "=" === t.charAt(1)
            ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
            : parseFloat(t) - parseFloat(e) || 0;
        }
        function x(t, e) {
          return null == (t = "function" == typeof t ? t(O, k) : t)
            ? e
            : "string" == typeof t && "=" === t.charAt(1)
            ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
            : parseFloat(t) || 0;
        }
        function M(t, e, i, n) {
          var o, r, s;
          return (s =
            (s =
              null == (t = "function" == typeof t ? t(O, k) : t)
                ? e
                : "number" == typeof t
                ? t
                : ((o = 360),
                  (r = t.split("_")),
                  (s =
                    ((s = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(r[0].substr(2))
                      : parseFloat(r[0])) *
                      (-1 === t.indexOf("rad") ? 1 : K) -
                    (s ? 0 : e)),
                  r.length &&
                    (n && (n[i] = e + s),
                    -1 !== t.indexOf("short") &&
                      (s %= o) !== s % 180 &&
                      (s = s < 0 ? s + o : s - o),
                    -1 !== t.indexOf("_cw") && s < 0
                      ? (s = ((s + 3599999999640) % o) - ((s / o) | 0) * o)
                      : -1 !== t.indexOf("ccw") &&
                        0 < s &&
                        (s = ((s - 3599999999640) % o) - ((s / o) | 0) * o)),
                  e + s)) < 1e-6 && -1e-6 < s
              ? 0
              : s);
        }
        function u(t, e, i) {
          return (
            (255 *
              (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) +
              0.5) |
            0
          );
        }
        function i(t, e) {
          var i,
            n,
            o,
            r = t.match(ft) || [],
            s = 0,
            a = "";
          if (!r.length) return t;
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              (s += (o = t.substr(s, t.indexOf(n, s) - s)).length + n.length),
              3 === (n = pt(n, e)).length && n.push(1),
              (a +=
                o +
                (e
                  ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
                  : "rgba(" + n.join(",")) +
                ")");
          return a + t.substr(s);
        }
        var C,
          y,
          v,
          H,
          T,
          _,
          k,
          O,
          G = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          D = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          B = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          L = /(?:\d|\-|\+|=|#|\.)*/g,
          R = /opacity *= *([^)]*)/i,
          z = /opacity:([^;]*)/i,
          o = /alpha\(opacity *=.+?\)/i,
          N = /^(rgb|hsl)/,
          X = /([A-Z])/g,
          F = /-([a-z])/gi,
          W = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          V = /(?:Left|Right|Width)/i,
          j = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          $ = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          Y = /,(?=[^\)]*(?:\(|$))/gi,
          U = /[\s,\(]/i,
          q = Math.PI / 180,
          K = 180 / Math.PI,
          Q = {},
          e = { style: {} },
          Z = _gsScope.document || {
            createElement: function () {
              return e;
            },
          },
          J = a("div"),
          tt = a("img"),
          n = (I._internals = { _specialProps: p }),
          et = (_gsScope.navigator || {}).userAgent || "",
          it =
            ((kt = et.indexOf("Android")),
            (Ct = a("a")),
            (v =
              -1 !== et.indexOf("Safari") &&
              -1 === et.indexOf("Chrome") &&
              (-1 === kt || 3 < parseFloat(et.substr(kt + 8, 2)))),
            (T = v && parseFloat(et.substr(et.indexOf("Version/") + 8, 2)) < 6),
            (H = -1 !== et.indexOf("Firefox")),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(et) ||
              /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(et)) &&
              (_ = parseFloat(RegExp.$1)),
            !!Ct &&
              ((Ct.style.cssText = "top:1px;opacity:.55;"),
              /^0.55/.test(Ct.style.opacity))),
          nt = "",
          ot = "",
          rt = (
            "undefined" != typeof window
              ? window
              : Z.defaultView || { getComputedStyle: function () {} }
          ).getComputedStyle,
          st = (I.getStyle = function (t, e, i, n, o) {
            var r;
            return it || "opacity" !== e
              ? (!n && t.style[e]
                  ? (r = t.style[e])
                  : (i = i || rt(t))
                  ? (r =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(X, "-$1").toLowerCase()))
                  : t.currentStyle && (r = t.currentStyle[e]),
                null == o ||
                (r && "none" !== r && "auto" !== r && "auto auto" !== r)
                  ? r
                  : o)
              : l(t);
          }),
          at = (n.convertToPixels = function (t, e, i, n, o) {
            if ("px" === n || (!n && "lineHeight" !== e)) return i;
            if ("auto" === n || !i) return 0;
            var r,
              s,
              a,
              l = V.test(e),
              c = t,
              u = J.style,
              h = i < 0,
              d = 1 === i;
            if ((h && (i = -i), d && (i *= 100), "lineHeight" !== e || n))
              if ("%" === n && -1 !== e.indexOf("border"))
                r = (i / 100) * (l ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((u.cssText =
                    "border:0 solid red;position:" +
                    st(t, "position") +
                    ";line-height:0;"),
                  "%" !== n &&
                    c.appendChild &&
                    "v" !== n.charAt(0) &&
                    "rem" !== n)
                )
                  u[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                else {
                  if (
                    ((c = t.parentNode || Z.body),
                    -1 !== st(c, "display").indexOf("flex") &&
                      (u.position = "absolute"),
                    (s = c._gsCache),
                    (a = E.ticker.frame),
                    s && l && s.time === a)
                  )
                    return (s.width * i) / 100;
                  u[l ? "width" : "height"] = i + n;
                }
                c.appendChild(J),
                  (r = parseFloat(J[l ? "offsetWidth" : "offsetHeight"])),
                  c.removeChild(J),
                  l &&
                    "%" === n &&
                    !1 !== I.cacheWidths &&
                    (((s = c._gsCache = c._gsCache || {}).time = a),
                    (s.width = (r / i) * 100)),
                  0 !== r || o || (r = at(t, e, i, n, !0));
              }
            else
              (s = rt(t).lineHeight),
                (t.style.lineHeight = i),
                (r = parseFloat(rt(t).lineHeight)),
                (t.style.lineHeight = s);
            return d && (r /= 100), h ? -r : r;
          }),
          lt = (n.calculateOffset = function (t, e, i) {
            if ("absolute" !== st(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top",
              i = st(t, "margin" + n, i);
            return (
              t["offset" + n] - (at(t, e, parseFloat(i), i.replace(L, "")) || 0)
            );
          }),
          ct = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          ut = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ht = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            var i,
              n = (t = null == t || "" === t ? "0 0" : t).split(" "),
              o =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : n[0],
              r =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : n[1];
            if (3 < n.length && !e) {
              for (
                n = t.split(", ").join(",").split(","), t = [], i = 0;
                i < n.length;
                i++
              )
                t.push(ht(n[i]));
              return t.join(",");
            }
            return (
              null == r
                ? (r = "center" === o ? "50%" : "0")
                : "center" === r && (r = "50%"),
              (t =
                (o =
                  "center" === o ||
                  (isNaN(parseFloat(o)) && -1 === (o + "").indexOf("="))
                    ? "50%"
                    : o) +
                " " +
                r +
                (2 < n.length ? " " + n[2] : "")),
              e &&
                ((e.oxp = -1 !== o.indexOf("%")),
                (e.oyp = -1 !== r.indexOf("%")),
                (e.oxr = "=" === o.charAt(1)),
                (e.oyr = "=" === r.charAt(1)),
                (e.ox = parseFloat(o.replace(B, ""))),
                (e.oy = parseFloat(r.replace(B, ""))),
                (e.v = t)),
              e || t
            );
          },
          dt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          pt = (I.parseColor = function (t, e) {
            var i, n, o, r, s, a, l, c;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  dt[t])
                )
                  i = dt[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    (t =
                      "#" +
                      (n = t.charAt(1)) +
                      n +
                      (o = t.charAt(2)) +
                      o +
                      (r = t.charAt(3)) +
                      r),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = c = t.match(G)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(D);
                  } else
                    (s = (Number(i[0]) % 360) / 360),
                      (a = Number(i[1]) / 100),
                      (n =
                        2 * (l = Number(i[2]) / 100) -
                        (o = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                      3 < i.length && (i[3] = Number(i[3])),
                      (i[0] = u(s + 1 / 3, n, o)),
                      (i[1] = u(s, n, o)),
                      (i[2] = u(s - 1 / 3, n, o));
                else i = t.match(G) || dt.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  3 < i.length && (i[3] = Number(i[3]));
              }
            else i = dt.black;
            return (
              e &&
                !c &&
                ((n = i[0] / 255),
                (o = i[1] / 255),
                (r = i[2] / 255),
                (l = ((t = Math.max(n, o, r)) + (e = Math.min(n, o, r))) / 2),
                t === e
                  ? (s = a = 0)
                  : ((c = t - e),
                    (a = 0.5 < l ? c / (2 - t - e) : c / (t + e)),
                    (s =
                      t === n
                        ? (o - r) / c + (o < r ? 6 : 0)
                        : t === o
                        ? (r - n) / c + 2
                        : (n - o) / c + 4),
                    (s *= 60)),
                (i[0] = (s + 0.5) | 0),
                (i[1] = (100 * a + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          ft =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in dt) ft += "|" + t + "\\b";
        (ft = new RegExp(ft + ")", "gi")),
          (I.colorStringFilter = function (t) {
            var e = t[0] + " " + t[1];
            ft.test(e) &&
              ((e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla(")),
              (t[0] = i(t[0], e)),
              (t[1] = i(t[1], e))),
              (ft.lastIndex = 0);
          }),
          E.defaultStringFilter ||
            (E.defaultStringFilter = I.colorStringFilter);
        function mt(t, e, r, s) {
          if (null == t)
            return function (t) {
              return t;
            };
          var a,
            l = e ? (t.match(ft) || [""])[0] : "",
            c = t.split(l).join("").match(b) || [],
            u = t.substr(0, t.indexOf(c[0])),
            h = ")" === t.charAt(t.length - 1) ? ")" : "",
            d = -1 !== t.indexOf(" ") ? " " : ",",
            p = c.length,
            f = 0 < p ? c[0].replace(G, "") : "";
          return p
            ? (a = e
                ? function (t) {
                    var e, i, n, o;
                    if ("number" == typeof t) t += f;
                    else if (s && Y.test(t)) {
                      for (
                        o = t.replace(Y, "|").split("|"), n = 0;
                        n < o.length;
                        n++
                      )
                        o[n] = a(o[n]);
                      return o.join(",");
                    }
                    if (
                      ((e = (t.match(ft) || [l])[0]),
                      (n = (i = t.split(e).join("").match(b) || []).length),
                      p > n--)
                    )
                      for (; ++n < p; ) i[n] = r ? i[((n - 1) / 2) | 0] : c[n];
                    return (
                      u +
                      i.join(d) +
                      d +
                      e +
                      h +
                      (-1 !== t.indexOf("inset") ? " inset" : "")
                    );
                  }
                : function (t) {
                    var e, i, n;
                    if ("number" == typeof t) t += f;
                    else if (s && Y.test(t)) {
                      for (
                        i = t.replace(Y, "|").split("|"), n = 0;
                        n < i.length;
                        n++
                      )
                        i[n] = a(i[n]);
                      return i.join(",");
                    }
                    if (((n = (e = t.match(b) || []).length), p > n--))
                      for (; ++n < p; ) e[n] = r ? e[((n - 1) / 2) | 0] : c[n];
                    return u + e.join(d) + h;
                  })
            : function (t) {
                return t;
              };
        }
        function gt(c) {
          return (
            (c = c.split(",")),
            function (t, e, i, n, o, r, s) {
              var a,
                l = (e + "").split(" ");
              for (s = {}, a = 0; a < 4; a++)
                s[c[a]] = l[a] = l[a] || l[((a - 1) / 2) >> 0];
              return n.parse(t, s, o, r);
            }
          );
        }
        function yt(t, e, i, n, o, r) {
          return (
            ((r = new Tt(t, e, i, n - i, o, -1, r)).b = i), (r.e = r.xs0 = n), r
          );
        }
        var vt =
            ((n._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, i, n, o, r, s = this.data, a = s.proxy, l = s.firstMPT;
                l;

              )
                (e = a[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (s.autoRotate &&
                  (s.autoRotate.rotation = s.mod
                    ? s.mod.call(this._tween, a.rotation, this.t, this._tween)
                    : a.rotation),
                1 === t || 0 === t)
              )
                for (l = s.firstMPT, r = 1 === t ? "e" : "b"; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (o = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                        o += i["xn" + n] + i["xs" + (n + 1)];
                      i[r] = o;
                    }
                  } else i[r] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (t, e, i, n, o) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = o),
                n && ((n._prev = this)._next = n);
            }),
          Tt =
            ((n._parseToProxy = function (t, e, i, n, o, r) {
              var s,
                a,
                l,
                c,
                u = n,
                h = {},
                d = {},
                p = i._transform,
                f = Q;
              for (
                i._transform = null,
                  Q = e,
                  n = o = i.parse(t, e, n, o),
                  Q = f,
                  r &&
                    ((i._transform = p),
                    u && ((u._prev = null), u._prev && (u._prev._next = null)));
                n && n !== u;

              ) {
                if (
                  n.type <= 1 &&
                  ((d[(a = n.p)] = n.s + n.c),
                  (h[a] = n.s),
                  r || ((c = new vt(n, "s", a, c, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (s = n.l; 0 < --s; )
                    (d[(a = n.p + "_" + (l = "xn" + s))] = n.data[l]),
                      (h[a] = n[l]),
                      r || (c = new vt(n, l, a, c, n.rxp[l]));
                n = n._next;
              }
              return { proxy: h, end: d, firstMPT: c, pt: o };
            }),
            (n.CSSPropTween = function (t, e, i, n, o, r, s, a, l, c, u) {
              (this.t = t),
                (this.p = e),
                (this.s = i),
                (this.c = n),
                (this.n = s || e),
                t instanceof Tt || h.push(this.n),
                (this.r = a && ("function" == typeof a ? a : Math.round)),
                (this.type = r || 0),
                l && ((this.pr = l), (d = !0)),
                (this.b = void 0 === c ? i : c),
                (this.e = void 0 === u ? i + n : u),
                o && ((this._next = o)._prev = this);
            })),
          bt = (I.parseComplex = function (t, e, i, n, o, r, s, a, l, c) {
            (i = i || r || ""),
              "function" == typeof n && (n = n(O, k)),
              (s = new Tt(t, e, 0, 0, s, c ? 2 : 1, null, !1, a, i, n)),
              (n += ""),
              o &&
                ft.test(n + i) &&
                (I.colorStringFilter((n = [i, n])), (i = n[0]), (n = n[1]));
            var u,
              h,
              d,
              p,
              f,
              m,
              g,
              y,
              v,
              T,
              b,
              _,
              S = i.split(", ").join(",").split(" "),
              w = n.split(", ").join(",").split(" "),
              P = S.length,
              x = !1 !== C;
            for (
              (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                ((w =
                  -1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                    ? ((S = S.join(" ").replace(Y, ", ").split(" ")),
                      w.join(" ").replace(Y, ", ").split(" "))
                    : ((S = S.join(" ").split(",").join(", ").split(" ")),
                      w.join(" ").split(",").join(", ").split(" "))),
                (P = S.length)),
                P !== w.length && (P = (S = (r || "").split(" ")).length),
                s.plugin = l,
                s.setRatio = c,
                u = ft.lastIndex = 0;
              u < P;
              u++
            )
              if (((p = S[u]), (f = w[u] + ""), (y = parseFloat(p)) || 0 === y))
                s.appendXtra(
                  "",
                  y,
                  A(f, y),
                  f.replace(D, ""),
                  x && -1 !== f.indexOf("px") && Math.round,
                  !0
                );
              else if (o && ft.test(p))
                (b = ")" + ((b = f.indexOf(")") + 1) ? f.substr(b) : "")),
                  (_ = -1 !== f.indexOf("hsl") && it),
                  (v = f),
                  (p = pt(p, _)),
                  (f = pt(f, _)),
                  (y = 6 < p.length + f.length) && !it && 0 === f[3]
                    ? ((s["xs" + s.l] += s.l ? " transparent" : "transparent"),
                      (s.e = s.e.split(w[u]).join("transparent")))
                    : (it || (y = !1),
                      _
                        ? s
                            .appendXtra(
                              v.substr(0, v.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              p[0],
                              A(f[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], A(f[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              A(f[2], p[2]),
                              y ? "%," : "%" + b,
                              !1
                            )
                        : s
                            .appendXtra(
                              v.substr(0, v.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              p[0],
                              f[0] - p[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", p[1], f[1] - p[1], ",", Math.round)
                            .appendXtra(
                              "",
                              p[2],
                              f[2] - p[2],
                              y ? "," : b,
                              Math.round
                            ),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        s.appendXtra(
                          "",
                          p,
                          (f.length < 4 ? 1 : f[3]) - p,
                          b,
                          !1
                        ))),
                  (ft.lastIndex = 0);
              else if ((m = p.match(G))) {
                if (!(g = f.match(D)) || g.length !== m.length) return s;
                for (h = d = 0; h < m.length; h++)
                  (T = m[h]),
                    (v = p.indexOf(T, d)),
                    s.appendXtra(
                      p.substr(d, v - d),
                      Number(T),
                      A(g[h], T),
                      "",
                      x && "px" === p.substr(v + T.length, 2) && Math.round,
                      0 === h
                    ),
                    (d = v + T.length);
                s["xs" + s.l] += p.substr(d);
              } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + f : f;
            if (-1 !== n.indexOf("=") && s.data) {
              for (b = s.xs0 + s.data.s, u = 1; u < s.l; u++)
                b += s["xs" + u] + s.data["xn" + u];
              s.e = b + s["xs" + u];
            }
            return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
          }),
          _t = 9;
        for ((t = Tt.prototype).l = t.pr = 0; 0 < --_t; )
          (t["xn" + _t] = 0), (t["xs" + _t] = "");
        (t.xs0 = ""),
          (t._next =
            t._prev =
            t.xfirst =
            t.data =
            t.plugin =
            t.setRatio =
            t.rxp =
              null),
          (t.appendXtra = function (t, e, i, n, o, r) {
            var s = this,
              a = s.l;
            return (
              (s["xs" + a] += r && (a || s["xs" + a]) ? " " + t : t || ""),
              i || 0 === a || s.plugin
                ? (s.l++,
                  (s.type = s.setRatio ? 2 : 1),
                  (s["xs" + s.l] = n || ""),
                  0 < a
                    ? ((s.data["xn" + a] = e + i),
                      (s.rxp["xn" + a] = o),
                      (s["xn" + a] = e),
                      s.plugin ||
                        ((s.xfirst = new Tt(
                          s,
                          "xn" + a,
                          e,
                          i,
                          s.xfirst || s,
                          0,
                          s.n,
                          o,
                          s.pr
                        )),
                        (s.xfirst.xs0 = 0)))
                    : ((s.data = { s: e + i }),
                      (s.rxp = {}),
                      (s.s = e),
                      (s.c = i),
                      (s.r = o)))
                : (s["xs" + a] += e + (n || "")),
              s
            );
          });
        function St(t, e) {
          (this.p = ((e = e || {}).prefix && w(t)) || t),
            ((p[t] = p[this.p] = this).format =
              e.formatter ||
              mt(e.defaultValue, e.color, e.collapsible, e.multi)),
            e.parser && (this.parse = e.parser),
            (this.clrs = e.color),
            (this.multi = e.multi),
            (this.keyword = e.keyword),
            (this.dflt = e.defaultValue),
            (this.pr = e.priority || 0);
        }
        var wt = (n._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var n,
              o = t.split(","),
              r = e.defaultValue;
            for (i = i || [r], n = 0; n < o.length; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || r),
                new St(o[n], e);
          }),
          Pt = (n._registerPluginProp = function (t) {
            var l;
            p[t] ||
              ((l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin"),
              wt(t, {
                parser: function (t, e, i, n, o, r, s) {
                  var a = c.com.greensock.plugins[l];
                  return a
                    ? (a._cssRegister(), p[i].parse(t, e, i, n, o, r, s))
                    : (f("Error: " + l + " js file not loaded."), o);
                },
              }));
          });
        ((t = St.prototype).parseComplex = function (t, e, i, n, o, r) {
          var s,
            a,
            l,
            c,
            u,
            h,
            d = this.keyword;
          if (
            (this.multi &&
              (Y.test(i) || Y.test(e)
                ? ((a = e.replace(Y, "|").split("|")),
                  (l = i.replace(Y, "|").split("|")))
                : d && ((a = [e]), (l = [i]))),
            l)
          ) {
            for (c = (l.length > a.length ? l : a).length, s = 0; s < c; s++)
              (e = a[s] = a[s] || this.dflt),
                (i = l[s] = l[s] || this.dflt),
                d &&
                  (u = e.indexOf(d)) !== (h = i.indexOf(d)) &&
                  (-1 === h
                    ? (a[s] = a[s].split(d).join(""))
                    : -1 === u && (a[s] += " " + d));
            (e = a.join(", ")), (i = l.join(", "));
          }
          return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, o, r);
        }),
          (t.parse = function (t, e, i, n, o, r, s) {
            return this.parseComplex(
              t.style,
              this.format(st(t, this.p, P, !1, this.dflt)),
              this.format(e),
              o,
              r
            );
          }),
          (I.registerSpecialProp = function (t, a, l) {
            wt(t, {
              parser: function (t, e, i, n, o, r, s) {
                o = new Tt(t, i, 0, 0, o, 2, i, !1, l);
                return (o.plugin = r), (o.setRatio = a(t, e, n._tween, i)), o;
              },
              priority: l,
            });
          }),
          (I.useSVGTransformAttr = !0);
        function xt(t, e, i, n, o, r) {
          var s,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            m,
            g,
            y,
            v = t._gsTransform,
            T = Wt(t, !0);
          v && ((g = v.xOrigin), (y = v.yOrigin)),
            (!n || (s = n.split(" ")).length < 2) &&
              (0 === (d = t.getBBox()).x &&
                0 === d.y &&
                d.width + d.height === 0 &&
                (d = {
                  x:
                    parseFloat(
                      t.hasAttribute("x")
                        ? t.getAttribute("x")
                        : t.hasAttribute("cx")
                        ? t.getAttribute("cx")
                        : 0
                    ) || 0,
                  y:
                    parseFloat(
                      t.hasAttribute("y")
                        ? t.getAttribute("y")
                        : t.hasAttribute("cy")
                        ? t.getAttribute("cy")
                        : 0
                    ) || 0,
                  width: 0,
                  height: 0,
                }),
              (s = [
                (-1 !== (e = ht(e).split(" "))[0].indexOf("%")
                  ? (parseFloat(e[0]) / 100) * d.width
                  : parseFloat(e[0])) + d.x,
                (-1 !== e[1].indexOf("%")
                  ? (parseFloat(e[1]) / 100) * d.height
                  : parseFloat(e[1])) + d.y,
              ])),
            (i.xOrigin = c = parseFloat(s[0])),
            (i.yOrigin = u = parseFloat(s[1])),
            n &&
              T !== Ft &&
              ((h = T[0]),
              (d = T[1]),
              (p = T[2]),
              (f = T[3]),
              (m = T[4]),
              (e = T[5]),
              (n = h * f - d * p) &&
                ((l = c * (-d / n) + u * (h / n) - (h * e - d * m) / n),
                (c =
                  i.xOrigin =
                  s[0] =
                  a =
                    c * (f / n) + u * (-p / n) + (p * e - f * m) / n),
                (u = i.yOrigin = s[1] = l))),
            v &&
              (r && ((i.xOffset = v.xOffset), (i.yOffset = v.yOffset), (v = i)),
              o || (!1 !== o && !1 !== I.defaultSmoothOrigin)
                ? ((v.xOffset += (a = c - g) * T[0] + (l = u - y) * T[2] - a),
                  (v.yOffset += a * T[1] + l * T[3] - l))
                : (v.xOffset = v.yOffset = 0)),
            r || t.setAttribute("data-svg-origin", s.join(" "));
        }
        function At(t) {
          var e,
            i,
            n = this.data,
            o = (m = -n.rotation * q) + n.skewX * q,
            r = 1e5,
            s = ((Math.cos(m) * n.scaleX * r) | 0) / r,
            a = ((Math.sin(m) * n.scaleX * r) | 0) / r,
            l = ((Math.sin(o) * -n.scaleY * r) | 0) / r,
            c = ((Math.cos(o) * n.scaleY * r) | 0) / r,
            u = this.t.style,
            h = this.t.currentStyle;
          if (h) {
            (i = a), (a = -l), (l = -i), (e = h.filter), (u.filter = "");
            var d = this.t.offsetWidth,
              p = this.t.offsetHeight,
              f = "absolute" !== h.position,
              m =
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                s +
                ", M12=" +
                a +
                ", M21=" +
                l +
                ", M22=" +
                c,
              o = n.x + (d * n.xPercent) / 100,
              r = n.y + (p * n.yPercent) / 100;
            if (
              (null != n.ox &&
                ((o +=
                  (T = (n.oxp ? d * n.ox * 0.01 : n.ox) - d / 2) -
                  (T * s + (b = (n.oyp ? p * n.oy * 0.01 : n.oy) - p / 2) * a)),
                (r += b - (T * l + b * c))),
              f
                ? (m +=
                    ", Dx=" +
                    ((T = d / 2) - (T * s + (b = p / 2) * a) + o) +
                    ", Dy=" +
                    (b - (T * l + b * c) + r) +
                    ")")
                : (m += ", sizingMethod='auto expand')"),
              -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                ? (u.filter = e.replace($, m))
                : (u.filter = m + " " + e),
              (0 !== t && 1 !== t) ||
                1 != s ||
                0 != a ||
                0 != l ||
                1 != c ||
                (f && -1 === m.indexOf("Dx=0, Dy=0")) ||
                (R.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                (-1 === e.indexOf(e.indexOf("Alpha")) &&
                  u.removeAttribute("filter")),
              !f)
            ) {
              var g,
                y,
                v = _ < 8 ? 1 : -1,
                T = n.ieOffsetX || 0,
                b = n.ieOffsetY || 0;
              for (
                n.ieOffsetX = Math.round(
                  (d - ((s < 0 ? -s : s) * d + (a < 0 ? -a : a) * p)) / 2 + o
                ),
                  n.ieOffsetY = Math.round(
                    (p - ((c < 0 ? -c : c) * p + (l < 0 ? -l : l) * d)) / 2 + r
                  ),
                  _t = 0;
                _t < 4;
                _t++
              )
                (y =
                  (i =
                    -1 !== (y = h[(g = ut[_t])]).indexOf("px")
                      ? parseFloat(y)
                      : at(this.t, g, parseFloat(y), y.replace(L, "")) || 0) !==
                  n[g]
                    ? _t < 2
                      ? -n.ieOffsetX
                      : -n.ieOffsetY
                    : _t < 2
                    ? T - n.ieOffsetX
                    : b - n.ieOffsetY),
                  (u[g] =
                    (n[g] = Math.round(
                      i - y * (0 === _t || 2 === _t ? 1 : v)
                    )) + "px");
            }
          }
        }
        var Mt,
          Ct,
          kt,
          Et =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          It = w("transform"),
          Ot = nt + "transform",
          Ht = w("transformOrigin"),
          Gt = null !== w("perspective"),
          Dt = (n.Transform = function () {
            (this.perspective = parseFloat(I.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === I.defaultForce3D || !Gt) &&
                (I.defaultForce3D || "auto"));
          }),
          Bt = _gsScope.SVGElement,
          Lt = function (t, e, i) {
            var n,
              o = Z.createElementNS("http://www.w3.org/2000/svg", t),
              r = /([a-z])([A-Z])/g;
            for (n in i)
              o.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(o), o;
          },
          Rt = Z.documentElement || {},
          zt =
            ((kt = _ || (/Android/i.test(et) && !_gsScope.chrome)),
            Z.createElementNS &&
              !kt &&
              ((Ct = Lt("svg", Rt)),
              (Lt = (et = Lt("rect", Ct, {
                width: 100,
                height: 50,
                x: 100,
              })).getBoundingClientRect().width),
              (et.style[Ht] = "50% 50%"),
              (et.style[It] = "scaleX(0.5)"),
              (kt = Lt === et.getBoundingClientRect().width && !(H && Gt)),
              Rt.removeChild(Ct)),
            kt),
          Nt = function (t) {
            var e,
              i = a(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              n = this.parentNode,
              o = this.nextSibling,
              r = this.style.cssText;
            if (
              (Rt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Nt);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              o ? n.insertBefore(this, o) : n.appendChild(this),
              Rt.removeChild(i),
              (this.style.cssText = r),
              e
            );
          },
          Xt = function (t) {
            return !(
              !Bt ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (e) {
                try {
                  return e.getBBox();
                } catch (t) {
                  return Nt.call(e, !0);
                }
              })(t)
            );
          },
          Ft = [1, 0, 0, 1, 0, 0],
          Wt = function (t, e) {
            var i,
              n,
              o,
              r,
              s,
              a,
              l = t._gsTransform || new Dt(),
              c = t.style;
            if (
              (It
                ? (n = st(t, Ot, null, !0))
                : t.currentStyle &&
                  (n =
                    (n = t.currentStyle.filter.match(j)) && 4 === n.length
                      ? [
                          n[0].substr(4),
                          Number(n[2].substr(4)),
                          Number(n[1].substr(4)),
                          n[3].substr(4),
                          l.x || 0,
                          l.y || 0,
                        ].join(",")
                      : ""),
              (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
              !It ||
                (!(a = !rt(t) || "none" === rt(t).display) && t.parentNode) ||
                (a && ((r = c.display), (c.display = "block")),
                t.parentNode || ((s = 1), Rt.appendChild(t)),
                (i =
                  !(n = st(t, Ot, null, !0)) ||
                  "none" === n ||
                  "matrix(1, 0, 0, 1, 0, 0)" === n),
                r ? (c.display = r) : a && Ut(c, "display"),
                s && Rt.removeChild(t)),
              (l.svg || (t.getCTM && Xt(t))) &&
                (i &&
                  -1 !== (c[It] + "").indexOf("matrix") &&
                  ((n = c[It]), (i = 0)),
                (o = t.getAttribute("transform")),
                i &&
                  o &&
                  ((n =
                    "matrix(" +
                    (o = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    o.b +
                    "," +
                    o.c +
                    "," +
                    o.d +
                    "," +
                    o.e +
                    "," +
                    o.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Ft;
            for (o = (n || "").match(G) || [], _t = o.length; -1 < --_t; )
              (r = Number(o[_t])),
                (o[_t] = (s = r - (r |= 0))
                  ? ((1e5 * s + (s < 0 ? -0.5 : 0.5)) | 0) / 1e5 + r
                  : r);
            return e && 6 < o.length
              ? [o[0], o[1], o[4], o[5], o[12], o[13]]
              : o;
          },
          Vt = (n.getTransform = function (t, e, i, n) {
            if (t._gsTransform && i && !n) return t._gsTransform;
            var o,
              r,
              s,
              a,
              l,
              c,
              u,
              h,
              d,
              p,
              f,
              m,
              g,
              y,
              v,
              T,
              b,
              _,
              S,
              w,
              P,
              x,
              A = (i && t._gsTransform) || new Dt(),
              M = A.scaleX < 0,
              C =
                (Gt &&
                  (parseFloat(st(t, Ht, e, !1, "0 0 0").split(" ")[2]) ||
                    A.zOrigin)) ||
                0,
              k = parseFloat(I.defaultTransformPerspective) || 0;
            if (
              ((A.svg = !(!t.getCTM || !Xt(t))),
              A.svg &&
                (xt(
                  t,
                  st(t, Ht, e, !1, "50% 50%") + "",
                  A,
                  t.getAttribute("data-svg-origin")
                ),
                (Mt = I.useSVGTransformAttr || zt)),
              (r = Wt(t)) !== Ft)
            )
              for (o in (16 === r.length
                ? ((w = r[0]),
                  (x = r[1]),
                  (h = r[2]),
                  (d = r[3]),
                  (P = r[4]),
                  (p = r[5]),
                  (f = r[6]),
                  (m = r[7]),
                  (g = r[8]),
                  (y = r[9]),
                  (v = r[10]),
                  (T = r[12]),
                  (_ = r[13]),
                  (S = r[14]),
                  (b = r[11]),
                  (e = Math.atan2(f, v)),
                  A.zOrigin &&
                    ((T = g * (S = -A.zOrigin) - r[12]),
                    (_ = y * S - r[13]),
                    (S = v * S + A.zOrigin - r[14])),
                  (A.rotationX = e * K),
                  e &&
                    ((s = P * (c = Math.cos(-e)) + g * (u = Math.sin(-e))),
                    (a = p * c + y * u),
                    (l = f * c + v * u),
                    (g = P * -u + g * c),
                    (y = p * -u + y * c),
                    (v = f * -u + v * c),
                    (b = m * -u + b * c),
                    (P = s),
                    (p = a),
                    (f = l)),
                  (e = Math.atan2(-h, v)),
                  (A.rotationY = e * K),
                  e &&
                    ((a = x * (c = Math.cos(-e)) - y * (u = Math.sin(-e))),
                    (l = h * c - v * u),
                    (y = x * u + y * c),
                    (v = h * u + v * c),
                    (b = d * u + b * c),
                    (w = s = w * c - g * u),
                    (x = a),
                    (h = l)),
                  (e = Math.atan2(x, w)),
                  (A.rotation = e * K),
                  e &&
                    ((s = w * (c = Math.cos(e)) + x * (u = Math.sin(e))),
                    (a = P * c + p * u),
                    (l = g * c + y * u),
                    (x = x * c - w * u),
                    (p = p * c - P * u),
                    (y = y * c - g * u),
                    (w = s),
                    (P = a),
                    (g = l)),
                  A.rotationX &&
                    359.9 < Math.abs(A.rotationX) + Math.abs(A.rotation) &&
                    ((A.rotationX = A.rotation = 0),
                    (A.rotationY = 180 - A.rotationY)),
                  (e = Math.atan2(P, p)),
                  (A.scaleX =
                    ((1e5 * Math.sqrt(w * w + x * x + h * h) + 0.5) | 0) / 1e5),
                  (A.scaleY =
                    ((1e5 * Math.sqrt(p * p + f * f) + 0.5) | 0) / 1e5),
                  (A.scaleZ =
                    ((1e5 * Math.sqrt(g * g + y * y + v * v) + 0.5) | 0) / 1e5),
                  (w /= A.scaleX),
                  (P /= A.scaleY),
                  (x /= A.scaleX),
                  (p /= A.scaleY),
                  2e-5 < Math.abs(e)
                    ? ((A.skewX = e * K),
                      (P = 0),
                      "simple" !== A.skewType && (A.scaleY *= 1 / Math.cos(e)))
                    : (A.skewX = 0),
                  (A.perspective = b ? 1 / (b < 0 ? -b : b) : 0),
                  (A.x = T),
                  (A.y = _),
                  (A.z = S),
                  A.svg &&
                    ((A.x -= A.xOrigin - (A.xOrigin * w - A.yOrigin * P)),
                    (A.y -= A.yOrigin - (A.yOrigin * x - A.xOrigin * p))))
                : (Gt &&
                    !n &&
                    r.length &&
                    A.x === r[4] &&
                    A.y === r[5] &&
                    (A.rotationX || A.rotationY)) ||
                  ((S = (_ = 6 <= r.length) ? r[0] : 1),
                  (w = r[1] || 0),
                  (P = r[2] || 0),
                  (x = _ ? r[3] : 1),
                  (A.x = r[4] || 0),
                  (A.y = r[5] || 0),
                  (p = Math.sqrt(S * S + w * w)),
                  (n = Math.sqrt(x * x + P * P)),
                  (_ = S || w ? Math.atan2(w, S) * K : A.rotation || 0),
                  (r = P || x ? Math.atan2(P, x) * K + _ : A.skewX || 0),
                  (A.scaleX = p),
                  (A.scaleY = n),
                  (A.rotation = _),
                  (A.skewX = r),
                  Gt &&
                    ((A.rotationX = A.rotationY = A.z = 0),
                    (A.perspective = k),
                    (A.scaleZ = 1)),
                  A.svg &&
                    ((A.x -= A.xOrigin - (A.xOrigin * S + A.yOrigin * P)),
                    (A.y -= A.yOrigin - (A.xOrigin * w + A.yOrigin * x)))),
              90 < Math.abs(A.skewX) &&
                Math.abs(A.skewX) < 270 &&
                (M
                  ? ((A.scaleX *= -1),
                    (A.skewX += A.rotation <= 0 ? 180 : -180),
                    (A.rotation += A.rotation <= 0 ? 180 : -180))
                  : ((A.scaleY *= -1), (A.skewX += A.skewX <= 0 ? 180 : -180))),
              (A.zOrigin = C),
              A))
                A[o] < 2e-5 && -2e-5 < A[o] && (A[o] = 0);
            return (
              i &&
                (t._gsTransform = A).svg &&
                (Mt && t.style[It]
                  ? E.delayedCall(0.001, function () {
                      Ut(t.style, It);
                    })
                  : !Mt &&
                    t.getAttribute("transform") &&
                    E.delayedCall(0.001, function () {
                      t.removeAttribute("transform");
                    })),
              A
            );
          }),
          jt =
            (n.set3DTransformRatio =
            n.setTransformRatio =
              function (t) {
                var e,
                  i,
                  n,
                  o,
                  r,
                  s,
                  a,
                  l,
                  c,
                  u,
                  h,
                  d,
                  p,
                  f,
                  m,
                  g,
                  y = this.data,
                  v = this.t.style,
                  T = y.rotation,
                  b = y.rotationX,
                  _ = y.rotationY,
                  S = y.scaleX,
                  w = y.scaleY,
                  P = y.scaleZ,
                  x = y.x,
                  A = y.y,
                  M = y.z,
                  C = y.svg,
                  k = y.perspective,
                  E = y.force3D,
                  I = y.skewY,
                  O = y.skewX;
                if (
                  (I && ((O += I), (T += I)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== E ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      E) ||
                    M ||
                    k ||
                    _ ||
                    b ||
                    1 !== P
                  ) ||
                    (Mt && C) ||
                    !Gt)
                )
                  T || O || C
                    ? ((T *= q),
                      (m = O * q),
                      (g = 1e5),
                      (i = Math.cos(T) * S),
                      (o = Math.sin(T) * S),
                      (n = Math.sin(T - m) * -w),
                      (r = Math.cos(T - m) * w),
                      m &&
                        "simple" === y.skewType &&
                        ((e = Math.tan(m - I * q)),
                        (n *= e = Math.sqrt(1 + e * e)),
                        (r *= e),
                        I &&
                          ((e = Math.tan(I * q)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (o *= e))),
                      C &&
                        ((x +=
                          y.xOrigin -
                          (y.xOrigin * i + y.yOrigin * n) +
                          y.xOffset),
                        (A +=
                          y.yOrigin -
                          (y.xOrigin * o + y.yOrigin * r) +
                          y.yOffset),
                        Mt &&
                          (y.xPercent || y.yPercent) &&
                          ((h = this.t.getBBox()),
                          (x += 0.01 * y.xPercent * h.width),
                          (A += 0.01 * y.yPercent * h.height)),
                        x < (h = 1e-6) && -h < x && (x = 0),
                        A < h && -h < A && (A = 0)),
                      (f =
                        ((i * g) | 0) / g +
                        "," +
                        ((o * g) | 0) / g +
                        "," +
                        ((n * g) | 0) / g +
                        "," +
                        ((r * g) | 0) / g +
                        "," +
                        x +
                        "," +
                        A +
                        ")"),
                      C && Mt
                        ? this.t.setAttribute("transform", "matrix(" + f)
                        : (v[It] =
                            (y.xPercent || y.yPercent
                              ? "translate(" +
                                y.xPercent +
                                "%," +
                                y.yPercent +
                                "%) matrix("
                              : "matrix(") + f))
                    : (v[It] =
                        (y.xPercent || y.yPercent
                          ? "translate(" +
                            y.xPercent +
                            "%," +
                            y.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        S +
                        ",0,0," +
                        w +
                        "," +
                        x +
                        "," +
                        A +
                        ")");
                else {
                  if (
                    (H &&
                      (S < (h = 1e-4) && -h < S && (S = P = 2e-5),
                      w < h && -h < w && (w = P = 2e-5),
                      !k || y.z || y.rotationX || y.rotationY || (k = 0)),
                    T || O)
                  )
                    (T *= q),
                      (d = i = Math.cos(T)),
                      (p = o = Math.sin(T)),
                      O &&
                        ((T -= O * q),
                        (d = Math.cos(T)),
                        (p = Math.sin(T)),
                        "simple" === y.skewType &&
                          ((e = Math.tan((O - I) * q)),
                          (d *= e = Math.sqrt(1 + e * e)),
                          (p *= e),
                          y.skewY &&
                            ((e = Math.tan(I * q)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (o *= e)))),
                      (n = -p),
                      (r = d);
                  else {
                    if (!(_ || b || 1 !== P || k || C))
                      return void (v[It] =
                        (y.xPercent || y.yPercent
                          ? "translate(" +
                            y.xPercent +
                            "%," +
                            y.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        x +
                        "px," +
                        A +
                        "px," +
                        M +
                        "px)" +
                        (1 !== S || 1 !== w
                          ? " scale(" + S + "," + w + ")"
                          : ""));
                    (i = r = 1), (n = o = 0);
                  }
                  (l = 1),
                    (E = t = s = a = c = u = 0),
                    (m = k ? -1 / k : 0),
                    (g = y.zOrigin),
                    (h = 1e-6),
                    (O = ","),
                    (I = "0"),
                    (T = _ * q) &&
                      ((d = Math.cos(T)),
                      (c = m * (s = -(p = Math.sin(T)))),
                      (E = i * p),
                      (t = o * p),
                      (m *= l = d),
                      (i *= d),
                      (o *= d)),
                    (T = b * q) &&
                      ((e = n * (d = Math.cos(T)) + E * (p = Math.sin(T))),
                      (T = r * d + t * p),
                      (a = l * p),
                      (u = m * p),
                      (E = n * -p + E * d),
                      (t = r * -p + t * d),
                      (l *= d),
                      (m *= d),
                      (n = e),
                      (r = T)),
                    1 !== P && ((E *= P), (t *= P), (l *= P), (m *= P)),
                    1 !== w && ((n *= w), (r *= w), (a *= w), (u *= w)),
                    1 !== S && ((i *= S), (o *= S), (s *= S), (c *= S)),
                    (g || C) &&
                      (g && ((x += E * -g), (A += t * -g), (M += l * -g + g)),
                      C &&
                        ((x +=
                          y.xOrigin -
                          (y.xOrigin * i + y.yOrigin * n) +
                          y.xOffset),
                        (A +=
                          y.yOrigin -
                          (y.xOrigin * o + y.yOrigin * r) +
                          y.yOffset)),
                      x < h && -h < x && (x = I),
                      A < h && -h < A && (A = I),
                      M < h && -h < M && (M = 0)),
                    (f =
                      y.xPercent || y.yPercent
                        ? "translate(" +
                          y.xPercent +
                          "%," +
                          y.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (f +=
                      (i < h && -h < i ? I : i) +
                      O +
                      (o < h && -h < o ? I : o) +
                      O +
                      (s < h && -h < s ? I : s)),
                    (f +=
                      O +
                      (c < h && -h < c ? I : c) +
                      O +
                      (n < h && -h < n ? I : n) +
                      O +
                      (r < h && -h < r ? I : r)),
                    b || _ || 1 !== P
                      ? ((f +=
                          O +
                          (a < h && -h < a ? I : a) +
                          O +
                          (u < h && -h < u ? I : u) +
                          O +
                          (E < h && -h < E ? I : E)),
                        (f +=
                          O +
                          (t < h && -h < t ? I : t) +
                          O +
                          (l < h && -h < l ? I : l) +
                          O +
                          (m < h && -h < m ? I : m) +
                          O))
                      : (f += ",0,0,0,0,1,0,"),
                    (v[It] = f +=
                      x + O + A + O + M + O + (k ? 1 + -M / k : 1) + ")");
                }
              });
        ((t = Dt.prototype).x =
          t.y =
          t.z =
          t.skewX =
          t.skewY =
          t.rotation =
          t.rotationX =
          t.rotationY =
          t.zOrigin =
          t.xPercent =
          t.yPercent =
          t.xOffset =
          t.yOffset =
            0),
          (t.scaleX = t.scaleY = t.scaleZ = 1),
          wt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, i, n, o, r, s) {
                if (n._lastParsedTransform === s) return o;
                var a,
                  l =
                    (n._lastParsedTransform = s).scale &&
                    "function" == typeof s.scale
                      ? s.scale
                      : 0;
                "function" == typeof s[i] && ((a = s[i]), (s[i] = e)),
                  l && (s.scale = l(O, t));
                var c,
                  u,
                  h,
                  d,
                  p,
                  f,
                  m,
                  g,
                  y = t._gsTransform,
                  v = t.style,
                  T = Et.length,
                  b = s,
                  _ = {},
                  e = "transformOrigin",
                  S = Vt(t, P, !0, b.parseTransform),
                  w =
                    b.transform &&
                    ("function" == typeof b.transform
                      ? b.transform(O, k)
                      : b.transform);
                if (
                  ((S.skewType = b.skewType || S.skewType || I.defaultSkewType),
                  (n._transform = S),
                  w && "string" == typeof w && It)
                )
                  ((u = J.style)[It] = w),
                    (u.display = "block"),
                    (u.position = "absolute"),
                    -1 !== w.indexOf("%") &&
                      ((u.width = st(t, "width")),
                      (u.height = st(t, "height"))),
                    Z.body.appendChild(J),
                    (c = Vt(J, null, !1)),
                    "simple" === S.skewType &&
                      (c.scaleY *= Math.cos(c.skewX * q)),
                    S.svg &&
                      ((p = S.xOrigin),
                      (f = S.yOrigin),
                      (c.x -= S.xOffset),
                      (c.y -= S.yOffset),
                      (b.transformOrigin || b.svgOrigin) &&
                        ((w = {}),
                        xt(
                          t,
                          ht(b.transformOrigin),
                          w,
                          b.svgOrigin,
                          b.smoothOrigin,
                          !0
                        ),
                        (p = w.xOrigin),
                        (f = w.yOrigin),
                        (c.x -= w.xOffset - S.xOffset),
                        (c.y -= w.yOffset - S.yOffset)),
                      (p || f) &&
                        ((m = Wt(J, !0)),
                        (c.x -= p - (p * m[0] + f * m[2])),
                        (c.y -= f - (p * m[1] + f * m[3])))),
                    Z.body.removeChild(J),
                    c.perspective || (c.perspective = S.perspective),
                    null != b.xPercent &&
                      (c.xPercent = x(b.xPercent, S.xPercent)),
                    null != b.yPercent &&
                      (c.yPercent = x(b.yPercent, S.yPercent));
                else if ("object" == typeof b) {
                  if (
                    ((c = {
                      scaleX: x(
                        null != b.scaleX ? b.scaleX : b.scale,
                        S.scaleX
                      ),
                      scaleY: x(
                        null != b.scaleY ? b.scaleY : b.scale,
                        S.scaleY
                      ),
                      scaleZ: x(b.scaleZ, S.scaleZ),
                      x: x(b.x, S.x),
                      y: x(b.y, S.y),
                      z: x(b.z, S.z),
                      xPercent: x(b.xPercent, S.xPercent),
                      yPercent: x(b.yPercent, S.yPercent),
                      perspective: x(b.transformPerspective, S.perspective),
                    }),
                    null != (d = b.directionalRotation))
                  )
                    if ("object" == typeof d) for (u in d) b[u] = d[u];
                    else b.rotation = d;
                  "string" == typeof b.x &&
                    -1 !== b.x.indexOf("%") &&
                    ((c.x = 0), (c.xPercent = x(b.x, S.xPercent))),
                    "string" == typeof b.y &&
                      -1 !== b.y.indexOf("%") &&
                      ((c.y = 0), (c.yPercent = x(b.y, S.yPercent))),
                    (c.rotation = M(
                      "rotation" in b
                        ? b.rotation
                        : "shortRotation" in b
                        ? b.shortRotation + "_short"
                        : "rotationZ" in b
                        ? b.rotationZ
                        : S.rotation,
                      S.rotation,
                      "rotation",
                      _
                    )),
                    Gt &&
                      ((c.rotationX = M(
                        "rotationX" in b
                          ? b.rotationX
                          : "shortRotationX" in b
                          ? b.shortRotationX + "_short"
                          : S.rotationX || 0,
                        S.rotationX,
                        "rotationX",
                        _
                      )),
                      (c.rotationY = M(
                        "rotationY" in b
                          ? b.rotationY
                          : "shortRotationY" in b
                          ? b.shortRotationY + "_short"
                          : S.rotationY || 0,
                        S.rotationY,
                        "rotationY",
                        _
                      ))),
                    (c.skewX = M(b.skewX, S.skewX)),
                    (c.skewY = M(b.skewY, S.skewY));
                }
                for (
                  Gt &&
                    null != b.force3D &&
                    ((S.force3D = b.force3D), (h = !0)),
                    (m =
                      S.force3D ||
                      S.z ||
                      S.rotationX ||
                      S.rotationY ||
                      c.z ||
                      c.rotationX ||
                      c.rotationY ||
                      c.perspective) ||
                      null == b.scale ||
                      (c.scaleZ = 1);
                  -1 < --T;

                )
                  (1e-6 < (w = c[(g = Et[T])] - S[g]) ||
                    w < -1e-6 ||
                    null != b[g] ||
                    null != Q[g]) &&
                    ((h = !0),
                    (o = new Tt(S, g, S[g], w, o)),
                    g in _ && (o.e = _[g]),
                    (o.xs0 = 0),
                    (o.plugin = r),
                    n._overwriteProps.push(o.n));
                return (
                  (w = b.transformOrigin),
                  S.svg &&
                    (w || b.svgOrigin) &&
                    ((p = S.xOffset),
                    (f = S.yOffset),
                    xt(t, ht(w), c, b.svgOrigin, b.smoothOrigin),
                    (o = yt(
                      S,
                      "xOrigin",
                      (y ? S : c).xOrigin,
                      c.xOrigin,
                      o,
                      e
                    )),
                    (o = yt(
                      S,
                      "yOrigin",
                      (y ? S : c).yOrigin,
                      c.yOrigin,
                      o,
                      e
                    )),
                    (p === S.xOffset && f === S.yOffset) ||
                      ((o = yt(
                        S,
                        "xOffset",
                        y ? p : S.xOffset,
                        S.xOffset,
                        o,
                        e
                      )),
                      (o = yt(
                        S,
                        "yOffset",
                        y ? f : S.yOffset,
                        S.yOffset,
                        o,
                        e
                      ))),
                    (w = "0px 0px")),
                  (w || (Gt && m && S.zOrigin)) &&
                    (It
                      ? ((h = !0),
                        (g = Ht),
                        (w = (w || st(t, g, P, !1, "50% 50%")) + ""),
                        ((o = new Tt(v, g, 0, 0, o, -1, e)).b = v[g]),
                        (o.plugin = r),
                        Gt
                          ? ((u = S.zOrigin),
                            (w = w.split(" ")),
                            (S.zOrigin =
                              (2 < w.length && (0 === u || "0px" !== w[2])
                                ? parseFloat(w[2])
                                : u) || 0),
                            (o.xs0 = o.e =
                              w[0] + " " + (w[1] || "50%") + " 0px"),
                            ((o = new Tt(S, "zOrigin", 0, 0, o, -1, o.n)).b =
                              u),
                            (o.xs0 = o.e = S.zOrigin))
                          : (o.xs0 = o.e = w))
                      : ht(w + "", S)),
                  h &&
                    (n._transformType =
                      (S.svg && Mt) || (!m && 3 !== this._transformType)
                        ? 2
                        : 3),
                  a && (s[i] = a),
                  l && (s.scale = l),
                  o
                );
              },
              prefix: !0,
            }
          ),
          wt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          wt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, o, r) {
              e = this.format(e);
              for (
                var s,
                  a,
                  l,
                  c,
                  u,
                  h,
                  d,
                  p,
                  f,
                  m,
                  g = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  y = t.style,
                  v = parseFloat(t.offsetWidth),
                  T = parseFloat(t.offsetHeight),
                  b = e.split(" "),
                  _ = 0;
                _ < g.length;
                _++
              )
                this.p.indexOf("border") && (g[_] = w(g[_])),
                  -1 !== (l = a = st(t, g[_], P, !1, "0px")).indexOf(" ") &&
                    ((l = (a = l.split(" "))[0]), (a = a[1])),
                  (c = s = b[_]),
                  (f = parseFloat(l)),
                  (m = l.substr((f + "").length)),
                  (h =
                    "" ===
                    (h = (d = "=" === c.charAt(1))
                      ? ((u = parseInt(c.charAt(0) + "1", 10)),
                        (c = c.substr(2)),
                        (u *= parseFloat(c)),
                        c.substr((u + "").length - (u < 0 ? 1 : 0)) || "")
                      : ((u = parseFloat(c)), c.substr((u + "").length)))
                      ? S[i] || m
                      : h) !== m &&
                    ((p = at(t, "borderLeft", f, m)),
                    (f = at(t, "borderTop", f, m)),
                    (a =
                      "%" === h
                        ? ((l = (p / v) * 100 + "%"), (f / T) * 100 + "%")
                        : "em" === h
                        ? ((l = p / (m = at(t, "borderLeft", 1, "em")) + "em"),
                          f / m + "em")
                        : ((l = p + "px"), f + "px")),
                    d &&
                      ((c = parseFloat(l) + u + h),
                      (s = parseFloat(a) + u + h))),
                  (o = bt(y, g[_], l + " " + a, c + " " + s, !1, "0px", o));
              return o;
            },
            prefix: !0,
            formatter: mt("0px 0px 0px 0px", !1, !0),
          }),
          wt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, i, n, o, r) {
                return bt(
                  t.style,
                  i,
                  this.format(st(t, i, P, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  o
                );
              },
              prefix: !0,
              formatter: mt("0px 0px", !1, !0),
            }
          ),
          wt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, n, o, r) {
              var s,
                a,
                l,
                c,
                u,
                h,
                d = "background-position",
                p = P || rt(t, null),
                f = this.format(
                  (p
                    ? _
                      ? p.getPropertyValue(d + "-x") +
                        " " +
                        p.getPropertyValue(d + "-y")
                      : p.getPropertyValue(d)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                e = this.format(e);
              if (
                (-1 !== f.indexOf("%")) != (-1 !== e.indexOf("%")) &&
                e.split(",").length < 2 &&
                (h = st(t, "backgroundImage").replace(W, "")) &&
                "none" !== h
              ) {
                for (
                  s = f.split(" "),
                    a = e.split(" "),
                    tt.setAttribute("src", h),
                    l = 2;
                  -1 < --l;

                )
                  (c = -1 !== (f = s[l]).indexOf("%")) !=
                    (-1 !== a[l].indexOf("%")) &&
                    ((u =
                      0 === l
                        ? t.offsetWidth - tt.width
                        : t.offsetHeight - tt.height),
                    (s[l] = c
                      ? (parseFloat(f) / 100) * u + "px"
                      : (parseFloat(f) / u) * 100 + "%"));
                f = s.join(" ");
              }
              return this.parseComplex(t.style, f, e, o, r);
            },
            formatter: ht,
          }),
          wt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : ht(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          wt("perspective", { defaultValue: "0px", prefix: !0 }),
          wt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          wt("transformStyle", { prefix: !0 }),
          wt("backfaceVisibility", { prefix: !0 }),
          wt("userSelect", { prefix: !0 }),
          wt("margin", {
            parser: gt("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          wt("padding", {
            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          wt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, o, r) {
              var s, a;
              return (
                (e =
                  _ < 9
                    ? ((s =
                        "rect(" +
                        (s = t.currentStyle).clipTop +
                        (a = _ < 8 ? " " : ",") +
                        s.clipRight +
                        a +
                        s.clipBottom +
                        a +
                        s.clipLeft +
                        ")"),
                      this.format(e).split(",").join(a))
                    : ((s = this.format(st(t, this.p, P, !1, this.dflt))),
                      this.format(e))),
                this.parseComplex(t.style, s, e, o, r)
              );
            },
          }),
          wt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          wt("autoRound,strictUnits", {
            parser: function (t, e, i, n, o) {
              return o;
            },
          }),
          wt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, n, o, r) {
              var s = st(t, "borderTopWidth", P, !1, "0px"),
                a = this.format(e).split(" "),
                e = a[0].replace(L, "");
              return (
                "px" !== e &&
                  (s = parseFloat(s) / at(t, "borderTopWidth", 1, e) + e),
                this.parseComplex(
                  t.style,
                  this.format(
                    s +
                      " " +
                      st(t, "borderTopStyle", P, !1, "solid") +
                      " " +
                      st(t, "borderTopColor", P, !1, "#000")
                  ),
                  a.join(" "),
                  o,
                  r
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(ft) || ["#000"])[0]
              );
            },
          }),
          wt("borderWidth", {
            parser: gt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          wt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, o, r) {
              var s = t.style,
                t = "cssFloat" in s ? "cssFloat" : "styleFloat";
              return new Tt(s, t, 0, 0, o, -1, i, !1, 0, s[t], e);
            },
          });
        function $t(t) {
          var e,
            i = this.t,
            n = i.filter || st(this.data, "filter") || "",
            t = (this.s + this.c * t) | 0;
          (e =
            100 == t
              ? -1 === n.indexOf("atrix(") &&
                -1 === n.indexOf("radient(") &&
                -1 === n.indexOf("oader(")
                ? (i.removeAttribute("filter"), !st(this.data, "filter"))
                : ((i.filter = n.replace(o, "")), !0)
              : e) ||
            (this.xn1 && (i.filter = n = n || "alpha(opacity=" + t + ")"),
            -1 === n.indexOf("pacity")
              ? (0 == t && this.xn1) ||
                (i.filter = n + " alpha(opacity=" + t + ")")
              : (i.filter = n.replace(R, "opacity=" + t)));
        }
        wt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, n, o, r) {
            var s = parseFloat(st(t, "opacity", P, !1, "1")),
              a = t.style,
              l = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s),
              l &&
                1 === s &&
                "hidden" === st(t, "visibility", P) &&
                0 !== e &&
                (s = 0),
              it
                ? (o = new Tt(a, "opacity", s, e - s, o))
                : (((o = new Tt(a, "opacity", 100 * s, 100 * (e - s), o)).xn1 =
                    l ? 1 : 0),
                  (a.zoom = 1),
                  (o.type = 2),
                  (o.b = "alpha(opacity=" + o.s + ")"),
                  (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                  (o.data = t),
                  (o.plugin = r),
                  (o.setRatio = $t)),
              l &&
                (((o = new Tt(
                  a,
                  "visibility",
                  0,
                  0,
                  o,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== s ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                n._overwriteProps.push(o.n),
                n._overwriteProps.push(i)),
              o
            );
          },
        });
        function Yt(t) {
          if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e; )
              e.v ? (i[e.p] = e.v) : Ut(i, e.p), (e = e._next);
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
          } else
            this.t.getAttribute("class") !== this.e &&
              this.t.setAttribute("class", this.e);
        }
        var Ut = function (t, e) {
          e &&
            (t.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                t.removeProperty(e.replace(X, "-$1").toLowerCase()))
              : t.removeAttribute(e));
        };
        wt("className", {
          parser: function (t, e, i, n, o, r, s) {
            var a,
              l,
              c,
              u = t.getAttribute("class") || "",
              h = t.style.cssText;
            if (
              (((o = n._classNamePT = new Tt(t, i, 0, 0, o, 2)).setRatio = Yt),
              (o.pr = -11),
              (d = !0),
              (o.b = u),
              (a = m(t, P)),
              (i = t._gsClassPT))
            ) {
              for (l = {}, c = i.data; c; ) (l[c.p] = 1), (c = c._next);
              i.setRatio(1);
            }
            return (
              ((t._gsClassPT = o).e =
                "=" !== e.charAt(1)
                  ? e
                  : u.replace(
                      new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", o.e),
              (s = g(t, a, m(t), s, l)),
              t.setAttribute("class", u),
              (o.data = s.firstMPT),
              (t.style.cssText = h),
              (o.xfirst = n.parse(t, s.difs, o, r))
            );
          },
        });
        function qt(t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              n,
              o,
              r = this.t.style,
              s = p.transform.parse;
            if ("all" === this.e) o = !(r.cssText = "");
            else
              for (
                n = (e = this.e.split(" ").join("").split(",")).length;
                -1 < --n;

              )
                (i = e[n]),
                  p[i] &&
                    (p[i].parse === s
                      ? (o = !0)
                      : (i = "transformOrigin" === i ? Ht : p[i].p)),
                  Ut(r, i);
            o &&
              (Ut(r, It),
              (t = this.t._gsTransform) &&
                (t.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        }
        for (
          wt("clearProps", {
            parser: function (t, e, i, n, o) {
              return (
                ((o = new Tt(t, i, 0, 0, o, 2)).setRatio = qt),
                (o.e = e),
                (o.pr = -10),
                (o.data = n._tween),
                (d = !0),
                o
              );
            },
          }),
            t = "bezier,throwProps,physicsProps,physics2D".split(","),
            _t = t.length;
          _t--;

        )
          Pt(t[_t]);
        ((t = I.prototype)._firstPT =
          t._lastParsedTransform =
          t._transform =
            null),
          (t._onInitTween = function (t, e, i, n) {
            if (!t.nodeType) return !1;
            (this._target = k = t),
              (this._tween = i),
              (this._vars = e),
              (O = n),
              (C = e.autoRound),
              (d = !1),
              (S = e.suffixMap || I.suffixMap),
              (P = rt(t, "")),
              (h = this._overwriteProps);
            var o,
              r,
              s,
              a,
              l,
              c,
              n = t.style;
            if (
              (y &&
                "" === n.zIndex &&
                (("auto" !== (c = st(t, "zIndex", P)) && "" !== c) ||
                  this._addLazySet(n, "zIndex", 0)),
              "string" == typeof e &&
                ((s = n.cssText),
                (c = m(t, P)),
                (n.cssText = s + ";" + e),
                (c = g(t, c, m(t)).difs),
                !it && z.test(e) && (c.opacity = parseFloat(RegExp.$1)),
                (e = c),
                (n.cssText = s)),
              e.className
                ? (this._firstPT = o =
                    p.className.parse(
                      t,
                      e.className,
                      "className",
                      this,
                      null,
                      null,
                      e
                    ))
                : (this._firstPT = o = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                c = 3 === this._transformType,
                  It
                    ? v &&
                      ((y = !0),
                      "" === n.zIndex &&
                        (("auto" !== (e = st(t, "zIndex", P)) && "" !== e) ||
                          this._addLazySet(n, "zIndex", 0)),
                      T &&
                        this._addLazySet(
                          n,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (c ? "visible" : "hidden")
                        ))
                    : (n.zoom = 1),
                  r = o;
                r && r._next;

              )
                r = r._next;
              (n = new Tt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(n, null, r),
                (n.setRatio = It ? jt : At),
                (n.data = this._transform || Vt(t, P, !0)),
                (n.tween = i),
                (n.pr = -1),
                h.pop();
            }
            if (d) {
              for (; o; ) {
                for (l = o._next, r = s; r && r.pr > o.pr; ) r = r._next;
                (o._prev = r ? r._prev : a) ? (o._prev._next = o) : (s = o),
                  (o._next = r) ? (r._prev = o) : (a = o),
                  (o = l);
              }
              this._firstPT = s;
            }
            return !0;
          }),
          (t.parse = function (t, e, i, n) {
            var o,
              r,
              s,
              a,
              l,
              c,
              u,
              h,
              d = t.style;
            for (o in e) {
              if (
                ("function" == typeof (l = e[o]) && (l = l(O, k)), (h = p[o]))
              )
                i = h.parse(t, l, o, this, i, n, e);
              else {
                if ("--" === o.substr(0, 2)) {
                  this._tween._propLookup[o] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    rt(t).getPropertyValue(o) + "",
                    l + "",
                    o,
                    !1,
                    o
                  );
                  continue;
                }
                (a = st(t, o, P) + ""),
                  (u = "string" == typeof l),
                  "color" === o ||
                  "fill" === o ||
                  "stroke" === o ||
                  -1 !== o.indexOf("Color") ||
                  (u && N.test(l))
                    ? (u ||
                        (l =
                          (3 < (l = pt(l)).length ? "rgba(" : "rgb(") +
                          l.join(",") +
                          ")"),
                      (i = bt(d, o, a, l, !0, "transparent", i, 0, n)))
                    : u && U.test(l)
                    ? (i = bt(d, o, a, l, !0, null, i, 0, n))
                    : ((c =
                        (r = parseFloat(a)) || 0 === r
                          ? a.substr((r + "").length)
                          : ""),
                      ("" !== a && "auto" !== a) ||
                        (c =
                          "width" === o || "height" === o
                            ? ((r = (function (t, e, i) {
                                if ("svg" === (t.nodeName + "").toLowerCase())
                                  return (i || rt(t))[e] || 0;
                                if (t.getCTM && Xt(t))
                                  return t.getBBox()[e] || 0;
                                var n = parseFloat(
                                    "width" === e
                                      ? t.offsetWidth
                                      : t.offsetHeight
                                  ),
                                  o = ct[e],
                                  r = o.length;
                                for (i = i || rt(t, null); -1 < --r; )
                                  (n -=
                                    parseFloat(
                                      st(t, "padding" + o[r], i, !0)
                                    ) || 0),
                                    (n -=
                                      parseFloat(
                                        st(t, "border" + o[r] + "Width", i, !0)
                                      ) || 0);
                                return n;
                              })(t, o, P)),
                              "px")
                            : "left" === o || "top" === o
                            ? ((r = lt(t, o, P)), "px")
                            : ((r = "opacity" !== o ? 0 : 1), "")),
                      "" ===
                        (u = (h = u && "=" === l.charAt(1))
                          ? ((s = parseInt(l.charAt(0) + "1", 10)),
                            (l = l.substr(2)),
                            (s *= parseFloat(l)),
                            l.replace(L, ""))
                          : ((s = parseFloat(l)), u ? l.replace(L, "") : "")) &&
                        (u = o in S ? S[o] : c),
                      (l = s || 0 === s ? (h ? s + r : s) + u : e[o]),
                      c === u ||
                        ("" === u && "lineHeight" !== o) ||
                        (!s && 0 !== s) ||
                        !r ||
                        ((r = at(t, o, r, c)),
                        "%" === u
                          ? ((r /= at(t, o, 100, "%") / 100),
                            !0 !== e.strictUnits && (a = r + "%"))
                          : "em" === u ||
                            "rem" === u ||
                            "vw" === u ||
                            "vh" === u
                          ? (r /= at(t, o, 1, u))
                          : "px" !== u && ((s = at(t, o, s, u)), (u = "px")),
                        h && (s || 0 === s) && (l = s + r + u)),
                      h && (s += r),
                      (!r && 0 !== r) || (!s && 0 !== s)
                        ? void 0 !== d[o] &&
                          (l || (l + "" != "NaN" && null != l))
                          ? ((i = new Tt(
                              d,
                              o,
                              s || r || 0,
                              0,
                              i,
                              -1,
                              o,
                              !1,
                              0,
                              a,
                              l
                            )).xs0 =
                              "none" !== l ||
                              ("display" !== o && -1 === o.indexOf("Style"))
                                ? l
                                : a)
                          : f("invalid " + o + " tween value: " + e[o])
                        : ((i = new Tt(
                            d,
                            o,
                            r,
                            s - r,
                            i,
                            0,
                            o,
                            !1 !== C && ("px" === u || "zIndex" === o),
                            0,
                            a,
                            l
                          )).xs0 = u));
              }
              n && i && !i.plugin && (i.plugin = n);
            }
            return i;
          }),
          (t.setRatio = function (t) {
            var e,
              i,
              n,
              o = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; o; ) {
                  if (
                    ((e = o.c * t + o.s),
                    o.r ? (e = o.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                    o.type)
                  )
                    if (1 === o.type)
                      if (2 === (n = o.l))
                        o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2;
                      else if (3 === n)
                        o.t[o.p] =
                          o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                      else if (4 === n)
                        o.t[o.p] =
                          o.xs0 +
                          e +
                          o.xs1 +
                          o.xn1 +
                          o.xs2 +
                          o.xn2 +
                          o.xs3 +
                          o.xn3 +
                          o.xs4;
                      else if (5 === n)
                        o.t[o.p] =
                          o.xs0 +
                          e +
                          o.xs1 +
                          o.xn1 +
                          o.xs2 +
                          o.xn2 +
                          o.xs3 +
                          o.xn3 +
                          o.xs4 +
                          o.xn4 +
                          o.xs5;
                      else {
                        for (i = o.xs0 + e + o.xs1, n = 1; n < o.l; n++)
                          i += o["xn" + n] + o["xs" + (n + 1)];
                        o.t[o.p] = i;
                      }
                    else
                      -1 === o.type
                        ? (o.t[o.p] = o.xs0)
                        : o.setRatio && o.setRatio(t);
                  else o.t[o.p] = e + o.xs0;
                  o = o._next;
                }
              else
                for (; o; )
                  2 !== o.type ? (o.t[o.p] = o.b) : o.setRatio(t),
                    (o = o._next);
            else
              for (; o; ) {
                if (2 !== o.type)
                  if (o.r && -1 !== o.type)
                    if (((e = o.r(o.s + o.c)), o.type)) {
                      if (1 === o.type) {
                        for (
                          n = o.l, i = o.xs0 + e + o.xs1, n = 1;
                          n < o.l;
                          n++
                        )
                          i += o["xn" + n] + o["xs" + (n + 1)];
                        o.t[o.p] = i;
                      }
                    } else o.t[o.p] = e + o.xs0;
                  else o.t[o.p] = o.e;
                else o.setRatio(t);
                o = o._next;
              }
          }),
          (t._enableTransforms = function (t) {
            (this._transform = this._transform || Vt(this._target, P, !0)),
              (this._transformType =
                (this._transform.svg && Mt) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        function Kt(t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        }
        (t._addLazySet = function (t, e, i) {
          e = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
          (e.e = i), (e.setRatio = Kt), (e.data = this);
        }),
          (t._linkCSSP = function (t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (t._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (t._kill = function (t) {
            var e,
              i,
              n,
              o = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((o = {}), t)) o[i] = t[i];
              (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((n = e.xfirst) && n._prev
                  ? this._linkCSSP(n._prev, e._next, n._prev._prev)
                  : n === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, n._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return r.prototype._kill.call(this, o);
          });
        var Qt = function (t, e, i) {
          var n, o, r, s;
          if (t.slice) for (o = t.length; -1 < --o; ) Qt(t[o], e, i);
          else
            for (o = (n = t.childNodes).length; -1 < --o; )
              (s = (r = n[o]).type),
                r.style && (e.push(m(r)), i && i.push(r)),
                (1 !== s && 9 !== s && 11 !== s) ||
                  !r.childNodes.length ||
                  Qt(r, e, i);
        };
        return (
          (I.cascadeTo = function (t, e, i) {
            var n,
              o,
              r,
              s,
              a = E.to(t, e, i),
              l = [a],
              c = [],
              u = [],
              h = [],
              d = E._internals.reservedProps;
            for (
              t = a._targets || a.target,
                Qt(t, c, h),
                a.render(e, !0, !0),
                Qt(t, u),
                a.render(0, !0, !0),
                a._enabled(!0),
                n = h.length;
              -1 < --n;

            )
              if ((o = g(h[n], c[n], u[n])).firstMPT) {
                for (r in ((o = o.difs), i)) d[r] && (o[r] = i[r]);
                for (r in ((s = {}), o)) s[r] = c[n][r];
                l.push(E.fromTo(h[n], e, s, o));
              }
            return l;
          }),
          r.activate([I]),
          I
        );
      },
      !0
    ),
    ((t = (t = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      init: function (t, e, i) {
        return (this._tween = i), !0;
      },
    })).prototype)._onInitAllProps = function () {
      var t,
        e,
        i,
        n,
        o = this._tween,
        r = o.vars.roundProps,
        s = {},
        a = o._propLookup.roundProps;
      if ("object" != typeof r || r.push)
        for (
          i = (r = "string" == typeof r ? r.split(",") : r).length;
          -1 < --i;

        )
          s[r[i]] = Math.round;
      else
        for (n in r)
          s[n] = (function (e) {
            var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function (t) {
              return ((Math.round(t / e) * e * i) | 0) / i;
            };
          })(r[n]);
      for (n in s)
        for (t = o._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(s)
              : t.n === n &&
                (2 === t.f && t.t
                  ? (function (t, e) {
                      for (; t; )
                        t.f || t.blob || (t.m = e || Math.round), (t = t._next);
                    })(t.t._firstPT, s[n])
                  : (this._add(t.t, n, t.s, t.c, s[n]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : o._firstPT === t && (o._firstPT = e),
                    (t._next = t._prev = null),
                    (o._propLookup[n] = a))),
            (t = e);
      return !1;
    }),
    (t._add = function (t, e, i, n, o) {
      this._addTween(t, e, i, i + n, e, o || Math.round),
        this._overwriteProps.push(e);
    }),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function (t, e, i, n) {
        var o, r;
        if ("function" != typeof t.setAttribute) return !1;
        for (o in e)
          (r = e[o]),
            "function" == typeof r && (r = r(n, t)),
            this._addTween(
              t,
              "setAttribute",
              t.getAttribute(o) + "",
              r + "",
              o,
              !1,
              o
            ),
            this._overwriteProps.push(o);
        return !0;
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, n) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var o,
          r,
          s,
          a,
          l,
          c = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (o in e)
          "useRadians" !== o &&
            ((a = e[o]),
            "function" == typeof a && (a = a(n, t)),
            (l = (a + "").split("_")),
            (r = l[0]),
            (s = parseFloat(
              "function" != typeof t[o]
                ? t[o]
                : t[
                    o.indexOf("set") ||
                    "function" != typeof t["get" + o.substr(3)]
                      ? o
                      : "get" + o.substr(3)
                  ]()
            )),
            (a = this.finals[o] =
              "string" == typeof r && "=" === r.charAt(1)
                ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))
                : Number(r) || 0),
            (a = a - s),
            l.length &&
              ((r = l.join("_")),
              -1 !== r.indexOf("short") &&
                ((a %= c), a !== a % (c / 2) && (a = a < 0 ? a + c : a - c)),
              -1 !== r.indexOf("_cw") && a < 0
                ? (a = ((a + 9999999999 * c) % c) - ((a / c) | 0) * c)
                : -1 !== r.indexOf("ccw") &&
                  0 < a &&
                  (a = ((a - 9999999999 * c) % c) - ((a / c) | 0) * c)),
            (1e-6 < a || a < -1e-6) &&
              (this._addTween(t, o, s, s + a, o),
              this._overwriteProps.push(o)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (g) {
        function t(t, e) {
          var i = c("easing." + t, function () {}, !0);
          return (
            ((t = i.prototype = new g()).constructor = i), (t.getRatio = e), i
          );
        }
        function e(t, e, i, n, o) {
          return (
            (n = c(
              "easing." + t,
              { easeOut: new e(), easeIn: new i(), easeInOut: new n() },
              !0
            )),
            u(n, t),
            n
          );
        }
        function y(t, e, i) {
          (this.t = t),
            (this.v = e),
            i &&
              ((((this.next = i).prev = this).c = i.v - e),
              (this.gap = i.t - t));
        }
        var i,
          n,
          o,
          r = _gsScope.GreenSockGlobals || _gsScope,
          s = r.com.greensock,
          a = 2 * Math.PI,
          l = Math.PI / 2,
          c = s._class,
          u = g.register || function () {},
          h = function (t, e) {
            var i = c(
                "easing." + t,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              t = (i.prototype = new g());
            return (
              (t.constructor = i),
              (t.getRatio = e),
              (t.config = function (t) {
                return new i(t);
              }),
              i
            );
          },
          s = e(
            "Back",
            h("BackOut", function (t) {
              return --t * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            h("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            h("BackInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          d = c(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : 1 < t && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = !0 === i);
            },
            !0
          ),
          h = (d.prototype = new g());
        return (
          (h.constructor = d),
          (h.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return t < this._p1
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 === t
                  ? 0
                  : 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (d.ease = new d(0.7, 0.7)),
          (h.config = d.config =
            function (t, e, i) {
              return new d(t, e, i);
            }),
          ((h = (i = c(
            "easing.SteppedEase",
            function (t, e) {
              (this._p1 = 1 / (t = t || 1)),
                (this._p2 = t + (e ? 0 : 1)),
                (this._p3 = e ? 1 : 0);
            },
            !0
          )).prototype =
            new g()).constructor = i),
          (h.getRatio = function (t) {
            return (
              t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999),
              (((this._p2 * t) | 0) + this._p3) * this._p1
            );
          }),
          (h.config = i.config =
            function (t, e) {
              return new i(t, e);
            }),
          ((h = (n = c(
            "easing.ExpoScaleEase",
            function (t, e, i) {
              (this._p1 = Math.log(e / t)),
                (this._p2 = e - t),
                (this._p3 = t),
                (this._ease = i);
            },
            !0
          )).prototype =
            new g()).constructor = n),
          (h.getRatio = function (t) {
            return (
              this._ease && (t = this._ease.getRatio(t)),
              (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            );
          }),
          (h.config = n.config =
            function (t, e, i) {
              return new n(t, e, i);
            }),
          ((h = (o = c(
            "easing.RoughEase",
            function (t) {
              for (
                var e,
                  i,
                  n,
                  o,
                  r,
                  s,
                  a = (t = t || {}).taper || "none",
                  l = [],
                  c = 0,
                  u = 0 | (t.points || 20),
                  h = u,
                  d = !1 !== t.randomize,
                  p = !0 === t.clamp,
                  f = t.template instanceof g ? t.template : null,
                  m = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                -1 < --h;

              )
                (e = d ? Math.random() : (1 / u) * h),
                  (i = f ? f.getRatio(e) : e),
                  (n =
                    "none" === a
                      ? m
                      : "out" === a
                      ? (o = 1 - e) * o * m
                      : "in" === a
                      ? e * e * m
                      : (o = e < 0.5 ? 2 * e : 2 * (1 - e)) * o * 0.5 * m),
                  d
                    ? (i += Math.random() * n - 0.5 * n)
                    : h % 2
                    ? (i += 0.5 * n)
                    : (i -= 0.5 * n),
                  p && (1 < i ? (i = 1) : i < 0 && (i = 0)),
                  (l[c++] = { x: e, y: i });
              for (
                l.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  s = new y(1, 1, null),
                  h = u;
                -1 < --h;

              )
                (r = l[h]), (s = new y(r.x, r.y, s));
              this._prev = new y(0, 0, 0 !== s.t ? s : s.next);
            },
            !0
          )).prototype =
            new g()).constructor = o),
          (h.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && t <= e.t; ) e = e.prev;
            return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
          }),
          (h.config = function (t) {
            return new o(t);
          }),
          (o.ease = new o()),
          e(
            "Bounce",
            t("BounceOut", function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            t("BounceIn", function (t) {
              return (t = 1 - t) < 1 / 2.75
                ? 1 - 7.5625 * t * t
                : t < 2 / 2.75
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : t < 2.5 / 2.75
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            t("BounceInOut", function (t) {
              var e = t < 0.5;
              return (
                (t =
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          e(
            "Circ",
            t("CircOut", function (t) {
              return Math.sqrt(1 - --t * t);
            }),
            t("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            t("CircInOut", function (t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          e(
            "Elastic",
            (h = function (t, e, i) {
              var n = c(
                  "easing." + t,
                  function (t, e) {
                    (this._p1 = 1 <= t ? t : 1),
                      (this._p2 = (e || i) / (t < 1 ? t : 1)),
                      (this._p3 =
                        (this._p2 / a) * (Math.asin(1 / this._p1) || 0)),
                      (this._p2 = a / this._p2);
                  },
                  !0
                ),
                t = (n.prototype = new g());
              return (
                (t.constructor = n),
                (t.getRatio = e),
                (t.config = function (t, e) {
                  return new n(t, e);
                }),
                n
              );
            })(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            h(
              "ElasticIn",
              function (t) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * --t) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            h(
              "ElasticInOut",
              function (t) {
                return (t *= 2) < 1
                  ? this._p1 *
                      Math.pow(2, 10 * --t) *
                      Math.sin((t - this._p3) * this._p2) *
                      -0.5
                  : this._p1 *
                      Math.pow(2, -10 * --t) *
                      Math.sin((t - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          e(
            "Expo",
            t("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            t("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            t("ExpoInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          e(
            "Sine",
            t("SineOut", function (t) {
              return Math.sin(t * l);
            }),
            t("SineIn", function (t) {
              return 1 - Math.cos(t * l);
            }),
            t("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          c(
            "easing.EaseLookup",
            {
              find: function (t) {
                return g.map[t];
              },
            },
            !0
          ),
          u(r.SlowMo, "SlowMo", "ease,"),
          u(o, "RoughEase", "ease,"),
          u(i, "SteppedEase", "ease,"),
          s
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (d, p) {
    "use strict";
    var f = {},
      m = d.document,
      g = (d.GreenSockGlobals = d.GreenSockGlobals || d),
      t = g[p];
    if (t)
      return (
        "undefined" != typeof module && module.exports && (module.exports = t)
      );
    function y(t) {
      for (var e = t.split("."), i = g, n = 0; n < e.length; n++)
        i[e[n]] = i = i[e[n]] || {};
      return i;
    }
    function a(t) {
      for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]));
      return e;
    }
    function v() {}
    var T,
      e,
      i,
      h = y("com.greensock"),
      b = 1e-10,
      _ =
        ((e = Object.prototype.toString),
        (i = e.call([])),
        function (t) {
          return (
            null != t &&
            (t instanceof Array ||
              ("object" == typeof t && !!t.push && e.call(t) === i))
          );
        }),
      S = {},
      w = function (a, l, c, u) {
        (this.sc = S[a] ? S[a].sc : []),
          ((S[a] = this).gsClass = null),
          (this.func = c);
        var h = [];
        (this.check = function (t) {
          for (var e, i, n, o, r = l.length, s = r; -1 < --r; )
            (e = S[l[r]] || new w(l[r], [])).gsClass
              ? ((h[r] = e.gsClass), s--)
              : t && e.sc.push(this);
          if (0 === s && c) {
            if (
              ((n = (i = ("com.greensock." + a).split(".")).pop()),
              (o = y(i.join("."))[n] = this.gsClass = c.apply(c, h)),
              u)
            )
              if (
                ((g[n] = f[n] = o),
                "undefined" != typeof module && module.exports)
              )
                if (a === p)
                  for (r in ((module.exports = f[p] = o), f)) o[r] = f[r];
                else f[p] && (f[p][n] = o);
              else
                "function" == typeof define &&
                  define.amd &&
                  define(
                    (d.GreenSockAMDPath ? d.GreenSockAMDPath + "/" : "") +
                      a.split(".").pop(),
                    [],
                    function () {
                      return o;
                    }
                  );
            for (r = 0; r < this.sc.length; r++) this.sc[r].check();
          }
        }),
          this.check(!0);
      },
      n = (d._gsDefine = function (t, e, i, n) {
        return new w(t, e, i, n);
      }),
      P = (h._class = function (t, e, i) {
        return (
          (e = e || function () {}),
          n(
            t,
            [],
            function () {
              return e;
            },
            i
          ),
          e
        );
      });
    n.globals = g;
    var o,
      r = [0, 0, 1, 1],
      x = P(
        "easing.Ease",
        function (t, e, i, n) {
          (this._func = t),
            (this._type = i || 0),
            (this._power = n || 0),
            (this._params = e ? r.concat(e) : r);
        },
        !0
      ),
      A = (x.map = {}),
      s = (x.register = function (t, e, i, n) {
        for (
          var o,
            r,
            s,
            a,
            l = e.split(","),
            c = l.length,
            u = (i || "easeIn,easeOut,easeInOut").split(",");
          -1 < --c;

        )
          for (
            r = l[c],
              o = n ? P("easing." + r, null, !0) : h.easing[r] || {},
              s = u.length;
            -1 < --s;

          )
            (a = u[s]),
              (A[r + "." + a] =
                A[a + r] =
                o[a] =
                  t.getRatio ? t : t[a] || new t());
      });
    for (
      (o = x.prototype)._calcEnd = !1,
        o.getRatio = function (t) {
          if (this._func)
            return (this._params[0] = t), this._func.apply(null, this._params);
          var e = this._type,
            i = this._power,
            n = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
          return (
            1 === i
              ? (n *= n)
              : 2 === i
              ? (n *= n * n)
              : 3 === i
              ? (n *= n * n * n)
              : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
          );
        },
        c = (l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
      -1 < --c;

    )
      (o = l[c] + ",Power" + c),
        s(new x(null, null, 1, c), o, "easeOut", !0),
        s(new x(null, null, 2, c), o, "easeIn" + (0 === c ? ",easeNone" : "")),
        s(new x(null, null, 3, c), o, "easeInOut");
    (A.linear = h.easing.Linear.easeIn), (A.swing = h.easing.Quad.easeInOut);
    var M = P("events.EventDispatcher", function (t) {
      (this._listeners = {}), (this._eventTarget = t || this);
    });
    ((o = M.prototype).addEventListener = function (t, e, i, n, o) {
      o = o || 0;
      var r,
        s,
        a = this._listeners[t],
        l = 0;
      for (
        this !== O || T || O.wake(),
          null == a && (this._listeners[t] = a = []),
          s = a.length;
        -1 < --s;

      )
        (r = a[s]).c === e && r.s === i
          ? a.splice(s, 1)
          : 0 === l && r.pr < o && (l = s + 1);
      a.splice(l, 0, { c: e, s: i, up: n, pr: o });
    }),
      (o.removeEventListener = function (t, e) {
        var i,
          n = this._listeners[t];
        if (n)
          for (i = n.length; -1 < --i; )
            if (n[i].c === e) return void n.splice(i, 1);
      }),
      (o.dispatchEvent = function (t) {
        var e,
          i,
          n,
          o = this._listeners[t];
        if (o)
          for (
            1 < (e = o.length) && (o = o.slice(0)), i = this._eventTarget;
            -1 < --e;

          )
            (n = o[e]) &&
              (n.up
                ? n.c.call(n.s || i, { type: t, target: i })
                : n.c.call(n.s || i));
      });
    for (
      var l,
        C = d.requestAnimationFrame,
        k = d.cancelAnimationFrame,
        E =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        I = E(),
        c = (l = ["ms", "moz", "webkit", "o"]).length;
      -1 < --c && !C;

    )
      (C = d[l[c] + "RequestAnimationFrame"]),
        (k =
          d[l[c] + "CancelAnimationFrame"] ||
          d[l[c] + "CancelRequestAnimationFrame"]);
    P("Ticker", function (t, e) {
      var n,
        o,
        r,
        s,
        a,
        l = this,
        c = E(),
        i = !(!1 === e || !C) && "auto",
        u = 500,
        h = 33,
        d = function (t) {
          var e,
            i = E() - I;
          u < i && (c += i - h),
            (I += i),
            (l.time = (I - c) / 1e3),
            (i = l.time - a),
            (!n || 0 < i || !0 === t) &&
              (l.frame++, (a += i + (s <= i ? 0.004 : s - i)), (e = !0)),
            !0 !== t && (r = o(d)),
            e && l.dispatchEvent("tick");
        };
      M.call(l),
        (l.time = l.frame = 0),
        (l.tick = function () {
          d(!0);
        }),
        (l.lagSmoothing = function (t, e) {
          return arguments.length
            ? ((u = t || 1e10), void (h = Math.min(e, u, 0)))
            : u < 1e10;
        }),
        (l.sleep = function () {
          null != r &&
            ((i && k ? k : clearTimeout)(r),
            (o = v),
            (r = null),
            l === O && (T = !1));
        }),
        (l.wake = function (t) {
          null !== r
            ? l.sleep()
            : t
            ? (c += -I + (I = E()))
            : 10 < l.frame && (I = E() - u + 5),
            (o =
              0 === n
                ? v
                : i && C
                ? C
                : function (t) {
                    return setTimeout(t, (1e3 * (a - l.time) + 1) | 0);
                  }),
            l === O && (T = !0),
            d(2);
        }),
        (l.fps = function (t) {
          return arguments.length
            ? ((s = 1 / ((n = t) || 60)), (a = this.time + s), void l.wake())
            : n;
        }),
        (l.useRAF = function (t) {
          return arguments.length ? (l.sleep(), (i = t), void l.fps(n)) : i;
        }),
        l.fps(t),
        setTimeout(function () {
          "auto" === i &&
            l.frame < 5 &&
            "hidden" !== (m || {}).visibilityState &&
            l.useRAF(!1);
        }, 1500);
    }),
      ((o = h.Ticker.prototype = new h.events.EventDispatcher()).constructor =
        h.Ticker);
    var u = P("core.Animation", function (t, e) {
        (this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === e.immediateRender),
          (this.data = e.data),
          (this._reversed = !0 === e.reversed),
          K &&
            (T || O.wake(),
            (e = this.vars.useFrames ? q : K).add(this, e._time),
            this.vars.paused && this.paused(!0));
      }),
      O = (u.ticker = new h.Ticker());
    ((o = u.prototype)._dirty = o._gc = o._initted = o._paused = !1),
      (o._totalTime = o._time = 0),
      (o._rawPrevTime = -1),
      (o._next = o._last = o._onUpdate = o._timeline = o.timeline = null),
      (o._paused = !1);
    var H = function () {
      T &&
        2e3 < E() - I &&
        ("hidden" !== (m || {}).visibilityState || !O.lagSmoothing()) &&
        O.wake();
      var t = setTimeout(H, 2e3);
      t.unref && t.unref();
    };
    H(),
      (o.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (o.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (o.resume = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!1);
      }),
      (o.seek = function (t, e) {
        return this.totalTime(Number(t), !1 !== e);
      }),
      (o.restart = function (t, e) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(t ? -this._delay : 0, !1 !== e, !0);
      }),
      (o.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (o.render = function (t, e, i) {}),
      (o.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (!this._gc && this.timeline) || this._enabled(!0),
          this
        );
      }),
      (o.isActive = function () {
        var t,
          e = this._timeline,
          i = this._startTime;
        return (
          !e ||
          (!this._gc &&
            !this._paused &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < i + this.totalDuration() / this._timeScale - 1e-7)
        );
      }),
      (o._enabled = function (t, e) {
        return (
          T || O.wake(),
          (this._gc = !t),
          (this._active = this.isActive()),
          !0 !== e &&
            (t && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !t && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (o._kill = function (t, e) {
        return this._enabled(!1, !1);
      }),
      (o.kill = function (t, e) {
        return this._kill(t, e), this;
      }),
      (o._uncache = function (t) {
        for (var e = t ? this : this.timeline; e; )
          (e._dirty = !0), (e = e.timeline);
        return this;
      }),
      (o._swapSelfInParams = function (t) {
        for (var e = t.length, i = t.concat(); -1 < --e; )
          "{self}" === t[e] && (i[e] = this);
        return i;
      }),
      (o._callback = function (t) {
        var e = this.vars,
          i = e[t],
          n = e[t + "Params"],
          o = e[t + "Scope"] || e.callbackScope || this;
        switch (n ? n.length : 0) {
          case 0:
            i.call(o);
            break;
          case 1:
            i.call(o, n[0]);
            break;
          case 2:
            i.call(o, n[0], n[1]);
            break;
          default:
            i.apply(o, n);
        }
      }),
      (o.eventCallback = function (t, e, i, n) {
        if ("on" === (t || "").substr(0, 2)) {
          var o = this.vars;
          if (1 === arguments.length) return o[t];
          null == e
            ? delete o[t]
            : ((o[t] = e),
              (o[t + "Params"] =
                _(i) && -1 !== i.join("").indexOf("{self}")
                  ? this._swapSelfInParams(i)
                  : i),
              (o[t + "Scope"] = n)),
            "onUpdate" === t && (this._onUpdate = e);
        }
        return this;
      }),
      (o.delay = function (t) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (o.duration = function (t) {
        return arguments.length
          ? ((this._duration = this._totalDuration = t),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              0 < this._time &&
              this._time < this._duration &&
              0 !== t &&
              this.totalTime(this._totalTime * (t / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (o.totalDuration = function (t) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(t) : this._totalDuration
        );
      }),
      (o.time = function (t, e) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e))
          : this._time;
      }),
      (o.totalTime = function (t, e, i) {
        if ((T || O.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (t < 0 && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var n = this._totalDuration,
              o = this._timeline;
            if (
              (n < t && !i && (t = n),
              (this._startTime =
                (this._paused ? this._pauseTime : o._time) -
                (this._reversed ? n - t : t) / this._timeScale),
              o._dirty || this._uncache(!1),
              o._timeline)
            )
              for (; o._timeline; )
                o._timeline._time !==
                  (o._startTime + o._totalTime) / o._timeScale &&
                  o.totalTime(o._totalTime, !0),
                  (o = o._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime === t && 0 !== this._duration) ||
              (N.length && Z(), this.render(t, e, !1), N.length && Z());
        }
        return this;
      }),
      (o.progress = o.totalProgress =
        function (t, e) {
          var i = this.duration();
          return arguments.length
            ? this.totalTime(i * t, e)
            : i
            ? this._time / i
            : this.ratio;
        }),
      (o.startTime = function (t) {
        return arguments.length
          ? (t !== this._startTime &&
              ((this._startTime = t),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, t - this._delay)),
            this)
          : this._startTime;
      }),
      (o.endTime = function (t) {
        return (
          this._startTime +
          (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (o.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        var e, i;
        for (
          t = t || b,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((i =
                (e = this._pauseTime) || 0 === e
                  ? e
                  : this._timeline.totalTime()),
              (this._startTime =
                i - ((i - this._startTime) * this._timeScale) / t)),
            this._timeScale = t,
            i = this.timeline;
          i && i.timeline;

        )
          (i._dirty = !0), i.totalDuration(), (i = i.timeline);
        return this;
      }),
      (o.reversed = function (t) {
        return arguments.length
          ? (t != this._reversed &&
              ((this._reversed = t),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (o.paused = function (t) {
        if (!arguments.length) return this._paused;
        var e,
          i,
          n = this._timeline;
        return (
          t != this._paused &&
            n &&
            (T || t || O.wake(),
            (i = (e = n.rawTime()) - this._pauseTime),
            !t &&
              n.smoothChildTiming &&
              ((this._startTime += i), this._uncache(!1)),
            (this._pauseTime = t ? e : null),
            (this._paused = t),
            (this._active = this.isActive()),
            !t &&
              0 != i &&
              this._initted &&
              this.duration() &&
              ((e = n.smoothChildTiming
                ? this._totalTime
                : (e - this._startTime) / this._timeScale),
              this.render(e, e === this._totalTime, !0))),
          this._gc && !t && this._enabled(!0, !1),
          this
        );
      });
    var G = P("core.SimpleTimeline", function (t) {
      u.call(this, 0, t),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    ((o = G.prototype = new u()).constructor = G),
      (o.kill()._gc = !1),
      (o._first = o._last = o._recent = null),
      (o._sortChildren = !1),
      (o.add = o.insert =
        function (t, e, i, n) {
          var o, r;
          if (
            ((t._startTime = Number(e || 0) + t._delay),
            t._paused &&
              this !== t._timeline &&
              (t._pauseTime =
                this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
            t.timeline && t.timeline._remove(t, !0),
            (t.timeline = t._timeline = this),
            t._gc && t._enabled(!0, !0),
            (o = this._last),
            this._sortChildren)
          )
            for (r = t._startTime; o && o._startTime > r; ) o = o._prev;
          return (
            o
              ? ((t._next = o._next), (o._next = t))
              : ((t._next = this._first), (this._first = t)),
            t._next ? (t._next._prev = t) : (this._last = t),
            (t._prev = o),
            (this._recent = t),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (o._remove = function (t, e) {
        return (
          t.timeline === this &&
            (e || t._enabled(!1, !0),
            t._prev
              ? (t._prev._next = t._next)
              : this._first === t && (this._first = t._next),
            t._next
              ? (t._next._prev = t._prev)
              : this._last === t && (this._last = t._prev),
            (t._next = t._prev = t.timeline = null),
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (o.render = function (t, e, i) {
        var n,
          o = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; o; )
          (n = o._next),
            (o._active || (t >= o._startTime && !o._paused && !o._gc)) &&
              (o._reversed
                ? o.render(
                    (o._dirty ? o.totalDuration() : o._totalDuration) -
                      (t - o._startTime) * o._timeScale,
                    e,
                    i
                  )
                : o.render((t - o._startTime) * o._timeScale, e, i)),
            (o = n);
      }),
      (o.rawTime = function () {
        return T || O.wake(), this._totalTime;
      });
    function D(t) {
      return (
        t &&
        t.length &&
        t !== d &&
        t[0] &&
        (t[0] === d || (t[0].nodeType && t[0].style && !t.nodeType))
      );
    }
    var B = P(
      "TweenLite",
      function (t, e, i) {
        if ((u.call(this, e, i), (this.render = B.prototype.render), null == t))
          throw "Cannot tween a null target.";
        this.target = t = ("string" == typeof t && B.selector(t)) || t;
        var n,
          o,
          r,
          i =
            t.jquery ||
            (t.length &&
              t !== d &&
              t[0] &&
              (t[0] === d || (t[0].nodeType && t[0].style && !t.nodeType))),
          s = this.vars.overwrite;
        if (
          ((this._overwrite = s =
            null == s
              ? U[B.defaultOverwrite]
              : "number" == typeof s
              ? s >> 0
              : U[s]),
          (i || t instanceof Array || (t.push && _(t))) &&
            "number" != typeof t[0])
        )
          for (
            this._targets = r = a(t),
              this._propLookup = [],
              this._siblings = [],
              n = 0;
            n < r.length;
            n++
          )
            (o = r[n])
              ? "string" != typeof o
                ? o.length &&
                  o !== d &&
                  o[0] &&
                  (o[0] === d || (o[0].nodeType && o[0].style && !o.nodeType))
                  ? (r.splice(n--, 1), (this._targets = r = r.concat(a(o))))
                  : ((this._siblings[n] = tt(o, this, !1)),
                    1 === s &&
                      1 < this._siblings[n].length &&
                      et(o, this, null, 1, this._siblings[n]))
                : "string" == typeof (o = r[n--] = B.selector(o)) &&
                  r.splice(n + 1, 1)
              : r.splice(n--, 1);
        else
          (this._propLookup = {}),
            (this._siblings = tt(t, this, !1)),
            1 === s &&
              1 < this._siblings.length &&
              et(t, this, null, 1, this._siblings);
        (this.vars.immediateRender ||
          (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) &&
          ((this._time = -b), this.render(Math.min(0, -this._delay)));
      },
      !0
    );
    ((o = B.prototype = new u()).constructor = B),
      (o.kill()._gc = !1),
      (o.ratio = 0),
      (o._firstPT = o._targets = o._overwrittenProps = o._startAt = null),
      (o._notifyPluginsOfEnabled = o._lazy = !1),
      (B.version = "2.0.1"),
      (B.defaultEase = o._ease = new x(null, null, 1, 1)),
      (B.defaultOverwrite = "auto"),
      (B.ticker = O),
      (B.autoSleep = 120),
      (B.lagSmoothing = function (t, e) {
        O.lagSmoothing(t, e);
      }),
      (B.selector =
        d.$ ||
        d.jQuery ||
        function (t) {
          var e = d.$ || d.jQuery;
          return e
            ? (B.selector = e)(t)
            : (m = m || d.document)
            ? m.querySelectorAll
              ? m.querySelectorAll(t)
              : m.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            : t;
        });
    function L(t) {
      for (var e, i = this._firstPT; i; )
        (e = i.blob
          ? 1 === t && null != this.end
            ? this.end
            : t
            ? this.join("")
            : this.start
          : i.c * t + i.s),
          i.m
            ? (e = i.m.call(this._tween, e, this._target || i.t, this._tween))
            : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
          i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
          (i = i._next);
    }
    function R(t, e, i, n) {
      var o,
        r,
        s,
        a,
        l,
        c,
        u = [],
        h = 0,
        d = "",
        p = 0;
      for (
        u.start = t,
          u.end = e,
          t = u[0] = t + "",
          e = u[1] = e + "",
          i && (i(u), (t = u[0]), (e = u[1])),
          u.length = 0,
          o = t.match(F) || [],
          r = e.match(F) || [],
          n && ((n._next = null), (n.blob = 1), (u._firstPT = u._applyPT = n)),
          a = r.length,
          s = 0;
        s < a;
        s++
      )
        (c = r[s]),
          (d += (l = e.substr(h, e.indexOf(c, h) - h)) || !s ? l : ","),
          (h += l.length),
          p ? (p = (p + 1) % 5) : "rgba(" === l.substr(-5) && (p = 1),
          c === o[s] || o.length <= s
            ? (d += c)
            : (d && (u.push(d), (d = "")),
              (l = parseFloat(o[s])),
              u.push(l),
              (u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: l,
                c:
                  ("=" === c.charAt(1)
                    ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2))
                    : parseFloat(c) - l) || 0,
                f: 0,
                m: p && p < 4 ? Math.round : 0,
              })),
          (h += c.length);
      return (
        (d += e.substr(h)) && u.push(d),
        (u.setRatio = L),
        W.test(e) && (u.end = null),
        u
      );
    }
    function z(t, e, i, n, o, r, s, a, l) {
      "function" == typeof n && (n = n(l || 0, t));
      var c = typeof t[e],
        l =
          "function" != c
            ? ""
            : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)]
            ? e
            : "get" + e.substr(3),
        i = "get" !== i ? i : l ? (s ? t[l](s) : t[l]()) : t[e],
        l = "string" == typeof n && "=" === n.charAt(1),
        r = {
          t: t,
          p: e,
          s: i,
          f: "function" == c,
          pg: 0,
          n: o || e,
          m: r ? ("function" == typeof r ? r : Math.round) : 0,
          pr: 0,
          c: l
            ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2))
            : parseFloat(n) - i || 0,
        };
      return (
        ("number" == typeof i && ("number" == typeof n || l)) ||
          (s ||
          isNaN(i) ||
          (!l && isNaN(n)) ||
          "boolean" == typeof i ||
          "boolean" == typeof n
            ? ((r.fp = s),
              (r = {
                t: R(
                  i,
                  l
                    ? parseFloat(r.s) +
                        r.c +
                        (r.s + "").replace(/[0-9\-\.]/g, "")
                    : n,
                  a || B.defaultStringFilter,
                  r
                ),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: o || e,
                pr: 0,
                m: 0,
              }))
            : ((r.s = parseFloat(i)), l || (r.c = parseFloat(n) - r.s || 0))),
        r.c
          ? ((r._next = this._firstPT) && (r._next._prev = r),
            (this._firstPT = r))
          : void 0
      );
    }
    var N = [],
      X = {},
      F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      W = /[\+-]=-?[\.\d]/,
      t = (B._internals = {
        isArray: _,
        isSelector: D,
        lazyTweens: N,
        blobDif: R,
      }),
      V = (B._plugins = {}),
      j = (t.tweenLookup = {}),
      $ = 0,
      Y = (t.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
      }),
      U = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      q = (u._rootFramesTimeline = new G()),
      K = (u._rootTimeline = new G()),
      Q = 30,
      Z = (t.lazyRender = function () {
        var t,
          e = N.length;
        for (X = {}; -1 < --e; )
          (t = N[e]) &&
            !1 !== t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
        N.length = 0;
      });
    (K._startTime = O.time),
      (q._startTime = O.frame),
      (K._active = q._active = !0),
      setTimeout(Z, 1),
      (u._updateRoot = B.render =
        function () {
          var t, e, i;
          if (
            (N.length && Z(),
            K.render((O.time - K._startTime) * K._timeScale, !1, !1),
            q.render((O.frame - q._startTime) * q._timeScale, !1, !1),
            N.length && Z(),
            O.frame >= Q)
          ) {
            for (i in ((Q = O.frame + (parseInt(B.autoSleep, 10) || 120)), j)) {
              for (t = (e = j[i].tweens).length; -1 < --t; )
                e[t]._gc && e.splice(t, 1);
              0 === e.length && delete j[i];
            }
            if (
              (!(i = K._first) || i._paused) &&
              B.autoSleep &&
              !q._first &&
              1 === O._listeners.tick.length
            ) {
              for (; i && i._paused; ) i = i._next;
              i || O.sleep();
            }
          }
        }),
      O.addEventListener("tick", u._updateRoot);
    function J(t, e, i, n) {
      var o,
        r,
        s = t.vars.onOverwrite;
      return (
        s && (o = s(t, e, i, n)),
        (s = B.onOverwrite) && (r = s(t, e, i, n)),
        !1 !== o && !1 !== r
      );
    }
    var tt = function (t, e, i) {
        var n,
          o,
          r = t._gsTweenID;
        if (
          (j[r || (t._gsTweenID = r = "t" + $++)] ||
            (j[r] = { target: t, tweens: [] }),
          e && (((n = j[r].tweens)[(o = n.length)] = e), i))
        )
          for (; -1 < --o; ) n[o] === e && n.splice(o, 1);
        return j[r].tweens;
      },
      et = function (t, e, i, n, o) {
        var r, s, a;
        if (1 === n || 4 <= n) {
          for (a = o.length, p = 0; p < a; p++)
            if ((s = o[p]) !== e) s._gc || (s._kill(null, t, e) && (r = !0));
            else if (5 === n) break;
          return r;
        }
        for (
          var l,
            c = e._startTime + b,
            u = [],
            h = 0,
            d = 0 === e._duration,
            p = o.length;
          -1 < --p;

        )
          (s = o[p]) === e ||
            s._gc ||
            s._paused ||
            (s._timeline !== e._timeline
              ? ((l = l || it(e, 0, d)), 0 === it(s, l, d) && (u[h++] = s))
              : s._startTime <= c &&
                s._startTime + s.totalDuration() / s._timeScale > c &&
                (((d || !s._initted) && c - s._startTime <= 2e-10) ||
                  (u[h++] = s)));
        for (p = h; -1 < --p; )
          if (
            ((s = u[p]),
            2 === n && s._kill(i, t, e) && (r = !0),
            2 !== n || (!s._firstPT && s._initted))
          ) {
            if (2 !== n && !J(s, e)) continue;
            s._enabled(!1, !1) && (r = !0);
          }
        return r;
      },
      it = function (t, e, i) {
        for (
          var n = t._timeline, o = n._timeScale, r = t._startTime;
          n._timeline;

        ) {
          if (((r += n._startTime), (o *= n._timeScale), n._paused))
            return -100;
          n = n._timeline;
        }
        return e < (r /= o)
          ? r - e
          : (i && r === e) || (!t._initted && r - e < 2 * b)
          ? b
          : (r += t.totalDuration() / t._timeScale / o) > e + b
          ? 0
          : r - e - b;
      };
    (o._init = function () {
      var t,
        e,
        i,
        n,
        o,
        r,
        s = this.vars,
        a = this._overwrittenProps,
        l = this._duration,
        c = !!s.immediateRender,
        u = s.ease;
      if (s.startAt) {
        for (n in (this._startAt &&
          (this._startAt.render(-1, !0), this._startAt.kill()),
        (o = {}),
        s.startAt))
          o[n] = s.startAt[n];
        if (
          ((o.data = "isStart"),
          (o.overwrite = !1),
          (o.immediateRender = !0),
          (o.lazy = c && !1 !== s.lazy),
          (o.startAt = o.delay = null),
          (o.onUpdate = s.onUpdate),
          (o.onUpdateParams = s.onUpdateParams),
          (o.onUpdateScope = s.onUpdateScope || s.callbackScope || this),
          (this._startAt = B.to(this.target || {}, 0, o)),
          c)
        )
          if (0 < this._time) this._startAt = null;
          else if (0 !== l) return;
      } else if (s.runBackwards && 0 !== l)
        if (this._startAt)
          this._startAt.render(-1, !0),
            this._startAt.kill(),
            (this._startAt = null);
        else {
          for (n in (0 !== this._time && (c = !1), (i = {}), s))
            (Y[n] && "autoCSS" !== n) || (i[n] = s[n]);
          if (
            ((i.overwrite = 0),
            (i.data = "isFromStart"),
            (i.lazy = c && !1 !== s.lazy),
            (i.immediateRender = c),
            (this._startAt = B.to(this.target, 0, i)),
            c)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = u =
          u
            ? u instanceof x
              ? u
              : "function" == typeof u
              ? new x(u, s.easeParams)
              : A[u] || B.defaultEase
            : B.defaultEase),
        s.easeParams instanceof Array &&
          u.config &&
          (this._ease = u.config.apply(u, s.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (r = this._targets.length, t = 0; t < r; t++)
          this._initProps(
            this._targets[t],
            (this._propLookup[t] = {}),
            this._siblings[t],
            a ? a[t] : null,
            t
          ) && (e = !0);
      else
        e = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          a,
          0
        );
      if (
        (e && B._onPluginEvent("_onInitAllProps", this),
        a &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        s.runBackwards)
      )
        for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
      (this._onUpdate = s.onUpdate), (this._initted = !0);
    }),
      (o._initProps = function (t, e, i, n, o) {
        var r, s, a, l, c, u;
        if (null == t) return !1;
        for (r in (X[t._gsTweenID] && Z(),
        this.vars.css ||
          (t.style &&
            t !== d &&
            t.nodeType &&
            V.css &&
            !1 !== this.vars.autoCSS &&
            (function (t, e) {
              var i,
                n = {};
              for (i in t)
                Y[i] ||
                  (i in e &&
                    "transform" !== i &&
                    "x" !== i &&
                    "y" !== i &&
                    "width" !== i &&
                    "height" !== i &&
                    "className" !== i &&
                    "border" !== i) ||
                  !(!V[i] || (V[i] && V[i]._autoCSS)) ||
                  ((n[i] = t[i]), delete t[i]);
              t.css = n;
            })(this.vars, t)),
        this.vars))
          if (((u = this.vars[r]), Y[r]))
            u &&
              (u instanceof Array || (u.push && _(u))) &&
              -1 !== u.join("").indexOf("{self}") &&
              (this.vars[r] = u = this._swapSelfInParams(u, this));
          else if (
            V[r] &&
            (l = new V[r]())._onInitTween(t, this.vars[r], this, o)
          ) {
            for (
              this._firstPT = c =
                {
                  _next: this._firstPT,
                  t: l,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: r,
                  pg: 1,
                  pr: l._priority,
                  m: 0,
                },
                s = l._overwriteProps.length;
              -1 < --s;

            )
              e[l._overwriteProps[s]] = this._firstPT;
            (l._priority || l._onInitAllProps) && (a = !0),
              (l._onDisable || l._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              c._next && (c._next._prev = c);
          } else
            e[r] = z.call(
              this,
              t,
              r,
              "get",
              u,
              r,
              0,
              null,
              this.vars.stringFilter,
              o
            );
        return n && this._kill(n, t)
          ? this._initProps(t, e, i, n, o)
          : 1 < this._overwrite &&
            this._firstPT &&
            1 < i.length &&
            et(t, this, e, this._overwrite, i)
          ? (this._kill(e, t), this._initProps(t, e, i, n, o))
          : (this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (X[t._gsTweenID] = !0),
            a);
      }),
      (o.render = function (t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = this._time,
          h = this._duration,
          d = this._rawPrevTime;
        if (
          (h - 1e-7 <= t && 0 <= t
            ? ((this._totalTime = this._time = h),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((n = !0),
                (o = "onComplete"),
                (i = i || this._timeline.autoRemoveChildren)),
              0 !== h ||
                (!this._initted && this.vars.lazy && !i) ||
                (this._startTime === this._timeline._duration && (t = 0),
                (d < 0 ||
                  (t <= 0 && -1e-7 <= t) ||
                  (d === b && "isPause" !== this.data)) &&
                  d !== t &&
                  ((i = !0), b < d && (o = "onReverseComplete")),
                (this._rawPrevTime = s = !e || t || d === t ? t : b)))
            : t < 1e-7
            ? ((this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== u || (0 === h && 0 < d)) &&
                ((o = "onReverseComplete"), (n = this._reversed)),
              t < 0 &&
                ((this._active = !1),
                0 !== h ||
                  (!this._initted && this.vars.lazy && !i) ||
                  (0 <= d && (d !== b || "isPause" !== this.data) && (i = !0),
                  (this._rawPrevTime = s = !e || t || d === t ? t : b))),
              (!this._initted || (this._startAt && this._startAt.progress())) &&
                (i = !0))
            : ((this._totalTime = this._time = t),
              this._easeType
                ? ((a = t / h),
                  (1 === (l = this._easeType) || (3 === l && 0.5 <= a)) &&
                    (a = 1 - a),
                  3 === l && (a *= 2),
                  1 === (c = this._easePower)
                    ? (a *= a)
                    : 2 === c
                    ? (a *= a * a)
                    : 3 === c
                    ? (a *= a * a * a)
                    : 4 === c && (a *= a * a * a * a),
                  (this.ratio =
                    1 === l
                      ? 1 - a
                      : 2 === l
                      ? a
                      : t / h < 0.5
                      ? a / 2
                      : 1 - a / 2))
                : (this.ratio = this._ease.getRatio(t / h))),
          this._time !== u || i)
        ) {
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = this._totalTime = u),
                (this._rawPrevTime = d),
                N.push(this),
                void (this._lazy = [t, e])
              );
            this._time && !n
              ? (this.ratio = this._ease.getRatio(this._time / h))
              : n &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            !1 !== this._lazy && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== u &&
                  0 <= t &&
                  (this._active = !0)),
              0 === u &&
                (this._startAt &&
                  (0 <= t
                    ? this._startAt.render(t, !0, i)
                    : (o = o || "_dummyGS")),
                !this.vars.onStart ||
                  (0 === this._time && 0 !== h) ||
                  e ||
                  this._callback("onStart")),
              r = this._firstPT;
            r;

          )
            r.f
              ? r.t[r.p](r.c * this.ratio + r.s)
              : (r.t[r.p] = r.c * this.ratio + r.s),
              (r = r._next);
          this._onUpdate &&
            (t < 0 &&
              this._startAt &&
              -1e-4 !== t &&
              this._startAt.render(t, !0, i),
            e || ((this._time !== u || n || i) && this._callback("onUpdate"))),
            !o ||
              (this._gc && !i) ||
              (t < 0 &&
                this._startAt &&
                !this._onUpdate &&
                -1e-4 !== t &&
                this._startAt.render(t, !0, i),
              n &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !e && this.vars[o] && this._callback(o),
              0 === h &&
                this._rawPrevTime === b &&
                s !== b &&
                (this._rawPrevTime = 0));
        }
      }),
      (o._kill = function (t, e, i) {
        if (
          null == (t = "all" === t ? null : t) &&
          (null == e || e === this.target)
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        e =
          "string" != typeof e
            ? e || this._targets || this.target
            : B.selector(e) || e;
        var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          h,
          d =
            i &&
            this._time &&
            i._startTime === this._startTime &&
            this._timeline === i._timeline;
        if ((_(e) || D(e)) && "number" != typeof e[0])
          for (n = e.length; -1 < --n; ) this._kill(t, e[n], i) && (l = !0);
        else {
          if (this._targets) {
            for (n = this._targets.length; -1 < --n; )
              if (e === this._targets[n]) {
                (a = this._propLookup[n] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (o = this._overwrittenProps[n] =
                    t ? this._overwrittenProps[n] || {} : "all");
                break;
              }
          } else {
            if (e !== this.target) return !1;
            (a = this._propLookup),
              (o = this._overwrittenProps =
                t ? this._overwrittenProps || {} : "all");
          }
          if (a) {
            if (
              ((c = t || a),
              (u =
                t !== o &&
                "all" !== o &&
                t !== a &&
                ("object" != typeof t || !t._tempKill)),
              i && (B.onOverwrite || this.vars.onOverwrite))
            ) {
              for (r in c) a[r] && ((h = h || []), h.push(r));
              if ((h || !t) && !J(this, i, e, h)) return !1;
            }
            for (r in c)
              (s = a[r]) &&
                (d && (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)),
                s.pg && s.t._kill(c) && (l = !0),
                (s.pg && 0 !== s.t._overwriteProps.length) ||
                  (s._prev
                    ? (s._prev._next = s._next)
                    : s === this._firstPT && (this._firstPT = s._next),
                  s._next && (s._next._prev = s._prev),
                  (s._next = s._prev = null)),
                delete a[r]),
                u && (o[r] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1);
          }
        }
        return l;
      }),
      (o.invalidate = function () {
        return (
          this._notifyPluginsOfEnabled && B._onPluginEvent("_onDisable", this),
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          u.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -b), this.render(Math.min(0, -this._delay))),
          this
        );
      }),
      (o._enabled = function (t, e) {
        if ((T || O.wake(), t && this._gc)) {
          var i,
            n = this._targets;
          if (n)
            for (i = n.length; -1 < --i; )
              this._siblings[i] = tt(n[i], this, !0);
          else this._siblings = tt(this.target, this, !0);
        }
        return (
          u.prototype._enabled.call(this, t, e),
          !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
            B._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        );
      }),
      (B.to = function (t, e, i) {
        return new B(t, e, i);
      }),
      (B.from = function (t, e, i) {
        return (
          (i.runBackwards = !0),
          (i.immediateRender = 0 != i.immediateRender),
          new B(t, e, i)
        );
      }),
      (B.fromTo = function (t, e, i, n) {
        return (
          (n.startAt = i),
          (n.immediateRender =
            0 != n.immediateRender && 0 != i.immediateRender),
          new B(t, e, n)
        );
      }),
      (B.delayedCall = function (t, e, i, n, o) {
        return new B(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: i,
          callbackScope: n,
          onReverseComplete: e,
          onReverseCompleteParams: i,
          immediateRender: !1,
          lazy: !1,
          useFrames: o,
          overwrite: 0,
        });
      }),
      (B.set = function (t, e) {
        return new B(t, 0, e);
      }),
      (B.getTweensOf = function (t, e) {
        if (null == t) return [];
        var i, n, o, r;
        if (
          ((t = ("string" == typeof t && B.selector(t)) || t),
          (_(t) || D(t)) && "number" != typeof t[0])
        ) {
          for (i = t.length, n = []; -1 < --i; )
            n = n.concat(B.getTweensOf(t[i], e));
          for (i = n.length; -1 < --i; )
            for (r = n[i], o = i; -1 < --o; ) r === n[o] && n.splice(i, 1);
        } else if (t._gsTweenID)
          for (i = (n = tt(t).concat()).length; -1 < --i; )
            (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
        return n || [];
      }),
      (B.killTweensOf = B.killDelayedCallsTo =
        function (t, e, i) {
          "object" == typeof e && ((i = e), (e = !1));
          for (var n = B.getTweensOf(t, e), o = n.length; -1 < --o; )
            n[o]._kill(i, t);
        });
    var nt = P(
      "plugins.TweenPlugin",
      function (t, e) {
        (this._overwriteProps = (t || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = e || 0),
          (this._super = nt.prototype);
      },
      !0
    );
    if (
      ((o = nt.prototype),
      (nt.version = "1.19.0"),
      (nt.API = 2),
      (o._firstPT = null),
      (o._addTween = z),
      (o.setRatio = L),
      (o._kill = function (t) {
        var e,
          i = this._overwriteProps,
          n = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; -1 < --e; ) null != t[i[e]] && i.splice(e, 1);
        for (; n; )
          null != t[n.n] &&
            (n._next && (n._next._prev = n._prev),
            n._prev
              ? ((n._prev._next = n._next), (n._prev = null))
              : this._firstPT === n && (this._firstPT = n._next)),
            (n = n._next);
        return !1;
      }),
      (o._mod = o._roundProps =
        function (t) {
          for (var e, i = this._firstPT; i; )
            (e =
              t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              "function" == typeof e &&
              (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
              (i = i._next);
        }),
      (B._onPluginEvent = function (t, e) {
        var i,
          n,
          o,
          r,
          s,
          a = e._firstPT;
        if ("_onInitAllProps" === t) {
          for (; a; ) {
            for (s = a._next, n = o; n && n.pr > a.pr; ) n = n._next;
            (a._prev = n ? n._prev : r) ? (a._prev._next = a) : (o = a),
              (a._next = n) ? (n._prev = a) : (r = a),
              (a = s);
          }
          a = e._firstPT = o;
        }
        for (; a; )
          a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
            (a = a._next);
        return i;
      }),
      (nt.activate = function (t) {
        for (var e = t.length; -1 < --e; )
          t[e].API === nt.API && (V[new t[e]()._propName] = t[e]);
        return !0;
      }),
      (n.plugin = function (t) {
        if (!(t && t.propName && t.init && t.API))
          throw "illegal plugin definition.";
        var e,
          i = t.propName,
          n = t.priority || 0,
          o = t.overwriteProps,
          r = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          },
          s = P(
            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function () {
              nt.call(this, i, n), (this._overwriteProps = o || []);
            },
            !0 === t.global
          ),
          a = (s.prototype = new nt(i));
        for (e in (((a.constructor = s).API = t.API), r))
          "function" == typeof t[e] && (a[r[e]] = t[e]);
        return (s.version = t.version), nt.activate([s]), s;
      }),
      (l = d._gsQueue))
    ) {
      for (c = 0; c < l.length; c++) l[c]();
      for (o in S)
        S[o].func || d.console.log("GSAP encountered missing dependency: " + o);
    }
    T = !1;
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  ),
  (
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)._gsQueue || (_gsScope._gsQueue = [])
  ).push(function () {
    "use strict";
    function c(t, e, i, n, o, r) {
      return (
        (i = (parseFloat(i || 0) - parseFloat(t || 0)) * o),
        (n = (parseFloat(n || 0) - parseFloat(e || 0)) * r),
        Math.sqrt(i * i + n * n)
      );
    }
    function u(t) {
      return (
        ("string" != typeof t && t.nodeType) ||
          ((t = _gsScope.TweenLite.selector(t)).length && (t = t[0])),
        t
      );
    }
    function h(t) {
      if (!t) return 0;
      var e,
        i,
        n,
        o,
        r,
        s = (t = u(t)).tagName.toLowerCase(),
        a = 1,
        l = 1;
      "non-scaling-stroke" === t.getAttribute("vector-effect") &&
        ((a = (l = t.getScreenCTM()).a), (l = l.d));
      try {
        r = t.getBBox();
      } catch (t) {}
      if (
        ((r && (r.width || r.height)) ||
          ("rect" !== s && "circle" !== s && "ellipse" !== s) ||
          ((r = {
            width: parseFloat(
              t.getAttribute(
                "rect" === s ? "width" : "circle" === s ? "r" : "rx"
              )
            ),
            height: parseFloat(
              t.getAttribute(
                "rect" === s ? "height" : "circle" === s ? "r" : "ry"
              )
            ),
          }),
          "rect" !== s && ((r.width *= 2), (r.height *= 2))),
        "path" === s)
      )
        (n = t.style.strokeDasharray),
          (t.style.strokeDasharray = "none"),
          (e = t.getTotalLength() || 0),
          a !== l &&
            console.log(
              "Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (e *= (a + l) / 2),
          (t.style.strokeDasharray = n);
      else if ("rect" === s) e = 2 * r.width * a + 2 * r.height * l;
      else if ("line" === s)
        e = c(
          t.getAttribute("x1"),
          t.getAttribute("y1"),
          t.getAttribute("x2"),
          t.getAttribute("y2"),
          a,
          l
        );
      else if ("polyline" === s || "polygon" === s)
        for (
          i = t.getAttribute("points").match(f) || [],
            "polygon" === s && i.push(i[0], i[1]),
            e = 0,
            o = 2;
          o < i.length;
          o += 2
        )
          e += c(i[o - 2], i[o - 1], i[o], i[o + 1], a, l) || 0;
      else
        ("circle" !== s && "ellipse" !== s) ||
          ((s = (r.width / 2) * a),
          (r = (r.height / 2) * l),
          (e = Math.PI * (3 * (s + r) - Math.sqrt((3 * s + r) * (s + 3 * r)))));
      return e || 0;
    }
    function d(t, e) {
      if (!t) return [0, 0];
      (t = u(t)), (e = e || h(t) + 1);
      var i = p(t),
        n = i.strokeDasharray || "",
        t = parseFloat(i.strokeDashoffset),
        i = n.indexOf(",");
      return (
        e <
          (n =
            (i = i < 0 ? n.indexOf(" ") : i) < 0
              ? e
              : parseFloat(n.substr(0, i)) || 1e-5) && (n = e),
        [Math.max(0, -t), Math.max(0, n - t)]
      );
    }
    var t = _gsScope.document,
      p = t.defaultView ? t.defaultView.getComputedStyle : function () {},
      f = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      m = -1 !== ((_gsScope.navigator || {}).userAgent || "").indexOf("Edge"),
      t = _gsScope._gsDefine.plugin({
        propName: "drawSVG",
        API: 2,
        version: "0.1.4",
        global: !0,
        overwriteProps: ["drawSVG"],
        init: function (t, e, i, n) {
          if (!t.getBBox) return !1;
          var o,
            r,
            s,
            a,
            l = h(t) + 1;
          return (
            (this._style = t.style),
            !0 === (e = "function" == typeof e ? e(n, t) : e) || "true" === e
              ? (e = "0 100%")
              : e
              ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
              : (e = "0 0"),
            (o = d(t, l)),
            (r = e),
            (s = l),
            (n = o[0]),
            (e =
              -1 === (e = r.indexOf(" "))
                ? ((a = void 0 !== n ? n + "" : r), r)
                : ((a = r.substr(0, e)), r.substr(e + 1))),
            (a =
              -1 !== a.indexOf("%")
                ? (parseFloat(a) / 100) * s
                : parseFloat(a)),
            (a =
              (e =
                -1 !== e.indexOf("%")
                  ? (parseFloat(e) / 100) * s
                  : parseFloat(e)) < a
                ? [e, a]
                : [a, e]),
            (this._length = l + 10),
            0 === o[0] && 0 === a[0]
              ? ((e = Math.max(1e-5, a[1] - l)),
                (this._dash = l + e),
                (this._offset = l - o[1] + e),
                this._addTween(
                  this,
                  "_offset",
                  this._offset,
                  l - a[1] + e,
                  "drawSVG"
                ))
              : ((this._dash = o[1] - o[0] || 1e-6),
                (this._offset = -o[0]),
                this._addTween(
                  this,
                  "_dash",
                  this._dash,
                  a[1] - a[0] || 1e-5,
                  "drawSVG"
                ),
                this._addTween(
                  this,
                  "_offset",
                  this._offset,
                  -a[0],
                  "drawSVG"
                )),
            m &&
              "butt" !== (a = (o = p(t)).strokeLinecap) &&
              a !== o.strokeLinejoin &&
              ((a = parseFloat(o.strokeMiterlimit)),
              this._addTween(
                t.style,
                "strokeMiterlimit",
                a,
                a + 1e-4,
                "strokeMiterlimit"
              )),
            !0
          );
        },
        set: function (t) {
          this._firstPT &&
            (this._super.setRatio.call(this, t),
            (this._style.strokeDashoffset = this._offset),
            (this._style.strokeDasharray =
              1 === t || 0 === t
                ? this._offset < 0.001 && this._length - this._dash <= 10
                  ? "none"
                  : this._offset === this._dash
                  ? "0px, 999999px"
                  : this._dash + "px," + this._length + "px"
                : this._dash + "px," + this._length + "px"));
        },
      });
    (t.getLength = h), (t.getPosition = d);
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function () {
    "use strict";
    function t() {
      return (_gsScope.GreenSockGlobals || _gsScope).DrawSVGPlugin;
    }
    "undefined" != typeof module && module.exports
      ? (require("../TweenLite.min.js"), (module.exports = t()))
      : "function" == typeof define && define.amd && define(["TweenLite"], t);
  })(),
  (function (i) {
    "use strict";
    function N(t, e, i, n) {
      var o;
      return (
        (i = i || V(t, null))
          ? (o =
              (t = i.getPropertyValue(e.replace(r, "-$1").toLowerCase())) ||
              i.length
                ? t
                : i[e])
          : t.currentStyle && (o = (i = t.currentStyle)[e]),
        n ? o : parseInt(o, 10) || 0
      );
    }
    function s(t) {
      return !!(
        t.length &&
        t[0] &&
        ((t[0].nodeType && t[0].style && !t.nodeType) ||
          (t[0].length && t[0][0]))
      );
    }
    function T(t) {
      return (
        ((t.charCodeAt(0) - 55296) << 10) + (t.charCodeAt(1) - 56320) + 65536
      );
    }
    function l(t, e) {
      var i = -1 !== (t = t || "").indexOf("++"),
        n = 1;
      return (
        i && (t = t.split("++").join("")),
        function () {
          return (
            "<" + e + a + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
          );
        }
      );
    }
    function X(t, e) {
      for (var i = e.length; -1 < --i; ) t.push(e[i]);
    }
    function c(t) {
      for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]));
      return e;
    }
    function F(t, e, i) {
      for (var n; t && t !== e; ) {
        if ((n = t._next || t.nextSibling))
          return n.textContent.charAt(0) === i;
        t = t.parentNode || t._parent;
      }
      return !1;
    }
    var o = i.GreenSockGlobals || i,
      t = (function (t) {
        for (var e = t.split("."), i = o, n = 0; n < e.length; n++)
          i[e[n]] = i = i[e[n]] || {};
        return i;
      })("com.greensock.utils"),
      b = function (t) {
        var e = t.nodeType,
          i = "";
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) i += b(t);
        } else if (3 === e || 4 === e) return t.nodeValue;
        return i;
      },
      W = document,
      V = W.defaultView ? W.defaultView.getComputedStyle : function () {},
      r = /([A-Z])/g,
      _ = /(?:\r|\n|\t\t)/g,
      S = /(?:\s\s+)/g,
      a =
        " style='position:relative;display:inline-block;" +
        (W.all && !W.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
      n =
        (t.SplitText =
        o.SplitText =
          function (t, e) {
            if (!(t = "string" == typeof t ? n.selector(t) : t))
              throw "cannot split a null element.";
            (this.elements = s(t)
              ? (function (t) {
                  for (var e, i, n = [], o = t.length, r = 0; r < o; r++)
                    if (((e = t[r]), s(e)))
                      for (i = e.length, i = 0; i < e.length; i++) n.push(e[i]);
                    else n.push(e);
                  return n;
                })(t)
              : [t]),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = e || {}),
              this.split(e);
          }),
      j = function (t, e, i) {
        var n = t.nodeType;
        if (1 === n || 9 === n || 11 === n)
          for (t = t.firstChild; t; t = t.nextSibling) j(t, e, i);
        else
          (3 !== n && 4 !== n) || (t.nodeValue = t.nodeValue.split(e).join(i));
      },
      $ = function (t) {
        for (var e, i = c(t.childNodes), n = i.length, o = 0; o < n; o++)
          (e = i[o])._isSplit
            ? $(e)
            : (o && 3 === e.previousSibling.nodeType
                ? (e.previousSibling.nodeValue += (
                    3 === e.nodeType ? e : e.firstChild
                  ).nodeValue)
                : 3 !== e.nodeType && t.insertBefore(e.firstChild, e),
              t.removeChild(e));
      },
      u = function (t, e, i, n) {
        var o,
          r,
          s = c(t.childNodes),
          a = s.length,
          l = "absolute" === e.position || !0 === e.absolute;
        if (3 !== t.nodeType || 1 < a) {
          for (e.absolute = !1, o = 0; o < a; o++)
            (3 === (r = s[o]).nodeType && !/\S+/.test(r.nodeValue)) ||
              (l &&
                3 !== r.nodeType &&
                "inline" === N(r, "display", null, !0) &&
                ((r.style.display = "inline-block"),
                (r.style.position = "relative")),
              (r._isSplit = !0),
              u(r, e, i, n));
          return (e.absolute = l), void (t._isSplit = !0);
        }
        !(function (t, e, i, n) {
          var o,
            r,
            s,
            a,
            l,
            c,
            u,
            h = e.span ? "span" : "div",
            d = e.type || e.split || "chars,words,lines",
            p = (d.indexOf("words"), -1 !== d.indexOf("chars")),
            f = "absolute" === e.position || !0 === e.absolute,
            m = e.wordDelimiter || " ",
            g = " " !== m ? "" : f ? "&#173; " : " ",
            y = e.span ? "</span>" : "</div>",
            v = !0,
            d = W.createElement("div"),
            f = t.parentNode;
          for (
            f.insertBefore(d, t),
              d.textContent = t.nodeValue,
              f.removeChild(t),
              d = -1 !== (o = b((t = d))).indexOf("<"),
              !1 !== e.reduceWhiteSpace &&
                (o = o.replace(S, " ").replace(_, "")),
              a = (o = d ? o.split("<").join("{{LT}}") : o).length,
              r = (" " === o.charAt(0) ? g : "") + i(),
              s = 0;
            s < a;
            s++
          )
            if ((l = o.charAt(s)) === m && o.charAt(s - 1) !== m && s) {
              for (r += v ? y : "", v = !1; o.charAt(s + 1) === m; )
                (r += g), s++;
              s === a - 1
                ? (r += g)
                : ")" !== o.charAt(s + 1) && ((r += g + i()), (v = !0));
            } else
              "{" === l && "{{LT}}" === o.substr(s, 6)
                ? ((r += p ? n() + "{{LT}}</" + h + ">" : "{{LT}}"), (s += 5))
                : (55296 <= l.charCodeAt(0) && l.charCodeAt(0) <= 56319) ||
                  (65024 <= o.charCodeAt(s + 1) && o.charCodeAt(s + 1) <= 65039)
                ? ((c = T(o.substr(s, 2))),
                  (u = T(o.substr(s + 2, 2))),
                  (u =
                    (127462 <= c &&
                      c <= 127487 &&
                      127462 <= u &&
                      u <= 127487) ||
                    (127995 <= u && u <= 127999)
                      ? 4
                      : 2),
                  (r +=
                    p && " " !== l
                      ? n() + o.substr(s, u) + "</" + h + ">"
                      : o.substr(s, u)),
                  (s += u - 1))
                : (r += p && " " !== l ? n() + l + "</" + h + ">" : l);
          (t.outerHTML = r + (v ? y : "")), d && j(f, "{{LT}}", "<");
        })(t, e, i, n);
      },
      t = n.prototype;
    (t.split = function (t) {
      this.isSplit && this.revert(),
        (this.vars = t = t || this.vars),
        (this._originals.length =
          this.chars.length =
          this.words.length =
          this.lines.length =
            0);
      for (
        var e,
          i,
          n,
          o = this.elements.length,
          r = t.span ? "span" : "div",
          s = ("absolute" === t.position || t.absolute, l(t.wordsClass, r)),
          a = l(t.charsClass, r);
        -1 < --o;

      )
        (n = this.elements[o]),
          (this._originals[o] = n.innerHTML),
          (e = n.clientHeight),
          (i = n.clientWidth),
          u(n, t, s, a),
          (function (t, e, i, n, o, r, s) {
            var a,
              l,
              c,
              u,
              h,
              d,
              p,
              f,
              m,
              g,
              y,
              v,
              T = V(t),
              b = N(t, "paddingLeft", T),
              _ = -999,
              S = N(t, "borderBottomWidth", T) + N(t, "borderTopWidth", T),
              w = N(t, "borderLeftWidth", T) + N(t, "borderRightWidth", T),
              P = N(t, "paddingTop", T) + N(t, "paddingBottom", T),
              x = N(t, "paddingLeft", T) + N(t, "paddingRight", T),
              A = 0.2 * N(t, "fontSize"),
              M = N(t, "textAlign", T, !0),
              C = [],
              k = [],
              E = [],
              I = e.wordDelimiter || " ",
              O = e.span ? "span" : "div",
              T = e.type || e.split || "chars,words,lines",
              H = o && -1 !== T.indexOf("lines") ? [] : null,
              G = -1 !== T.indexOf("words"),
              D = -1 !== T.indexOf("chars"),
              B = "absolute" === e.position || !0 === e.absolute,
              L = e.linesClass,
              R = -1 !== (L || "").indexOf("++"),
              z = [];
            for (
              H &&
                1 === t.children.length &&
                t.children[0]._isSplit &&
                (t = t.children[0]),
                R && (L = L.split("++").join("")),
                c = (l = t.getElementsByTagName("*")).length,
                h = [],
                a = 0;
              a < c;
              a++
            )
              h[a] = l[a];
            if (H || B)
              for (a = 0; a < c; a++)
                ((d = (u = h[a]).parentNode === t) || B || (D && !G)) &&
                  ((v = u.offsetTop),
                  H &&
                    d &&
                    Math.abs(v - _) > A &&
                    "BR" !== u.nodeName &&
                    (H.push((p = [])), (_ = v)),
                  B &&
                    ((u._x = u.offsetLeft),
                    (u._y = v),
                    (u._w = u.offsetWidth),
                    (u._h = u.offsetHeight)),
                  H &&
                    (((u._isSplit && d) ||
                      (!D && d) ||
                      (G && d) ||
                      (!G &&
                        u.parentNode.parentNode === t &&
                        !u.parentNode._isSplit)) &&
                      (p.push(u), (u._x -= b), F(u, t, I) && (u._wordEnd = !0)),
                    "BR" === u.nodeName &&
                      u.nextSibling &&
                      "BR" === u.nextSibling.nodeName &&
                      H.push([])));
            for (a = 0; a < c; a++)
              (d = (u = h[a]).parentNode === t),
                "BR" !== u.nodeName
                  ? (B &&
                      ((m = u.style),
                      G ||
                        d ||
                        ((u._x += u.parentNode._x), (u._y += u.parentNode._y)),
                      (m.left = u._x + "px"),
                      (m.top = u._y + "px"),
                      (m.position = "absolute"),
                      (m.display = "block"),
                      (m.width = u._w + 1 + "px"),
                      (m.height = u._h + "px")),
                    !G && D
                      ? u._isSplit
                        ? ((u._next = u.nextSibling),
                          u.parentNode.appendChild(u))
                        : u.parentNode._isSplit
                        ? ((u._parent = u.parentNode),
                          !u.previousSibling &&
                            u.firstChild &&
                            (u.firstChild._isFirst = !0),
                          u.nextSibling &&
                            " " === u.nextSibling.textContent &&
                            !u.nextSibling.nextSibling &&
                            z.push(u.nextSibling),
                          (u._next =
                            u.nextSibling && u.nextSibling._isFirst
                              ? null
                              : u.nextSibling),
                          u.parentNode.removeChild(u),
                          h.splice(a--, 1),
                          c--)
                        : d ||
                          ((v = !u.nextSibling && F(u.parentNode, t, I)),
                          u.parentNode._parent &&
                            u.parentNode._parent.appendChild(u),
                          v && u.parentNode.appendChild(W.createTextNode(" ")),
                          e.span && (u.style.display = "inline"),
                          C.push(u))
                      : u.parentNode._isSplit &&
                        !u._isSplit &&
                        "" !== u.innerHTML
                      ? k.push(u)
                      : D &&
                        !u._isSplit &&
                        (e.span && (u.style.display = "inline"), C.push(u)))
                  : H || B
                  ? (u.parentNode && u.parentNode.removeChild(u),
                    h.splice(a--, 1),
                    c--)
                  : G || t.appendChild(u);
            for (a = z.length; -1 < --a; ) z[a].parentNode.removeChild(z[a]);
            if (H) {
              for (
                B &&
                  ((g = W.createElement(O)),
                  t.appendChild(g),
                  (y = g.offsetWidth + "px"),
                  (v = g.offsetParent === t ? 0 : t.offsetLeft),
                  t.removeChild(g)),
                  m = t.style.cssText,
                  t.style.cssText = "display:none;";
                t.firstChild;

              )
                t.removeChild(t.firstChild);
              for (
                f = " " === I && (!B || (!G && !D)), a = 0;
                a < H.length;
                a++
              ) {
                for (
                  p = H[a],
                    (g = W.createElement(O)).style.cssText =
                      "display:block;text-align:" +
                      M +
                      ";position:" +
                      (B ? "absolute;" : "relative;"),
                    L && (g.className = L + (R ? a + 1 : "")),
                    E.push(g),
                    c = p.length,
                    l = 0;
                  l < c;
                  l++
                )
                  "BR" !== p[l].nodeName &&
                    ((u = p[l]),
                    g.appendChild(u),
                    f && u._wordEnd && g.appendChild(W.createTextNode(" ")),
                    B &&
                      (0 === l &&
                        ((g.style.top = u._y + "px"),
                        (g.style.left = b + v + "px")),
                      (u.style.top = "0px"),
                      v && (u.style.left = u._x - v + "px")));
                0 === c
                  ? (g.innerHTML = "&nbsp;")
                  : G || D || ($(g), j(g, String.fromCharCode(160), " ")),
                  B && ((g.style.width = y), (g.style.height = u._h + "px")),
                  t.appendChild(g);
              }
              t.style.cssText = m;
            }
            B &&
              (s > t.clientHeight &&
                ((t.style.height = s - P + "px"),
                t.clientHeight < s && (t.style.height = s + S + "px")),
              r > t.clientWidth &&
                ((t.style.width = r - x + "px"),
                t.clientWidth < r && (t.style.width = r + w + "px"))),
              X(i, C),
              X(n, k),
              X(o, E);
          })(n, t, this.chars, this.words, this.lines, i, e);
      return (
        this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        (this.isSplit = !0),
        this
      );
    }),
      (t.revert = function () {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; -1 < --t; )
          this.elements[t].innerHTML = this._originals[t];
        return (
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (n.selector =
        i.$ ||
        i.jQuery ||
        function (t) {
          var e = i.$ || i.jQuery;
          return e
            ? (n.selector = e)(t)
            : "undefined" == typeof document
            ? t
            : document.querySelectorAll
            ? document.querySelectorAll(t)
            : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
        }),
      (n.version = "0.5.7");
  })(
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)
  ),
  (function () {
    "use strict";
    function t() {
      return (_gsScope.GreenSockGlobals || _gsScope).SplitText;
    }
    "undefined" != typeof module && module.exports
      ? (module.exports = t())
      : "function" == typeof define && define.amd && define([], t);
  })(),
  (
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)._gsQueue || (_gsScope._gsQueue = [])
  ).push(function () {
    "use strict";
    function r(t, e) {
      var i = "x" === e ? "Width" : "Height",
        n = "scroll" + i,
        o = "client" + i,
        e = document.body;
      return t === l || t === a || t === e
        ? Math.max(a[n], e[n]) - (l["inner" + i] || a[o] || e[o])
        : t[n] - t["offset" + i];
    }
    function o(t, e) {
      var i = "scroll" + ("x" === e ? "Left" : "Top");
      return (
        t === l &&
          (null != t.pageXOffset
            ? (i = "page" + e.toUpperCase() + "Offset")
            : (t = null != a[i] ? a : document.body)),
        function () {
          return t[i];
        }
      );
    }
    function s(t, e) {
      var i = (
          (n =
            (n = "string" == typeof (n = t) ? TweenLite.selector(n) : n)
              .length &&
            n !== l &&
            n[0] &&
            n[0].style &&
            !n.nodeType
              ? n[0]
              : n) === l ||
          (n.nodeType && n.style)
            ? n
            : null
        ).getBoundingClientRect(),
        n = (
          (t = !e || e === l || e === document.body) ? a : e
        ).getBoundingClientRect(),
        n = { x: i.left - n.left, y: i.top - n.top };
      return !t && e && ((n.x += o(e, "x")()), (n.y += o(e, "y")())), n;
    }
    function n(t, e, i) {
      var n = typeof t;
      return isNaN(t)
        ? "number" == n || ("string" == n && "=" === t.charAt(1))
          ? t
          : "max" === t
          ? r(e, i)
          : Math.min(r(e, i), s(t, e)[i])
        : parseFloat(t);
    }
    var a = (_gsScope.document || {}).documentElement,
      l = _gsScope,
      c = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        global: !0,
        version: "1.9.0",
        init: function (t, e, i) {
          return (
            (this._wdw = t === l),
            (this._target = t),
            (this._tween = i),
            "object" != typeof e
              ? "string" == typeof (e = { y: e }).y &&
                "max" !== e.y &&
                "=" !== e.y.charAt(1) &&
                (e.x = e.y)
              : e.nodeType && (e = { y: e, x: e }),
            (this.vars = e),
            (this._autoKill = !1 !== e.autoKill),
            (this.getX = o(t, "x")),
            (this.getY = o(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != e.x
              ? (this._addTween(
                  this,
                  "x",
                  this.x,
                  n(e.x, t, "x") - (e.offsetX || 0),
                  "scrollTo_x",
                  !0
                ),
                this._overwriteProps.push("scrollTo_x"))
              : (this.skipX = !0),
            null != e.y
              ? (this._addTween(
                  this,
                  "y",
                  this.y,
                  n(e.y, t, "y") - (e.offsetY || 0),
                  "scrollTo_y",
                  !0
                ),
                this._overwriteProps.push("scrollTo_y"))
              : (this.skipY = !0),
            !0
          );
        },
        set: function (t) {
          this._super.setRatio.call(this, t);
          var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            n = i - this.yPrev,
            o = e - this.xPrev,
            t = c.autoKillThreshold;
          this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill &&
              (!this.skipX &&
                (t < o || o < -t) &&
                e < r(this._target, "x") &&
                (this.skipX = !0),
              !this.skipY &&
                (t < n || n < -t) &&
                i < r(this._target, "y") &&
                (this.skipY = !0),
              this.skipX &&
                this.skipY &&
                (this._tween.kill(),
                this.vars.onAutoKill &&
                  this.vars.onAutoKill.apply(
                    this.vars.onAutoKillScope || this._tween,
                    this.vars.onAutoKillParams || []
                  ))),
            this._wdw
              ? l.scrollTo(this.skipX ? e : this.x, this.skipY ? i : this.y)
              : (this.skipY || (this._target.scrollTop = this.y),
                this.skipX || (this._target.scrollLeft = this.x)),
            (this.xPrev = this.x),
            (this.yPrev = this.y);
        },
      }),
      t = c.prototype;
    (c.max = r),
      (c.getOffset = s),
      (c.buildGetter = o),
      (c.autoKillThreshold = 7),
      (t._kill = function (t) {
        return (
          t.scrollTo_x && (this.skipX = !0),
          t.scrollTo_y && (this.skipY = !0),
          this._super._kill.call(this, t)
        );
      });
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function () {
    "use strict";
    function t() {
      return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin;
    }
    "undefined" != typeof module && module.exports
      ? (require("../TweenLite.min.js"), (module.exports = t()))
      : "function" == typeof define && define.amd && define(["TweenLite"], t);
  })(),
  (function (t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.ClipboardJS = e())
      : (t.ClipboardJS = e());
  })(this, function () {
    return (
      (n = {}),
      (o.m = i =
        [
          function (t, e) {
            t.exports = function (t) {
              var e,
                i =
                  "SELECT" === t.nodeName
                    ? (t.focus(), t.value)
                    : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName
                    ? ((e = t.hasAttribute("readonly")) ||
                        t.setAttribute("readonly", ""),
                      t.select(),
                      t.setSelectionRange(0, t.value.length),
                      e || t.removeAttribute("readonly"),
                      t.value)
                    : (t.hasAttribute("contenteditable") && t.focus(),
                      (i = window.getSelection()),
                      (e = document.createRange()).selectNodeContents(t),
                      i.removeAllRanges(),
                      i.addRange(e),
                      i.toString());
              return i;
            };
          },
          function (t, e) {
            function i() {}
            (i.prototype = {
              on: function (t, e, i) {
                var n = this.e || (this.e = {});
                return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
              },
              once: function (t, e, i) {
                var n = this;
                function o() {
                  n.off(t, o), e.apply(i, arguments);
                }
                return (o._ = e), this.on(t, o, i);
              },
              emit: function (t) {
                for (
                  var e = [].slice.call(arguments, 1),
                    i = ((this.e || (this.e = {}))[t] || []).slice(),
                    n = 0,
                    o = i.length;
                  n < o;
                  n++
                )
                  i[n].fn.apply(i[n].ctx, e);
                return this;
              },
              off: function (t, e) {
                var i = this.e || (this.e = {}),
                  n = i[t],
                  o = [];
                if (n && e)
                  for (var r = 0, s = n.length; r < s; r++)
                    n[r].fn !== e && n[r].fn._ !== e && o.push(n[r]);
                return o.length ? (i[t] = o) : delete i[t], this;
              },
            }),
              (t.exports = i),
              (t.exports.TinyEmitter = i);
          },
          function (t, e, i) {
            var c = i(3),
              u = i(4);
            t.exports = function (t, e, i) {
              if (!t && !e && !i) throw new Error("Missing required arguments");
              if (!c.string(e))
                throw new TypeError("Second argument must be a String");
              if (!c.fn(i))
                throw new TypeError("Third argument must be a Function");
              if (c.node(t))
                return (
                  (s = t).addEventListener((a = e), (l = i)),
                  {
                    destroy: function () {
                      s.removeEventListener(a, l);
                    },
                  }
                );
              if (c.nodeList(t))
                return (
                  (n = t),
                  (o = e),
                  (r = i),
                  Array.prototype.forEach.call(n, function (t) {
                    t.addEventListener(o, r);
                  }),
                  {
                    destroy: function () {
                      Array.prototype.forEach.call(n, function (t) {
                        t.removeEventListener(o, r);
                      });
                    },
                  }
                );
              if (c.string(t)) return u(document.body, t, e, i);
              throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
              );
              var n, o, r, s, a, l;
            };
          },
          function (t, i) {
            (i.node = function (t) {
              return (
                void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
              );
            }),
              (i.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return (
                  void 0 !== t &&
                  ("[object NodeList]" === e ||
                    "[object HTMLCollection]" === e) &&
                  "length" in t &&
                  (0 === t.length || i.node(t[0]))
                );
              }),
              (i.string = function (t) {
                return "string" == typeof t || t instanceof String;
              }),
              (i.fn = function (t) {
                return (
                  "[object Function]" === Object.prototype.toString.call(t)
                );
              });
          },
          function (t, e, i) {
            var s = i(5);
            function r(t, e, i, n, o) {
              var r = function (e, i, t, n) {
                return function (t) {
                  (t.delegateTarget = s(t.target, i)),
                    t.delegateTarget && n.call(e, t);
                };
              }.apply(this, arguments);
              return (
                t.addEventListener(i, r, o),
                {
                  destroy: function () {
                    t.removeEventListener(i, r, o);
                  },
                }
              );
            }
            t.exports = function (t, e, i, n, o) {
              return "function" == typeof t.addEventListener
                ? r.apply(null, arguments)
                : "function" == typeof i
                ? r.bind(null, document).apply(null, arguments)
                : ("string" == typeof t && (t = document.querySelectorAll(t)),
                  Array.prototype.map.call(t, function (t) {
                    return r(t, e, i, n, o);
                  }));
            };
          },
          function (t, e) {
            var i;
            "undefined" == typeof Element ||
              Element.prototype.matches ||
              ((i = Element.prototype).matches =
                i.matchesSelector ||
                i.mozMatchesSelector ||
                i.msMatchesSelector ||
                i.oMatchesSelector ||
                i.webkitMatchesSelector),
              (t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType; ) {
                  if ("function" == typeof t.matches && t.matches(e)) return t;
                  t = t.parentNode;
                }
              });
          },
          function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i(0),
              o = i.n(n),
              r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    };
            function s(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            function a(t) {
              !(function (t) {
                if (!(t instanceof a))
                  throw new TypeError("Cannot call a class as a function");
              })(this),
                this.resolveOptions(t),
                this.initSelection();
            }
            var l =
                (s(a.prototype, [
                  {
                    key: "resolveOptions",
                    value: function (t) {
                      t = 0 < arguments.length && void 0 !== t ? t : {};
                      (this.action = t.action),
                        (this.container = t.container),
                        (this.emitter = t.emitter),
                        (this.target = t.target),
                        (this.text = t.text),
                        (this.trigger = t.trigger),
                        (this.selectedText = "");
                    },
                  },
                  {
                    key: "initSelection",
                    value: function () {
                      this.text
                        ? this.selectFake()
                        : this.target && this.selectTarget();
                    },
                  },
                  {
                    key: "selectFake",
                    value: function () {
                      var t = this,
                        e =
                          "rtl" == document.documentElement.getAttribute("dir");
                      this.removeFake(),
                        (this.fakeHandlerCallback = function () {
                          return t.removeFake();
                        }),
                        (this.fakeHandler =
                          this.container.addEventListener(
                            "click",
                            this.fakeHandlerCallback
                          ) || !0),
                        (this.fakeElem = document.createElement("textarea")),
                        (this.fakeElem.style.fontSize = "12pt"),
                        (this.fakeElem.style.border = "0"),
                        (this.fakeElem.style.padding = "0"),
                        (this.fakeElem.style.margin = "0"),
                        (this.fakeElem.style.position = "absolute"),
                        (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                      e =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      (this.fakeElem.style.top = e + "px"),
                        this.fakeElem.setAttribute("readonly", ""),
                        (this.fakeElem.value = this.text),
                        this.container.appendChild(this.fakeElem),
                        (this.selectedText = o()(this.fakeElem)),
                        this.copyText();
                    },
                  },
                  {
                    key: "removeFake",
                    value: function () {
                      this.fakeHandler &&
                        (this.container.removeEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ),
                        (this.fakeHandler = null),
                        (this.fakeHandlerCallback = null)),
                        this.fakeElem &&
                          (this.container.removeChild(this.fakeElem),
                          (this.fakeElem = null));
                    },
                  },
                  {
                    key: "selectTarget",
                    value: function () {
                      (this.selectedText = o()(this.target)), this.copyText();
                    },
                  },
                  {
                    key: "copyText",
                    value: function () {
                      var e = void 0;
                      try {
                        e = document.execCommand(this.action);
                      } catch (t) {
                        e = !1;
                      }
                      this.handleResult(e);
                    },
                  },
                  {
                    key: "handleResult",
                    value: function (t) {
                      this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this),
                      });
                    },
                  },
                  {
                    key: "clearSelection",
                    value: function () {
                      this.trigger && this.trigger.focus(),
                        document.activeElement.blur(),
                        window.getSelection().removeAllRanges();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.removeFake();
                    },
                  },
                  {
                    key: "action",
                    set: function (t) {
                      if (
                        ((this._action =
                          0 < arguments.length && void 0 !== t ? t : "copy"),
                        "copy" !== this._action && "cut" !== this._action)
                      )
                        throw new Error(
                          'Invalid "action" value, use either "copy" or "cut"'
                        );
                    },
                    get: function () {
                      return this._action;
                    },
                  },
                  {
                    key: "target",
                    set: function (t) {
                      if (void 0 !== t) {
                        if (
                          !t ||
                          "object" !== (void 0 === t ? "undefined" : r(t)) ||
                          1 !== t.nodeType
                        )
                          throw new Error(
                            'Invalid "target" value, use a valid Element'
                          );
                        if (
                          "copy" === this.action &&
                          t.hasAttribute("disabled")
                        )
                          throw new Error(
                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                          );
                        if (
                          "cut" === this.action &&
                          (t.hasAttribute("readonly") ||
                            t.hasAttribute("disabled"))
                        )
                          throw new Error(
                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                          );
                        this._target = t;
                      }
                    },
                    get: function () {
                      return this._target;
                    },
                  },
                ]),
                a),
              c = i(1),
              n = i.n(c),
              c = i(2),
              u = i.n(c),
              h =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    };
            function d(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            var p,
              f,
              m,
              n =
                ((function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(g, n.a),
                (p = g),
                (m = [
                  {
                    key: "isSupported",
                    value: function (t) {
                      var t =
                          0 < arguments.length && void 0 !== t
                            ? t
                            : ["copy", "cut"],
                        e = !!document.queryCommandSupported;
                      return (
                        ("string" == typeof t ? [t] : t).forEach(function (t) {
                          e = e && !!document.queryCommandSupported(t);
                        }),
                        e
                      );
                    },
                  },
                ]),
                (f = [
                  {
                    key: "resolveOptions",
                    value: function (t) {
                      t = 0 < arguments.length && void 0 !== t ? t : {};
                      (this.action =
                        "function" == typeof t.action
                          ? t.action
                          : this.defaultAction),
                        (this.target =
                          "function" == typeof t.target
                            ? t.target
                            : this.defaultTarget),
                        (this.text =
                          "function" == typeof t.text
                            ? t.text
                            : this.defaultText),
                        (this.container =
                          "object" === h(t.container)
                            ? t.container
                            : document.body);
                    },
                  },
                  {
                    key: "listenClick",
                    value: function (t) {
                      var e = this;
                      this.listener = u()(t, "click", function (t) {
                        return e.onClick(t);
                      });
                    },
                  },
                  {
                    key: "onClick",
                    value: function (t) {
                      t = t.delegateTarget || t.currentTarget;
                      this.clipboardAction && (this.clipboardAction = null),
                        (this.clipboardAction = new l({
                          action: this.action(t),
                          target: this.target(t),
                          text: this.text(t),
                          container: this.container,
                          trigger: t,
                          emitter: this,
                        }));
                    },
                  },
                  {
                    key: "defaultAction",
                    value: function (t) {
                      return y("action", t);
                    },
                  },
                  {
                    key: "defaultTarget",
                    value: function (t) {
                      t = y("target", t);
                      if (t) return document.querySelector(t);
                    },
                  },
                  {
                    key: "defaultText",
                    value: function (t) {
                      return y("text", t);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.listener.destroy(),
                        this.clipboardAction &&
                          (this.clipboardAction.destroy(),
                          (this.clipboardAction = null));
                    },
                  },
                ]) && d(p.prototype, f),
                m && d(p, m),
                g);
            function g(t, e) {
              !(function (t) {
                if (!(t instanceof g))
                  throw new TypeError("Cannot call a class as a function");
              })(this);
              var i = (function (t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
              return i.resolveOptions(e), i.listenClick(t), i;
            }
            function y(t, e) {
              t = "data-clipboard-" + t;
              if (e.hasAttribute(t)) return e.getAttribute(t);
            }
            e.default = n;
          },
        ]),
      (o.c = n),
      (o.d = function (t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (o.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            o.d(
              i,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return i;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = ""),
      o((o.s = 6)).default
    );
    function o(t) {
      if (n[t]) return n[t].exports;
      var e = (n[t] = { i: t, l: !1, exports: {} });
      return i[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
    }
    var i, n;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            t = (i[t] = i[t] || []);
          return -1 == t.indexOf(e) && t.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
          e = t.indexOf(e);
          return -1 != e && t.splice(e, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            o = i[n];
          e = e || [];
          for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
            var s = r && r[o];
            s && (this.off(t, o), delete r[o]),
              o.apply(this, e),
              (o = i[(n += s ? 0 : 1)]);
          }
          return this;
        }
      }),
      (e.allOff = e.removeAllListeners =
        function () {
          delete this._events, delete this._onceEvents;
        }),
      t
    );
  }),
  (function (e, i) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.imagesLoaded = i(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function o(t, e, i) {
      return this instanceof o
        ? ("string" == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = (function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
              for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e;
          })(t)),
          (this.options = n({}, this.options)),
          "function" == typeof e ? (i = e) : n(this.options, e),
          i && this.on("always", i),
          this.getImages(),
          s && (this.jqDeferred = new s.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new o(t, e, i);
    }
    function i(t) {
      this.img = t;
    }
    function r(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var s = e.jQuery,
      a = e.console;
    ((o.prototype = Object.create(t.prototype)).options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background)
            for (
              var r = t.querySelectorAll(this.options.background), n = 0;
              n < r.length;
              n++
            ) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
        }
      });
    var l = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (t) {
        t = new i(t);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (t, e) {
        e = new r(t, e);
        this.images.push(e);
      }),
      (o.prototype.check = function () {
        function e(t, e, i) {
          setTimeout(function () {
            n.progress(t, e, i);
          });
        }
        var n = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, t, e);
      }),
      (o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        (this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred &&
            ((t = this.hasAnyBroken ? "reject" : "resolve"),
            this.jqDeferred[t](this));
      }),
      ((i.prototype = Object.create(t.prototype)).check = function () {
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (i.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (i.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((r.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (r.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (r.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((s = t).fn.imagesLoaded = function (t, e) {
            return new o(this, t, e).jqDeferred.promise(s(this));
          });
      })(),
      o
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("jquery")))
      : (e.jQueryBridget = i(e, e.jQuery));
  })(window, function (t, e) {
    "use strict";
    function i(l, c, u) {
      (u = u || e || t.jQuery) &&
        (c.prototype.option ||
          (c.prototype.option = function (t) {
            u.isPlainObject(t) &&
              (this.options = u.extend(!0, this.options, t));
          }),
        (u.fn[l] = function (t) {
          if ("string" != typeof t)
            return (
              (a = t),
              this.each(function (t, e) {
                var i = u.data(e, l);
                i
                  ? (i.option(a), i._init())
                  : ((i = new c(e, a)), u.data(e, l, i));
              }),
              this
            );
          var n,
            o,
            r,
            s,
            a,
            e = h.call(arguments, 1);
          return (
            (o = e),
            (s = "$()." + l + '("' + (n = t) + '")'),
            (t = this).each(function (t, e) {
              var i = u.data(e, l);
              i
                ? (e = i[n]) && "_" != n.charAt(0)
                  ? ((i = e.apply(i, o)), (r = void 0 === r ? i : r))
                  : d(s + " is not a valid method")
                : d(l + " not initialized. Cannot call methods, i.e. " + s);
            }),
            void 0 !== r ? r : t
          );
        }),
        n(u));
    }
    function n(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var h = Array.prototype.slice,
      o = t.console,
      d =
        void 0 === o
          ? function () {}
          : function (t) {
              o.error(t);
            };
    return n(e || t.jQuery), i;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            t = (i[t] = i[t] || []);
          return -1 == t.indexOf(e) && t.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
          e = t.indexOf(e);
          return -1 != e && t.splice(e, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], o = 0;
            o < i.length;
            o++
          ) {
            var r = i[o];
            n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function p(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function f(t) {
      t = getComputedStyle(t);
      return (
        t ||
          e(
            "Style returned " +
              t +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        t
      );
    }
    function m(t) {
      if (
        (T ||
          ((T = !0),
          ((d = document.createElement("div")).style.width = "200px"),
          (d.style.padding = "1px 2px 3px 4px"),
          (d.style.borderStyle = "solid"),
          (d.style.borderWidth = "1px 2px 3px 4px"),
          (d.style.boxSizing = "border-box"),
          (h = document.body || document.documentElement).appendChild(d),
          (u = f(d)),
          (g = 200 == Math.round(p(u.width))),
          (m.isBoxSizeOuter = g),
          h.removeChild(d)),
        (t = "string" == typeof t ? document.querySelector(t) : t) &&
          "object" == typeof t &&
          t.nodeType)
      ) {
        var e = f(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < v;
              e++
            )
              t[y[e]] = 0;
            return t;
          })();
        var i = {};
        (i.width = t.offsetWidth), (i.height = t.offsetHeight);
        for (
          var n = (i.isBorderBox = "border-box" == e.boxSizing), o = 0;
          o < v;
          o++
        ) {
          var r = y[o],
            s = e[r],
            s = parseFloat(s);
          i[r] = isNaN(s) ? 0 : s;
        }
        var a = i.paddingLeft + i.paddingRight,
          l = i.paddingTop + i.paddingBottom,
          c = i.marginLeft + i.marginRight,
          u = i.marginTop + i.marginBottom,
          h = i.borderLeftWidth + i.borderRightWidth,
          d = i.borderTopWidth + i.borderBottomWidth,
          t = n && g,
          n = p(e.width);
        !1 !== n && (i.width = n + (t ? 0 : a + h));
        n = p(e.height);
        return (
          !1 !== n && (i.height = n + (t ? 0 : l + d)),
          (i.innerWidth = i.width - (a + h)),
          (i.innerHeight = i.height - (l + d)),
          (i.outerWidth = i.width + c),
          (i.outerHeight = i.height + u),
          i
        );
      }
      var d, h, u;
    }
    var g,
      e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      y = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      v = y.length,
      T = !1;
    return m;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var i = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (t, e) {
      return t[i](e);
    };
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (i, r) {
    var l = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (l.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (l.removeFrom = function (t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1);
      }),
      (l.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), r(t, e))) return t;
      }),
      (l.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.filterFindElements = function (t, n) {
        t = l.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (n) {
                r(t, n) && o.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                  o.push(e[i]);
              } else o.push(t);
          }),
          o
        );
      }),
      (l.debounceMethod = function (t, e, n) {
        n = n || 100;
        var o = t.prototype[e],
          r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          clearTimeout(t);
          var e = arguments,
            i = this;
          this[r] = setTimeout(function () {
            o.apply(i, e), delete i[r];
          }, n);
        };
      }),
      (l.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (l.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var c = i.console;
    return (
      (l.htmlInit = function (s, a) {
        l.docReady(function () {
          var t = l.toDashed(a),
            n = "data-" + t,
            e = document.querySelectorAll("[" + n + "]"),
            t = document.querySelectorAll(".js-" + t),
            t = l.makeArray(e).concat(l.makeArray(t)),
            o = n + "-options",
            r = i.jQuery;
          t.forEach(function (e) {
            var t = e.getAttribute(n) || e.getAttribute(o);
            try {
              i = t && JSON.parse(t);
            } catch (t) {
              return void (
                c &&
                c.error("Error parsing " + n + " on " + e.className + ": " + t)
              );
            }
            var i = new s(e, i);
            r && r.data(e, a, i);
          });
        });
      }),
      l
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var n = document.documentElement.style,
      o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[o],
      a = {
        transform: r,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay",
      },
      t = (i.prototype = Object.create(t.prototype));
    (t.constructor = i),
      (t._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (t.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (t.getSize = function () {
        this.size = e(this.element);
      }),
      (t.css = function (t) {
        var e,
          i = this.element.style;
        for (e in t) i[a[e] || e] = t[e];
      }),
      (t.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = parseFloat(n),
          s = parseFloat(o),
          t = this.layout.size;
        -1 != n.indexOf("%") && (r = (r / 100) * t.width),
          -1 != o.indexOf("%") && (s = (s / 100) * t.height),
          (r = isNaN(r) ? 0 : r),
          (s = isNaN(s) ? 0 : s),
          (r -= e ? t.paddingLeft : t.paddingRight),
          (s -= i ? t.paddingTop : t.paddingBottom),
          (this.position.x = r),
          (this.position.y = s);
      }),
      (t.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "right" : "left",
          r = this.position.x + t[i ? "paddingLeft" : "paddingRight"];
        (e[i ? "left" : "right"] = this.getXValue(r)), (e[o] = "");
        (o = n ? "bottom" : "top"),
          (t = this.position.y + t[n ? "paddingTop" : "paddingBottom"]);
        (e[n ? "top" : "bottom"] = this.getYValue(t)),
          (e[o] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (t.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (t.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (t._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = t == this.position.x && e == this.position.y;
        this.setPosition(t, e),
          !o || this.isTransitioning
            ? (((o = {}).transform = this.getTranslate(t - i, e - n)),
              this.transition({
                to: o,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              }))
            : this.layoutPosition();
      }),
      (t.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (t.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (t.moveTo = t._transitionTo),
      (t.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (t._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (t.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e,
            i = this._transn;
          for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
          for (e in t.to)
            (i.ingProperties[e] = !0), t.isCleaning && (i.clean[e] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight, 0),
            this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var l =
      "opacity," +
      r.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (t.enableTransition = function () {
      var t;
      this.isTransitioning ||
        ((t = this.layout.options.transitionDuration),
        this.css({
          transitionProperty: l,
          transitionDuration: (t = "number" == typeof t ? t + "ms" : t),
          transitionDelay: this.staggerDelay || 0,
        }),
        this.element.addEventListener(s, this, !1));
    }),
      (t.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (t.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (t.ontransitionend = function (t) {
      var e, i;
      t.target === this.element &&
        ((e = this._transn),
        (i = c[t.propertyName] || t.propertyName),
        delete e.ingProperties[i],
        (function (t) {
          for (var e in t) return;
          return 1;
        })(e.ingProperties) && this.disableTransition(),
        i in e.clean &&
          ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
        i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
        this.emitEvent("transitionEnd", [this]));
    }),
      (t.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(s, this, !1),
          (this.isTransitioning = !1);
      }),
      (t._removeStyles = function (t) {
        var e,
          i = {};
        for (e in t) i[e] = "";
        this.css(i);
      });
    var u = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (t.removeTransitionStyles = function () {
        this.css(u);
      }),
      (t.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (t.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (t.remove = function () {
        return o && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (t.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (t.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (t.getHideRevealTransitionEndProperty = function (t) {
        var e,
          t = this.layout.options[t];
        if (t.opacity) return "opacity";
        for (e in t) return e;
      }),
      (t.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (t.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (t.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      i
    );
  }),
  (function (o, r) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (t, e, i, n) {
            return r(o, t, e, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = r(
          o,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (o.Outlayer = r(
          o,
          o.EvEmitter,
          o.getSize,
          o.fizzyUIUtils,
          o.Outlayer.Item
        ));
  })(window, function (t, e, o, n, r) {
    "use strict";
    function s(t, e) {
      var i = n.getQueryElement(t);
      i
        ? ((this.element = i),
          c && (this.$element = c(this.element)),
          (this.options = n.extend({}, this.constructor.defaults)),
          this.option(e),
          (e = ++u),
          (this.element.outlayerGUID = e),
          (h[e] = this)._create(),
          this._getOption("initLayout") && this.layout())
        : l &&
          l.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          );
    }
    function a(t) {
      function e() {
        t.apply(this, arguments);
      }
      return ((e.prototype = Object.create(t.prototype)).constructor = e);
    }
    function i() {}
    var l = t.console,
      c = t.jQuery,
      u = 0,
      h = {};
    (s.namespace = "outlayer"),
      (s.Item = r),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var d = s.prototype;
    n.extend(d, e.prototype),
      (d.option = function (t) {
        n.extend(this.options, t);
      }),
      (d._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (d._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (d.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (d._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = new i(e[o], this);
          n.push(r);
        }
        return n;
      }),
      (d._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (d.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (d.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          t = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, t), (this._isLayoutInited = !0);
      }),
      (d._init = d.layout),
      (d._resetLayout = function () {
        this.getSize();
      }),
      (d.getSize = function () {
        this.size = o(this.element);
      }),
      (d._getMeasurement = function (t, e) {
        var i,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (i = this.element.querySelector(n))
              : n instanceof HTMLElement && (i = n),
            (this[t] = i ? o(i)[e] : n))
          : (this[t] = 0);
      }),
      (d.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (d._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (d._layoutItems = function (t, i) {
        var n;
        this._emitCompleteOnItems("layout", t),
          t &&
            t.length &&
            ((n = []),
            t.forEach(function (t) {
              var e = this._getItemLayoutPosition(t);
              (e.item = t), (e.isInstant = i || t.isLayoutInstant), n.push(e);
            }, this),
            this._processLayoutQueue(n));
      }),
      (d._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (d._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (d.updateStagger = function () {
        var t = this.options.stagger;
        return null == t
          ? void (this.stagger = 0)
          : ((this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var t = (e = t.match(/(^\d*\.?\d*)(\w*)/)) && e[1],
                e = e && e[2];
              return t.length ? (t = parseFloat(t)) * (p[e] || 1) : 0;
            })(t)),
            this.stagger);
      }),
      (d._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (d._postLayout = function () {
        this.resizeContainer();
      }),
      (d.resizeContainer = function () {
        var t;
        !this._getOption("resizeContainer") ||
          ((t = this._getContainerSize()) &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1)));
      }),
      (d._getContainerSize = i),
      (d._setContainerMeasure = function (t, e) {
        var i;
        void 0 !== t &&
          ((i = this.size).isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
          (t = Math.max(t, 0)),
          (this.element.style[e ? "width" : "height"] = t + "px"));
      }),
      (d._emitCompleteOnItems = function (e, t) {
        function i() {
          r.dispatchEvent(e + "Complete", null, [t]);
        }
        function n() {
          ++o == s && i();
        }
        var o,
          r = this,
          s = t.length;
        t && s
          ? ((o = 0),
            t.forEach(function (t) {
              t.once(e, n);
            }))
          : i();
      }),
      (d.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n),
          c &&
            ((this.$element = this.$element || c(this.element)),
            e
              ? (((e = c.Event(e)).type = t), this.$element.trigger(e, i))
              : this.$element.trigger(t, i));
      }),
      (d.ignore = function (t) {
        t = this.getItem(t);
        t && (t.isIgnored = !0);
      }),
      (d.unignore = function (t) {
        t = this.getItem(t);
        t && delete t.isIgnored;
      }),
      (d.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (d.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (d._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            n.makeArray(t)
          );
      }),
      (d._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (d._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (d._manageStamp = i),
      (d._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          i = this._boundingRect,
          t = o(t);
        return {
          left: e.left - i.left - t.marginLeft,
          top: e.top - i.top - t.marginTop,
          right: i.right - e.right - t.marginRight,
          bottom: i.bottom - e.bottom - t.marginBottom,
        };
      }),
      (d.handleEvent = n.handleEvent),
      (d.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (d.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (d.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(s, "onresize", 100),
      (d.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (d.needsResizeLayout = function () {
        var t = o(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (d.addItems = function (t) {
        t = this._itemize(t);
        return t.length && (this.items = this.items.concat(t)), t;
      }),
      (d.appended = function (t) {
        t = this.addItems(t);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
      }),
      (d.prepended = function (t) {
        var e = this._itemize(t);
        e.length &&
          ((t = this.items.slice(0)),
          (this.items = e.concat(t)),
          this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(e, !0),
          this.reveal(e),
          this.layoutItems(t));
      }),
      (d.reveal = function (t) {
        var i;
        this._emitCompleteOnItems("reveal", t),
          t &&
            t.length &&
            ((i = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * i), t.reveal();
            }));
      }),
      (d.hide = function (t) {
        var i;
        this._emitCompleteOnItems("hide", t),
          t &&
            t.length &&
            ((i = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * i), t.hide();
            }));
      }),
      (d.revealItemElements = function (t) {
        t = this.getItems(t);
        this.reveal(t);
      }),
      (d.hideItemElements = function (t) {
        t = this.getItems(t);
        this.hide(t);
      }),
      (d.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (d.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            t = this.getItem(t);
            t && e.push(t);
          }, this),
          e
        );
      }),
      (d.remove = function (t) {
        t = this.getItems(t);
        this._emitCompleteOnItems("remove", t),
          t &&
            t.length &&
            t.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (d.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        t = this.element.outlayerGUID;
        delete h[t],
          delete this.element.outlayerGUID,
          c && c.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return t && h[t];
      }),
      (s.create = function (t, e) {
        var i = a(s);
        return (
          (i.defaults = n.extend({}, s.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = a(r)),
          n.htmlInit(i, t),
          c && c.bridget && c.bridget(t, i),
          i
        );
      });
    var p = { ms: 1, s: 1e3 };
    return (s.Item = r), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      n = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t,
            e = this.layout.options.getSortData,
            i = this.layout._sorters;
          for (t in e) {
            var n = i[t];
            this.sortData[t] = n(this.element, this);
          }
        }
      });
    var o = i.destroy;
    return (
      (i.destroy = function () {
        o.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (e, i) {
    "use strict";
    function n(t) {
      (this.isotope = t) &&
        ((this.options = t.options[this.namespace]),
        (this.element = t.element),
        (this.items = t.filteredItems),
        (this.size = t.size));
    }
    var o = n.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        o[t] = function () {
          return i.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element);
        return (
          this.isotope.size &&
          t &&
          t.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          n = "outer" + e;
        this._getMeasurement(i, n),
          this[i] ||
            ((t = this.getFirstItemSize()),
            (this[i] = (t && t[n]) || this.isotope.size["inner" + e]));
      }),
      (o.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (n.modes = {}),
      (n.create = function (t, e) {
        function i() {
          n.apply(this, arguments);
        }
        return (
          ((i.prototype = Object.create(o)).constructor = i),
          e && (i.options = e),
          (n.modes[(i.prototype.namespace = t)] = i)
        );
      }),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, a) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    t = e.prototype;
    return (
      (t._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (t.measureColumns = function () {
        this.getContainerWidth(),
          this.columnWidth ||
            ((i = (e = this.items[0]) && e.element),
            (this.columnWidth = (i && a(i).outerWidth) || this.containerWidth));
        var t = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          i = e / t,
          t = t - (e % t),
          i = Math[t && t < 1 ? "round" : "floor"](i);
        this.cols = Math.max(i, 1);
      }),
      (t.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          t = a(t);
        this.containerWidth = t && t.innerWidth;
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        for (
          var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](
              t.size.outerWidth / this.columnWidth
            ),
            i = Math.min(i, this.cols),
            n = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](i, t),
            e = { x: this.columnWidth * n.col, y: n.y },
            o = n.y + t.size.outerHeight,
            r = i + n.col,
            s = n.col;
          s < r;
          s++
        )
          this.colYs[s] = o;
        return e;
      }),
      (t._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          t = Math.min.apply(Math, e);
        return { col: e.indexOf(t), y: t };
      }),
      (t._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (t._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        e = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, e);
      }),
      (t._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          i = 1 < t && i + t > this.cols ? 0 : i,
          e = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = e ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (t._manageStamp = function (t) {
        var e = a(t),
          i = this._getElementOffset(t),
          n = this._getOption("originLeft") ? i.left : i.right,
          t = n + e.outerWidth,
          n = Math.floor(n / this.columnWidth),
          n = Math.max(0, n),
          o = Math.floor(t / this.columnWidth);
        o -= t % this.columnWidth ? 0 : 1;
        for (
          var o = Math.min(this.cols - 1, o),
            r =
              (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight,
            s = n;
          s <= o;
          s++
        )
          this.colYs[s] = Math.max(r, this.colYs[s]);
      }),
      (t._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (t._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (t.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i,
      t = t.create("masonry"),
      n = t.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);
    var r = n.measureColumns;
    n.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var s = n._getOption;
    return (
      (n._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : s.apply(this.isotope, arguments);
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      t = e.prototype;
    return (
      (t._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        i = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          i
        );
      }),
      (t._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      t = e.prototype;
    return (
      (t._resetLayout = function () {
        this.y = 0;
      }),
      (t._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (t._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (s, a) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (t, e, i, n, o, r) {
            return a(s, t, 0, i, n, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          s,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (s.Isotope = a(
          s,
          s.Outlayer,
          s.getSize,
          s.matchesSelector,
          s.fizzyUIUtils,
          s.Isotope.Item,
          s.Isotope.LayoutMode
        ));
  })(window, function (t, i, e, n, r, o, s) {
    var a = t.jQuery,
      l = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      c = i.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (c.Item = o), (c.LayoutMode = s);
    o = c.prototype;
    (o._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      i.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      s.modes))
        this._initLayoutMode(t);
    }),
      (o.reloadItems = function () {
        (this.itemGUID = 0), i.prototype.reloadItems.call(this);
      }),
      (o._itemize = function () {
        for (
          var t = i.prototype._itemize.apply(this, arguments), e = 0;
          e < t.length;
          e++
        )
          t[e].id = this.itemGUID++;
        return this._updateItemsSortData(t), t;
      }),
      (o._initLayoutMode = function (t) {
        var e = s.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? r.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (o.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (o._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (o.arrange = function (t) {
        this.option(t), this._getIsInstant();
        t = this._filter(this.items);
        (this.filteredItems = t.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [t])
            : this._hideReveal(t),
          this._sort(),
          this._layout();
      }),
      (o._init = o.arrange),
      (o._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (o._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          t = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = t);
      }),
      (o._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            n &&
            o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
        }
        var e,
          i,
          n,
          o = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (n = !0), t();
          });
      }),
      (o._filter = function (t) {
        for (
          var e = this.options.filter,
            i = [],
            n = [],
            o = [],
            r = this._getFilterTest((e = e || "*")),
            s = 0;
          s < t.length;
          s++
        ) {
          var a,
            l = t[s];
          l.isIgnored ||
            ((a = r(l)) && i.push(l),
            a && l.isHidden ? n.push(l) : a || l.isHidden || o.push(l));
        }
        return { matches: i, needReveal: n, needHide: o };
      }),
      (o._getFilterTest = function (e) {
        return a && this.options.isJQueryFiltering
          ? function (t) {
              return a(t.element).is(e);
            }
          : "function" == typeof e
          ? function (t) {
              return e(t.element);
            }
          : function (t) {
              return n(t.element, e);
            };
      }),
      (o.updateSortData = function (t) {
        t = t ? ((t = r.makeArray(t)), this.getItems(t)) : this.items;
        this._getSorters(), this._updateItemsSortData(t);
      }),
      (o._getSorters = function () {
        var t,
          e = this.options.getSortData;
        for (t in e) {
          var i = e[t];
          this._sorters[t] = u(i);
        }
      }),
      (o._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++)
          t[i].updateSortData();
      });
    var u = function (t) {
      if ("string" != typeof t) return t;
      var e,
        i,
        n = l(t).split(" "),
        o = n[0],
        t = (t = o.match(/^\[(.+)\]$/)) && t[1],
        r =
          ((i = o),
          (e = t)
            ? function (t) {
                return t.getAttribute(e);
              }
            : function (t) {
                t = t.querySelector(i);
                return t && t.textContent;
              }),
        s = c.sortDataParsers[n[1]];
      return s
        ? function (t) {
            return t && s(r(t));
          }
        : function (t) {
            return t && r(t);
          };
    };
    (c.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (o._sort = function () {
        var t, s, a;
        this.options.sortBy &&
          ((t = r.makeArray(this.options.sortBy)),
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory)),
          (s = this.sortHistory),
          (a = this.options.sortAscending),
          this.filteredItems.sort(function (t, e) {
            for (var i = 0; i < s.length; i++) {
              var n = s[i],
                o = t.sortData[n],
                r = e.sortData[n];
              if (r < o || o < r)
                return (
                  (r < o ? 1 : -1) * ((void 0 !== a[n] ? a[n] : a) ? 1 : -1)
                );
            }
            return 0;
          }));
      }),
      (o._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (o._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (o._resetLayout = function () {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (o._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (o._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (o._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (o.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (o.appended = function (t) {
        t = this.addItems(t);
        t.length &&
          ((t = this._filterRevealAdded(t)),
          (this.filteredItems = this.filteredItems.concat(t)));
      }),
      (o.prepended = function (t) {
        var e = this._itemize(t);
        e.length &&
          (this._resetLayout(),
          this._manageStamps(),
          (t = this._filterRevealAdded(e)),
          this.layoutItems(this.filteredItems),
          (this.filteredItems = t.concat(this.filteredItems)),
          (this.items = e.concat(this.items)));
      }),
      (o._filterRevealAdded = function (t) {
        t = this._filter(t);
        return (
          this.hide(t.needHide),
          this.reveal(t.matches),
          this.layoutItems(t.matches, !0),
          t.matches
        );
      }),
      (o.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          for (var i, n = e.length, o = 0; o < n; o++)
            (i = e[o]), this.element.appendChild(i.element);
          t = this._filter(e).matches;
          for (o = 0; o < n; o++) e[o].isLayoutInstant = !0;
          for (this.arrange(), o = 0; o < n; o++) delete e[o].isLayoutInstant;
          this.reveal(t);
        }
      });
    var h = o.remove;
    return (
      (o.remove = function (t) {
        t = r.makeArray(t);
        var e = this.getItems(t);
        h.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
          var o = e[n];
          r.removeFrom(this.filteredItems, o);
        }
      }),
      (o.shuffle = function () {
        for (var t = 0; t < this.items.length; t++)
          this.items[t].sortData.random = Math.random();
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (o._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        e = t.apply(this, e);
        return (this.options.transitionDuration = i), e;
      }),
      (o.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      c
    );
  }),
  (function (i) {
    var n = {};
    function o(t) {
      if (n[t]) return n[t].exports;
      var e = (n[t] = { i: t, l: !1, exports: {} });
      return i[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
    }
    (o.m = i),
      (o.c = n),
      (o.d = function (t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (o.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            o.d(
              i,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return i;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = ""),
      o((o.s = 10));
  })([
    ,
    ,
    function (t, e) {
      t.exports = function (t) {
        "complete" === document.readyState ||
        "interactive" === document.readyState
          ? t.call()
          : document.attachEvent
          ? document.attachEvent("onreadystatechange", function () {
              "interactive" === document.readyState && t.call();
            })
          : document.addEventListener &&
            document.addEventListener("DOMContentLoaded", t);
      };
    },
    function (e, t, i) {
      !function (t) {
        t =
          "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {};
        e.exports = t;
      }.call(this, i(4));
    },
    function (t, e) {
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) &&
          (n = window);
      }
      t.exports = n;
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, i) {
      t.exports = i(11);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var e = i(2),
        e = i.n(e),
        o = i(3),
        r = i(12);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n,
        a = o.window.jarallax;
      (o.window.jarallax = r.default),
        (o.window.jarallax.noConflict = function () {
          return (o.window.jarallax = a), this;
        }),
        void 0 !== o.jQuery &&
          (((i = function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            Array.prototype.unshift.call(e, this);
            var n = r.default.apply(o.window, e);
            return "object" !== s(n) ? n : this;
          }).constructor = r.default.constructor),
          (n = o.jQuery.fn.jarallax),
          (o.jQuery.fn.jarallax = i),
          (o.jQuery.fn.jarallax.noConflict = function () {
            return (o.jQuery.fn.jarallax = n), this;
          })),
        e()(function () {
          Object(r.default)(document.querySelectorAll("[data-jarallax]"));
        });
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i(2),
        n = i.n(n),
        f = i(3);
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var r,
        m,
        u = f.window.navigator,
        s =
          -1 < u.userAgent.indexOf("MSIE ") ||
          -1 < u.userAgent.indexOf("Trident/") ||
          -1 < u.userAgent.indexOf("Edge/"),
        a =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            u.userAgent
          ),
        h = (function () {
          for (
            var t = "transform WebkitTransform MozTransform".split(" "),
              e = document.createElement("div"),
              i = 0;
            i < t.length;
            i += 1
          )
            if (e && void 0 !== e.style[t[i]]) return t[i];
          return !1;
        })();
      function d() {
        m = a
          ? (!r &&
              document.body &&
              (((r = document.createElement("div")).style.cssText =
                "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;"),
              document.body.appendChild(r)),
            (r ? r.clientHeight : 0) ||
              f.window.innerHeight ||
              document.documentElement.clientHeight)
          : f.window.innerHeight || document.documentElement.clientHeight;
      }
      d(),
        f.window.addEventListener("resize", d),
        f.window.addEventListener("orientationchange", d),
        f.window.addEventListener("load", d),
        n()(function () {
          d();
        });
      var p = [];
      function g() {
        p.length &&
          (p.forEach(function (t, e) {
            var i = t.instance,
              n = t.oldData,
              o = i.$item.getBoundingClientRect(),
              t = {
                width: o.width,
                height: o.height,
                top: o.top,
                bottom: o.bottom,
                wndW: f.window.innerWidth,
                wndH: m,
              },
              o =
                !n ||
                n.wndW !== t.wndW ||
                n.wndH !== t.wndH ||
                n.width !== t.width ||
                n.height !== t.height,
              n = o || !n || n.top !== t.top || n.bottom !== t.bottom;
            (p[e].oldData = t), o && i.onResize(), n && i.onScroll();
          }),
          f.window.requestAnimationFrame(g));
      }
      function y(t, e) {
        for (
          var i,
            n = (t = (
              "object" ===
              ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement))
                ? t instanceof HTMLElement
                : t &&
                  "object" === c(t) &&
                  null !== t &&
                  1 === t.nodeType &&
                  "string" == typeof t.nodeName
            )
              ? [t]
              : t).length,
            o = 0,
            r = arguments.length,
            s = new Array(2 < r ? r - 2 : 0),
            a = 2;
          a < r;
          a++
        )
          s[a - 2] = arguments[a];
        for (; o < n; o += 1)
          if (
            ("object" === c(e) || void 0 === e
              ? t[o].jarallax || (t[o].jarallax = new T(t[o], e))
              : t[o].jarallax && (i = t[o].jarallax[e].apply(t[o].jarallax, s)),
            void 0 !== i)
          )
            return i;
        return t;
      }
      var v = 0,
        T =
          (o(b.prototype, [
            {
              key: "css",
              value: function (e, i) {
                return "string" == typeof i
                  ? f.window.getComputedStyle(e).getPropertyValue(i)
                  : (i.transform && h && (i[h] = i.transform),
                    Object.keys(i).forEach(function (t) {
                      e.style[t] = i[t];
                    }),
                    e);
              },
            },
            {
              key: "extend",
              value: function (i) {
                for (
                  var t = arguments.length,
                    n = new Array(1 < t ? t - 1 : 0),
                    e = 1;
                  e < t;
                  e++
                )
                  n[e - 1] = arguments[e];
                return (
                  (i = i || {}),
                  Object.keys(n).forEach(function (e) {
                    n[e] &&
                      Object.keys(n[e]).forEach(function (t) {
                        i[t] = n[e][t];
                      });
                  }),
                  i
                );
              },
            },
            {
              key: "getWindowData",
              value: function () {
                return {
                  width:
                    f.window.innerWidth || document.documentElement.clientWidth,
                  height: m,
                  y: document.documentElement.scrollTop,
                };
              },
            },
            {
              key: "initImg",
              value: function () {
                var t = this,
                  e = t.options.imgElement;
                return (
                  (e =
                    e && "string" == typeof e
                      ? t.$item.querySelector(e)
                      : e) instanceof Element ||
                    (t.options.imgSrc
                      ? ((e = new Image()).src = t.options.imgSrc)
                      : (e = null)),
                  e &&
                    (t.options.keepImg
                      ? (t.image.$item = e.cloneNode(!0))
                      : ((t.image.$item = e),
                        (t.image.$itemParent = e.parentNode)),
                    (t.image.useImgTag = !0)),
                  !(
                    !t.image.$item &&
                    (null === t.image.src &&
                      ((t.image.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                      (t.image.bgImage = t.css(t.$item, "background-image"))),
                    !t.image.bgImage || "none" === t.image.bgImage)
                  )
                );
              },
            },
            {
              key: "canInitParallax",
              value: function () {
                return h && !this.options.disableParallax();
              },
            },
            {
              key: "init",
              value: function () {
                var t,
                  e = this,
                  i = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  },
                  n = {
                    pointerEvents: "none",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform,opacity",
                  };
                e.options.keepImg ||
                  ((t = e.$item.getAttribute("style")) &&
                    e.$item.setAttribute("data-jarallax-original-styles", t),
                  !e.image.useImgTag ||
                    ((t = e.image.$item.getAttribute("style")) &&
                      e.image.$item.setAttribute(
                        "data-jarallax-original-styles",
                        t
                      ))),
                  "static" === e.css(e.$item, "position") &&
                    e.css(e.$item, { position: "relative" }),
                  "auto" === e.css(e.$item, "z-index") &&
                    e.css(e.$item, { zIndex: 0 }),
                  (e.image.$container = document.createElement("div")),
                  e.css(e.image.$container, i),
                  e.css(e.image.$container, { "z-index": e.options.zIndex }),
                  s && e.css(e.image.$container, { opacity: 0.9999 }),
                  e.image.$container.setAttribute(
                    "id",
                    "jarallax-container-".concat(e.instanceID)
                  ),
                  e.$item.appendChild(e.image.$container),
                  e.image.useImgTag
                    ? (n = e.extend(
                        {
                          "object-fit": e.options.imgSize,
                          "object-position": e.options.imgPosition,
                          "font-family": "object-fit: "
                            .concat(e.options.imgSize, "; object-position: ")
                            .concat(e.options.imgPosition, ";"),
                          "max-width": "none",
                        },
                        i,
                        n
                      ))
                    : ((e.image.$item = document.createElement("div")),
                      e.image.src &&
                        (n = e.extend(
                          {
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image":
                              e.image.bgImage ||
                              'url("'.concat(e.image.src, '")'),
                          },
                          i,
                          n
                        ))),
                  ("opacity" !== e.options.type &&
                    "scale" !== e.options.type &&
                    "scale-opacity" !== e.options.type &&
                    1 !== e.options.speed) ||
                    (e.image.position = "absolute"),
                  "fixed" === e.image.position &&
                    ((i = (function (t) {
                      for (var e = []; null !== t.parentElement; )
                        1 === (t = t.parentElement).nodeType && e.push(t);
                      return e;
                    })(e.$item).filter(function (t) {
                      var e = f.window.getComputedStyle(t),
                        t =
                          e["-webkit-transform"] ||
                          e["-moz-transform"] ||
                          e.transform;
                      return (
                        (t && "none" !== t) ||
                        /(auto|scroll)/.test(
                          e.overflow + e["overflow-y"] + e["overflow-x"]
                        )
                      );
                    })),
                    (e.image.position = i.length ? "absolute" : "fixed")),
                  (n.position = e.image.position),
                  e.css(e.image.$item, n),
                  e.image.$container.appendChild(e.image.$item),
                  e.onResize(),
                  e.onScroll(!0),
                  e.options.onInit && e.options.onInit.call(e),
                  "none" !== e.css(e.$item, "background-image") &&
                    e.css(e.$item, { "background-image": "none" }),
                  e.addToParallaxList();
              },
            },
            {
              key: "addToParallaxList",
              value: function () {
                p.push({ instance: this }),
                  1 === p.length && f.window.requestAnimationFrame(g);
              },
            },
            {
              key: "removeFromParallaxList",
              value: function () {
                var i = this;
                p.forEach(function (t, e) {
                  t.instance.instanceID === i.instanceID && p.splice(e, 1);
                });
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                t.removeFromParallaxList();
                var e,
                  i = t.$item.getAttribute("data-jarallax-original-styles");
                t.$item.removeAttribute("data-jarallax-original-styles"),
                  i
                    ? t.$item.setAttribute("style", i)
                    : t.$item.removeAttribute("style"),
                  t.image.useImgTag &&
                    ((e = t.image.$item.getAttribute(
                      "data-jarallax-original-styles"
                    )),
                    t.image.$item.removeAttribute(
                      "data-jarallax-original-styles"
                    ),
                    e
                      ? t.image.$item.setAttribute("style", i)
                      : t.image.$item.removeAttribute("style"),
                    t.image.$itemParent &&
                      t.image.$itemParent.appendChild(t.image.$item)),
                  t.$clipStyles &&
                    t.$clipStyles.parentNode.removeChild(t.$clipStyles),
                  t.image.$container &&
                    t.image.$container.parentNode.removeChild(
                      t.image.$container
                    ),
                  t.options.onDestroy && t.options.onDestroy.call(t),
                  delete t.$item.jarallax;
              },
            },
            {
              key: "clipContainer",
              value: function () {
                var t, e, i;
                "fixed" === this.image.position &&
                  ((e = (i = (t =
                    this).image.$container.getBoundingClientRect()).width),
                  (i = i.height),
                  t.$clipStyles ||
                    ((t.$clipStyles = document.createElement("style")),
                    t.$clipStyles.setAttribute("type", "text/css"),
                    t.$clipStyles.setAttribute(
                      "id",
                      "jarallax-clip-".concat(t.instanceID)
                    ),
                    (
                      document.head || document.getElementsByTagName("head")[0]
                    ).appendChild(t.$clipStyles)),
                  (i = "#jarallax-container-"
                    .concat(t.instanceID, " {\n            clip: rect(0 ")
                    .concat(e, "px ")
                    .concat(i, "px 0);\n            clip: rect(0, ")
                    .concat(e, "px, ")
                    .concat(
                      i,
                      "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"
                    )),
                  t.$clipStyles.styleSheet
                    ? (t.$clipStyles.styleSheet.cssText = i)
                    : (t.$clipStyles.innerHTML = i));
              },
            },
            {
              key: "coverImage",
              value: function () {
                var t,
                  e = this,
                  i = e.image.$container.getBoundingClientRect(),
                  n = i.height,
                  o = e.options.speed,
                  r =
                    "scroll" === e.options.type ||
                    "scroll-opacity" === e.options.type,
                  s = 0,
                  a = n;
                return (
                  r &&
                    (o < 0
                      ? ((s = o * Math.max(n, m)), m < n && (s -= o * (n - m)))
                      : (s = o * (n + m)),
                    1 < o
                      ? (a = Math.abs(s - m))
                      : o < 0
                      ? (a = s / o + Math.abs(s))
                      : (a += (m - n) * (1 - o)),
                    (s /= 2)),
                  (e.parallaxScrollDistance = s),
                  (t = r ? (m - a) / 2 : (n - a) / 2),
                  e.css(e.image.$item, {
                    height: "".concat(a, "px"),
                    marginTop: "".concat(t, "px"),
                    left:
                      "fixed" === e.image.position
                        ? "".concat(i.left, "px")
                        : "0",
                    width: "".concat(i.width, "px"),
                  }),
                  e.options.onCoverImage && e.options.onCoverImage.call(e),
                  { image: { height: a, marginTop: t }, container: i }
                );
              },
            },
            {
              key: "isVisible",
              value: function () {
                return this.isElementInViewport || !1;
              },
            },
            {
              key: "onScroll",
              value: function (t) {
                var e,
                  i,
                  n,
                  o,
                  r,
                  s,
                  a,
                  l = this,
                  c = l.$item.getBoundingClientRect(),
                  u = c.top,
                  h = c.height,
                  d = {},
                  p = c;
                l.options.elementInViewport &&
                  (p = l.options.elementInViewport.getBoundingClientRect()),
                  (l.isElementInViewport =
                    0 <= p.bottom &&
                    0 <= p.right &&
                    p.top <= m &&
                    p.left <= f.window.innerWidth),
                  (t || l.isElementInViewport) &&
                    ((e = Math.max(0, u)),
                    (i = Math.max(0, h + u)),
                    (n = Math.max(0, -u)),
                    (o = Math.max(0, u + h - m)),
                    (r = Math.max(0, h - (u + h - m))),
                    (s = Math.max(0, -u + m - h)),
                    (p = 1 - ((m - u) / (m + h)) * 2),
                    (t = 1),
                    h < m
                      ? (t = 1 - (n || o) / h)
                      : i <= m
                      ? (t = i / m)
                      : r <= m && (t = r / m),
                    ("opacity" !== l.options.type &&
                      "scale-opacity" !== l.options.type &&
                      "scroll-opacity" !== l.options.type) ||
                      ((d.transform = "translate3d(0,0,0)"), (d.opacity = t)),
                    ("scale" !== l.options.type &&
                      "scale-opacity" !== l.options.type) ||
                      ((a = 1),
                      l.options.speed < 0
                        ? (a -= l.options.speed * t)
                        : (a += l.options.speed * (1 - t)),
                      (d.transform = "scale(".concat(
                        a,
                        ") translate3d(0,0,0)"
                      ))),
                    ("scroll" !== l.options.type &&
                      "scroll-opacity" !== l.options.type) ||
                      ((a = l.parallaxScrollDistance * p),
                      "absolute" === l.image.position && (a -= u),
                      (d.transform = "translate3d(0,".concat(a, "px,0)"))),
                    l.css(l.image.$item, d),
                    l.options.onScroll &&
                      l.options.onScroll.call(l, {
                        section: c,
                        beforeTop: e,
                        beforeTopEnd: i,
                        afterTop: n,
                        beforeBottom: o,
                        beforeBottomEnd: r,
                        afterBottom: s,
                        visiblePercent: t,
                        fromViewportCenter: p,
                      }));
              },
            },
            {
              key: "onResize",
              value: function () {
                this.coverImage(), this.clipContainer();
              },
            },
          ]),
          b);
      function b(t, e) {
        !(function (t) {
          if (!(t instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this);
        var i = this;
        (i.instanceID = v),
          (v += 1),
          (i.$item = t),
          (i.defaults = {
            type: "scroll",
            speed: 0.5,
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: !1,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: !1,
            disableVideo: !1,
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: !0,
            videoPlayOnlyVisible: !0,
            videoLazyLoading: !0,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
          });
        var n,
          o,
          r = i.$item.dataset || {},
          s = {};
        Object.keys(r).forEach(function (t) {
          var e = t.substr(0, 1).toLowerCase() + t.substr(1);
          e && void 0 !== i.defaults[e] && (s[e] = r[t]);
        }),
          (i.options = i.extend({}, i.defaults, s, e)),
          (i.pureOptions = i.extend({}, i.options)),
          Object.keys(i.options).forEach(function (t) {
            "true" === i.options[t]
              ? (i.options[t] = !0)
              : "false" === i.options[t] && (i.options[t] = !1);
          }),
          (i.options.speed = Math.min(
            2,
            Math.max(-1, parseFloat(i.options.speed))
          )),
          "string" == typeof i.options.disableParallax &&
            (i.options.disableParallax = new RegExp(i.options.disableParallax)),
          i.options.disableParallax instanceof RegExp &&
            ((n = i.options.disableParallax),
            (i.options.disableParallax = function () {
              return n.test(u.userAgent);
            })),
          "function" != typeof i.options.disableParallax &&
            (i.options.disableParallax = function () {
              return !1;
            }),
          "string" == typeof i.options.disableVideo &&
            (i.options.disableVideo = new RegExp(i.options.disableVideo)),
          i.options.disableVideo instanceof RegExp &&
            ((o = i.options.disableVideo),
            (i.options.disableVideo = function () {
              return o.test(u.userAgent);
            })),
          "function" != typeof i.options.disableVideo &&
            (i.options.disableVideo = function () {
              return !1;
            });
        var a = i.options.elementInViewport;
        a &&
          "object" === c(a) &&
          void 0 !== a.length &&
          ((t = 1),
          (a = ((function (t) {
            if (Array.isArray(t)) return t;
          })((e = a)) ||
            (function (t, e) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(t)
              ) {
                var i = [],
                  n = !0,
                  o = !1,
                  r = void 0;
                try {
                  for (
                    var s, a = t[Symbol.iterator]();
                    !(n = (s = a.next()).done) &&
                    (i.push(s.value), !e || i.length !== e);
                    n = !0
                  );
                } catch (t) {
                  (o = !0), (r = t);
                } finally {
                  try {
                    n || null == a.return || a.return();
                  } finally {
                    if (o) throw r;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return l(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" ===
                  (i =
                    "Object" === i && t.constructor ? t.constructor.name : i) ||
                  "Set" === i
                  ? Array.from(t)
                  : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? l(t, e)
                  : void 0;
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })())[0])),
          a instanceof Element || (a = null),
          (i.options.elementInViewport = a),
          (i.image = {
            src: i.options.imgSrc || null,
            $container: null,
            useImgTag: !1,
            position: /iPad|iPhone|iPod|Android/.test(u.userAgent)
              ? "absolute"
              : "fixed",
          }),
          i.initImg() && i.canInitParallax() && i.init();
      }
      (y.constructor = T), (e.default = y);
    },
  ]),
  (function (n) {
    (n.belowthefold = function (t, e) {
      return (
        n(window).height() + n(window).scrollTop() <=
        n(t).offset().top - e.threshold
      );
    }),
      (n.abovethetop = function (t, e) {
        return (
          n(window).scrollTop() >=
          n(t).offset().top + n(t).height() - e.threshold
        );
      }),
      (n.rightofscreen = function (t, e) {
        return (
          n(window).width() + n(window).scrollLeft() <=
          n(t).offset().left - e.threshold
        );
      }),
      (n.leftofscreen = function (t, e) {
        return (
          n(window).scrollLeft() >=
          n(t).offset().left + n(t).width() - e.threshold
        );
      }),
      (n.inviewport = function (t, e) {
        return !(
          n.rightofscreen(t, e) ||
          n.leftofscreen(t, e) ||
          n.belowthefold(t, e) ||
          n.abovethetop(t, e)
        );
      }),
      n.extend(n.expr[":"], {
        "below-the-fold": function (t, e, i) {
          return n.belowthefold(t, { threshold: 0 });
        },
        "above-the-top": function (t, e, i) {
          return n.abovethetop(t, { threshold: 0 });
        },
        "left-of-screen": function (t, e, i) {
          return n.leftofscreen(t, { threshold: 0 });
        },
        "right-of-screen": function (t, e, i) {
          return n.rightofscreen(t, { threshold: 0 });
        },
        "in-viewport": function (t, e, i) {
          return n.inviewport(t, { threshold: 0 });
        },
      });
  })(jQuery),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : jQuery && !jQuery.fn.hoverIntent && t(jQuery);
  })(function (l) {
    "use strict";
    function c(t) {
      (o = t.pageX), (r = t.pageY);
    }
    var o,
      r,
      s = { interval: 100, sensitivity: 6, timeout: 0 },
      u = 0,
      h = function (t, e, i, n) {
        return Math.sqrt((i.pX - o) * (i.pX - o) + (i.pY - r) * (i.pY - r)) <
          n.sensitivity
          ? (e.off("mousemove.hoverIntent" + i.namespace, c),
            delete i.timeoutId,
            (i.isActive = !0),
            delete i.pX,
            delete i.pY,
            n.over.apply(e[0], [t]))
          : ((i.pX = o),
            (i.pY = r),
            void (i.timeoutId = setTimeout(function () {
              h(t, e, i, n);
            }, n.interval)));
      };
    l.fn.hoverIntent = function (t, e, i) {
      var n = u++,
        a = l.extend({}, s),
        a = l.isPlainObject(t)
          ? l.extend(a, t)
          : l.isFunction(e)
          ? l.extend(a, { over: t, out: e, selector: i })
          : l.extend(a, { over: t, out: t, selector: e }),
        e = function (t) {
          var o = l.extend({}, t),
            r = l(this),
            e = r.data("hoverIntent");
          e || r.data("hoverIntent", (e = {}));
          var s = e[n];
          s || (e[n] = s = { id: n }),
            s.timeoutId && (s.timeoutId = clearTimeout(s.timeoutId));
          e = s.namespace = ".hoverIntent" + n;
          "mouseenter" === t.type
            ? s.isActive ||
              ((s.pX = o.pageX),
              (s.pY = o.pageY),
              r.on("mousemove.hoverIntent" + e, c),
              (s.timeoutId = setTimeout(function () {
                h(o, r, s, a);
              }, a.interval)))
            : s.isActive &&
              (r.off("mousemove.hoverIntent" + e, c),
              (s.timeoutId = setTimeout(function () {
                var t, e, i, n;
                (t = o),
                  (e = r),
                  (i = s),
                  (n = a.out),
                  delete e.data("hoverIntent")[i.id],
                  n.apply(e[0], [t]);
              }, a.timeout)));
        };
      return this.on(
        { "mouseenter.hoverIntent": e, "mouseleave.hoverIntent": e },
        a.selector
      );
    };
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (c) {
    function t() {}
    function u(t, e) {
      f.ev.on("mfp" + t + T, e);
    }
    function h(t, e, i, n) {
      var o = document.createElement("div");
      return (
        (o.className = "mfp-" + t),
        i && (o.innerHTML = i),
        n ? e && e.appendChild(o) : ((o = c(o)), e && o.appendTo(e)),
        o
      );
    }
    function d(t, e) {
      f.ev.triggerHandler("mfp" + t, e),
        f.st.callbacks &&
          ((t = t.charAt(0).toLowerCase() + t.slice(1)),
          f.st.callbacks[t] &&
            f.st.callbacks[t].apply(f, c.isArray(e) ? e : [e]));
    }
    function p(t) {
      return (
        (t === e && f.currTemplate.closeBtn) ||
          ((f.currTemplate.closeBtn = c(
            f.st.closeMarkup.replace("%title%", f.st.tClose)
          )),
          (e = t)),
        f.currTemplate.closeBtn
      );
    }
    function r() {
      c.magnificPopup.instance ||
        ((f = new t()).init(), (c.magnificPopup.instance = f));
    }
    var f,
      n,
      m,
      o,
      g,
      e,
      a = "Close",
      l = "BeforeClose",
      y = "MarkupParse",
      v = "Open",
      T = ".mfp",
      b = "mfp-ready",
      i = "mfp-removing",
      s = "mfp-prevent-close",
      _ = !!window.jQuery,
      S = c(window);
    (t.prototype = {
      constructor: t,
      init: function () {
        var t = navigator.appVersion;
        (f.isLowIE = f.isIE8 = document.all && !document.addEventListener),
          (f.isAndroid = /android/gi.test(t)),
          (f.isIOS = /iphone|ipad|ipod/gi.test(t)),
          (f.supportsTransition = (function () {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
            return !1;
          })()),
          (f.probablyMobile =
            f.isAndroid ||
            f.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (m = c(document)),
          (f.popupsCache = {});
      },
      open: function (t) {
        if (!1 === t.isObj) {
          (f.items = t.items.toArray()), (f.index = 0);
          for (var e, i = t.items, n = 0; n < i.length; n++)
            if ((e = (e = i[n]).parsed ? e.el[0] : e) === t.el[0]) {
              f.index = n;
              break;
            }
        } else
          (f.items = c.isArray(t.items) ? t.items : [t.items]),
            (f.index = t.index || 0);
        if (!f.isOpen) {
          (f.types = []),
            (g = ""),
            t.mainEl && t.mainEl.length ? (f.ev = t.mainEl.eq(0)) : (f.ev = m),
            t.key
              ? (f.popupsCache[t.key] || (f.popupsCache[t.key] = {}),
                (f.currTemplate = f.popupsCache[t.key]))
              : (f.currTemplate = {}),
            (f.st = c.extend(!0, {}, c.magnificPopup.defaults, t)),
            (f.fixedContentPos =
              "auto" === f.st.fixedContentPos
                ? !f.probablyMobile
                : f.st.fixedContentPos),
            f.st.modal &&
              ((f.st.closeOnContentClick = !1),
              (f.st.closeOnBgClick = !1),
              (f.st.showCloseBtn = !1),
              (f.st.enableEscapeKey = !1)),
            f.bgOverlay ||
              ((f.bgOverlay = h("bg").on("click" + T, function () {
                f.close();
              })),
              (f.wrap = h("wrap")
                .attr("tabindex", -1)
                .on("click" + T, function (t) {
                  f._checkIfClose(t.target) && f.close();
                })),
              (f.container = h("container", f.wrap))),
            (f.contentContainer = h("content")),
            f.st.preloader &&
              (f.preloader = h("preloader", f.container, f.st.tLoading));
          var o = c.magnificPopup.modules;
          for (n = 0; n < o.length; n++) {
            var r = (r = o[n]).charAt(0).toUpperCase() + r.slice(1);
            f["init" + r].call(f);
          }
          d("BeforeOpen"),
            f.st.showCloseBtn &&
              (f.st.closeBtnInside
                ? (u(y, function (t, e, i, n) {
                    i.close_replaceWith = p(n.type);
                  }),
                  (g += " mfp-close-btn-in"))
                : f.wrap.append(p())),
            f.st.alignTop && (g += " mfp-align-top"),
            f.fixedContentPos
              ? f.wrap.css({
                  overflow: f.st.overflowY,
                  overflowX: "hidden",
                  overflowY: f.st.overflowY,
                })
              : f.wrap.css({ top: S.scrollTop(), position: "absolute" }),
            (!1 !== f.st.fixedBgPos &&
              ("auto" !== f.st.fixedBgPos || f.fixedContentPos)) ||
              f.bgOverlay.css({ height: m.height(), position: "absolute" }),
            f.st.enableEscapeKey &&
              m.on("keyup" + T, function (t) {
                27 === t.keyCode && f.close();
              }),
            S.on("resize" + T, function () {
              f.updateSize();
            }),
            f.st.closeOnContentClick || (g += " mfp-auto-cursor"),
            g && f.wrap.addClass(g);
          var s = (f.wH = S.height()),
            a = {};
          f.fixedContentPos &&
            f._hasScrollBar(s) &&
            (l = f._getScrollbarSize()) &&
            (a.marginRight = l),
            f.fixedContentPos &&
              (f.isIE7
                ? c("body, html").css("overflow", "hidden")
                : (a.overflow = "hidden"));
          var l = f.st.mainClass;
          return (
            f.isIE7 && (l += " mfp-ie7"),
            l && f._addClassToMFP(l),
            f.updateItemHTML(),
            d("BuildControls"),
            c("html").css(a),
            f.bgOverlay
              .add(f.wrap)
              .prependTo(f.st.prependTo || c(document.body)),
            (f._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              f.content
                ? (f._addClassToMFP(b), f._setFocus())
                : f.bgOverlay.addClass(b),
                m.on("focusin" + T, f._onFocusIn);
            }, 16),
            (f.isOpen = !0),
            f.updateSize(s),
            d(v),
            t
          );
        }
        f.updateItemHTML();
      },
      close: function () {
        f.isOpen &&
          (d(l),
          (f.isOpen = !1),
          f.st.removalDelay && !f.isLowIE && f.supportsTransition
            ? (f._addClassToMFP(i),
              setTimeout(function () {
                f._close();
              }, f.st.removalDelay))
            : f._close());
      },
      _close: function () {
        d(a);
        var t = i + " " + b + " ";
        f.bgOverlay.detach(),
          f.wrap.detach(),
          f.container.empty(),
          f.st.mainClass && (t += f.st.mainClass + " "),
          f._removeClassFromMFP(t),
          f.fixedContentPos &&
            ((t = { marginRight: "" }),
            f.isIE7 ? c("body, html").css("overflow", "") : (t.overflow = ""),
            c("html").css(t)),
          m.off("keyup.mfp focusin" + T),
          f.ev.off(T),
          f.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          f.bgOverlay.attr("class", "mfp-bg"),
          f.container.attr("class", "mfp-container"),
          !f.st.showCloseBtn ||
            (f.st.closeBtnInside && !0 !== f.currTemplate[f.currItem.type]) ||
            (f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach()),
          f.st.autoFocusLast && f._lastFocusedEl && c(f._lastFocusedEl).focus(),
          (f.currItem = null),
          (f.content = null),
          (f.currTemplate = null),
          (f.prevHeight = 0),
          d("AfterClose");
      },
      updateSize: function (t) {
        var e;
        f.isIOS
          ? ((e = document.documentElement.clientWidth / window.innerWidth),
            (e = window.innerHeight * e),
            f.wrap.css("height", e),
            (f.wH = e))
          : (f.wH = t || S.height()),
          f.fixedContentPos || f.wrap.css("height", f.wH),
          d("Resize");
      },
      updateItemHTML: function () {
        var t = f.items[f.index];
        f.contentContainer.detach(), f.content && f.content.detach();
        var e = (t = !t.parsed ? f.parseEl(f.index) : t).type;
        d("BeforeChange", [f.currItem ? f.currItem.type : "", e]),
          (f.currItem = t),
          f.currTemplate[e] ||
            ((i = !!f.st[e] && f.st[e].markup),
            d("FirstMarkupParse", i),
            (f.currTemplate[e] = !i || c(i))),
          o && o !== t.type && f.container.removeClass("mfp-" + o + "-holder");
        var i = f["get" + e.charAt(0).toUpperCase() + e.slice(1)](
          t,
          f.currTemplate[e]
        );
        f.appendContent(i, e),
          (t.preloaded = !0),
          d("Change", t),
          (o = t.type),
          f.container.prepend(f.contentContainer),
          d("AfterChange");
      },
      appendContent: function (t, e) {
        (f.content = t)
          ? f.st.showCloseBtn && f.st.closeBtnInside && !0 === f.currTemplate[e]
            ? f.content.find(".mfp-close").length || f.content.append(p())
            : (f.content = t)
          : (f.content = ""),
          d("BeforeAppend"),
          f.container.addClass("mfp-" + e + "-holder"),
          f.contentContainer.append(f.content);
      },
      parseEl: function (t) {
        var e,
          i = f.items[t];
        if (
          (i = i.tagName
            ? { el: c(i) }
            : ((e = i.type), { data: i, src: i.src })).el
        ) {
          for (var n = f.types, o = 0; o < n.length; o++)
            if (i.el.hasClass("mfp-" + n[o])) {
              e = n[o];
              break;
            }
          (i.src = i.el.attr("data-mfp-src")),
            i.src || (i.src = i.el.attr("href"));
        }
        return (
          (i.type = e || f.st.type || "inline"),
          (i.index = t),
          (i.parsed = !0),
          (f.items[t] = i),
          d("ElementParse", i),
          f.items[t]
        );
      },
      addGroup: function (e, i) {
        function t(t) {
          (t.mfpEl = this), f._openClick(t, e, i);
        }
        var n = "click.magnificPopup";
        ((i = i || {}).mainEl = e),
          i.items
            ? ((i.isObj = !0), e.off(n).on(n, t))
            : ((i.isObj = !1),
              i.delegate
                ? e.off(n).on(n, i.delegate, t)
                : (i.items = e).off(n).on(n, t));
      },
      _openClick: function (t, e, i) {
        if (
          (void 0 !== i.midClick ? i : c.magnificPopup.defaults).midClick ||
          !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)
        ) {
          var n = (void 0 !== i.disableOn ? i : c.magnificPopup.defaults)
            .disableOn;
          if (n)
            if (c.isFunction(n)) {
              if (!n.call(f)) return !0;
            } else if (S.width() < n) return !0;
          t.type && (t.preventDefault(), f.isOpen && t.stopPropagation()),
            (i.el = c(t.mfpEl)),
            i.delegate && (i.items = e.find(i.delegate)),
            f.open(i);
        }
      },
      updateStatus: function (t, e) {
        var i;
        f.preloader &&
          (n !== t && f.container.removeClass("mfp-s-" + n),
          (i = {
            status: t,
            text: (e = !e && "loading" === t ? f.st.tLoading : e),
          }),
          d("UpdateStatus", i),
          (t = i.status),
          f.preloader.html((e = i.text)),
          f.preloader.find("a").on("click", function (t) {
            t.stopImmediatePropagation();
          }),
          f.container.addClass("mfp-s-" + t),
          (n = t));
      },
      _checkIfClose: function (t) {
        if (!c(t).hasClass(s)) {
          var e = f.st.closeOnContentClick,
            i = f.st.closeOnBgClick;
          if (e && i) return !0;
          if (
            !f.content ||
            c(t).hasClass("mfp-close") ||
            (f.preloader && t === f.preloader[0])
          )
            return !0;
          if (t === f.content[0] || c.contains(f.content[0], t)) {
            if (e) return !0;
          } else if (i && c.contains(document, t)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        f.bgOverlay.addClass(t), f.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), f.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (f.isIE7 ? m.height() : document.body.scrollHeight) >
          (t || S.height())
        );
      },
      _setFocus: function () {
        (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus();
      },
      _onFocusIn: function (t) {
        return t.target === f.wrap[0] || c.contains(f.wrap[0], t.target)
          ? void 0
          : (f._setFocus(), !1);
      },
      _parseMarkup: function (o, t, e) {
        var r;
        e.data && (t = c.extend(e.data, t)),
          d(y, [o, t, e]),
          c.each(t, function (t, e) {
            return (
              void 0 === e ||
              !1 === e ||
              void (1 < (r = t.split("_")).length
                ? 0 < (i = o.find(T + "-" + r[0])).length &&
                  ("replaceWith" === (n = r[1])
                    ? i[0] !== e[0] && i.replaceWith(e)
                    : "img" === n
                    ? i.is("img")
                      ? i.attr("src", e)
                      : i.replaceWith(
                          c("<img>")
                            .attr("src", e)
                            .attr("class", i.attr("class"))
                        )
                    : i.attr(r[1], e))
                : o.find(T + "-" + t).html(e))
            );
            var i, n;
          });
      },
      _getScrollbarSize: function () {
        var t;
        return (
          void 0 === f.scrollbarSize &&
            (((t = document.createElement("div")).style.cssText =
              "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (f.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t)),
          f.scrollbarSize
        );
      },
    }),
      (c.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (t, e) {
          return (
            r(),
            ((t = t ? c.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = e || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return c.magnificPopup.instance && c.magnificPopup.instance.close();
        },
        registerModule: function (t, e) {
          e.options && (c.magnificPopup.defaults[t] = e.options),
            c.extend(this.proto, e.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (c.fn.magnificPopup = function (t) {
        r();
        var e,
          i,
          n,
          o = c(this);
        return (
          "string" == typeof t
            ? "open" === t
              ? ((e = _ ? o.data("magnificPopup") : o[0].magnificPopup),
                (i = parseInt(arguments[1], 10) || 0),
                (n = e.items
                  ? e.items[i]
                  : ((n = o), (n = e.delegate ? n.find(e.delegate) : n).eq(i))),
                f._openClick({ mfpEl: n }, o, e))
              : f.isOpen &&
                f[t].apply(f, Array.prototype.slice.call(arguments, 1))
            : ((t = c.extend(!0, {}, t)),
              _ ? o.data("magnificPopup", t) : (o[0].magnificPopup = t),
              f.addGroup(o, t)),
          o
        );
      });
    function w() {
      A && (x.after(A.addClass(P)).detach(), (A = null));
    }
    var P,
      x,
      A,
      M = "inline";
    c.magnificPopup.registerModule(M, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          f.types.push(M),
            u(a + "." + M, function () {
              w();
            });
        },
        getInline: function (t, e) {
          if ((w(), t.src)) {
            var i,
              n = f.st.inline,
              o = c(t.src);
            return (
              o.length
                ? ((i = o[0].parentNode) &&
                    i.tagName &&
                    (x || ((P = n.hiddenClass), (x = h(P)), (P = "mfp-" + P)),
                    (A = o.after(x).detach().removeClass(P))),
                  f.updateStatus("ready"))
                : (f.updateStatus("error", n.tNotFound), (o = c("<div>"))),
              (t.inlineElement = o)
            );
          }
          return f.updateStatus("ready"), f._parseMarkup(e, {}, t), e;
        },
      },
    });
    function C() {
      E && c(document.body).removeClass(E);
    }
    function k() {
      C(), f.req && f.req.abort();
    }
    var E,
      I = "ajax";
    c.magnificPopup.registerModule(I, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          f.types.push(I),
            (E = f.st.ajax.cursor),
            u(a + "." + I, k),
            u("BeforeChange." + I, k);
        },
        getAjax: function (n) {
          E && c(document.body).addClass(E), f.updateStatus("loading");
          var t = c.extend(
            {
              url: n.src,
              success: function (t, e, i) {
                i = { data: t, xhr: i };
                d("ParseAjax", i),
                  f.appendContent(c(i.data), I),
                  (n.finished = !0),
                  C(),
                  f._setFocus(),
                  setTimeout(function () {
                    f.wrap.addClass(b);
                  }, 16),
                  f.updateStatus("ready"),
                  d("AjaxContentAdded");
              },
              error: function () {
                C(),
                  (n.finished = n.loadError = !0),
                  f.updateStatus(
                    "error",
                    f.st.ajax.tError.replace("%url%", n.src)
                  );
              },
            },
            f.st.ajax.settings
          );
          return (f.req = c.ajax(t)), "";
        },
      },
    });
    var O;
    c.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var t = f.st.image,
            e = ".image";
          f.types.push("image"),
            u(v + e, function () {
              "image" === f.currItem.type &&
                t.cursor &&
                c(document.body).addClass(t.cursor);
            }),
            u(a + e, function () {
              t.cursor && c(document.body).removeClass(t.cursor),
                S.off("resize" + T);
            }),
            u("Resize" + e, f.resizeImage),
            f.isLowIE && u("AfterChange", f.resizeImage);
        },
        resizeImage: function () {
          var t,
            e = f.currItem;
          e &&
            e.img &&
            f.st.image.verticalFit &&
            ((t = 0),
            f.isLowIE &&
              (t =
                parseInt(e.img.css("padding-top"), 10) +
                parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", f.wH - t));
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            O && clearInterval(O),
            (t.isCheckingImgSize = !1),
            d("ImageHasSize", t),
            t.imgHidden &&
              (f.content && f.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var i = 0,
            n = e.img[0],
            o = function (t) {
              O && clearInterval(O),
                (O = setInterval(function () {
                  return 0 < n.naturalWidth
                    ? void f._onImageHasSize(e)
                    : (200 < i && clearInterval(O),
                      void (3 === ++i
                        ? o(10)
                        : 40 === i
                        ? o(50)
                        : 100 === i && o(500)));
                }, t));
            };
          o(1);
        },
        getImage: function (t, e) {
          var i,
            n = 0,
            o = function () {
              t &&
                (t.img[0].complete
                  ? (t.img.off(".mfploader"),
                    t === f.currItem &&
                      (f._onImageHasSize(t), f.updateStatus("ready")),
                    (t.hasSize = !0),
                    (t.loaded = !0),
                    d("ImageLoadComplete"))
                  : ++n < 200
                  ? setTimeout(o, 100)
                  : r());
            },
            r = function () {
              t &&
                (t.img.off(".mfploader"),
                t === f.currItem &&
                  (f._onImageHasSize(t),
                  f.updateStatus("error", s.tError.replace("%url%", t.src))),
                (t.hasSize = !0),
                (t.loaded = !0),
                (t.loadError = !0));
            },
            s = f.st.image,
            a = e.find(".mfp-img");
          return (
            a.length &&
              (((i = document.createElement("img")).className = "mfp-img"),
              t.el &&
                t.el.find("img").length &&
                (i.alt = t.el.find("img").attr("alt")),
              (t.img = c(i).on("load.mfploader", o).on("error.mfploader", r)),
              (i.src = t.src),
              a.is("img") && (t.img = t.img.clone()),
              0 < (i = t.img[0]).naturalWidth
                ? (t.hasSize = !0)
                : i.width || (t.hasSize = !1)),
            f._parseMarkup(
              e,
              {
                title: (function (t) {
                  if (t.data && void 0 !== t.data.title) return t.data.title;
                  var e = f.st.image.titleSrc;
                  if (e) {
                    if (c.isFunction(e)) return e.call(f, t);
                    if (t.el) return t.el.attr(e) || "";
                  }
                  return "";
                })(t),
                img_replaceWith: t.img,
              },
              t
            ),
            f.resizeImage(),
            t.hasSize
              ? (O && clearInterval(O),
                t.loadError
                  ? (e.addClass("mfp-loading"),
                    f.updateStatus("error", s.tError.replace("%url%", t.src)))
                  : (e.removeClass("mfp-loading"), f.updateStatus("ready")))
              : (f.updateStatus("loading"),
                (t.loading = !0),
                t.hasSize ||
                  ((t.imgHidden = !0),
                  e.addClass("mfp-loading"),
                  f.findImageSize(t))),
            e
          );
        },
      },
    });
    var H;
    c.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var t,
            e,
            i,
            n,
            o,
            r,
            s = f.st.zoom;
          s.enabled &&
            f.supportsTransition &&
            ((n = s.duration),
            (o = function (t) {
              var e = t
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                i = "all " + s.duration / 1e3 + "s " + s.easing,
                n = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                t = "transition";
              return (
                (n["-webkit-" + t] = n["-moz-" + t] = n["-o-" + t] = n[t] = i),
                e.css(n),
                e
              );
            }),
            (r = function () {
              f.content.css("visibility", "visible");
            }),
            u("BuildControls.zoom", function () {
              f._allowZoom() &&
                (clearTimeout(e),
                f.content.css("visibility", "hidden"),
                (t = f._getItemToZoom())
                  ? ((i = o(t)).css(f._getOffset()),
                    f.wrap.append(i),
                    (e = setTimeout(function () {
                      i.css(f._getOffset(!0)),
                        (e = setTimeout(function () {
                          r(),
                            setTimeout(function () {
                              i.remove(),
                                (t = i = null),
                                d("ZoomAnimationEnded");
                            }, 16);
                        }, n));
                    }, 16)))
                  : r());
            }),
            u(l + ".zoom", function () {
              if (f._allowZoom()) {
                if ((clearTimeout(e), (f.st.removalDelay = n), !t)) {
                  if (!(t = f._getItemToZoom())) return;
                  i = o(t);
                }
                i.css(f._getOffset(!0)),
                  f.wrap.append(i),
                  f.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    i.css(f._getOffset());
                  }, 16);
              }
            }),
            u(a + ".zoom", function () {
              f._allowZoom() && (r(), i && i.remove(), (t = null));
            }));
        },
        _allowZoom: function () {
          return "image" === f.currItem.type;
        },
        _getItemToZoom: function () {
          return !!f.currItem.hasSize && f.currItem.img;
        },
        _getOffset: function (t) {
          var e = t
              ? f.currItem.img
              : f.st.zoom.opener(f.currItem.el || f.currItem),
            i = e.offset(),
            n = parseInt(e.css("padding-top"), 10),
            t = parseInt(e.css("padding-bottom"), 10);
          i.top -= c(window).scrollTop() - n;
          n = {
            width: e.width(),
            height: (_ ? e.innerHeight() : e[0].offsetHeight) - t - n,
          };
          return (
            (H =
              void 0 === H
                ? void 0 !== document.createElement("p").style.MozTransform
                : H)
              ? (n["-moz-transform"] = n.transform =
                  "translate(" + i.left + "px," + i.top + "px)")
              : ((n.left = i.left), (n.top = i.top)),
            n
          );
        },
      },
    });
    function G(t) {
      var e;
      !f.currTemplate[D] ||
        ((e = f.currTemplate[D].find("iframe")).length &&
          (t || (e[0].src = "//about:blank"),
          f.isIE8 && e.css("display", t ? "block" : "none")));
    }
    var D = "iframe";
    c.magnificPopup.registerModule(D, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          f.types.push(D),
            u("BeforeChange", function (t, e, i) {
              e !== i && (e === D ? G() : i === D && G(!0));
            }),
            u(a + "." + D, function () {
              G();
            });
        },
        getIframe: function (t, e) {
          var i = t.src,
            n = f.st.iframe;
          c.each(n.patterns, function () {
            return -1 < i.indexOf(this.index)
              ? (this.id &&
                  (i =
                    "string" == typeof this.id
                      ? i.substr(
                          i.lastIndexOf(this.id) + this.id.length,
                          i.length
                        )
                      : this.id.call(this, i)),
                (i = this.src.replace("%id%", i)),
                !1)
              : void 0;
          });
          var o = {};
          return (
            n.srcAction && (o[n.srcAction] = i),
            f._parseMarkup(e, o, t),
            f.updateStatus("ready"),
            e
          );
        },
      },
    });
    function B(t) {
      var e = f.items.length;
      return e - 1 < t ? t - e : t < 0 ? e + t : t;
    }
    function L(t, e, i) {
      return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
    }
    c.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var r = f.st.gallery,
            t = ".mfp-gallery";
          return (
            (f.direction = !0),
            !(!r || !r.enabled) &&
              ((g += " mfp-gallery"),
              u(v + t, function () {
                r.navigateByImgClick &&
                  f.wrap.on("click" + t, ".mfp-img", function () {
                    return 1 < f.items.length ? (f.next(), !1) : void 0;
                  }),
                  m.on("keydown" + t, function (t) {
                    37 === t.keyCode ? f.prev() : 39 === t.keyCode && f.next();
                  });
              }),
              u("UpdateStatus" + t, function (t, e) {
                e.text &&
                  (e.text = L(e.text, f.currItem.index, f.items.length));
              }),
              u(y + t, function (t, e, i, n) {
                var o = f.items.length;
                i.counter = 1 < o ? L(r.tCounter, n.index, o) : "";
              }),
              u("BuildControls" + t, function () {
                var t, e;
                1 < f.items.length &&
                  r.arrows &&
                  !f.arrowLeft &&
                  ((e = r.arrowMarkup),
                  (t = f.arrowLeft =
                    c(
                      e.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                  (e = f.arrowRight =
                    c(
                      e
                        .replace(/%title%/gi, r.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s)),
                  t.click(function () {
                    f.prev();
                  }),
                  e.click(function () {
                    f.next();
                  }),
                  f.container.append(t.add(e)));
              }),
              u("Change" + t, function () {
                f._preloadTimeout && clearTimeout(f._preloadTimeout),
                  (f._preloadTimeout = setTimeout(function () {
                    f.preloadNearbyImages(), (f._preloadTimeout = null);
                  }, 16));
              }),
              void u(a + t, function () {
                m.off(t),
                  f.wrap.off("click" + t),
                  (f.arrowRight = f.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (f.direction = !0), (f.index = B(f.index + 1)), f.updateItemHTML();
        },
        prev: function () {
          (f.direction = !1), (f.index = B(f.index - 1)), f.updateItemHTML();
        },
        goTo: function (t) {
          (f.direction = t >= f.index), (f.index = t), f.updateItemHTML();
        },
        preloadNearbyImages: function () {
          for (
            var t = f.st.gallery.preload,
              e = Math.min(t[0], f.items.length),
              i = Math.min(t[1], f.items.length),
              n = 1;
            n <= (f.direction ? i : e);
            n++
          )
            f._preloadItem(f.index + n);
          for (n = 1; n <= (f.direction ? e : i); n++)
            f._preloadItem(f.index - n);
        },
        _preloadItem: function (t) {
          var e;
          (t = B(t)),
            f.items[t].preloaded ||
              ((e = f.items[t]).parsed || (e = f.parseEl(t)),
              d("LazyLoad", e),
              "image" === e.type &&
                (e.img = c('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    e.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (e.hasSize = !0), (e.loadError = !0), d("LazyLoadError", e);
                  })
                  .attr("src", e.src)),
              (e.preloaded = !0));
        },
      },
    });
    var R = "retina";
    c.magnificPopup.registerModule(R, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          var i, n;
          1 < window.devicePixelRatio &&
            ((i = f.st.retina),
            (n = i.ratio),
            1 < (n = isNaN(n) ? n() : n) &&
              (u("ImageHasSize." + R, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              u("ElementParse." + R, function (t, e) {
                e.src = i.replaceSrc(e, n);
              })));
        },
      },
    }),
      r();
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t)
      : t(jQuery);
  })(function (u) {
    var h,
      d,
      t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      e =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      p = Array.prototype.slice;
    if (u.event.fixHooks)
      for (var i = t.length; i; ) u.event.fixHooks[t[--i]] = u.event.mouseHooks;
    var f = (u.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var t = e.length; t; ) this.addEventListener(e[--t], n, !1);
        else this.onmousewheel = n;
        u.data(this, "mousewheel-line-height", f.getLineHeight(this)),
          u.data(this, "mousewheel-page-height", f.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var t = e.length; t; ) this.removeEventListener(e[--t], n, !1);
        else this.onmousewheel = null;
        u.removeData(this, "mousewheel-line-height"),
          u.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (t) {
        var e = u(t),
          t = e["offsetParent" in u.fn ? "offsetParent" : "parent"]();
        return (
          t.length || (t = u("body")),
          parseInt(t.css("fontSize"), 10) ||
            parseInt(e.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (t) {
        return u(t).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    function n(t) {
      var e,
        i = t || window.event,
        n = p.call(arguments, 1),
        o = 0,
        r = 0,
        s = 0,
        a = 0,
        l = 0,
        c = 0;
      if (
        (((t = u.event.fix(i)).type = "mousewheel"),
        "detail" in i && (s = -1 * i.detail),
        "wheelDelta" in i && (s = i.wheelDelta),
        "wheelDeltaY" in i && (s = i.wheelDeltaY),
        "wheelDeltaX" in i && (r = -1 * i.wheelDeltaX),
        "axis" in i && i.axis === i.HORIZONTAL_AXIS && ((r = -1 * s), (s = 0)),
        (o = 0 === s ? r : s),
        "deltaY" in i && (o = s = -1 * i.deltaY),
        "deltaX" in i && ((r = i.deltaX), 0 === s && (o = -1 * r)),
        0 !== s || 0 !== r)
      )
        return (
          1 === i.deltaMode
            ? ((o *= e = u.data(this, "mousewheel-line-height")),
              (s *= e),
              (r *= e))
            : 2 === i.deltaMode &&
              ((o *= e = u.data(this, "mousewheel-page-height")),
              (s *= e),
              (r *= e)),
          (a = Math.max(Math.abs(s), Math.abs(r))),
          (!d || a < d) && g(i, (d = a)) && (d /= 40),
          g(i, a) && ((o /= 40), (r /= 40), (s /= 40)),
          (o = Math[1 <= o ? "floor" : "ceil"](o / d)),
          (r = Math[1 <= r ? "floor" : "ceil"](r / d)),
          (s = Math[1 <= s ? "floor" : "ceil"](s / d)),
          f.settings.normalizeOffset &&
            this.getBoundingClientRect &&
            ((a = this.getBoundingClientRect()),
            (l = t.clientX - a.left),
            (c = t.clientY - a.top)),
          (t.deltaX = r),
          (t.deltaY = s),
          (t.deltaFactor = d),
          (t.offsetX = l),
          (t.offsetY = c),
          (t.deltaMode = 0),
          n.unshift(t, o, r, s),
          h && clearTimeout(h),
          (h = setTimeout(m, 200)),
          (u.event.dispatch || u.event.handle).apply(this, n)
        );
    }
    function m() {
      d = null;
    }
    function g(t, e) {
      return (
        f.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
      );
    }
    u.fn.extend({
      mousewheel: function (t) {
        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
      },
      unmousewheel: function (t) {
        return this.unbind("mousewheel", t);
      },
    });
  }),
  (function (u) {
    var i = "panr",
      n = {
        moveTarget: !1,
        sensitivity: 30,
        scale: !1,
        scaleOnHover: !0,
        scaleTo: 1.1,
        scaleDuration: 0.25,
        panY: !0,
        panX: !0,
        panDuration: 1.25,
        resetPanOnMouseLeave: !0,
        onEnter: function () {},
        onLeave: function () {},
      };
    function e(t, e) {
      (this.element = t),
        (this.settings = u.extend({}, n, e)),
        (this._defaults = n),
        (this._name = i),
        this.init();
    }
    (e.prototype = {
      init: function () {
        var e,
          i,
          n,
          o,
          r,
          s = this.settings,
          a = u(this.element),
          t = a.width(),
          l = (a.height(), a.width() - s.sensitivity),
          c = (t - l) / l;
        (s.scale || (!s.scaleOnHover && s.scale)) &&
          TweenMax.set(a, { scale: s.scaleTo, ease: Quart.easeOut }),
          "string" === jQuery.type(s.moveTarget) &&
            (s.moveTarget = u(this.element).parent(s.moveTarget)),
          s.moveTarget || (s.moveTarget = u(this.element)),
          s.moveTarget.on("mousemove", function (t) {
            (e = t.pageX - a.offset().left),
              (i = t.pageY - a.offset().top),
              s.panX && (n = { x: -c * e }),
              s.panY && (o = { y: -c * i }),
              (o = u.extend({}, n, o, { ease: Quart.easeOut })),
              TweenMax.to(a, s.panDuration, o);
          }),
          s.moveTarget.on("mouseenter", function (t) {
            s.scaleOnHover &&
              TweenMax.to(a, s.scaleDuration, {
                scale: s.scaleTo,
                ease: Quart.easeOut,
              }),
              s.onEnter(a);
          }),
          (s.scale && (s.scaleOnHover || s.scale) && !s.resetPanOnMouseLeave) ||
            (r = { scale: 1.005, x: 0, y: 0, ease: Quart.easeOut }),
          s.moveTarget.on("mouseleave", function (t) {
            TweenMax.to(a, s.scaleDuration, r), s.onLeave(a);
          });
      },
    }),
      (u.fn.panr = function (t) {
        return this.each(function () {
          u.data(this, "plugin_panr") ||
            u.data(this, "plugin_panr", new e(this, t));
        });
      });
  })(jQuery, (window, document)),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(t.jQuery);
  })(this, function (u) {
    "use strict";
    var n = "vide",
      o = {
        volume: 1,
        playbackRate: 1,
        muted: !0,
        loop: !0,
        playsinline: "",
        autoplay: !0,
        position: "50% 50%",
        posterType: "detect",
        resizing: !0,
        bgColor: "transparent",
        className: "",
      },
      h = "Not implemented";
    function r(t) {
      for (
        var e,
          i,
          n,
          o,
          r = {},
          s = t
            .replace(/\s*:\s*/g, ":")
            .replace(/\s*,\s*/g, ",")
            .split(","),
          a = 0,
          l = s.length;
        a < l &&
        -1 === (i = s[a]).search(/^(http|https|ftp):\/\//) &&
        -1 !== i.search(":");
        a++
      )
        (e = i.indexOf(":")),
          (n = i.substring(0, e)),
          "string" ==
            typeof (o =
              "string" == typeof (o = (o = i.substring(e + 1)) || void 0)
                ? "true" === o || ("false" !== o && o)
                : o) && (o = isNaN(o) ? o : +o),
          (r[n] = o);
      return null == n && null == o ? t : r;
    }
    function s(t, e, i) {
      if (
        ((this.$element = u(t)),
        "string" == typeof e && (e = r(e)),
        i ? "string" == typeof i && (i = r(i)) : (i = {}),
        "string" == typeof e)
      )
        e = e.replace(/\.\w*$/, "");
      else if ("object" == typeof e)
        for (var n in e) e.hasOwnProperty(n) && (e[n] = e[n]);
      (this.settings = u.extend({}, o, i)), (this.path = e);
      try {
        this.init();
      } catch (t) {
        if (t.message !== h) throw t;
      }
    }
    (s.prototype.init = function () {
      var t,
        e = this,
        i = e.path,
        n = i,
        o = "",
        r = e.$element,
        s = e.settings,
        a = (function (t) {
          for (
            var e,
              i = (t = "" + t).split(/\s+/),
              n = "50%",
              o = "50%",
              r = 0,
              s = i.length;
            r < s;
            r++
          )
            "left" === (e = i[r])
              ? (n = "0%")
              : "right" === e
              ? (n = "100%")
              : "top" === e
              ? (o = "0%")
              : "bottom" === e
              ? (o = "100%")
              : "center" === e
              ? 0 === r
                ? (n = "50%")
                : (o = "50%")
              : 0 === r
              ? (n = e)
              : (o = e);
          return { x: n, y: o };
        })(s.position),
        l = s.posterType,
        c = (e.$wrapper = u("<div>")
          .addClass(s.className)
          .css({
            position: "absolute",
            "z-index": 1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-color": s.bgColor,
            "background-repeat": "no-repeat",
            "background-position": a.x + " " + a.y,
          }));
      "object" == typeof i &&
        (i.poster
          ? (n = i.poster)
          : i.mp4
          ? (n = i.mp4)
          : i.webm
          ? (n = i.webm)
          : i.ogv && (n = i.ogv)),
        "none" !== l && c.css("background-image", "url(" + n + ")"),
        "static" === r.css("position") && r.css("position", "relative"),
        r.prepend(c),
        i.mp4 && (o += '<source src="' + i.mp4 + '" type="video/mp4">'),
        i.webm && (o += '<source src="' + i.webm + '" type="video/webm">'),
        (t = e.$video = u("<video>" + o + "</video>"));
      try {
        t.prop({
          autoplay: s.autoplay,
          loop: s.loop,
          volume: s.volume,
          preload: "auto",
          muted: s.muted,
          defaultMuted: s.muted,
          playbackRate: s.playbackRate,
          defaultPlaybackRate: s.playbackRate,
        });
      } catch (t) {
        throw new Error(h);
      }
      t.attr("playsinline", s.playsinline),
        t
          .css({
            margin: "auto",
            position: "absolute",
            "z-index": 0,
            top: a.y,
            left: a.x,
            "-webkit-transform": "translate(-" + a.x + ", -" + a.y + ")",
            "-ms-transform": "translate(-" + a.x + ", -" + a.y + ")",
            "-moz-transform": "translate(-" + a.x + ", -" + a.y + ")",
            transform: "translate(-" + a.x + ", -" + a.y + ")",
            visibility: "hidden",
            opacity: 0,
          })
          .one("canplaythrough.vide", function () {
            e.resize();
          })
          .one("canplay playing.vide", function () {
            t.css({ visibility: "visible" }).animate({ opacity: 1 });
          }),
        r.on("resize.vide", function () {
          s.resizing && e.resize();
        }),
        c.append(t);
    }),
      (s.prototype.getVideoObject = function () {
        return this.$video[0];
      }),
      (s.prototype.resize = function () {
        var t, e, i, n, o;
        this.$video &&
          ((o = this.$wrapper),
          (e = (n = (t = this.$video)[0]).videoHeight),
          (i = n.videoWidth),
          (n = o.height()) / e < (o = o.width()) / i
            ? t.css({ width: o + 2, height: "auto" })
            : t.css({ width: "auto", height: n + 2 }));
      }),
      (s.prototype.destroy = function () {
        delete u.vide.lookup[this.index],
          this.$video && this.$video.off(n),
          this.$element.off(n).removeData(n),
          this.$wrapper.remove();
      }),
      (u.vide = { lookup: [] }),
      (u.fn.vide = function (t, e) {
        var i;
        return (
          this.each(function () {
            (i = u.data(this, n)) && i.destroy(),
              ((i = new s(this, t, e)).index = u.vide.lookup.push(i) - 1),
              u.data(this, n, i);
          }),
          this
        );
      }),
      u(document).ready(function () {
        var t = u(window);
        t.on("resize.vide", function () {
          for (var t, e = u.vide.lookup.length, i = 0; i < e; i++)
            (t = u.vide.lookup[i]) && t.settings.resizing && t.resize();
        }),
          t.on("unload.vide", function () {
            return !1;
          }),
          u(document)
            .find("[data-vide-bg]")
            .each(function (t, e) {
              var i = u(e),
                n = i.data("vide-options"),
                e = i.data("vide-bg");
              i.vide(e, n);
            });
      });
  }),
  (function (t) {
    var e, i, n;
    "function" == typeof define && define.amd && (define(t), (e = !0)),
      "object" == typeof exports && ((module.exports = t()), (e = !0)),
      e ||
        ((i = window.Cookies),
        ((n = window.Cookies = t()).noConflict = function () {
          return (window.Cookies = i), n;
        }));
  })(function () {
    function a() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var i,
          n = arguments[t];
        for (i in n) e[i] = n[i];
      }
      return e;
    }
    function c(t) {
      return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function t(l) {
      function s() {}
      function i(t, e, i) {
        if ("undefined" != typeof document) {
          "number" == typeof (i = a({ path: "/" }, s.defaults, i)).expires &&
            (i.expires = new Date(+new Date() + 864e5 * i.expires)),
            (i.expires = i.expires ? i.expires.toUTCString() : "");
          try {
            var n = JSON.stringify(e);
            /^[\{\[]/.test(n) && (e = n);
          } catch (t) {}
          (e = l.write
            ? l.write(e, t)
            : encodeURIComponent(String(e)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var o,
            r = "";
          for (o in i)
            i[o] &&
              ((r += "; " + o), !0 !== i[o] && (r += "=" + i[o].split(";")[0]));
          return (document.cookie = t + "=" + e + r);
        }
      }
      function e(t, e) {
        if ("undefined" != typeof document) {
          for (
            var i = {},
              n = document.cookie ? document.cookie.split("; ") : [],
              o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o].split("="),
              s = r.slice(1).join("=");
            e || '"' !== s.charAt(0) || (s = s.slice(1, -1));
            try {
              var a = c(r[0]),
                s = (l.read || l)(s, a) || c(s);
              if (e)
                try {
                  s = JSON.parse(s);
                } catch (t) {}
              if (((i[a] = s), t === a)) break;
            } catch (t) {}
          }
          return t ? i[t] : i;
        }
      }
      return (
        (s.set = i),
        (s.get = function (t) {
          return e(t, !1);
        }),
        (s.getJSON = function (t) {
          return e(t, !0);
        }),
        (s.remove = function (t, e) {
          i(t, "", a(e, { expires: -1 }));
        }),
        (s.defaults = {}),
        (s.withConverter = t),
        s
      );
    })(function () {});
  });
("use strict");
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperty(t, e, i) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
function _slicedToArray(t, e) {
  return (
    _arrayWithHoles(t) ||
    _iterableToArrayLimit(t, e) ||
    _unsupportedIterableToArray(t, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" ===
      (i = "Object" === i && t.constructor ? t.constructor.name : i) ||
      "Set" === i
      ? Array.from(t)
      : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
      ? _arrayLikeToArray(t, e)
      : void 0;
  }
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
  return n;
}
function _iterableToArrayLimit(t, e) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
    var i = [],
      n = !0,
      o = !1,
      r = void 0;
    try {
      for (
        var s, a = t[Symbol.iterator]();
        !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e);
        n = !0
      );
    } catch (t) {
      (o = !0), (r = t);
    } finally {
      try {
        n || null == a.return || a.return();
      } finally {
        if (o) throw r;
      }
    }
    return i;
  }
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
!(function () {
  function i(t) {
    return [
      "elInY+elHeight",
      "elCenterY-".concat((t = 0 < arguments.length && void 0 !== t ? t : 30)),
      "elCenterY",
      "elCenterY+".concat(t),
      "elOutY-elHeight",
    ];
  }
  var a,
    l,
    c,
    _,
    S,
    w,
    e = {
      fadeInOut: function (t, e) {
        return (
          (e = 1 < arguments.length && void 0 !== e ? e : 0),
          {
            opacity: [
              i(0 < arguments.length && void 0 !== t ? t : 30),
              [e, 1, 1, 1, e],
            ],
          }
        );
      },
      fadeIn: function (t, e) {
        return {
          opacity: [
            [
              "elInY+elHeight",
              0 < arguments.length && void 0 !== t ? t : "elCenterY",
            ],
            [1 < arguments.length && void 0 !== e ? e : 0, 1],
          ],
        };
      },
      fadeOut: function (t, e) {
        return {
          opacity: [
            [
              0 < arguments.length && void 0 !== t ? t : "elCenterY",
              "elOutY-elHeight",
            ],
            [1, 1 < arguments.length && void 0 !== e ? e : 0],
          ],
        };
      },
      blurInOut: function (t, e) {
        return (
          (e = 1 < arguments.length && void 0 !== e ? e : 20),
          {
            blur: [
              i(0 < arguments.length && void 0 !== t ? t : 100),
              [e, 0, 0, 0, e],
            ],
          }
        );
      },
      blurIn: function (t, e) {
        return {
          blur: [
            [
              "elInY+elHeight",
              0 < arguments.length && void 0 !== t ? t : "elCenterY",
            ],
            [1 < arguments.length && void 0 !== e ? e : 20, 0],
          ],
        };
      },
      blurOut: function (t, e) {
        return {
          opacity: [
            [
              0 < arguments.length && void 0 !== t ? t : "elCenterY",
              "elOutY-elHeight",
            ],
            [0, 1 < arguments.length && void 0 !== e ? e : 20],
          ],
        };
      },
      scaleInOut: function (t, e) {
        return (
          (e = 1 < arguments.length && void 0 !== e ? e : 0.6),
          {
            scale: [
              i(0 < arguments.length && void 0 !== t ? t : 100),
              [e, 1, 1, 1, e],
            ],
          }
        );
      },
      scaleIn: function (t, e) {
        return {
          scale: [
            [
              "elInY+elHeight",
              0 < arguments.length && void 0 !== t ? t : "elCenterY",
            ],
            [1 < arguments.length && void 0 !== e ? e : 0.6, 1],
          ],
        };
      },
      scaleOut: function (t, e) {
        return {
          scale: [
            [
              0 < arguments.length && void 0 !== t ? t : "elCenterY",
              "elOutY-elHeight",
            ],
            [1, 1 < arguments.length && void 0 !== e ? e : 0.6],
          ],
        };
      },
      slideX: function (t, e) {
        return {
          translateX: [
            ["elInY", 0 < arguments.length && void 0 !== t ? t : 0],
            [0, 1 < arguments.length && void 0 !== e ? e : 500],
          ],
        };
      },
      slideY: function (t, e) {
        return {
          translateY: [
            ["elInY", 0 < arguments.length && void 0 !== t ? t : 0],
            [0, 1 < arguments.length && void 0 !== e ? e : 500],
          ],
        };
      },
      spin: function (t, e) {
        return {
          rotate: [
            [0, (t = 0 < arguments.length && void 0 !== t ? t : 1e3)],
            [0, 1 < arguments.length && void 0 !== e ? e : 360],
            { modValue: t },
          ],
        };
      },
      flipX: function (t, e) {
        return {
          rotateX: [
            [0, (t = 0 < arguments.length && void 0 !== t ? t : 1e3)],
            [0, 1 < arguments.length && void 0 !== e ? e : 360],
            { modValue: t },
          ],
        };
      },
      flipY: function (t, e) {
        return {
          rotateY: [
            [0, (t = 0 < arguments.length && void 0 !== t ? t : 1e3)],
            [0, 1 < arguments.length && void 0 !== e ? e : 360],
            { modValue: t },
          ],
        };
      },
      jiggle: function (t, e) {
        return {
          skewX: [
            [
              0,
              +(t = 0 < arguments.length && void 0 !== t ? t : 50),
              2 * t,
              3 * t,
              4 * t,
            ],
            [0, (e = 1 < arguments.length && void 0 !== e ? e : 40), 0, -e, 0],
            { modValue: 4 * t },
          ],
        };
      },
      seesaw: function (t, e) {
        return {
          skewY: [
            [
              0,
              +(t = 0 < arguments.length && void 0 !== t ? t : 50),
              2 * t,
              3 * t,
              4 * t,
            ],
            [0, (e = 1 < arguments.length && void 0 !== e ? e : 40), 0, -e, 0],
            { modValue: 4 * t },
          ],
        };
      },
      zigzag: function (t, e) {
        return {
          translateX: [
            [
              0,
              +(t = 0 < arguments.length && void 0 !== t ? t : 100),
              2 * t,
              3 * t,
              4 * t,
            ],
            [0, (e = 1 < arguments.length && void 0 !== e ? e : 100), 0, -e, 0],
            { modValue: 4 * t },
          ],
        };
      },
      hueRotate: function (t, e) {
        return {
          "hue-rotate": [
            [0, (t = 0 < arguments.length && void 0 !== t ? t : 600)],
            [0, 1 < arguments.length && void 0 !== e ? e : 360],
            { modValue: t },
          ],
        };
      },
    },
    t =
      ((a = [
        "perspective",
        "scaleX",
        "scaleY",
        "scale",
        "skewX",
        "skewY",
        "skew",
        "rotateX",
        "rotateY",
        "rotate",
      ]),
      (l = ["blur", "hue-rotate", "brightness"]),
      (c = ["translateX", "translateY", "translateZ"]),
      (_ = [
        "perspective",
        "border-radius",
        "blur",
        "translateX",
        "translateY",
        "translateZ",
      ]),
      (S = [
        "hue-rotate",
        "rotate",
        "rotateX",
        "rotateY",
        "skew",
        "skewX",
        "skewY",
      ]),
      (w = {
        easeInQuad: function (t) {
          return t * t;
        },
        easeOutQuad: function (t) {
          return t * (2 - t);
        },
        easeInOutQuad: function (t) {
          return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
        },
        easeInCubic: function (t) {
          return t * t * t;
        },
        easeOutCubic: function (t) {
          return --t * t * t + 1;
        },
        easeInOutCubic: function (t) {
          return t < 0.5
            ? 4 * t * t * t
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function (t) {
          return t * t * t * t;
        },
        easeOutQuart: function (t) {
          return 1 - --t * t * t * t;
        },
        easeInOutQuart: function (t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint: function (t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function (t) {
          return 1 + --t * t * t * t * t;
        },
        easeInOutQuint: function (t) {
          return t < 0.5
            ? 16 * t * t * t * t * t
            : 1 + 16 * --t * t * t * t * t;
        },
        easeOutBounce: function (t) {
          var e = 7.5625;
          return t < 1 / 2.75
            ? e * t * t
            : t < 2 / 2.75
            ? e * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
            ? e * (t -= 2.25 / 2.75) * t + 0.9375
            : e * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        easeInBounce: function (t) {
          return 1 - w.easeOutBounce(1 - t);
        },
        easeOutBack: function (t) {
          return (
            1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2)
          );
        },
        easeInBack: function (t) {
          return 2.70158 * t * t * t - 1.70158 * t * t;
        },
      }),
      new (function t() {
        var r = this;
        _classCallCheck(this, t),
          _defineProperty(this, "drivers", []),
          _defineProperty(this, "elements", []),
          _defineProperty(this, "frame", 0),
          _defineProperty(this, "debug", !1),
          _defineProperty(this, "windowWidth", 0),
          _defineProperty(this, "windowHeight", 0),
          _defineProperty(this, "presets", e),
          _defineProperty(this, "debugData", { frameLengths: [] }),
          _defineProperty(this, "init", function () {
            r.findAndAddElements(),
              window.requestAnimationFrame(r.onAnimationFrame),
              (r.windowWidth = document.body.clientWidth),
              (r.windowHeight = document.body.clientHeight),
              (window.onresize = r.onWindowResize);
          }),
          _defineProperty(this, "onWindowResize", function () {
            (document.body.clientWidth === r.windowWidth &&
              document.body.clientHeight === r.windowHeight) ||
              ((r.windowWidth = document.body.clientWidth),
              (r.windowHeight = document.body.clientHeight),
              r.elements.forEach(function (t) {
                return t.calculateTransforms();
              }));
          }),
          _defineProperty(this, "onAnimationFrame", function (t) {
            r.debug && (r.debugData.frameStart = Date.now());
            var e,
              i = {};
            r.drivers.forEach(function (t) {
              i[t.name] = t.getValue(r.frame);
            }),
              r.elements.forEach(function (t) {
                t.update(i, r.frame);
              }),
              r.debug &&
                r.debugData.frameLengths.push(
                  Date.now() - r.debugData.frameStart
                ),
              r.frame % 60 == 0 &&
                r.debug &&
                ((e = Math.ceil(
                  r.debugData.frameLengths.reduce(function (t, e) {
                    return t + e;
                  }, 0) / 60
                )),
                console.log("Average frame calculation time: ".concat(e, "ms")),
                (r.debugData.frameLengths = [])),
              r.frame++,
              window.requestAnimationFrame(r.onAnimationFrame);
          }),
          _defineProperty(this, "addDriver", function (t, e) {
            r.drivers.push(
              new o(
                t,
                e,
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              )
            );
          }),
          _defineProperty(this, "removeDriver", function (e) {
            r.drivers = r.drivers.filter(function (t) {
              return t.name !== e;
            });
          }),
          _defineProperty(this, "findAndAddElements", function () {
            (r.elements = []),
              document.querySelectorAll(".lax").forEach(function (t) {
                var e = [];
                t.classList.forEach(function (t) {
                  t.includes("lax_preset") &&
                    ((t = t.replace("lax_preset_", "")), e.push(t));
                });
                var i = _defineProperty({}, "scrollY", { presets: e });
                r.elements.push(new d(".lax", r, t, i, 0, {}));
              });
          }),
          _defineProperty(this, "addElements", function (i, n, o) {
            document.querySelectorAll(i).forEach(function (t, e) {
              r.elements.push(new d(i, r, t, n, e, o));
            });
          }),
          _defineProperty(this, "removeElements", function (e) {
            r.elements = r.elements.filter(function (t) {
              return t.selector !== e;
            });
          }),
          _defineProperty(this, "addElement", function (t, e, i) {
            r.elements.push(new d("", r, t, e, 0, i));
          }),
          _defineProperty(this, "removeElement", function (e) {
            r.elements = r.elements.filter(function (t) {
              return t.domElement !== e;
            });
          });
      })());
  function u(t, e) {
    if (Array.isArray(t)) return t;
    for (
      var i = Object.keys(t)
          .map(function (t) {
            return parseInt(t);
          })
          .sort(function (t, e) {
            return e < t ? 1 : -1;
          }),
        n = i[i.length - 1],
        o = 0;
      o < i.length;
      o++
    ) {
      var r = i[o];
      if (e < r) {
        n = r;
        break;
      }
    }
    return t[n];
  }
  function h(t, e, i) {
    var n = e.width,
      o = e.height,
      r = e.x,
      s = e.y;
    if ("number" == typeof t) return t;
    var a,
      l = document.body.scrollHeight,
      c = document.body.scrollWidth,
      u = window.innerWidth,
      h = window.innerHeight,
      e = (d = _slicedToArray(
        ((a = void 0 !== window.pageXOffset),
        (d = "CSS1Compat" === (document.compatMode || "")),
        (e = a
          ? window.pageXOffset
          : (d ? document.documentElement : document.body).scrollLeft),
        [
          a
            ? window.pageYOffset
            : (d ? document.documentElement : document.body).scrollTop,
          e,
        ]),
        2
      ))[0],
      d = (r = r + d[1]) + n,
      e = (s = s + e) + o;
    return Function(
      "return ".concat(
        t
          .replace(/screenWidth/g, u)
          .replace(/screenHeight/g, h)
          .replace(/pageHeight/g, l)
          .replace(/pageWidth/g, c)
          .replace(/elWidth/g, n)
          .replace(/elHeight/g, o)
          .replace(/elInY/g, s - h)
          .replace(/elOutY/g, e)
          .replace(/elCenterY/g, s + o / 2 - h / 2)
          .replace(/elInX/g, r - u)
          .replace(/elOutX/g, d)
          .replace(/elCenterX/g, r + n / 2 - u / 2)
          .replace(/index/g, i)
      )
    )();
  }
  function o(t, e) {
    var i = this,
      n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    _classCallCheck(this, o),
      _defineProperty(this, "getValueFn", void 0),
      _defineProperty(this, "name", ""),
      _defineProperty(this, "lastValue", 0),
      _defineProperty(this, "frameStep", 1),
      _defineProperty(this, "m1", 0),
      _defineProperty(this, "m2", 0),
      _defineProperty(this, "inertia", 0),
      _defineProperty(this, "inertiaEnabled", !1),
      _defineProperty(this, "getValue", function (t) {
        var e = i.lastValue;
        return (
          t % i.frameStep == 0 && (e = i.getValueFn(t)),
          i.inertiaEnabled &&
            ((t = e - i.lastValue),
            (i.m1 = 0.8 * i.m1 + t * (1 - 0.8)),
            (i.m2 = 0.8 * i.m2 + i.m1 * (1 - 0.8)),
            (i.inertia = Math.round(5e3 * i.m2) / 15e3)),
          (i.lastValue = e),
          [i.lastValue, i.inertia]
        );
      }),
      (this.name = t),
      (this.getValueFn = e),
      Object.keys(n).forEach(function (t) {
        i[t] = n[t];
      }),
      (this.lastValue = this.getValueFn(0));
  }
  function d(t, e, i, n) {
    var b = this,
      o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
      r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {};
    _classCallCheck(this, d),
      _defineProperty(this, "domElement", void 0),
      _defineProperty(this, "transformsData", void 0),
      _defineProperty(this, "styles", {}),
      _defineProperty(this, "selector", ""),
      _defineProperty(this, "groupIndex", 0),
      _defineProperty(this, "laxInstance", void 0),
      _defineProperty(this, "onUpdate", void 0),
      _defineProperty(this, "update", function (t, e) {
        var i,
          n = b.transforms,
          o = {};
        for (i in n) {
          var r = n[i];
          t[i] || console.error("No lax driver with name: ", i);
          var s,
            a = _slicedToArray(t[i], 2),
            l = a[0],
            c = a[1];
          for (s in r) {
            var u,
              h = (g = _slicedToArray(r[s], 3))[0],
              d = g[1],
              p = (T = void 0 === (y = g[2]) ? {} : y).modValue,
              f = void 0 === (v = T.frameStep) ? 1 : v,
              m = T.easing,
              g = T.inertia,
              y = T.inertiaMode,
              v = T.cssFn,
              T = void 0 === (T = T.cssUnit) ? "" : T,
              m = w[m];
            e % f == 0 &&
              ((m = (function (t, e, i, n) {
                var o = 0;
                if (
                  (t.forEach(function (t) {
                    t < i && o++;
                  }),
                  o <= 0)
                )
                  return e[0];
                if (o >= t.length) return e[t.length - 1];
                var r,
                  s = ((s = t[(r = o - 1)]), (t = t[o]), (i - s) / (t - s));
                return n && (s = n(s)), e[r] * (1 - s) + (e = e[o]) * s;
              })(h, d, p ? l % p : l, m)),
              g && ((u = c * g), (m += u = "absolute" === y ? Math.abs(u) : u)),
              (u =
                "px" == (T || _.includes(s) ? "px" : S.includes(s) ? "deg" : "")
                  ? 0
                  : 3),
              (u = m.toFixed(u)),
              (o[s] = v ? v(u, b.domElement) : u + T));
          }
        }
        b.applyStyles(o), b.onUpdate && b.onUpdate(t, b.domElement);
      }),
      _defineProperty(this, "calculateTransforms", function () {
        b.transforms = {};
        var t,
          a = b.laxInstance.windowWidth;
        for (t in b.transformsData)
          !(function (t) {
            var e,
              r = b.transformsData[t],
              s = {},
              i = r.presets;
            for (e in ((void 0 === i ? [] : i).forEach(function (t) {
              var e,
                i = _slicedToArray(t.split(":"), 3),
                n = i[0],
                o = i[1],
                t = i[2];
              (i = window.lax.presets[n])
                ? ((e = i(o, t)),
                  Object.keys(e).forEach(function (t) {
                    r[t] = e[t];
                  }))
                : console.error("Lax preset cannot be found with name: ", n);
            }),
            delete r.presets,
            r))
              !(function (t) {
                var e =
                    void 0 === (i = (n = _slicedToArray(r[t], 3))[0])
                      ? [-1e9, 1e9]
                      : i,
                  i = void 0 === (i = n[1]) ? [-1e9, 1e9] : i,
                  n = void 0 === (n = n[2]) ? {} : n,
                  o = b.domElement.getBoundingClientRect(),
                  e = u(e, a).map(function (t) {
                    return h(t, o, b.groupIndex);
                  }),
                  i = u(i, a).map(function (t) {
                    return h(t, o, b.groupIndex);
                  });
                s[t] = [e, i, n];
              })(e);
            b.transforms[t] = s;
          })(t);
      }),
      _defineProperty(this, "applyStyles", function (t) {
        var n,
          o,
          r,
          e =
            ((n = t),
            (o = { transform: "", filter: "" }),
            (r = { translateX: 1e-5, translateY: 1e-5, translateZ: 1e-5 }),
            Object.keys(n).forEach(function (t) {
              var e = n[t],
                i = _.includes(t) ? "px" : S.includes(t) ? "deg" : "";
              c.includes(t)
                ? (r[t] = e)
                : a.includes(t)
                ? (o.transform += "".concat(t, "(").concat(e).concat(i, ") "))
                : l.includes(t)
                ? (o.filter += "".concat(t, "(").concat(e).concat(i, ") "))
                : (o[t] = "".concat(e).concat(i, " "));
            }),
            (o.transform = "translate3d("
              .concat(r.translateX, "px, ")
              .concat(r.translateY, "px, ")
              .concat(r.translateZ, "px) ")
              .concat(o.transform)),
            o);
        Object.keys(e).forEach(function (t) {
          b.domElement.style.setProperty(t, e[t]);
        });
      }),
      (this.selector = t),
      (this.laxInstance = e),
      (this.domElement = i),
      (this.transformsData = n),
      (this.groupIndex = o);
    var s = void 0 === (o = r.style) ? {} : o,
      r = r.onUpdate;
    Object.keys(s).forEach(function (t) {
      i.style.setProperty(t, s[t]);
    }),
      r && (this.onUpdate = r),
      this.calculateTransforms();
  }
  "undefined" != typeof module && void 0 !== module.exports
    ? (module.exports = t)
    : (window.lax = t);
})(),
  (function (t) {
    var e = (function (c, B, u) {
      "use strict";
      var L, R;
      if (
        ((function () {
          var t,
            e = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125,
            };
          R = c.lazySizesConfig || c.lazysizesConfig || {};
          for (t in e) t in R || (R[t] = e[t]);
        })(),
        !B || !B.getElementsByClassName)
      )
        return { init: function () {}, cfg: R, noSupport: !0 };
      var z = B.documentElement,
        n = c.HTMLPictureElement,
        N = "addEventListener",
        X = "getAttribute",
        F = c[N].bind(c),
        W = c.setTimeout,
        V = c.requestAnimationFrame || W,
        a = c.requestIdleCallback,
        j = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        i = {},
        $ = Array.prototype.forEach,
        Y = function (t, e) {
          return (
            i[e] || (i[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
            i[e].test(t[X]("class") || "") && i[e]
          );
        },
        U = function (t, e) {
          Y(t, e) ||
            t.setAttribute("class", (t[X]("class") || "").trim() + " " + e);
        },
        q = function (t, e) {
          var i;
          (i = Y(t, e)) &&
            t.setAttribute("class", (t[X]("class") || "").replace(i, " "));
        },
        K = function (e, i, t) {
          var n = t ? N : "removeEventListener";
          t && K(e, i),
            o.forEach(function (t) {
              e[n](t, i);
            });
        },
        Q = function (t, e, i, n, o) {
          var r = B.createEvent("Event");
          return (
            i || (i = {}),
            (i.instance = L),
            r.initEvent(e, !n, !o),
            (r.detail = i),
            t.dispatchEvent(r),
            r
          );
        },
        Z = function (t, e) {
          var i;
          !n && (i = c.picturefill || R.pf)
            ? (e && e.src && !t[X]("srcset") && t.setAttribute("srcset", e.src),
              i({ reevaluate: !0, elements: [t] }))
            : e && e.src && (t.src = e.src);
        },
        J = function (t, e) {
          return (getComputedStyle(t, null) || {})[e];
        },
        s = function (t, e, i) {
          for (
            i = i || t.offsetWidth;
            i < R.minSize && e && !t._lazysizesWidth;

          )
            (i = e.offsetWidth), (e = e.parentNode);
          return i;
        },
        tt = (function () {
          var i,
            n,
            e = [],
            o = [],
            r = e,
            s = function () {
              var t = r;
              for (r = e.length ? o : e, i = !0, n = !1; t.length; )
                t.shift()();
              i = !1;
            },
            t = function (t, e) {
              i && !e
                ? t.apply(this, arguments)
                : (r.push(t), n || ((n = !0), (B.hidden ? W : V)(s)));
            };
          return (t._lsFlush = s), t;
        })(),
        et = function (i, t) {
          return t
            ? function () {
                tt(i);
              }
            : function () {
                var t = this,
                  e = arguments;
                tt(function () {
                  i.apply(t, e);
                });
              };
        },
        it = function (t) {
          var i,
            n = 0,
            o = R.throttleDelay,
            r = R.ricTimeout,
            e = function () {
              (i = !1), (n = u.now()), t();
            },
            s =
              a && r > 49
                ? function () {
                    a(e, { timeout: r }),
                      r !== R.ricTimeout && (r = R.ricTimeout);
                  }
                : et(function () {
                    W(e);
                  }, !0);
          return function (t) {
            var e;
            (t = !0 === t) && (r = 33),
              i ||
                ((i = !0),
                (e = o - (u.now() - n)),
                e < 0 && (e = 0),
                t || e < 9 ? s() : W(s, e));
          };
        },
        nt = function (t) {
          var e,
            i,
            n = 99,
            o = function () {
              (e = null), t();
            },
            r = function () {
              var t = u.now() - i;
              t < n ? W(r, n - t) : (a || o)(o);
            };
          return function () {
            (i = u.now()), e || (e = W(r, n));
          };
        },
        t = (function () {
          var p,
            f,
            h,
            m,
            t,
            g,
            y,
            v,
            T,
            b,
            _,
            S,
            r = /^img$/i,
            d = /^iframe$/i,
            w = "onscroll" in c && !/(gle|ing)bot/.test(navigator.userAgent),
            P = 0,
            x = 0,
            A = 0,
            M = -1,
            C = function (t) {
              A--, (!t || A < 0 || !t.target) && (A = 0);
            },
            k = function (t) {
              return (
                null == S && (S = "hidden" == J(B.body, "visibility")),
                S ||
                  !(
                    "hidden" == J(t.parentNode, "visibility") &&
                    "hidden" == J(t, "visibility")
                  )
              );
            },
            E = function (t, e) {
              var i,
                n = t,
                o = k(t);
              for (
                v -= e, _ += e, T -= e, b += e;
                o && (n = n.offsetParent) && n != B.body && n != z;

              )
                (o = (J(n, "opacity") || 1) > 0) &&
                  "visible" != J(n, "overflow") &&
                  ((i = n.getBoundingClientRect()),
                  (o =
                    b > i.left &&
                    T < i.right &&
                    _ > i.top - 1 &&
                    v < i.bottom + 1));
              return o;
            },
            e = function () {
              var t,
                e,
                i,
                n,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                h,
                d = L.elements;
              if ((m = R.loadMode) && A < 8 && (t = d.length)) {
                for (e = 0, M++; e < t; e++)
                  if (d[e] && !d[e]._lazyRace)
                    if (!w || (L.prematureUnveil && L.prematureUnveil(d[e])))
                      D(d[e]);
                    else if (
                      (((a = d[e][X]("data-expand")) && (r = 1 * a)) || (r = x),
                      c ||
                        ((c =
                          !R.expand || R.expand < 1
                            ? z.clientHeight > 500 && z.clientWidth > 500
                              ? 500
                              : 370
                            : R.expand),
                        (L._defEx = c),
                        (u = c * R.expFactor),
                        (h = R.hFac),
                        (S = null),
                        x < u && A < 1 && M > 2 && m > 2 && !B.hidden
                          ? ((x = u), (M = 0))
                          : (x = m > 1 && M > 1 && A < 6 ? c : P)),
                      l !== r &&
                        ((g = innerWidth + r * h),
                        (y = innerHeight + r),
                        (s = -1 * r),
                        (l = r)),
                      (i = d[e].getBoundingClientRect()),
                      (_ = i.bottom) >= s &&
                        (v = i.top) <= y &&
                        (b = i.right) >= s * h &&
                        (T = i.left) <= g &&
                        (_ || b || T || v) &&
                        (R.loadHidden || k(d[e])) &&
                        ((f && A < 3 && !a && (m < 3 || M < 4)) || E(d[e], r)))
                    ) {
                      if ((D(d[e]), (o = !0), A > 9)) break;
                    } else
                      !o &&
                        f &&
                        !n &&
                        A < 4 &&
                        M < 4 &&
                        m > 2 &&
                        (p[0] || R.preloadAfterLoad) &&
                        (p[0] ||
                          (!a &&
                            (_ ||
                              b ||
                              T ||
                              v ||
                              "auto" != d[e][X](R.sizesAttr)))) &&
                        (n = p[0] || d[e]);
                n && !o && D(n);
              }
            },
            i = it(e),
            I = function (t) {
              var e = t.target;
              if (e._lazyCache) return void delete e._lazyCache;
              C(t),
                U(e, R.loadedClass),
                q(e, R.loadingClass),
                K(e, O),
                Q(e, "lazyloaded");
            },
            n = et(I),
            O = function (t) {
              n({ target: t.target });
            },
            H = function (e, i) {
              try {
                e.contentWindow.location.replace(i);
              } catch (t) {
                e.src = i;
              }
            },
            G = function (t) {
              var e,
                i = t[X](R.srcsetAttr);
              (e = R.customMedia[t[X]("data-media") || t[X]("media")]) &&
                t.setAttribute("media", e),
                i && t.setAttribute("srcset", i);
            },
            s = et(function (e, t, i, n, o) {
              var r, s, a, l, c, u;
              (c = Q(e, "lazybeforeunveil", t)).defaultPrevented ||
                (n && (i ? U(e, R.autosizesClass) : e.setAttribute("sizes", n)),
                (s = e[X](R.srcsetAttr)),
                (r = e[X](R.srcAttr)),
                o && ((a = e.parentNode), (l = a && j.test(a.nodeName || ""))),
                (u = t.firesLoad || ("src" in e && (s || r || l))),
                (c = { target: e }),
                U(e, R.loadingClass),
                u && (clearTimeout(h), (h = W(C, 2500)), K(e, O, !0)),
                l && $.call(a.getElementsByTagName("source"), G),
                s
                  ? e.setAttribute("srcset", s)
                  : r && !l && (d.test(e.nodeName) ? H(e, r) : (e.src = r)),
                o && (s || l) && Z(e, { src: r })),
                e._lazyRace && delete e._lazyRace,
                q(e, R.lazyClass),
                tt(function () {
                  var t = e.complete && e.naturalWidth > 1;
                  (u && !t) ||
                    (t && U(e, "ls-is-cached"),
                    I(c),
                    (e._lazyCache = !0),
                    W(function () {
                      "_lazyCache" in e && delete e._lazyCache;
                    }, 9)),
                    "lazy" == e.loading && A--;
                }, !0);
            }),
            D = function (t) {
              if (!t._lazyRace) {
                var e,
                  i = r.test(t.nodeName),
                  n = i && (t[X](R.sizesAttr) || t[X]("sizes")),
                  o = "auto" == n;
                ((!o && f) ||
                  !i ||
                  (!t[X]("src") && !t.srcset) ||
                  t.complete ||
                  Y(t, R.errorClass) ||
                  !Y(t, R.lazyClass)) &&
                  ((e = Q(t, "lazyunveilread").detail),
                  o && ot.updateElem(t, !0, t.offsetWidth),
                  (t._lazyRace = !0),
                  A++,
                  s(t, e, o, n, i));
              }
            },
            o = nt(function () {
              (R.loadMode = 3), i();
            }),
            a = function () {
              3 == R.loadMode && (R.loadMode = 2), o();
            },
            l = function () {
              if (!f) {
                if (u.now() - t < 999) return void W(l, 999);
                (f = !0), (R.loadMode = 3), i(), F("scroll", a, !0);
              }
            };
          return {
            _: function () {
              (t = u.now()),
                (L.elements = B.getElementsByClassName(R.lazyClass)),
                (p = B.getElementsByClassName(
                  R.lazyClass + " " + R.preloadClass
                )),
                F("scroll", i, !0),
                F("resize", i, !0),
                F("pageshow", function (t) {
                  if (t.persisted) {
                    var e = B.querySelectorAll("." + R.loadingClass);
                    e.length &&
                      e.forEach &&
                      V(function () {
                        e.forEach(function (t) {
                          t.complete && D(t);
                        });
                      });
                  }
                }),
                c.MutationObserver
                  ? new MutationObserver(i).observe(z, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    })
                  : (z[N]("DOMNodeInserted", i, !0),
                    z[N]("DOMAttrModified", i, !0),
                    setInterval(i, 999)),
                F("hashchange", i, !0),
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend",
                ].forEach(function (t) {
                  B[N](t, i, !0);
                }),
                /d$|^c/.test(B.readyState)
                  ? l()
                  : (F("load", l), B[N]("DOMContentLoaded", i), W(l, 2e4)),
                L.elements.length ? (e(), tt._lsFlush()) : i();
            },
            checkElems: i,
            unveil: D,
            _aLSL: a,
          };
        })(),
        ot = (function () {
          var i,
            r = et(function (t, e, i, n) {
              var o, r, s;
              if (
                ((t._lazysizesWidth = n),
                (n += "px"),
                t.setAttribute("sizes", n),
                j.test(e.nodeName || ""))
              )
                for (
                  o = e.getElementsByTagName("source"), r = 0, s = o.length;
                  r < s;
                  r++
                )
                  o[r].setAttribute("sizes", n);
              i.detail.dataAttr || Z(t, i.detail);
            }),
            n = function (t, e, i) {
              var n,
                o = t.parentNode;
              o &&
                ((i = s(t, o, i)),
                (n = Q(t, "lazybeforesizes", { width: i, dataAttr: !!e })),
                n.defaultPrevented ||
                  ((i = n.detail.width) &&
                    i !== t._lazysizesWidth &&
                    r(t, o, n, i)));
            },
            t = function () {
              var t,
                e = i.length;
              if (e) for (t = 0; t < e; t++) n(i[t]);
            },
            e = nt(t);
          return {
            _: function () {
              (i = B.getElementsByClassName(R.autosizesClass)), F("resize", e);
            },
            checkElems: e,
            updateElem: n,
          };
        })(),
        e = function () {
          !e.i && B.getElementsByClassName && ((e.i = !0), ot._(), t._());
        };
      return (
        W(function () {
          R.init && e();
        }),
        (L = {
          cfg: R,
          autoSizer: ot,
          loader: t,
          init: e,
          uP: Z,
          aC: U,
          rC: q,
          hC: Y,
          fire: Q,
          gW: s,
          rAF: tt,
        })
      );
    })(t, t.document, Date);
    (t.lazySizes = e),
      "object" == typeof module && module.exports && (module.exports = e);
  })("undefined" != typeof window ? window : {}),
  (function (r) {
    (function () {
      if ("undefined" != typeof module && module.exports)
        return function (t) {
          module.exports = t();
        };
      if ("function" == typeof define && define.amd) return define;
      if ("undefined" != typeof window)
        return function (t) {
          window.MobileDetect = t();
        };
      throw new Error("unknown environment");
    })()(function () {
      function e(t, e) {
        return null != t && null != e && t.toLowerCase() === e.toLowerCase();
      }
      function i(t, e) {
        var i,
          n,
          o = t.length;
        if (!o || !e) return !1;
        for (i = e.toLowerCase(), n = 0; n < o; ++n)
          if (i === t[n].toLowerCase()) return !0;
        return !1;
      }
      function a(t) {
        for (var e in t) u.call(t, e) && (t[e] = new RegExp(t[e], "i"));
      }
      function o(t, e) {
        (this.ua = (t || "").substr(0, 500)),
          (this._cache = {}),
          (this.maxPhoneWidth = e || 600);
      }
      var l,
        c = {
          mobileDetectRules: {
            phones: {
              iPhone: "\\biPhone\\b|\\biPod\\b",
              BlackBerry:
                "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
              HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
              Nexus:
                "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
              Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
              Motorola:
                "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
              Samsung:
                "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
              LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
              Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
              Asus: "Asus.*Galaxy|PadFone.*Mobile",
              NokiaLumia: "Lumia [0-9]{3,4}",
              Micromax:
                "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
              Palm: "PalmSource|Palm",
              Vertu:
                "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
              Pantech:
                "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
              Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
              Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
              iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
              SimValley:
                "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
              Wolfgang:
                "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
              Alcatel: "Alcatel",
              Nintendo: "Nintendo (3DS|Switch)",
              Amoi: "Amoi",
              INQ: "INQ",
              OnePlus: "ONEPLUS",
              GenericPhone:
                "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
            },
            tablets: {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              GoogleTablet: "Android.*Pixel C",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet:
                "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet:
                "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet:
                "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet:
                "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
              ToshibaTablet:
                "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet:
                "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet:
                "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
              DellTablet:
                "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet:
                "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet:
                "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet:
                "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet:
                "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
              PhilipsTablet:
                "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet:
                "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet:
                "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet:
                "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet:
                "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet:
                "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet:
                "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet:
                "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet:
                "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android.*\\bG1\\b(?!\\))",
              MicromaxTablet:
                "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet:
                "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet:
                "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet:
                "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet:
                "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet:
                "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet:
                "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet:
                "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet:
                "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9|TECNO DP8D",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet:
                "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet:
                "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet:
                "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet:
                "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet:
                "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet:
                "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MediacomTablet:
                "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet:
                "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
            },
            oss: {
              AndroidOS: "Android",
              BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
              PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
              SymbianOS:
                "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
              WindowsMobileOS:
                "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
              WindowsPhoneOS:
                "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
              iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
              iPadOS: "CPU OS 13",
              MeeGoOS: "MeeGo",
              MaemoOS: "Maemo",
              JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
              webOS: "webOS|hpwOS",
              badaOS: "\\bBada\\b",
              BREWOS: "BREW",
            },
            uas: {
              Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
              Dolfin: "\\bDolfin\\b",
              Opera:
                "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
              Skyfire: "Skyfire",
              Edge: "Mobile Safari/[.0-9]* Edge",
              IE: "IEMobile|MSIEMobile",
              Firefox:
                "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
              Bolt: "bolt",
              TeaShark: "teashark",
              Blazer: "Blazer",
              Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
              WeChat: "\\bMicroMessenger\\b",
              UCBrowser: "UC.*Browser|UCWEB",
              baiduboxapp: "baiduboxapp",
              baidubrowser: "baidubrowser",
              DiigoBrowser: "DiigoBrowser",
              Mercury: "\\bMercury\\b",
              ObigoBrowser: "Obigo",
              NetFront: "NF-Browser",
              GenericBrowser:
                "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
              PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
            },
            props: {
              Mobile: "Mobile/[VER]",
              Build: "Build/[VER]",
              Version: "Version/[VER]",
              VendorID: "VendorID/[VER]",
              iPad: "iPad.*CPU[a-z ]+[VER]",
              iPhone: "iPhone.*CPU[a-z ]+[VER]",
              iPod: "iPod.*CPU[a-z ]+[VER]",
              Kindle: "Kindle/[VER]",
              Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
              Coast: ["Coast/[VER]"],
              Dolfin: "Dolfin/[VER]",
              Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
              Fennec: "Fennec/[VER]",
              Edge: "Edge/[VER]",
              IE: [
                "IEMobile/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];",
                "Trident/[0-9.]+;.*rv:[VER]",
              ],
              NetFront: "NetFront/[VER]",
              NokiaBrowser: "NokiaBrowser/[VER]",
              Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
              "Opera Mini": "Opera Mini/[VER]",
              "Opera Mobi": "Version/[VER]",
              UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
              MQQBrowser: "MQQBrowser/[VER]",
              MicroMessenger: "MicroMessenger/[VER]",
              baiduboxapp: "baiduboxapp/[VER]",
              baidubrowser: "baidubrowser/[VER]",
              SamsungBrowser: "SamsungBrowser/[VER]",
              Iron: "Iron/[VER]",
              Safari: ["Version/[VER]", "Safari/[VER]"],
              Skyfire: "Skyfire/[VER]",
              Tizen: "Tizen/[VER]",
              Webkit: "webkit[ /][VER]",
              PaleMoon: "PaleMoon/[VER]",
              Gecko: "Gecko/[VER]",
              Trident: "Trident/[VER]",
              Presto: "Presto/[VER]",
              Goanna: "Goanna/[VER]",
              iOS: " \\bi?OS\\b [VER][ ;]{1}",
              Android: "Android [VER]",
              BlackBerry: [
                "BlackBerry[\\w]+/[VER]",
                "BlackBerry.*Version/[VER]",
                "Version/[VER]",
              ],
              BREW: "BREW [VER]",
              Java: "Java/[VER]",
              "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]",
              ],
              "Windows Phone": "Windows Phone [VER]",
              "Windows CE": "Windows CE/[VER]",
              "Windows NT": "Windows NT [VER]",
              Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
              webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            },
            utils: {
              Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
              MobileBot:
                "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
              DesktopMode: "WPDesktop",
              TV: "SonyDTV|HbbTV",
              WebKit: "(webkit)[ /]([\\w.]+)",
              Console:
                "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
              Watch: "SM-V700",
            },
          },
          detectMobileBrowsers: {
            fullPattern:
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern:
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i,
          },
        },
        u = Object.prototype.hasOwnProperty;
      return (
        (c.FALLBACK_PHONE = "UnknownPhone"),
        (c.FALLBACK_TABLET = "UnknownTablet"),
        (c.FALLBACK_MOBILE = "UnknownMobile"),
        (l =
          "isArray" in Array
            ? Array.isArray
            : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t);
              }),
        (function () {
          var t,
            e,
            i,
            n,
            o,
            r,
            s = c.mobileDetectRules;
          for (t in s.props)
            if (u.call(s.props, t)) {
              for (
                e = s.props[t], o = (e = !l(e) ? [e] : e).length, n = 0;
                n < o;
                ++n
              )
                0 <= (r = (i = e[n]).indexOf("[VER]")) &&
                  (i =
                    i.substring(0, r) + "([\\w._\\+]+)" + i.substring(r + 5)),
                  (e[n] = new RegExp(i, "i"));
              s.props[t] = e;
            }
          a(s.oss),
            a(s.phones),
            a(s.tablets),
            a(s.uas),
            a(s.utils),
            (s.oss0 = {
              WindowsPhoneOS: s.oss.WindowsPhoneOS,
              WindowsMobileOS: s.oss.WindowsMobileOS,
            });
        })(),
        (c.findMatch = function (t, e) {
          for (var i in t) if (u.call(t, i) && t[i].test(e)) return i;
          return null;
        }),
        (c.findMatches = function (t, e) {
          var i,
            n = [];
          for (i in t) u.call(t, i) && t[i].test(e) && n.push(i);
          return n;
        }),
        (c.getVersionStr = function (t, e) {
          var i,
            n,
            o,
            r,
            s = c.mobileDetectRules.props;
          if (u.call(s, t))
            for (o = (i = s[t]).length, n = 0; n < o; ++n)
              if (null !== (r = i[n].exec(e))) return r[1];
          return null;
        }),
        (c.getVersion = function (t, e) {
          e = c.getVersionStr(t, e);
          return e ? c.prepareVersionNo(e) : NaN;
        }),
        (c.prepareVersionNo = function (t) {
          var e = t.split(/[a-z._ \/\-]/i);
          return (
            1 === e.length && (t = e[0]),
            1 < e.length && ((t = e[0] + "."), e.shift(), (t += e.join(""))),
            Number(t)
          );
        }),
        (c.isMobileFallback = function (t) {
          return (
            c.detectMobileBrowsers.fullPattern.test(t) ||
            c.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
          );
        }),
        (c.isTabletFallback = function (t) {
          return c.detectMobileBrowsers.tabletPattern.test(t);
        }),
        (c.prepareDetectionCache = function (t, e, i) {
          var n;
          if (t.mobile === r)
            return (n = c.findMatch(c.mobileDetectRules.tablets, e))
              ? ((t.mobile = t.tablet = n), void (t.phone = null))
              : (n = c.findMatch(c.mobileDetectRules.phones, e))
              ? ((t.mobile = t.phone = n), void (t.tablet = null))
              : void (c.isMobileFallback(e)
                  ? (i = o.isPhoneSized(i)) === r
                    ? ((t.mobile = c.FALLBACK_MOBILE),
                      (t.tablet = t.phone = null))
                    : i
                    ? ((t.mobile = t.phone = c.FALLBACK_PHONE),
                      (t.tablet = null))
                    : ((t.mobile = t.tablet = c.FALLBACK_TABLET),
                      (t.phone = null))
                  : c.isTabletFallback(e)
                  ? ((t.mobile = t.tablet = c.FALLBACK_TABLET),
                    (t.phone = null))
                  : (t.mobile = t.tablet = t.phone = null));
        }),
        (c.mobileGrade = function (t) {
          var e = null !== t.mobile();
          return (t.os("iOS") && 4.3 <= t.version("iPad")) ||
            (t.os("iOS") && 3.1 <= t.version("iPhone")) ||
            (t.os("iOS") && 3.1 <= t.version("iPod")) ||
            (2.1 < t.version("Android") && t.is("Webkit")) ||
            7 <= t.version("Windows Phone OS") ||
            (t.is("BlackBerry") && 6 <= t.version("BlackBerry")) ||
            t.match("Playbook.*Tablet") ||
            (1.4 <= t.version("webOS") && t.match("Palm|Pre|Pixi")) ||
            t.match("hp.*TouchPad") ||
            (t.is("Firefox") && 12 <= t.version("Firefox")) ||
            (t.is("Chrome") &&
              t.is("AndroidOS") &&
              4 <= t.version("Android")) ||
            (t.is("Skyfire") &&
              4.1 <= t.version("Skyfire") &&
              t.is("AndroidOS") &&
              2.3 <= t.version("Android")) ||
            (t.is("Opera") &&
              11 < t.version("Opera Mobi") &&
              t.is("AndroidOS")) ||
            t.is("MeeGoOS") ||
            t.is("Tizen") ||
            (t.is("Dolfin") && 2 <= t.version("Bada")) ||
            ((t.is("UC Browser") || t.is("Dolfin")) &&
              2.3 <= t.version("Android")) ||
            t.match("Kindle Fire") ||
            (t.is("Kindle") && 3 <= t.version("Kindle")) ||
            (t.is("AndroidOS") && t.is("NookTablet")) ||
            (11 <= t.version("Chrome") && !e) ||
            (5 <= t.version("Safari") && !e) ||
            (4 <= t.version("Firefox") && !e) ||
            (7 <= t.version("MSIE") && !e) ||
            (10 <= t.version("Opera") && !e)
            ? "A"
            : (t.os("iOS") && t.version("iPad") < 4.3) ||
              (t.os("iOS") && t.version("iPhone") < 3.1) ||
              (t.os("iOS") && t.version("iPod") < 3.1) ||
              (t.is("Blackberry") &&
                5 <= t.version("BlackBerry") &&
                t.version("BlackBerry") < 6) ||
              (5 <= t.version("Opera Mini") &&
                t.version("Opera Mini") <= 6.5 &&
                (2.3 <= t.version("Android") || t.is("iOS"))) ||
              t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
              (11 <= t.version("Opera Mobi") && t.is("SymbianOS"))
            ? "B"
            : (t.version("BlackBerry") < 5 ||
                t.match("MSIEMobile|Windows CE.*Mobile") ||
                t.version("Windows Mobile"),
              "C");
        }),
        (c.detectOS = function (t) {
          return (
            c.findMatch(c.mobileDetectRules.oss0, t) ||
            c.findMatch(c.mobileDetectRules.oss, t)
          );
        }),
        (c.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height
            ? window.screen.width
            : window.screen.height;
        }),
        (o.prototype = {
          constructor: o,
          mobile: function () {
            return (
              c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.mobile
            );
          },
          phone: function () {
            return (
              c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.phone
            );
          },
          tablet: function () {
            return (
              c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.tablet
            );
          },
          userAgent: function () {
            return (
              this._cache.userAgent === r &&
                (this._cache.userAgent = c.findMatch(
                  c.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgent
            );
          },
          userAgents: function () {
            return (
              this._cache.userAgents === r &&
                (this._cache.userAgents = c.findMatches(
                  c.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgents
            );
          },
          os: function () {
            return (
              this._cache.os === r && (this._cache.os = c.detectOS(this.ua)),
              this._cache.os
            );
          },
          version: function (t) {
            return c.getVersion(t, this.ua);
          },
          versionStr: function (t) {
            return c.getVersionStr(t, this.ua);
          },
          is: function (t) {
            return (
              i(this.userAgents(), t) ||
              e(t, this.os()) ||
              e(t, this.phone()) ||
              e(t, this.tablet()) ||
              i(c.findMatches(c.mobileDetectRules.utils, this.ua), t)
            );
          },
          match: function (t) {
            return (t = !(t instanceof RegExp) ? new RegExp(t, "i") : t).test(
              this.ua
            );
          },
          isPhoneSized: function (t) {
            return o.isPhoneSized(t || this.maxPhoneWidth);
          },
          mobileGrade: function () {
            return (
              this._cache.grade === r &&
                (this._cache.grade = c.mobileGrade(this)),
              this._cache.grade
            );
          },
        }),
        "undefined" != typeof window && window.screen
          ? (o.isPhoneSized = function (t) {
              return t < 0 ? r : c.getDeviceSmallerSide() <= t;
            })
          : (o.isPhoneSized = function () {}),
        (o._impl = c),
        (o.version = "1.4.4 2019-09-21"),
        o
      );
    });
  })(),
  function () {
    var c,
      n,
      u,
      h,
      t,
      s,
      p,
      C,
      o,
      f,
      l,
      r,
      d,
      i,
      m,
      k,
      a,
      e,
      g,
      y = [].slice;
    function v(t) {
      var e,
        i,
        n,
        o,
        r,
        s,
        a,
        l = this;
      if (
        ((this.options = t),
        (this.el = this.options.el),
        null != this.el.odometer)
      )
        return this.el.odometer;
      for (e in ((this.el.odometer = this), (s = v.options)))
        (n = s[e]), null == this.options[e] && (this.options[e] = n);
      null == (t = this.options).duration && (t.duration = c),
        (this.MAX_VALUES = (this.options.duration / h / u) | 0),
        this.resetFormat(),
        (this.value = this.cleanValue(
          null != (t = this.options.value) ? t : ""
        )),
        this.renderInside(),
        this.render();
      try {
        for (
          o = 0, r = (a = ["innerHTML", "innerText", "textContent"]).length;
          o < r;
          o++
        )
          (i = a[o]),
            null != this.el[i] &&
              (function (e) {
                Object.defineProperty(l.el, e, {
                  get: function () {
                    var t;
                    return "innerHTML" === e
                      ? l.inside.outerHTML
                      : null != (t = l.inside.innerText)
                      ? t
                      : l.inside.textContent;
                  },
                  set: function (t) {
                    return l.update(t);
                  },
                });
              })(i);
      } catch (t) {
        this.watchForMutations();
      }
    }
    (n = /^\(?([^)]*)\)?(?:(.)(d+))?$/),
      (c = 2e3),
      (u = 2),
      (h = 1e3 / 30),
      (g = document.createElement("div").style),
      (p =
        null != g.transition ||
        null != g.webkitTransition ||
        null != g.mozTransition ||
        null != g.oTransition),
      (d =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame),
      (t =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver),
      (o = function (t) {
        var e = document.createElement("div");
        return (e.innerHTML = t), e.children[0];
      }),
      (r = function (t, e) {
        return (t.className = t.className.replace(
          new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          " "
        ));
      }),
      (C = function (t, e) {
        return r(t, e), (t.className += " " + e);
      }),
      (m = function (t, e) {
        var i;
        return null != document.createEvent
          ? ((i = document.createEvent("HTMLEvents")).initEvent(e, !0, !0),
            t.dispatchEvent(i))
          : void 0;
      }),
      (l = function () {
        var t;
        return null !=
          (t =
            null != (t = window.performance) && "function" == typeof t.now
              ? t.now()
              : void 0)
          ? t
          : +new Date();
      }),
      (i = function (t, e) {
        return (e = null == e ? 0 : e)
          ? ((t *= Math.pow(10, e)),
            (t += 0.5),
            (t = Math.floor(t)) / Math.pow(10, e))
          : Math.round(t);
      }),
      (k = function (t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t);
      }),
      (a = !(f = function (t) {
        return t - i(t);
      })),
      (g = function () {
        var t, e, i, n, o;
        if (!a && null != window.jQuery) {
          for (
            a = !0, o = [], e = 0, i = (n = ["html", "text"]).length;
            e < i;
            e++
          )
            (t = n[e]),
              o.push(
                (function () {
                  var i = window.jQuery.fn[t];
                  return (window.jQuery.fn[t] = function (t) {
                    var e;
                    return null == t ||
                      null == (null != (e = this[0]) ? e.odometer : void 0)
                      ? i.apply(this, arguments)
                      : this[0].odometer.update(t);
                  });
                })()
              );
          return o;
        }
      })(),
      setTimeout(g, 0),
      (v.prototype.renderInside = function () {
        return (
          (this.inside = document.createElement("div")),
          (this.inside.className = "odometer-inside"),
          (this.el.innerHTML = ""),
          this.el.appendChild(this.inside)
        );
      }),
      (v.prototype.watchForMutations = function () {
        var e = this;
        if (null != t)
          try {
            return (
              null == this.observer &&
                (this.observer = new t(function () {
                  var t = e.el.innerText;
                  return e.renderInside(), e.render(e.value), e.update(t);
                })),
              (this.watchMutations = !0),
              this.startWatchingMutations()
            );
          } catch (t) {
            0;
          }
      }),
      (v.prototype.startWatchingMutations = function () {
        return this.watchMutations
          ? this.observer.observe(this.el, { childList: !0 })
          : void 0;
      }),
      (v.prototype.stopWatchingMutations = function () {
        var t;
        return null != (t = this.observer) ? t.disconnect() : void 0;
      }),
      (v.prototype.cleanValue = function (t) {
        var e;
        return (
          "string" == typeof t &&
            ((t = (t = (t = t.replace(
              null != (e = this.format.radix) ? e : ".",
              "<radix>"
            )).replace(/[.,]/g, "")).replace("<radix>", ".")),
            (t = parseFloat(t, 10) || 0)),
          i(t, this.format.precision)
        );
      }),
      (v.prototype.bindTransitionEnd = function () {
        var t,
          e,
          i,
          n,
          o,
          r,
          s = this;
        if (!this.transitionEndBound) {
          for (
            this.transitionEndBound = !0,
              e = !1,
              r = [],
              i = 0,
              n = (o =
                "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(
                  " "
                )).length;
            i < n;
            i++
          )
            (t = o[i]),
              r.push(
                this.el.addEventListener(
                  t,
                  function () {
                    return (
                      e ||
                        ((e = !0),
                        setTimeout(function () {
                          return s.render(), (e = !1), m(s.el, "odometerdone");
                        }, 0)),
                      !0
                    );
                  },
                  !1
                )
              );
          return r;
        }
      }),
      (v.prototype.resetFormat = function () {
        var t,
          e,
          i = null != (e = this.options.format) ? e : "(,ddd).dd";
        if (!(t = n.exec((i = i || "d"))))
          throw new Error("Odometer: Unparsable digit format");
        return (
          (i = (e = t.slice(1, 4))[0]),
          (t = e[1]),
          (e = (null != (e = e[2]) ? e.length : void 0) || 0),
          (this.format = { repeating: i, radix: t, precision: e })
        );
      }),
      (v.prototype.render = function (t) {
        var e, i, n, o, r, s, a, l, c, u, h, d;
        for (
          null == t && (t = this.value),
            this.stopWatchingMutations(),
            this.resetFormat(),
            this.inside.innerHTML = "",
            s = this.options.theme,
            r = [],
            l = 0,
            u = (e = this.el.className.split(" ")).length;
          l < u;
          l++
        )
          (i = e[l]).length &&
            ((o = /^odometer-theme-(.+)$/.exec(i))
              ? (s = o[1])
              : /^odometer(-|$)/.test(i) || r.push(i));
        for (
          r.push("odometer"),
            p || r.push("odometer-no-transitions"),
            r.push(s ? "odometer-theme-" + s : "odometer-auto-theme"),
            this.el.className = r.join(" "),
            this.ribbons = {},
            this.digits = [],
            a = !this.format.precision || !f(t) || !1,
            c = 0,
            h = (d = t.toString().split("").reverse()).length;
          c < h;
          c++
        )
          (n = d[c]), this.addDigit(n, (a = "." === n ? !0 : a));
        return this.startWatchingMutations();
      }),
      (v.prototype.update = function (t) {
        var e,
          i = this;
        return (e = (t = this.cleanValue(t)) - this.value)
          ? (r(
              this.el,
              "odometer-animating-up odometer-animating-down odometer-animating"
            ),
            C(
              this.el,
              0 < e ? "odometer-animating-up" : "odometer-animating-down"
            ),
            this.stopWatchingMutations(),
            this.animate(t),
            this.startWatchingMutations(),
            setTimeout(function () {
              return i.el.offsetHeight, C(i.el, "odometer-animating");
            }, 0),
            (this.value = t))
          : void 0;
      }),
      (v.prototype.renderDigit = function () {
        return o(
          '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>'
        );
      }),
      (v.prototype.insertDigit = function (t, e) {
        return null != e
          ? this.inside.insertBefore(t, e)
          : this.inside.children.length
          ? this.inside.insertBefore(t, this.inside.children[0])
          : this.inside.appendChild(t);
      }),
      (v.prototype.addSpacer = function (t, e, i) {
        var n = o('<span class="odometer-formatting-mark"></span>');
        return (n.innerHTML = t), i && C(n, i), this.insertDigit(n, e);
      }),
      (v.prototype.addDigit = function (t, e) {
        var i, n, o;
        if ((null == e && (e = !0), "-" === t))
          return this.addSpacer(t, null, "odometer-negation-mark");
        if ("." === t)
          return this.addSpacer(
            null != (o = this.format.radix) ? o : ".",
            null,
            "odometer-radix-mark"
          );
        if (e)
          for (n = !1; ; ) {
            if (!this.format.repeating.length) {
              if (n) throw new Error("Bad odometer format without digits");
              this.resetFormat(), (n = !0);
            }
            if (
              ((i = this.format.repeating[this.format.repeating.length - 1]),
              (this.format.repeating = this.format.repeating.substring(
                0,
                this.format.repeating.length - 1
              )),
              "d" === i)
            )
              break;
            this.addSpacer(i);
          }
        return (
          ((e = this.renderDigit()).querySelector(".odometer-value").innerHTML =
            t),
          this.digits.push(e),
          this.insertDigit(e)
        );
      }),
      (v.prototype.animate = function (t) {
        return p && "count" !== this.options.animation
          ? this.animateSlide(t)
          : this.animateCount(t);
      }),
      (v.prototype.animateCount = function (e) {
        var i,
          n,
          o,
          r,
          s,
          a = this;
        if ((n = +e - this.value))
          return (
            (r = o = l()),
            (i = this.value),
            (s = function () {
              var t;
              return l() - r > a.options.duration
                ? ((a.value = e), a.render(), void m(a.el, "odometerdone"))
                : (50 < (t = l() - o) &&
                    ((o = l()),
                    (t = t / a.options.duration),
                    (i += n * t),
                    a.render(Math.round(i))),
                  null != d ? d(s) : setTimeout(s, 50));
            })()
          );
      }),
      (v.prototype.getDigitCount = function () {
        for (
          var t,
            e,
            i,
            n = 1 <= arguments.length ? y.call(arguments, 0) : [],
            o = (i = 0),
            r = n.length;
          i < r;
          o = ++i
        )
          (e = n[o]), (n[o] = Math.abs(e));
        return (
          (t = Math.max.apply(Math, n)),
          Math.ceil(Math.log(t + 1) / Math.log(10))
        );
      }),
      (v.prototype.getFractionalDigitCount = function () {
        for (
          var t,
            e,
            i = 1 <= arguments.length ? y.call(arguments, 0) : [],
            n = /^\-?\d*\.(\d*?)0*$/,
            o = (e = 0),
            r = i.length;
          e < r;
          o = ++e
        )
          (t = i[o]),
            (i[o] = t.toString()),
            (t = n.exec(i[o])),
            (i[o] = null == t ? 0 : t[1].length);
        return Math.max.apply(Math, i);
      }),
      (v.prototype.resetDigits = function () {
        return (
          (this.digits = []),
          (this.ribbons = []),
          (this.inside.innerHTML = ""),
          this.resetFormat()
        );
      }),
      (v.prototype.animateSlide = function (t) {
        var e,
          i,
          n,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          m,
          g,
          y,
          v,
          T,
          b,
          _,
          S,
          w,
          P,
          x,
          A = this.value,
          M = this.getFractionalDigitCount(A, t);
        if (
          (M && ((t *= Math.pow(10, M)), (A *= Math.pow(10, M))), (n = t - A))
        ) {
          for (
            this.bindTransitionEnd(),
              o = this.getDigitCount(A, t),
              r = [],
              u = y = e = 0;
            0 <= o ? y < o : o < y;
            u = 0 <= o ? ++y : --y
          ) {
            if (
              ((m = k(A / Math.pow(10, o - u - 1))),
              (s = (a = k(t / Math.pow(10, o - u - 1))) - m),
              Math.abs(s) > this.MAX_VALUES)
            ) {
              for (
                c = [],
                  h = s / (this.MAX_VALUES + this.MAX_VALUES * e * 0.5),
                  i = m;
                (0 < s && i < a) || (s < 0 && a < i);

              )
                c.push(Math.round(i)), (i += h);
              c[c.length - 1] !== a && c.push(a), e++;
            } else
              c = function () {
                x = [];
                for (var t = m; m <= a ? t <= a : a <= t; m <= a ? t++ : t--)
                  x.push(t);
                return x;
              }.apply(this);
            for (u = v = 0, b = c.length; v < b; u = ++v)
              (l = c[u]), (c[u] = Math.abs(l % 10));
            r.push(c);
          }
          for (
            this.resetDigits(), u = T = 0, _ = (P = r.reverse()).length;
            T < _;
            u = ++T
          )
            for (
              c = P[u],
                this.digits[u] || this.addDigit(" ", M <= u),
                null == (g = this.ribbons)[u] &&
                  (g[u] = this.digits[u].querySelector(
                    ".odometer-ribbon-inner"
                  )),
                this.ribbons[u].innerHTML = "",
                S = (c = n < (d = w = 0) ? c.reverse() : c).length;
              w < S;
              d = ++w
            )
              (l = c[d]),
                ((f = document.createElement("div")).className =
                  "odometer-value"),
                (f.innerHTML = l),
                this.ribbons[u].appendChild(f),
                d === c.length - 1 && C(f, "odometer-last-value"),
                0 === d && C(f, "odometer-first-value");
          return (
            m < 0 && this.addDigit("-"),
            null != (p = this.inside.querySelector(".odometer-radix-mark")) &&
              p.parent.removeChild(p),
            M
              ? this.addSpacer(
                  this.format.radix,
                  this.digits[M - 1],
                  "odometer-radix-mark"
                )
              : void 0
          );
        }
      }),
      ((s = v).options = null != (g = window.odometerOptions) ? g : {}),
      setTimeout(function () {
        var t, e, i, n, o;
        if (window.odometerOptions) {
          for (t in ((o = []), (n = window.odometerOptions)))
            (e = n[t]),
              o.push(
                null != (i = s.options)[t] ? (i = s.options)[t] : (i[t] = e)
              );
          return o;
        }
      }, 0),
      (s.init = function () {
        var t, e, i, n, o, r;
        if (null != document.querySelectorAll) {
          for (
            r = [],
              i = 0,
              n = (e = document.querySelectorAll(
                s.options.selector || ".odometer"
              )).length;
            i < n;
            i++
          )
            (t = e[i]),
              r.push(
                (t.odometer = new s({
                  el: t,
                  value: null != (o = t.innerText) ? o : t.textContent,
                }))
              );
          return r;
        }
      }),
      null != (null != (g = document.documentElement) ? g.doScroll : void 0) &&
      null != document.createEventObject
        ? ((e = document.onreadystatechange),
          (document.onreadystatechange = function () {
            return (
              "complete" === document.readyState &&
                !1 !== s.options.auto &&
                s.init(),
              null != e ? e.apply(this, arguments) : void 0
            );
          }))
        : document.addEventListener(
            "DOMContentLoaded",
            function () {
              return !1 !== s.options.auto ? s.init() : void 0;
            },
            !1
          ),
      "function" == typeof define && define.amd
        ? define(["jquery"], function () {
            return s;
          })
        : !1 === typeof exports
        ? (module.exports = s)
        : (window.Odometer = s);
  }.call(this),
  (window.paceOptions = { restartOnPushState: !1, eventLag: !1 }),
  function () {
    var l,
      c,
      r,
      e,
      g,
      t,
      u,
      y,
      n,
      o,
      i,
      a,
      v,
      T,
      h,
      s,
      d,
      p,
      f,
      m,
      b,
      _,
      S,
      w,
      P,
      x,
      A,
      M,
      C,
      k,
      E,
      I,
      O,
      H,
      G,
      D,
      B,
      L,
      R,
      z,
      N = [].slice,
      X = {}.hasOwnProperty,
      F = function (t, e) {
        function i() {
          this.constructor = t;
        }
        for (var n in e) X.call(e, n) && (t[n] = e[n]);
        return (
          (i.prototype = e.prototype),
          (t.prototype = new i()),
          (t.__super__ = e.prototype),
          t
        );
      },
      W =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        },
      V = {
        catchupTime: 100,
        initialRate: 0.03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: { checkInterval: 100, selectors: ["body"] },
        eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
        ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] },
      },
      j = function () {
        var t;
        return null !=
          (t =
            "undefined" != typeof performance &&
            null !== performance &&
            "function" == typeof performance.now
              ? performance.now()
              : void 0)
          ? t
          : +new Date();
      },
      $ =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame,
      Y = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    for (
      null == $ &&
        (($ = function (t) {
          return setTimeout(t, 50);
        }),
        (Y = function (t) {
          return clearTimeout(t);
        })),
        w = function (e) {
          var i,
            n = j();
          return (i = function () {
            var t = j() - n;
            return 33 <= t
              ? ((n = j()),
                e(t, function () {
                  return $(i);
                }))
              : setTimeout(i, 33 - t);
          })();
        },
        S = function () {
          var t = arguments[0],
            e = arguments[1],
            i = 3 <= arguments.length ? N.call(arguments, 2) : [];
          return "function" == typeof t[e] ? t[e].apply(t, i) : t[e];
        },
        h = function () {
          for (
            var t,
              e,
              i,
              n = arguments[0],
              o = 2 <= arguments.length ? N.call(arguments, 1) : [],
              r = 0,
              s = o.length;
            r < s;
            r++
          )
            if ((e = o[r]))
              for (t in e)
                X.call(e, t) &&
                  ((i = e[t]),
                  null != n[t] &&
                  "object" == typeof n[t] &&
                  null != i &&
                  "object" == typeof i
                    ? h(n[t], i)
                    : (n[t] = i));
          return n;
        },
        a = function (t) {
          for (var e, i, n = (e = 0), o = 0, r = t.length; o < r; o++)
            (i = t[o]), (n += Math.abs(i)), e++;
          return n / e;
        },
        d = function (t, e) {
          var i;
          if (
            (null == t && (t = "options"),
            null == e && (e = !0),
            (i = document.querySelector("[data-pace-" + t + "]")))
          ) {
            if (((t = i.getAttribute("data-pace-" + t)), !e)) return t;
            try {
              return JSON.parse(t);
            } catch (t) {
              return "undefined" != typeof console && null !== console
                ? console.error("Error parsing inline pace options", t)
                : void 0;
            }
          }
        },
        U.prototype.on = function (t, e, i, n) {
          var o;
          return (
            null == n && (n = !1),
            null == this.bindings && (this.bindings = {}),
            null == (o = this.bindings)[t] && (o[t] = []),
            this.bindings[t].push({ handler: e, ctx: i, once: n })
          );
        },
        U.prototype.once = function (t, e, i) {
          return this.on(t, e, i, !0);
        },
        U.prototype.off = function (t, e) {
          var i, n, o;
          if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
            if (null == e) return delete this.bindings[t];
            for (i = 0, o = []; i < this.bindings[t].length; )
              this.bindings[t][i].handler === e
                ? o.push(this.bindings[t].splice(i, 1))
                : o.push(i++);
            return o;
          }
        },
        U.prototype.trigger = function () {
          var t,
            e,
            i,
            n,
            o,
            r,
            s = arguments[0],
            a = 2 <= arguments.length ? N.call(arguments, 1) : [];
          if (null != (n = this.bindings) && n[s]) {
            for (i = 0, r = []; i < this.bindings[s].length; )
              (e = (o = this.bindings[s][i]).handler),
                (t = o.ctx),
                (o = o.once),
                e.apply(null != t ? t : this, a),
                o ? r.push(this.bindings[s].splice(i, 1)) : r.push(i++);
            return r;
          }
        },
        z = U,
        g = window.Pace || {},
        window.Pace = g,
        h(g, z.prototype),
        _ = g.options = h({}, V, window.paceOptions, d()),
        H = 0,
        D = (L = ["ajax", "document", "eventLag", "elements"]).length;
      H < D;
      H++
    )
      !0 === _[(M = L[H])] && (_[M] = V[M]);
    function U() {}
    function q(t) {
      (this.source = t),
        (this.last = this.sinceLastUpdate = 0),
        (this.rate = _.initialRate),
        (this.catchup = 0),
        (this.progress = this.lastProgress = 0),
        null != this.source && (this.progress = S(this.source, "progress"));
    }
    function K() {
      var t,
        e,
        i = this;
      (this.progress =
        null != (e = this.states[document.readyState]) ? e : 100),
        (t = document.onreadystatechange),
        (document.onreadystatechange = function () {
          return (
            null != i.states[document.readyState] &&
              (i.progress = i.states[document.readyState]),
            "function" == typeof t ? t.apply(null, arguments) : void 0
          );
        });
    }
    function Q(t) {
      (this.selector = t), (this.progress = 0), this.check();
    }
    function Z() {
      var t = this;
      (this.elements = []),
        p().on("request", function () {
          return t.watch.apply(t, arguments);
        });
    }
    function J() {
      var e,
        r = this;
      J.__super__.constructor.apply(this, arguments),
        (e = function (n) {
          var o = n.open;
          return (n.open = function (t, e, i) {
            return (
              A(t) && r.trigger("request", { type: t, url: e, request: n }),
              o.apply(n, arguments)
            );
          });
        }),
        (window.XMLHttpRequest = function (t) {
          t = new O(t);
          return e(t), t;
        });
      try {
        s(window.XMLHttpRequest, O);
      } catch (t) {}
      if (null != I) {
        window.XDomainRequest = function () {
          var t = new I();
          return e(t), t;
        };
        try {
          s(window.XDomainRequest, I);
        } catch (t) {}
      }
      if (null != E && _.ajax.trackWebSockets) {
        window.WebSocket = function (t, e) {
          var i = null != e ? new E(t, e) : new E(t);
          return (
            A("socket") &&
              r.trigger("request", {
                type: "socket",
                url: t,
                protocols: e,
                request: i,
              }),
            i
          );
        };
        try {
          s(window.WebSocket, E);
        } catch (t) {}
      }
    }
    function tt() {
      this.bindings = {};
    }
    function et() {
      this.progress = 0;
    }
    function it() {
      return it.__super__.constructor.apply(this, arguments);
    }
    (z = Error),
      F(it, z),
      (e = it),
      (et.prototype.getElement = function () {
        var t;
        if (null == this.el) {
          if (!(t = document.querySelector(_.target))) throw new e();
          (this.el = document.createElement("div")),
            (this.el.className = "pace pace-active"),
            (document.body.className = document.body.className.replace(
              /pace-done/g,
              ""
            )),
            (document.body.className += " pace-running"),
            (this.el.innerHTML =
              '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
            null != t.firstChild
              ? t.insertBefore(this.el, t.firstChild)
              : t.appendChild(this.el);
        }
        return this.el;
      }),
      (et.prototype.finish = function () {
        var t = this.getElement();
        return (
          (t.className = t.className.replace("pace-active", "")),
          (t.className += " pace-inactive"),
          (document.body.className = document.body.className.replace(
            "pace-running",
            ""
          )),
          (document.body.className += " pace-done")
        );
      }),
      (et.prototype.update = function (t) {
        return (this.progress = t), this.render();
      }),
      (et.prototype.destroy = function () {
        try {
          this.getElement().parentNode.removeChild(this.getElement());
        } catch (t) {
          e = t;
        }
        return (this.el = void 0);
      }),
      (et.prototype.render = function () {
        var t, e, i, n, o, r;
        if (null == document.querySelector(_.target)) return !1;
        for (
          t = this.getElement(),
            i = "translate3d(" + this.progress + "%, 0, 0)",
            n = 0,
            o = (r = ["webkitTransform", "msTransform", "transform"]).length;
          n < o;
          n++
        )
          t.children[0].style[r[n]] = i;
        return (
          (!this.lastRenderedProgress ||
            this.lastRenderedProgress | (0 !== this.progress) | 0) &&
            (t.children[0].setAttribute(
              "data-progress-text",
              (0 | this.progress) + "%"
            ),
            100 <= this.progress
              ? (e = "99")
              : ((e = this.progress < 10 ? "0" : ""), (e += 0 | this.progress)),
            t.children[0].setAttribute("data-progress", "" + e)),
          (this.lastRenderedProgress = this.progress)
        );
      }),
      (et.prototype.done = function () {
        return 100 <= this.progress;
      }),
      (c = et),
      (tt.prototype.trigger = function (t, e) {
        var i, n, o, r, s;
        if (null != this.bindings[t]) {
          for (s = [], n = 0, o = (r = this.bindings[t]).length; n < o; n++)
            (i = r[n]), s.push(i.call(this, e));
          return s;
        }
      }),
      (tt.prototype.on = function (t, e) {
        var i;
        return (
          null == (i = this.bindings)[t] && (i[t] = []),
          this.bindings[t].push(e)
        );
      }),
      (d = tt),
      (O = window.XMLHttpRequest),
      (I = window.XDomainRequest),
      (E = window.WebSocket),
      (s = function (t, e) {
        var i,
          n = [];
        for (i in e.prototype)
          try {
            null == t[i] && "function" != typeof e[i]
              ? "function" == typeof Object.defineProperty
                ? n.push(
                    Object.defineProperty(t, i, {
                      get: function () {
                        return e.prototype[i];
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  )
                : n.push((t[i] = e.prototype[i]))
              : n.push(void 0);
          } catch (t) {
            0;
          }
        return n;
      }),
      (m = []),
      (g.ignore = function () {
        var t = arguments[0],
          e = 2 <= arguments.length ? N.call(arguments, 1) : [];
        return m.unshift("ignore"), (e = t.apply(null, e)), m.shift(), e;
      }),
      (g.track = function () {
        var t = arguments[0],
          e = 2 <= arguments.length ? N.call(arguments, 1) : [];
        return m.unshift("track"), (e = t.apply(null, e)), m.shift(), e;
      }),
      (A = function (t) {
        if ((null == t && (t = "GET"), "track" === m[0])) return "force";
        if (!m.length && _.ajax) {
          if ("socket" === t && _.ajax.trackWebSockets) return !0;
          if (((t = t.toUpperCase()), 0 <= W.call(_.ajax.trackMethods, t)))
            return !0;
        }
        return !1;
      }),
      F(J, d),
      (t = J),
      (G = null),
      (x = function (t) {
        for (var e, i = _.ajax.ignoreURLs, n = 0, o = i.length; n < o; n++)
          if ("string" == typeof (e = i[n])) {
            if (-1 !== t.indexOf(e)) return !0;
          } else if (e.test(t)) return !0;
        return !1;
      }),
      (p = function () {
        return (G = null == G ? new t() : G);
      })().on("request", function (t) {
        var r,
          s = t.type,
          a = t.request,
          t = t.url;
        return x(t) ||
          g.running ||
          (!1 === _.restartOnRequestAfter && "force" !== A(s))
          ? void 0
          : ((r = arguments),
            "boolean" == typeof (t = _.restartOnRequestAfter || 0) && (t = 0),
            setTimeout(function () {
              var t, e, i, n, o;
              if (
                "socket" === s
                  ? a.readyState < 2
                  : 0 < (i = a.readyState) && i < 4
              ) {
                for (
                  g.restart(), o = [], t = 0, e = (n = g.sources).length;
                  t < e;
                  t++
                ) {
                  if ((M = n[t]) instanceof l) {
                    M.watch.apply(M, r);
                    break;
                  }
                  o.push(void 0);
                }
                return o;
              }
            }, t));
      }),
      (Z.prototype.watch = function (t) {
        var e = t.type,
          i = t.request,
          t = t.url;
        return x(t)
          ? void 0
          : ((i = new ("socket" === e ? n : o)(i)), this.elements.push(i));
      }),
      (l = Z),
      (o = function (e) {
        var t,
          i,
          n,
          o,
          r = this;
        if (((this.progress = 0), null != window.ProgressEvent))
          for (
            e.addEventListener(
              "progress",
              function (t) {
                return t.lengthComputable
                  ? (r.progress = (100 * t.loaded) / t.total)
                  : (r.progress = r.progress + (100 - r.progress) / 2);
              },
              !1
            ),
              t = 0,
              i = (o = ["load", "abort", "timeout", "error"]).length;
            t < i;
            t++
          )
            e.addEventListener(
              o[t],
              function () {
                return (r.progress = 100);
              },
              !1
            );
        else
          (n = e.onreadystatechange),
            (e.onreadystatechange = function () {
              var t;
              return (
                0 === (t = e.readyState) || 4 === t
                  ? (r.progress = 100)
                  : 3 === e.readyState && (r.progress = 50),
                "function" == typeof n ? n.apply(null, arguments) : void 0
              );
            });
      }),
      (n = function (t) {
        for (
          var e,
            i = this,
            n = (this.progress = 0),
            o = (e = ["error", "open"]).length;
          n < o;
          n++
        )
          t.addEventListener(
            e[n],
            function () {
              return (i.progress = 100);
            },
            !1
          );
      }),
      (z = function (t) {
        var e, i, n, o;
        for (
          null == t && (t = {}),
            this.elements = [],
            null == t.selectors && (t.selectors = []),
            i = 0,
            n = (o = t.selectors).length;
          i < n;
          i++
        )
          (e = o[i]), this.elements.push(new r(e));
      }),
      (Q.prototype.check = function () {
        var t = this;
        return document.querySelector(this.selector)
          ? this.done()
          : setTimeout(function () {
              return t.check();
            }, _.elements.checkInterval);
      }),
      (Q.prototype.done = function () {
        return (this.progress = 100);
      }),
      (r = Q),
      (K.prototype.states = { loading: 0, interactive: 50, complete: 100 }),
      (F = K),
      (d = function () {
        var e,
          i,
          n,
          o,
          r,
          s = this;
        (this.progress = 0),
          (r = []),
          (o = 0),
          (n = j()),
          (i = setInterval(function () {
            var t = j() - n - 50;
            return (
              (n = j()),
              r.push(t),
              r.length > _.eventLag.sampleCount && r.shift(),
              (e = a(r)),
              ++o >= _.eventLag.minSamples && e < _.eventLag.lagThreshold
                ? ((s.progress = 100), clearInterval(i))
                : (s.progress = (3 / (e + 3)) * 100)
            );
          }, 50));
      }),
      (q.prototype.tick = function (t, e) {
        return (
          100 <= (e = null == e ? S(this.source, "progress") : e) &&
            (this.done = !0),
          e === this.last
            ? (this.sinceLastUpdate += t)
            : (this.sinceLastUpdate &&
                (this.rate = (e - this.last) / this.sinceLastUpdate),
              (this.catchup = (e - this.progress) / _.catchupTime),
              (this.sinceLastUpdate = 0),
              (this.last = e)),
          e > this.progress && (this.progress += this.catchup * t),
          (e = 1 - Math.pow(this.progress / 100, _.easeFactor)),
          (this.progress += e * this.rate * t),
          (this.progress = Math.min(
            this.lastProgress + _.maxProgressPerFrame,
            this.progress
          )),
          (this.progress = Math.max(0, this.progress)),
          (this.progress = Math.min(100, this.progress)),
          (this.lastProgress = this.progress),
          this.progress
        );
      }),
      (y = q),
      (T = i = k = v = P = C = null),
      (g.running = !1),
      (f = function () {
        return _.restartOnPushState ? g.restart() : void 0;
      }),
      null != window.history.pushState &&
        ((B = window.history.pushState),
        (window.history.pushState = function () {
          return f(), B.apply(window.history, arguments);
        })),
      null != window.history.replaceState &&
        ((R = window.history.replaceState),
        (window.history.replaceState = function () {
          return f(), R.apply(window.history, arguments);
        })),
      (u = { ajax: l, elements: z, document: F, eventLag: d }),
      (b = function () {
        var t, e, i, n, o, r, s, a;
        for (
          g.sources = C = [],
            e = 0,
            n = (r = ["ajax", "elements", "document", "eventLag"]).length;
          e < n;
          e++
        )
          !1 !== _[(t = r[e])] && C.push(new u[t](_[t]));
        for (
          i = 0, o = (a = null != (s = _.extraSources) ? s : []).length;
          i < o;
          i++
        )
          (M = a[i]), C.push(new M(_));
        return (g.bar = v = new c()), (P = []), (k = new y());
      })(),
      (g.stop = function () {
        return (
          g.trigger("stop"),
          (g.running = !1),
          v.destroy(),
          (T = !0),
          null != i && ("function" == typeof Y && Y(i), (i = null)),
          b()
        );
      }),
      (g.restart = function () {
        return g.trigger("restart"), g.stop(), g.start();
      }),
      (g.go = function () {
        var m;
        return (
          (g.running = !0),
          v.render(),
          (m = j()),
          (T = !1),
          (i = w(function (t, e) {
            v.progress;
            for (
              var i,
                n,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                h = (s = 0),
                d = !0,
                p = (a = 0),
                f = C.length;
              a < f;
              p = ++a
            )
              for (
                M = C[p],
                  r = null != P[p] ? P[p] : (P[p] = []),
                  n = l = 0,
                  c = (i = null != (u = M.elements) ? u : [M]).length;
                l < c;
                n = ++l
              )
                (o = i[n]),
                  (d &= (o = null != r[n] ? r[n] : (r[n] = new y(o))).done),
                  o.done || (h++, (s += o.tick(t)));
            return (
              v.update(k.tick(t, s / h)),
              v.done() || d || T
                ? (v.update(100),
                  g.trigger("done"),
                  setTimeout(function () {
                    return v.finish(), (g.running = !1), g.trigger("hide");
                  }, Math.max(_.ghostTime, Math.max(_.minTime - (j() - m), 0))))
                : e()
            );
          }))
        );
      }),
      (g.start = function (t) {
        h(_, t), (g.running = !0);
        try {
          v.render();
        } catch (t) {
          e = t;
        }
        return document.querySelector(".pace")
          ? (g.trigger("start"), g.go())
          : setTimeout(g.start, 50);
      }),
      "function" == typeof define && define.amd
        ? define(["pace"], function () {
            return g;
          })
        : "object" == typeof exports
        ? (module.exports = g)
        : _.startOnPageLoad && g.start();
  }.call(this),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("packery/js/rect", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Packery = t.Packery || {}), (t.Packery.Rect = e()));
  })(window, function () {
    function a(t) {
      for (var e in a.defaults) this[e] = a.defaults[e];
      for (e in t) this[e] = t[e];
    }
    a.defaults = { x: 0, y: 0, width: 0, height: 0 };
    var t = a.prototype;
    return (
      (t.contains = function (t) {
        var e = t.width || 0,
          i = t.height || 0;
        return (
          this.x <= t.x &&
          this.y <= t.y &&
          this.x + this.width >= t.x + e &&
          this.y + this.height >= t.y + i
        );
      }),
      (t.overlaps = function (t) {
        var e = this.x + this.width,
          i = this.y + this.height,
          n = t.x + t.width,
          o = t.y + t.height;
        return this.x < n && e > t.x && this.y < o && i > t.y;
      }),
      (t.getMaximalFreeRects = function (t) {
        if (!this.overlaps(t)) return !1;
        var e,
          i = [],
          n = this.x + this.width,
          o = this.y + this.height,
          r = t.x + t.width,
          s = t.y + t.height;
        return (
          this.y < t.y &&
            ((e = new a({
              x: this.x,
              y: this.y,
              width: this.width,
              height: t.y - this.y,
            })),
            i.push(e)),
          r < n &&
            ((e = new a({
              x: r,
              y: this.y,
              width: n - r,
              height: this.height,
            })),
            i.push(e)),
          s < o &&
            ((e = new a({ x: this.x, y: s, width: this.width, height: o - s })),
            i.push(e)),
          this.x < t.x &&
            ((e = new a({
              x: this.x,
              y: this.y,
              width: t.x - this.x,
              height: this.height,
            })),
            i.push(e)),
          i
        );
      }),
      (t.canFit = function (t) {
        return this.width >= t.width && this.height >= t.height;
      }),
      a
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("packery/js/packer", ["./rect"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("./rect")))
      : ((t = t.Packery = t.Packery || {}).Packer = e(t.Rect));
  })(window, function (e) {
    function t(t, e, i) {
      (this.width = t || 0),
        (this.height = e || 0),
        (this.sortDirection = i || "downwardLeftToRight"),
        this.reset();
    }
    var i = t.prototype;
    (i.reset = function () {
      this.spaces = [];
      var t = new e({ x: 0, y: 0, width: this.width, height: this.height });
      this.spaces.push(t),
        (this.sorter = n[this.sortDirection] || n.downwardLeftToRight);
    }),
      (i.pack = function (t) {
        for (var e = 0; e < this.spaces.length; e++) {
          var i = this.spaces[e];
          if (i.canFit(t)) {
            this.placeInSpace(t, i);
            break;
          }
        }
      }),
      (i.columnPack = function (t) {
        for (var e = 0; e < this.spaces.length; e++) {
          var i = this.spaces[e];
          if (
            i.x <= t.x &&
            i.x + i.width >= t.x + t.width &&
            i.height >= t.height - 0.01
          ) {
            (t.y = i.y), this.placed(t);
            break;
          }
        }
      }),
      (i.rowPack = function (t) {
        for (var e = 0; e < this.spaces.length; e++) {
          var i = this.spaces[e];
          if (
            i.y <= t.y &&
            i.y + i.height >= t.y + t.height &&
            i.width >= t.width - 0.01
          ) {
            (t.x = i.x), this.placed(t);
            break;
          }
        }
      }),
      (i.placeInSpace = function (t, e) {
        (t.x = e.x), (t.y = e.y), this.placed(t);
      }),
      (i.placed = function (t) {
        for (var e = [], i = 0; i < this.spaces.length; i++) {
          var n = this.spaces[i],
            o = n.getMaximalFreeRects(t);
          o ? e.push.apply(e, o) : e.push(n);
        }
        (this.spaces = e), this.mergeSortSpaces();
      }),
      (i.mergeSortSpaces = function () {
        t.mergeRects(this.spaces), this.spaces.sort(this.sorter);
      }),
      (i.addSpace = function (t) {
        this.spaces.push(t), this.mergeSortSpaces();
      }),
      (t.mergeRects = function (t) {
        var e = 0,
          i = t[e];
        t: for (; i; ) {
          for (var n = 0, o = t[e + n]; o; ) {
            if (o == i) n++;
            else {
              if (o.contains(i)) {
                t.splice(e, 1), (i = t[e]);
                continue t;
              }
              i.contains(o) ? t.splice(e + n, 1) : n++;
            }
            o = t[e + n];
          }
          i = t[++e];
        }
        return t;
      });
    var n = {
      downwardLeftToRight: function (t, e) {
        return t.y - e.y || t.x - e.x;
      },
      rightwardTopToBottom: function (t, e) {
        return t.x - e.x || t.y - e.y;
      },
    };
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("./rect")))
      : (t.Packery.Item = e(t.Outlayer, t.Packery.Rect));
  })(window, function (t, e) {
    function i() {
      t.Item.apply(this, arguments);
    }
    var n =
        "string" == typeof document.documentElement.style.transform
          ? "transform"
          : "WebkitTransform",
      o = (i.prototype = Object.create(t.Item.prototype)),
      r = o._create;
    o._create = function () {
      r.call(this), (this.rect = new e());
    };
    var s = o.moveTo;
    return (
      (o.moveTo = function (t, e) {
        var i = Math.abs(this.position.x - t),
          n = Math.abs(this.position.y - e);
        this.layout.dragItemCount &&
        !this.isPlacing &&
        !this.isTransitioning &&
        i < 1 &&
        n < 1
          ? this.goTo(t, e)
          : s.apply(this, arguments);
      }),
      (o.enablePlacing = function () {
        this.removeTransitionStyles(),
          this.isTransitioning && n && (this.element.style[n] = "none"),
          (this.isTransitioning = !1),
          this.getSize(),
          this.layout._setRectSize(this.element, this.rect),
          (this.isPlacing = !0);
      }),
      (o.disablePlacing = function () {
        this.isPlacing = !1;
      }),
      (o.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.layout.packer.addSpace(this.rect),
          this.emitEvent("remove", [this]);
      }),
      (o.showDropPlaceholder = function () {
        var t = this.dropPlaceholder;
        t ||
          (((t = this.dropPlaceholder =
            document.createElement("div")).className =
            "packery-drop-placeholder"),
          (t.style.position = "absolute")),
          (t.style.width = this.size.width + "px"),
          (t.style.height = this.size.height + "px"),
          this.positionDropPlaceholder(),
          this.layout.element.appendChild(t);
      }),
      (o.positionDropPlaceholder = function () {
        this.dropPlaceholder.style[n] =
          "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
      }),
      (o.hideDropPlaceholder = function () {
        this.layout.element.removeChild(this.dropPlaceholder);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "packery/js/packery",
          [
            "get-size/get-size",
            "outlayer/outlayer",
            "./rect",
            "./packer",
            "./item",
          ],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("get-size"),
          require("outlayer"),
          require("./rect"),
          require("./packer"),
          require("./item")
        ))
      : (t.Packery = e(
          t.getSize,
          t.Outlayer,
          t.Packery.Rect,
          t.Packery.Packer,
          t.Packery.Item
        ));
  })(window, function (c, t, s, e, i) {
    s.prototype.canFit = function (t) {
      return this.width >= t.width - 1 && this.height >= t.height - 1;
    };
    var n = t.create("packery");
    n.Item = i;
    i = n.prototype;
    function o(t, e) {
      return t.position.y - e.position.y || t.position.x - e.position.x;
    }
    function r(t, e) {
      return t.position.x - e.position.x || t.position.y - e.position.y;
    }
    (i._create = function () {
      t.prototype._create.call(this),
        (this.packer = new e()),
        (this.shiftPacker = new e()),
        (this.isEnabled = !0),
        (this.dragItemCount = 0);
      var i = this;
      (this.handleDraggabilly = {
        dragStart: function () {
          i.itemDragStart(this.element);
        },
        dragMove: function () {
          i.itemDragMove(this.element, this.position.x, this.position.y);
        },
        dragEnd: function () {
          i.itemDragEnd(this.element);
        },
      }),
        (this.handleUIDraggable = {
          start: function (t, e) {
            e && i.itemDragStart(t.currentTarget);
          },
          drag: function (t, e) {
            e &&
              i.itemDragMove(t.currentTarget, e.position.left, e.position.top);
          },
          stop: function (t, e) {
            e && i.itemDragEnd(t.currentTarget);
          },
        });
    }),
      (i._resetLayout = function () {
        var t, e, i;
        this.getSize(),
          this._getMeasurements(),
          (i = this._getOption("horizontal")
            ? ((t = 1 / 0),
              (e = this.size.innerHeight + this.gutter),
              "rightwardTopToBottom")
            : ((t = this.size.innerWidth + this.gutter),
              (e = 1 / 0),
              "downwardLeftToRight")),
          (this.packer.width = this.shiftPacker.width = t),
          (this.packer.height = this.shiftPacker.height = e),
          (this.packer.sortDirection = this.shiftPacker.sortDirection = i),
          this.packer.reset(),
          (this.maxY = 0),
          (this.maxX = 0);
      }),
      (i._getMeasurements = function () {
        this._getMeasurement("columnWidth", "width"),
          this._getMeasurement("rowHeight", "height"),
          this._getMeasurement("gutter", "width");
      }),
      (i._getItemLayoutPosition = function (t) {
        var e;
        return (
          this._setRectSize(t.element, t.rect),
          this.isShifting || 0 < this.dragItemCount
            ? ((e = this._getPackMethod()), this.packer[e](t.rect))
            : this.packer.pack(t.rect),
          this._setMaxXY(t.rect),
          t.rect
        );
      }),
      (i.shiftLayout = function () {
        (this.isShifting = !0), this.layout(), delete this.isShifting;
      }),
      (i._getPackMethod = function () {
        return this._getOption("horizontal") ? "rowPack" : "columnPack";
      }),
      (i._setMaxXY = function (t) {
        (this.maxX = Math.max(t.x + t.width, this.maxX)),
          (this.maxY = Math.max(t.y + t.height, this.maxY));
      }),
      (i._setRectSize = function (t, e) {
        var i = c(t),
          t = i.outerWidth,
          i = i.outerHeight;
        (t || i) &&
          ((t = this._applyGridGutter(t, this.columnWidth)),
          (i = this._applyGridGutter(i, this.rowHeight))),
          (e.width = Math.min(t, this.packer.width)),
          (e.height = Math.min(i, this.packer.height));
      }),
      (i._applyGridGutter = function (t, e) {
        if (!e) return t + this.gutter;
        var i = t % (e += this.gutter);
        return (t = Math[i && i < 1 ? "round" : "ceil"](t / e) * e);
      }),
      (i._getContainerSize = function () {
        return this._getOption("horizontal")
          ? { width: this.maxX - this.gutter }
          : { height: this.maxY - this.gutter };
      }),
      (i._manageStamp = function (t) {
        var e,
          i = this.getItem(t);
        (e =
          i && i.isPlacing
            ? i.rect
            : ((e = this._getElementOffset(t)),
              new s({
                x: this._getOption("originLeft") ? e.left : e.right,
                y: this._getOption("originTop") ? e.top : e.bottom,
              }))),
          this._setRectSize(t, e),
          this.packer.placed(e),
          this._setMaxXY(e);
      }),
      (i.sortItemsByPosition = function () {
        var t = this._getOption("horizontal") ? r : o;
        this.items.sort(t);
      }),
      (i.fit = function (t, e, i) {
        t = this.getItem(t);
        t &&
          (this.stamp(t.element),
          t.enablePlacing(),
          this.updateShiftTargets(t),
          (e = void 0 === e ? t.rect.x : e),
          (i = void 0 === i ? t.rect.y : i),
          this.shift(t, e, i),
          this._bindFitEvents(t),
          t.moveTo(t.rect.x, t.rect.y),
          this.shiftLayout(),
          this.unstamp(t.element),
          this.sortItemsByPosition(),
          t.disablePlacing());
      }),
      (i._bindFitEvents = function (t) {
        var e = this,
          i = 0;
        function n() {
          2 == ++i && e.dispatchEvent("fitComplete", null, [t]);
        }
        t.once("layout", n), this.once("layoutComplete", n);
      }),
      (i.resize = function () {
        this.isResizeBound &&
          this.needsResizeLayout() &&
          (this.options.shiftPercentResize
            ? this.resizeShiftPercentLayout()
            : this.layout());
      }),
      (i.needsResizeLayout = function () {
        var t = c(this.element),
          e = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return t[e] != this.size[e];
      }),
      (i.resizeShiftPercentLayout = function () {
        var i,
          e,
          n,
          t = this._getItemsForLayout(this.items),
          o = this._getOption("horizontal"),
          r = o ? "y" : "x",
          s = o ? "height" : "width",
          a = o ? "rowHeight" : "columnWidth",
          o = o ? "innerHeight" : "innerWidth",
          l = this[a];
        (l = l && l + this.gutter)
          ? (this._getMeasurements(),
            (i = this[a] + this.gutter),
            t.forEach(function (t) {
              var e = Math.round(t.rect[r] / l);
              t.rect[r] = e * i;
            }))
          : ((e = c(this.element)[o] + this.gutter),
            (n = this.packer[s]),
            t.forEach(function (t) {
              t.rect[r] = (t.rect[r] / n) * e;
            })),
          this.shiftLayout();
      }),
      (i.itemDragStart = function (t) {
        this.isEnabled &&
          (this.stamp(t),
          (t = this.getItem(t)) &&
            (t.enablePlacing(),
            t.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(t)));
      }),
      (i.updateShiftTargets = function (t) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var i = this._getOption("originLeft"),
          n = this._getOption("originTop");
        this.stamps.forEach(function (t) {
          var e = this.getItem(t);
          (e && e.isPlacing) ||
            ((e = this._getElementOffset(t)),
            (e = new s({ x: i ? e.left : e.right, y: n ? e.top : e.bottom })),
            this._setRectSize(t, e),
            this.shiftPacker.placed(e));
        }, this);
        var l = this._getOption("horizontal"),
          e = l ? "rowHeight" : "columnWidth",
          c = l ? "height" : "width";
        (this.shiftTargetKeys = []), (this.shiftTargets = []);
        var u = this[e];
        if ((u = u && u + this.gutter))
          for (
            var e = Math.ceil(t.rect[c] / u),
              o = Math.floor((this.shiftPacker[c] + this.gutter) / u),
              h = (o - e) * u,
              r = 0;
            r < o;
            r++
          )
            this._addShiftTarget(r * u, 0, h);
        else
          (h = this.shiftPacker[c] + this.gutter - t.rect[c]),
            this._addShiftTarget(0, 0, h);
        var t = this._getItemsForLayout(this.items),
          d = this._getPackMethod();
        t.forEach(function (t) {
          var e = t.rect;
          this._setRectSize(t.element, e),
            this.shiftPacker[d](e),
            this._addShiftTarget(e.x, e.y, h);
          var i = l ? e.x + e.width : e.x,
            n = l ? e.y : e.y + e.height;
          if ((this._addShiftTarget(i, n, h), u))
            for (var o = Math.round(e[c] / u), r = 1; r < o; r++) {
              var s = l ? i : e.x + u * r,
                a = l ? e.y + u * r : n;
              this._addShiftTarget(s, a, h);
            }
        }, this);
      }),
      (i._addShiftTarget = function (t, e, i) {
        var n = this._getOption("horizontal") ? e : t;
        (0 !== n && i < n) ||
          -1 != this.shiftTargetKeys.indexOf((n = t + "," + e)) ||
          (this.shiftTargetKeys.push(n),
          this.shiftTargets.push({ x: t, y: e }));
      }),
      (i.shift = function (t, e, i) {
        var o,
          r = 1 / 0,
          s = { x: e, y: i };
        this.shiftTargets.forEach(function (t) {
          var e,
            i,
            n,
            e =
              ((n = (i = s).x - (e = t).x),
              (e = i.y - e.y),
              Math.sqrt(n * n + e * e));
          e < r && ((o = t), (r = e));
        }),
          (t.rect.x = o.x),
          (t.rect.y = o.y);
      });
    (i.itemDragMove = function (t, e, i) {
      var n,
        o = this.isEnabled && this.getItem(t);
      function r() {
        n.shift(o, e, i), o.positionDropPlaceholder(), n.layout();
      }
      o &&
        ((e -= this.size.paddingLeft),
        (i -= this.size.paddingTop),
        (n = this),
        (t = new Date()),
        this._itemDragTime && t - this._itemDragTime < 120
          ? (clearTimeout(this.dragTimeout),
            (this.dragTimeout = setTimeout(r, 120)))
          : (r(), (this._itemDragTime = t)));
    }),
      (i.itemDragEnd = function (t) {
        var e,
          i,
          n = this.isEnabled && this.getItem(t);
        function o() {
          2 == ++e &&
            (n.element.classList.remove("is-positioning-post-drag"),
            n.hideDropPlaceholder(),
            i.dispatchEvent("dragItemPositioned", null, [n]));
        }
        n &&
          (clearTimeout(this.dragTimeout),
          n.element.classList.add("is-positioning-post-drag"),
          (e = 0),
          (i = this),
          n.once("layout", o),
          this.once("layoutComplete", o),
          n.moveTo(n.rect.x, n.rect.y),
          this.layout(),
          (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
          this.sortItemsByPosition(),
          n.disablePlacing(),
          this.unstamp(n.element));
      }),
      (i.bindDraggabillyEvents = function (t) {
        this._bindDraggabillyEvents(t, "on");
      }),
      (i.unbindDraggabillyEvents = function (t) {
        this._bindDraggabillyEvents(t, "off");
      }),
      (i._bindDraggabillyEvents = function (t, e) {
        var i = this.handleDraggabilly;
        t[e]("dragStart", i.dragStart),
          t[e]("dragMove", i.dragMove),
          t[e]("dragEnd", i.dragEnd);
      }),
      (i.bindUIDraggableEvents = function (t) {
        this._bindUIDraggableEvents(t, "on");
      }),
      (i.unbindUIDraggableEvents = function (t) {
        this._bindUIDraggableEvents(t, "off");
      }),
      (i._bindUIDraggableEvents = function (t, e) {
        var i = this.handleUIDraggable;
        t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop);
      });
    var a = i.destroy;
    return (
      (i.destroy = function () {
        a.apply(this, arguments), (this.isEnabled = !1);
      }),
      (n.Rect = s),
      (n.Packer = e),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("isotope-layout/js/layout-mode"),
          require("packery")
        ))
      : e(t.Isotope.LayoutMode, t.Packery);
  })(window, function (t, e) {
    var i,
      t = t.create("packery"),
      n = t.prototype,
      o = { _getElementOffset: !0, _getMeasurement: !0 };
    for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);
    var r = n._resetLayout;
    n._resetLayout = function () {
      (this.packer = this.packer || new e.Packer()),
        (this.shiftPacker = this.shiftPacker || new e.Packer()),
        r.apply(this, arguments);
    };
    var s = n._getItemLayoutPosition;
    n._getItemLayoutPosition = function (t) {
      return (t.rect = t.rect || new e.Rect()), s.call(this, t);
    };
    var a = n.needsResizeLayout;
    n.needsResizeLayout = function () {
      return this._getOption("horizontal")
        ? this.needsVerticalResizeLayout()
        : a.call(this);
    };
    var l = n._getOption;
    return (
      (n._getOption = function (t) {
        return "horizontal" == t
          ? void 0 !== this.options.isHorizontal
            ? this.options.isHorizontal
            : this.options.horizontal
          : l.apply(this.isotope, arguments);
      }),
      t
    );
  }),
  (function n(o, r, s) {
    function a(i, t) {
      if (!r[i]) {
        if (!o[i]) {
          var e = "function" == typeof require && require;
          if (!t && e) return e(i, !0);
          if (l) return l(i, !0);
          e = new Error("Cannot find module '" + i + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        e = r[i] = { exports: {} };
        o[i][0].call(
          e.exports,
          function (t) {
            var e = o[i][1][t];
            return a(e || t);
          },
          e,
          e.exports,
          n,
          o,
          r,
          s
        );
      }
      return r[i].exports;
    }
    for (
      var l = "function" == typeof require && require, t = 0;
      t < s.length;
      t++
    )
      a(s[t]);
    return a;
  })(
    {
      1: [
        function (t, e, i) {
          function n(t) {
            t.fn.perfectScrollbar = function (e) {
              return this.each(function () {
                var t;
                "object" == typeof e || void 0 === e
                  ? ((t = e), r.get(this) || o.initialize(this, t))
                  : "update" === (t = e)
                  ? o.update(this)
                  : "destroy" === t && o.destroy(this);
              });
            };
          }
          var o = t("../main"),
            r = t("../plugin/instances");
          "function" == typeof define && define.amd
            ? define(["jquery"], n)
            : void 0 !== (t = window.jQuery || window.$) && n(t),
            (e.exports = n);
        },
        { "../main": 7, "../plugin/instances": 18 },
      ],
      2: [
        function (t, e, i) {
          (i.add = function (t, e) {
            var i;
            t.classList
              ? t.classList.add(e)
              : ((i = e),
                (t = (e = t).className.split(" ")).indexOf(i) < 0 && t.push(i),
                (e.className = t.join(" ")));
          }),
            (i.remove = function (t, e) {
              var i;
              t.classList
                ? t.classList.remove(e)
                : ((i = e),
                  (t = (e = t).className.split(" ")),
                  0 <= (i = t.indexOf(i)) && t.splice(i, 1),
                  (e.className = t.join(" ")));
            }),
            (i.list = function (t) {
              return t.classList
                ? Array.prototype.slice.apply(t.classList)
                : t.className.split(" ");
            });
        },
        {},
      ],
      3: [
        function (t, e, i) {
          var n = {
            e: function (t, e) {
              t = document.createElement(t);
              return (t.className = e), t;
            },
            appendTo: function (t, e) {
              return e.appendChild(t), t;
            },
          };
          (n.css = function (t, e, i) {
            return "object" == typeof e
              ? (function (t, e) {
                  for (var i in e) {
                    var n = e[i];
                    "number" == typeof n && (n = n.toString() + "px"),
                      (t.style[i] = n);
                  }
                  return t;
                })(t, e)
              : void 0 === i
              ? ((n = t), (o = e), window.getComputedStyle(n)[o])
              : ((t = t),
                (e = e),
                "number" == typeof (i = i) && (i = i.toString() + "px"),
                (t.style[e] = i),
                t);
            var n, o;
          }),
            (n.matches = function (t, e) {
              return void 0 !== t.matches
                ? t.matches(e)
                : void 0 !== t.matchesSelector
                ? t.matchesSelector(e)
                : void 0 !== t.webkitMatchesSelector
                ? t.webkitMatchesSelector(e)
                : void 0 !== t.mozMatchesSelector
                ? t.mozMatchesSelector(e)
                : void 0 !== t.msMatchesSelector
                ? t.msMatchesSelector(e)
                : void 0;
            }),
            (n.remove = function (t) {
              void 0 !== t.remove
                ? t.remove()
                : t.parentNode && t.parentNode.removeChild(t);
            }),
            (n.queryChildren = function (t, e) {
              return Array.prototype.filter.call(t.childNodes, function (t) {
                return n.matches(t, e);
              });
            }),
            (e.exports = n);
        },
        {},
      ],
      4: [
        function (t, e, i) {
          function n(t) {
            (this.element = t), (this.events = {});
          }
          (n.prototype.bind = function (t, e) {
            void 0 === this.events[t] && (this.events[t] = []),
              this.events[t].push(e),
              this.element.addEventListener(t, e, !1);
          }),
            (n.prototype.unbind = function (e, i) {
              var n = void 0 !== i;
              this.events[e] = this.events[e].filter(function (t) {
                return (
                  !(!n || t === i) ||
                  (this.element.removeEventListener(e, t, !1), !1)
                );
              }, this);
            }),
            (n.prototype.unbindAll = function () {
              for (var t in this.events) this.unbind(t);
            });
          function o() {
            this.eventElements = [];
          }
          (o.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
              return t.element === e;
            })[0];
            return (
              void 0 === t && ((t = new n(e)), this.eventElements.push(t)), t
            );
          }),
            (o.prototype.bind = function (t, e, i) {
              this.eventElement(t).bind(e, i);
            }),
            (o.prototype.unbind = function (t, e, i) {
              this.eventElement(t).unbind(e, i);
            }),
            (o.prototype.unbindAll = function () {
              for (var t = 0; t < this.eventElements.length; t++)
                this.eventElements[t].unbindAll();
            }),
            (o.prototype.once = function (t, e, i) {
              var n = this.eventElement(t),
                o = function (t) {
                  n.unbind(e, o), i(t);
                };
              n.bind(e, o);
            }),
            (e.exports = o);
        },
        {},
      ],
      5: [
        function (t, e, i) {
          function n() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          e.exports = function () {
            return (
              n() +
              n() +
              "-" +
              n() +
              "-" +
              n() +
              "-" +
              n() +
              "-" +
              n() +
              n() +
              n()
            );
          };
        },
        {},
      ],
      6: [
        function (t, e, i) {
          function n(i) {
            return function (t, e) {
              i(t, "ps--in-scrolling"),
                void 0 !== e
                  ? i(t, "ps--" + e)
                  : (i(t, "ps--x"), i(t, "ps--y"));
            };
          }
          var o = t("./class"),
            r = t("./dom"),
            s = (i.toInt = function (t) {
              return parseInt(t, 10) || 0;
            }),
            a = (i.clone = function (t) {
              if (t) {
                if (Array.isArray(t)) return t.map(a);
                if ("object" != typeof t) return t;
                var e,
                  i = {};
                for (e in t) i[e] = a(t[e]);
                return i;
              }
              return null;
            });
          (i.extend = function (t, e) {
            var i,
              n = a(t);
            for (i in e) n[i] = a(e[i]);
            return n;
          }),
            (i.isEditable = function (t) {
              return (
                r.matches(t, "input,[contenteditable]") ||
                r.matches(t, "select,[contenteditable]") ||
                r.matches(t, "textarea,[contenteditable]") ||
                r.matches(t, "button,[contenteditable]")
              );
            }),
            (i.removePsClasses = function (t) {
              for (var e = o.list(t), i = 0; i < e.length; i++) {
                var n = e[i];
                0 === n.indexOf("ps-") && o.remove(t, n);
              }
            }),
            (i.outerWidth = function (t) {
              return (
                s(r.css(t, "width")) +
                s(r.css(t, "paddingLeft")) +
                s(r.css(t, "paddingRight")) +
                s(r.css(t, "borderLeftWidth")) +
                s(r.css(t, "borderRightWidth"))
              );
            }),
            (i.startScrolling = n(o.add)),
            (i.stopScrolling = n(o.remove)),
            (i.env = {
              isWebKit:
                "undefined" != typeof document &&
                "WebkitAppearance" in document.documentElement.style,
              supportsTouch:
                "undefined" != typeof window &&
                ("ontouchstart" in window ||
                  (window.DocumentTouch &&
                    document instanceof window.DocumentTouch)),
              supportsIePointer:
                "undefined" != typeof window &&
                null !== window.navigator.msMaxTouchPoints,
            });
        },
        { "./class": 2, "./dom": 3 },
      ],
      7: [
        function (t, e, i) {
          var n = t("./plugin/destroy"),
            o = t("./plugin/initialize"),
            t = t("./plugin/update");
          e.exports = { initialize: o, update: t, destroy: n };
        },
        {
          "./plugin/destroy": 9,
          "./plugin/initialize": 17,
          "./plugin/update": 21,
        },
      ],
      8: [
        function (t, e, i) {
          e.exports = {
            handlers: [
              "click-rail",
              "drag-scrollbar",
              "keyboard",
              "wheel",
              "touch",
            ],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default",
          };
        },
        {},
      ],
      9: [
        function (t, e, i) {
          var n = t("../lib/helper"),
            o = t("../lib/dom"),
            r = t("./instances");
          e.exports = function (t) {
            var e = r.get(t);
            e &&
              (e.event.unbindAll(),
              o.remove(e.scrollbarX),
              o.remove(e.scrollbarY),
              o.remove(e.scrollbarXRail),
              o.remove(e.scrollbarYRail),
              n.removePsClasses(t),
              r.remove(t));
          };
        },
        { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
      ],
      10: [
        function (t, e, i) {
          function n(i, n) {
            function o(t) {
              return t.getBoundingClientRect();
            }
            function t(t) {
              t.stopPropagation();
            }
            n.event.bind(n.scrollbarY, "click", t),
              n.event.bind(n.scrollbarYRail, "click", function (t) {
                var e =
                  t.pageY - window.pageYOffset - o(n.scrollbarYRail).top >
                  n.scrollbarYTop
                    ? 1
                    : -1;
                s(i, "top", i.scrollTop + e * n.containerHeight),
                  r(i),
                  t.stopPropagation();
              }),
              n.event.bind(n.scrollbarX, "click", t),
              n.event.bind(n.scrollbarXRail, "click", function (t) {
                var e =
                  t.pageX - window.pageXOffset - o(n.scrollbarXRail).left >
                  n.scrollbarXLeft
                    ? 1
                    : -1;
                s(i, "left", i.scrollLeft + e * n.containerWidth),
                  r(i),
                  t.stopPropagation();
              });
          }
          var o = t("../instances"),
            r = t("../update-geometry"),
            s = t("../update-scroll");
          e.exports = function (t) {
            n(t, o.get(t));
          };
        },
        {
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      11: [
        function (t, e, i) {
          function n(n, o) {
            function e(t) {
              var e, i;
              (e = t.pageX - s),
                (i = r + e * o.railXRatio),
                (e =
                  Math.max(0, o.scrollbarXRail.getBoundingClientRect().left) +
                  o.railXRatio * (o.railXWidth - o.scrollbarXWidth)),
                (o.scrollbarXLeft = i < 0 ? 0 : e < i ? e : i),
                (i =
                  a.toInt(
                    (o.scrollbarXLeft * (o.contentWidth - o.containerWidth)) /
                      (o.containerWidth - o.railXRatio * o.scrollbarXWidth)
                  ) - o.negativeScrollAdjustment),
                u(n, "left", i),
                c(n),
                t.stopPropagation(),
                t.preventDefault();
            }
            function i() {
              a.stopScrolling(n, "x"),
                o.event.unbind(o.ownerDocument, "mousemove", e);
            }
            var r = null,
              s = null;
            o.event.bind(o.scrollbarX, "mousedown", function (t) {
              (s = t.pageX),
                (r = a.toInt(l.css(o.scrollbarX, "left")) * o.railXRatio),
                a.startScrolling(n, "x"),
                o.event.bind(o.ownerDocument, "mousemove", e),
                o.event.once(o.ownerDocument, "mouseup", i),
                t.stopPropagation(),
                t.preventDefault();
            });
          }
          function o(n, o) {
            function e(t) {
              var e, i;
              (e = t.pageY - s),
                (i = r + e * o.railYRatio),
                (e =
                  Math.max(0, o.scrollbarYRail.getBoundingClientRect().top) +
                  o.railYRatio * (o.railYHeight - o.scrollbarYHeight)),
                (o.scrollbarYTop = i < 0 ? 0 : e < i ? e : i),
                (i = a.toInt(
                  (o.scrollbarYTop * (o.contentHeight - o.containerHeight)) /
                    (o.containerHeight - o.railYRatio * o.scrollbarYHeight)
                )),
                u(n, "top", i),
                c(n),
                t.stopPropagation(),
                t.preventDefault();
            }
            function i() {
              a.stopScrolling(n, "y"),
                o.event.unbind(o.ownerDocument, "mousemove", e);
            }
            var r = null,
              s = null;
            o.event.bind(o.scrollbarY, "mousedown", function (t) {
              (s = t.pageY),
                (r = a.toInt(l.css(o.scrollbarY, "top")) * o.railYRatio),
                a.startScrolling(n, "y"),
                o.event.bind(o.ownerDocument, "mousemove", e),
                o.event.once(o.ownerDocument, "mouseup", i),
                t.stopPropagation(),
                t.preventDefault();
            });
          }
          var a = t("../../lib/helper"),
            l = t("../../lib/dom"),
            r = t("../instances"),
            c = t("../update-geometry"),
            u = t("../update-scroll");
          e.exports = function (t) {
            var e = r.get(t);
            n(t, e), o(t, e);
          };
        },
        {
          "../../lib/dom": 3,
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      12: [
        function (t, e, i) {
          function n(r, s) {
            var a = !1;
            s.event.bind(r, "mouseenter", function () {
              a = !0;
            }),
              s.event.bind(r, "mouseleave", function () {
                a = !1;
              });
            s.event.bind(s.ownerDocument, "keydown", function (t) {
              if (
                !(
                  (t.isDefaultPrevented && t.isDefaultPrevented()) ||
                  t.defaultPrevented
                )
              ) {
                var e =
                  c.matches(s.scrollbarX, ":focus") ||
                  c.matches(s.scrollbarY, ":focus");
                if (a || e) {
                  var i =
                    document.activeElement || s.ownerDocument.activeElement;
                  if (i) {
                    if ("IFRAME" === i.tagName)
                      i = i.contentDocument.activeElement;
                    else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
                    if (l.isEditable(i)) return;
                  }
                  var n = 0,
                    o = 0;
                  switch (t.which) {
                    case 37:
                      n = t.metaKey
                        ? -s.contentWidth
                        : t.altKey
                        ? -s.containerWidth
                        : -30;
                      break;
                    case 38:
                      o = t.metaKey
                        ? s.contentHeight
                        : t.altKey
                        ? s.containerHeight
                        : 30;
                      break;
                    case 39:
                      n = t.metaKey
                        ? s.contentWidth
                        : t.altKey
                        ? s.containerWidth
                        : 30;
                      break;
                    case 40:
                      o = t.metaKey
                        ? -s.contentHeight
                        : t.altKey
                        ? -s.containerHeight
                        : -30;
                      break;
                    case 33:
                      o = 90;
                      break;
                    case 32:
                      o = t.shiftKey ? 90 : -90;
                      break;
                    case 34:
                      o = -90;
                      break;
                    case 35:
                      o = t.ctrlKey ? -s.contentHeight : -s.containerHeight;
                      break;
                    case 36:
                      o = t.ctrlKey ? r.scrollTop : s.containerHeight;
                      break;
                    default:
                      return;
                  }
                  h(r, "top", r.scrollTop - o),
                    h(r, "left", r.scrollLeft + n),
                    u(r),
                    (function (t, e) {
                      var i = r.scrollTop;
                      if (0 === t) {
                        if (!s.scrollbarYActive) return !1;
                        if (
                          (0 === i && 0 < e) ||
                          (i >= s.contentHeight - s.containerHeight && e < 0)
                        )
                          return !s.settings.wheelPropagation;
                      }
                      if (((i = r.scrollLeft), 0 === e)) {
                        if (!s.scrollbarXActive) return !1;
                        if (
                          (0 === i && t < 0) ||
                          (i >= s.contentWidth - s.containerWidth && 0 < t)
                        )
                          return !s.settings.wheelPropagation;
                      }
                      return !0;
                    })(n, o) && t.preventDefault();
                }
              }
            });
          }
          var l = t("../../lib/helper"),
            c = t("../../lib/dom"),
            o = t("../instances"),
            u = t("../update-geometry"),
            h = t("../update-scroll");
          e.exports = function (t) {
            n(t, o.get(t));
          };
        },
        {
          "../../lib/dom": 3,
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      13: [
        function (t, e, i) {
          function n(o, r) {
            function t(t) {
              var e,
                i,
                n,
                i =
                  ((i = (e = t).deltaX),
                  (n = -1 * e.deltaY),
                  (void 0 !== i && void 0 !== n) ||
                    ((i = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                  e.deltaMode && 1 === e.deltaMode && ((i *= 10), (n *= 10)),
                  i != i && n != n && ((i = 0), (n = e.wheelDelta)),
                  e.shiftKey ? [-n, -i] : [i, n]),
                n = i[0],
                i = i[1];
              !(function (t, e) {
                var i = o.querySelector(
                  "textarea:hover, select[multiple]:hover, .ps-child:hover"
                );
                if (i) {
                  var n = window.getComputedStyle(i);
                  if (
                    ![n.overflow, n.overflowX, n.overflowY]
                      .join("")
                      .match(/(scroll|auto)/)
                  )
                    return;
                  n = i.scrollHeight - i.clientHeight;
                  if (
                    0 < n &&
                    !(
                      (0 === i.scrollTop && 0 < e) ||
                      (i.scrollTop === n && e < 0)
                    )
                  )
                    return 1;
                  e = i.scrollLeft - i.clientWidth;
                  if (
                    0 < e &&
                    !(
                      (0 === i.scrollLeft && t < 0) ||
                      (i.scrollLeft === e && 0 < t)
                    )
                  )
                    return 1;
                }
              })(n, i) &&
                ((s = !1),
                r.settings.useBothWheelAxes
                  ? r.scrollbarYActive && !r.scrollbarXActive
                    ? (l(
                        o,
                        "top",
                        i
                          ? o.scrollTop - i * r.settings.wheelSpeed
                          : o.scrollTop + n * r.settings.wheelSpeed
                      ),
                      (s = !0))
                    : r.scrollbarXActive &&
                      !r.scrollbarYActive &&
                      (l(
                        o,
                        "left",
                        n
                          ? o.scrollLeft + n * r.settings.wheelSpeed
                          : o.scrollLeft - i * r.settings.wheelSpeed
                      ),
                      (s = !0))
                  : (l(o, "top", o.scrollTop - i * r.settings.wheelSpeed),
                    l(o, "left", o.scrollLeft + n * r.settings.wheelSpeed)),
                a(o),
                (s =
                  s ||
                  (function (t, e) {
                    var i = o.scrollTop;
                    if (0 === t) {
                      if (!r.scrollbarYActive) return !1;
                      if (
                        (0 === i && 0 < e) ||
                        (i >= r.contentHeight - r.containerHeight && e < 0)
                      )
                        return !r.settings.wheelPropagation;
                    }
                    if (((i = o.scrollLeft), 0 === e)) {
                      if (!r.scrollbarXActive) return !1;
                      if (
                        (0 === i && t < 0) ||
                        (i >= r.contentWidth - r.containerWidth && 0 < t)
                      )
                        return !r.settings.wheelPropagation;
                    }
                    return !0;
                  })(n, i)) && (t.stopPropagation(), t.preventDefault()));
            }
            var s = !1;
            void 0 !== window.onwheel
              ? r.event.bind(o, "wheel", t)
              : void 0 !== window.onmousewheel &&
                r.event.bind(o, "mousewheel", t);
          }
          var o = t("../instances"),
            a = t("../update-geometry"),
            l = t("../update-scroll");
          e.exports = function (t) {
            n(t, o.get(t));
          };
        },
        {
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      14: [
        function (t, e, i) {
          var n = t("../instances"),
            o = t("../update-geometry");
          e.exports = function (t) {
            var e,
              i = n.get(t);
            (e = t),
              i.event.bind(e, "scroll", function () {
                o(e);
              });
          };
        },
        { "../instances": 18, "../update-geometry": 19 },
      ],
      15: [
        function (t, e, i) {
          function n(s, t) {
            function a() {
              l && (clearInterval(l), (l = null)), h.stopScrolling(s);
            }
            var l = null,
              c = { top: 0, left: 0 },
              u = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function () {
              var t;
              s.contains(
                0 ===
                  (t = window.getSelection
                    ? window.getSelection()
                    : document.getSelection
                    ? document.getSelection()
                    : "").toString().length
                  ? null
                  : t.getRangeAt(0).commonAncestorContainer
              )
                ? (u = !0)
                : ((u = !1), a());
            }),
              t.event.bind(window, "mouseup", function () {
                u && ((u = !1), a());
              }),
              t.event.bind(window, "keyup", function () {
                u && ((u = !1), a());
              }),
              t.event.bind(window, "mousemove", function (t) {
                var e, i, n, o, r;
                u &&
                  ((e = t.pageX),
                  (i = t.pageY),
                  (n = s.offsetLeft),
                  (o = s.offsetLeft + s.offsetWidth),
                  (r = s.offsetTop),
                  (t = s.offsetTop + s.offsetHeight),
                  e < n + 3
                    ? ((c.left = -5), h.startScrolling(s, "x"))
                    : o - 3 < e
                    ? ((c.left = 5), h.startScrolling(s, "x"))
                    : (c.left = 0),
                  i < r + 3
                    ? ((c.top = r + 3 - i < 5 ? -5 : -20),
                      h.startScrolling(s, "y"))
                    : t - 3 < i
                    ? ((c.top = i - t + 3 < 5 ? 5 : 20),
                      h.startScrolling(s, "y"))
                    : (c.top = 0),
                  0 === c.top && 0 === c.left
                    ? a()
                    : (l =
                        l ||
                        setInterval(function () {
                          return d.get(s)
                            ? (f(s, "top", s.scrollTop + c.top),
                              f(s, "left", s.scrollLeft + c.left),
                              void p(s))
                            : void clearInterval(l);
                        }, 50)));
              });
          }
          var h = t("../../lib/helper"),
            d = t("../instances"),
            p = t("../update-geometry"),
            f = t("../update-scroll");
          e.exports = function (t) {
            n(t, d.get(t));
          };
        },
        {
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      16: [
        function (t, e, i) {
          function n(s, a, t, e) {
            function r(t, e) {
              b(s, "top", s.scrollTop - e),
                b(s, "left", s.scrollLeft - t),
                T(s);
            }
            function i() {
              g = !0;
            }
            function n() {
              g = !1;
            }
            function l(t) {
              return t.targetTouches ? t.targetTouches[0] : t;
            }
            function c(t) {
              return (
                (t.targetTouches && 1 === t.targetTouches.length) ||
                (t.pointerType &&
                  "mouse" !== t.pointerType &&
                  t.pointerType !== t.MSPOINTER_TYPE_MOUSE)
              );
            }
            function u(t) {
              var e;
              c(t) &&
                ((y = !0),
                (e = l(t)),
                (d.pageX = e.pageX),
                (d.pageY = e.pageY),
                (p = new Date().getTime()),
                null !== m && clearInterval(m),
                t.stopPropagation());
            }
            function o(t) {
              var e, i, n, o;
              !y && a.settings.swipePropagation && u(t),
                !g &&
                  y &&
                  c(t) &&
                  (r(
                    (e =
                      (o = { pageX: (n = l(t)).pageX, pageY: n.pageY }).pageX -
                      d.pageX),
                    (i = o.pageY - d.pageY)
                  ),
                  (d = o),
                  0 < (o = (n = new Date().getTime()) - p) &&
                    ((f.x = e / o), (f.y = i / o), (p = n)),
                  (function (t, e) {
                    var i = s.scrollTop,
                      n = s.scrollLeft,
                      o = Math.abs(t),
                      r = Math.abs(e);
                    if (o < r) {
                      if (
                        (e < 0 && i === a.contentHeight - a.containerHeight) ||
                        (0 < e && 0 === i)
                      )
                        return !a.settings.swipePropagation;
                    } else if (
                      r < o &&
                      ((t < 0 && n === a.contentWidth - a.containerWidth) ||
                        (0 < t && 0 === n))
                    )
                      return !a.settings.swipePropagation;
                    return 1;
                  })(e, i) && (t.stopPropagation(), t.preventDefault()));
            }
            function h() {
              !g &&
                y &&
                ((y = !1),
                a.settings.swipeEasing &&
                  (clearInterval(m),
                  (m = setInterval(function () {
                    return !v.get(s) ||
                      (!f.x && !f.y) ||
                      (Math.abs(f.x) < 0.01 && Math.abs(f.y) < 0.01)
                      ? void clearInterval(m)
                      : (r(30 * f.x, 30 * f.y),
                        (f.x *= 0.8),
                        void (f.y *= 0.8));
                  }, 10))));
            }
            var d = {},
              p = 0,
              f = {},
              m = null,
              g = !1,
              y = !1;
            t
              ? (a.event.bind(window, "touchstart", i),
                a.event.bind(window, "touchend", n),
                a.event.bind(s, "touchstart", u),
                a.event.bind(s, "touchmove", o),
                a.event.bind(s, "touchend", h))
              : e &&
                (window.PointerEvent
                  ? (a.event.bind(window, "pointerdown", i),
                    a.event.bind(window, "pointerup", n),
                    a.event.bind(s, "pointerdown", u),
                    a.event.bind(s, "pointermove", o),
                    a.event.bind(s, "pointerup", h))
                  : window.MSPointerEvent &&
                    (a.event.bind(window, "MSPointerDown", i),
                    a.event.bind(window, "MSPointerUp", n),
                    a.event.bind(s, "MSPointerDown", u),
                    a.event.bind(s, "MSPointerMove", o),
                    a.event.bind(s, "MSPointerUp", h)));
          }
          var o = t("../../lib/helper"),
            v = t("../instances"),
            T = t("../update-geometry"),
            b = t("../update-scroll");
          e.exports = function (t) {
            (o.env.supportsTouch || o.env.supportsIePointer) &&
              n(t, v.get(t), o.env.supportsTouch, o.env.supportsIePointer);
          };
        },
        {
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      17: [
        function (t, e, i) {
          var n = t("../lib/helper"),
            o = t("../lib/class"),
            r = t("./instances"),
            s = t("./update-geometry"),
            a = {
              "click-rail": t("./handler/click-rail"),
              "drag-scrollbar": t("./handler/drag-scrollbar"),
              keyboard: t("./handler/keyboard"),
              wheel: t("./handler/mouse-wheel"),
              touch: t("./handler/touch"),
              selection: t("./handler/selection"),
            },
            l = t("./handler/native-scroll");
          e.exports = function (e, t) {
            (t = "object" == typeof t ? t : {}), o.add(e, "ps");
            var i = r.add(e);
            (i.settings = n.extend(i.settings, t)),
              o.add(e, "ps--theme_" + i.settings.theme),
              i.settings.handlers.forEach(function (t) {
                a[t](e);
              }),
              l(e),
              s(e);
          };
        },
        {
          "../lib/class": 2,
          "../lib/helper": 6,
          "./handler/click-rail": 10,
          "./handler/drag-scrollbar": 11,
          "./handler/keyboard": 12,
          "./handler/mouse-wheel": 13,
          "./handler/native-scroll": 14,
          "./handler/selection": 15,
          "./handler/touch": 16,
          "./instances": 18,
          "./update-geometry": 19,
        },
      ],
      18: [
        function (t, e, i) {
          function n(t) {
            function e() {
              a.add(t, "ps--focus");
            }
            function i() {
              a.remove(t, "ps--focus");
            }
            var n,
              o,
              r = this;
            (r.settings = s.clone(l)),
              (r.containerWidth = null),
              (r.containerHeight = null),
              (r.contentWidth = null),
              (r.contentHeight = null),
              (r.isRtl = "rtl" === c.css(t, "direction")),
              (r.isNegativeScroll =
                ((o = t.scrollLeft),
                (t.scrollLeft = -1),
                (n = t.scrollLeft < 0),
                (t.scrollLeft = o),
                n)),
              (r.negativeScrollAdjustment = r.isNegativeScroll
                ? t.scrollWidth - t.clientWidth
                : 0),
              (r.event = new u()),
              (r.ownerDocument = t.ownerDocument || document),
              (r.scrollbarXRail = c.appendTo(
                c.e("div", "ps__scrollbar-x-rail"),
                t
              )),
              (r.scrollbarX = c.appendTo(
                c.e("div", "ps__scrollbar-x"),
                r.scrollbarXRail
              )),
              r.scrollbarX.setAttribute("tabindex", 0),
              r.event.bind(r.scrollbarX, "focus", e),
              r.event.bind(r.scrollbarX, "blur", i),
              (r.scrollbarXActive = null),
              (r.scrollbarXWidth = null),
              (r.scrollbarXLeft = null),
              (r.scrollbarXBottom = s.toInt(c.css(r.scrollbarXRail, "bottom"))),
              (r.isScrollbarXUsingBottom =
                r.scrollbarXBottom == r.scrollbarXBottom),
              (r.scrollbarXTop = r.isScrollbarXUsingBottom
                ? null
                : s.toInt(c.css(r.scrollbarXRail, "top"))),
              (r.railBorderXWidth =
                s.toInt(c.css(r.scrollbarXRail, "borderLeftWidth")) +
                s.toInt(c.css(r.scrollbarXRail, "borderRightWidth"))),
              c.css(r.scrollbarXRail, "display", "block"),
              (r.railXMarginWidth =
                s.toInt(c.css(r.scrollbarXRail, "marginLeft")) +
                s.toInt(c.css(r.scrollbarXRail, "marginRight"))),
              c.css(r.scrollbarXRail, "display", ""),
              (r.railXWidth = null),
              (r.railXRatio = null),
              (r.scrollbarYRail = c.appendTo(
                c.e("div", "ps__scrollbar-y-rail"),
                t
              )),
              (r.scrollbarY = c.appendTo(
                c.e("div", "ps__scrollbar-y"),
                r.scrollbarYRail
              )),
              r.scrollbarY.setAttribute("tabindex", 0),
              r.event.bind(r.scrollbarY, "focus", e),
              r.event.bind(r.scrollbarY, "blur", i),
              (r.scrollbarYActive = null),
              (r.scrollbarYHeight = null),
              (r.scrollbarYTop = null),
              (r.scrollbarYRight = s.toInt(c.css(r.scrollbarYRail, "right"))),
              (r.isScrollbarYUsingRight =
                r.scrollbarYRight == r.scrollbarYRight),
              (r.scrollbarYLeft = r.isScrollbarYUsingRight
                ? null
                : s.toInt(c.css(r.scrollbarYRail, "left"))),
              (r.scrollbarYOuterWidth = r.isRtl
                ? s.outerWidth(r.scrollbarY)
                : null),
              (r.railBorderYWidth =
                s.toInt(c.css(r.scrollbarYRail, "borderTopWidth")) +
                s.toInt(c.css(r.scrollbarYRail, "borderBottomWidth"))),
              c.css(r.scrollbarYRail, "display", "block"),
              (r.railYMarginHeight =
                s.toInt(c.css(r.scrollbarYRail, "marginTop")) +
                s.toInt(c.css(r.scrollbarYRail, "marginBottom"))),
              c.css(r.scrollbarYRail, "display", ""),
              (r.railYHeight = null),
              (r.railYRatio = null);
          }
          function o(t) {
            return t.getAttribute("data-ps-id");
          }
          var s = t("../lib/helper"),
            a = t("../lib/class"),
            l = t("./default-setting"),
            c = t("../lib/dom"),
            u = t("../lib/event-manager"),
            r = t("../lib/guid"),
            h = {};
          (i.add = function (t) {
            var e,
              i = r();
            return (
              (e = i), t.setAttribute("data-ps-id", e), (h[i] = new n(t)), h[i]
            );
          }),
            (i.remove = function (t) {
              delete h[o(t)], t.removeAttribute("data-ps-id");
            }),
            (i.get = function (t) {
              return h[o(t)];
            });
        },
        {
          "../lib/class": 2,
          "../lib/dom": 3,
          "../lib/event-manager": 4,
          "../lib/guid": 5,
          "../lib/helper": 6,
          "./default-setting": 8,
        },
      ],
      19: [
        function (t, e, i) {
          function r(t, e) {
            return (
              t.settings.minScrollbarLength &&
                (e = Math.max(e, t.settings.minScrollbarLength)),
              (e = t.settings.maxScrollbarLength
                ? Math.min(e, t.settings.maxScrollbarLength)
                : e)
            );
          }
          var s = t("../lib/helper"),
            a = t("../lib/class"),
            l = t("../lib/dom"),
            c = t("./instances"),
            u = t("./update-scroll");
          e.exports = function (t) {
            var e,
              i,
              n,
              o = c.get(t);
            (o.containerWidth = t.clientWidth),
              (o.containerHeight = t.clientHeight),
              (o.contentWidth = t.scrollWidth),
              (o.contentHeight = t.scrollHeight),
              t.contains(o.scrollbarXRail) ||
                (0 < (n = l.queryChildren(t, ".ps__scrollbar-x-rail")).length &&
                  n.forEach(function (t) {
                    l.remove(t);
                  }),
                l.appendTo(o.scrollbarXRail, t)),
              t.contains(o.scrollbarYRail) ||
                (0 < (n = l.queryChildren(t, ".ps__scrollbar-y-rail")).length &&
                  n.forEach(function (t) {
                    l.remove(t);
                  }),
                l.appendTo(o.scrollbarYRail, t)),
              !o.settings.suppressScrollX &&
              o.containerWidth + o.settings.scrollXMarginOffset < o.contentWidth
                ? ((o.scrollbarXActive = !0),
                  (o.railXWidth = o.containerWidth - o.railXMarginWidth),
                  (o.railXRatio = o.containerWidth / o.railXWidth),
                  (o.scrollbarXWidth = r(
                    o,
                    s.toInt((o.railXWidth * o.containerWidth) / o.contentWidth)
                  )),
                  (o.scrollbarXLeft = s.toInt(
                    ((o.negativeScrollAdjustment + t.scrollLeft) *
                      (o.railXWidth - o.scrollbarXWidth)) /
                      (o.contentWidth - o.containerWidth)
                  )))
                : (o.scrollbarXActive = !1),
              !o.settings.suppressScrollY &&
              o.containerHeight + o.settings.scrollYMarginOffset <
                o.contentHeight
                ? ((o.scrollbarYActive = !0),
                  (o.railYHeight = o.containerHeight - o.railYMarginHeight),
                  (o.railYRatio = o.containerHeight / o.railYHeight),
                  (o.scrollbarYHeight = r(
                    o,
                    s.toInt(
                      (o.railYHeight * o.containerHeight) / o.contentHeight
                    )
                  )),
                  (o.scrollbarYTop = s.toInt(
                    (t.scrollTop * (o.railYHeight - o.scrollbarYHeight)) /
                      (o.contentHeight - o.containerHeight)
                  )))
                : (o.scrollbarYActive = !1),
              o.scrollbarXLeft >= o.railXWidth - o.scrollbarXWidth &&
                (o.scrollbarXLeft = o.railXWidth - o.scrollbarXWidth),
              o.scrollbarYTop >= o.railYHeight - o.scrollbarYHeight &&
                (o.scrollbarYTop = o.railYHeight - o.scrollbarYHeight),
              (e = t),
              (n = { width: (i = o).railXWidth }),
              i.isRtl
                ? (n.left =
                    i.negativeScrollAdjustment +
                    e.scrollLeft +
                    i.containerWidth -
                    i.contentWidth)
                : (n.left = e.scrollLeft),
              i.isScrollbarXUsingBottom
                ? (n.bottom = i.scrollbarXBottom - e.scrollTop)
                : (n.top = i.scrollbarXTop + e.scrollTop),
              l.css(i.scrollbarXRail, n),
              (n = { top: e.scrollTop, height: i.railYHeight }),
              i.isScrollbarYUsingRight
                ? i.isRtl
                  ? (n.right =
                      i.contentWidth -
                      (i.negativeScrollAdjustment + e.scrollLeft) -
                      i.scrollbarYRight -
                      i.scrollbarYOuterWidth)
                  : (n.right = i.scrollbarYRight - e.scrollLeft)
                : i.isRtl
                ? (n.left =
                    i.negativeScrollAdjustment +
                    e.scrollLeft +
                    2 * i.containerWidth -
                    i.contentWidth -
                    i.scrollbarYLeft -
                    i.scrollbarYOuterWidth)
                : (n.left = i.scrollbarYLeft + e.scrollLeft),
              l.css(i.scrollbarYRail, n),
              l.css(i.scrollbarX, {
                left: i.scrollbarXLeft,
                width: i.scrollbarXWidth - i.railBorderXWidth,
              }),
              l.css(i.scrollbarY, {
                top: i.scrollbarYTop,
                height: i.scrollbarYHeight - i.railBorderYWidth,
              }),
              o.scrollbarXActive
                ? a.add(t, "ps--active-x")
                : (a.remove(t, "ps--active-x"),
                  (o.scrollbarXWidth = 0),
                  (o.scrollbarXLeft = 0),
                  u(t, "left", 0)),
              o.scrollbarYActive
                ? a.add(t, "ps--active-y")
                : (a.remove(t, "ps--active-y"),
                  (o.scrollbarYHeight = 0),
                  (o.scrollbarYTop = 0),
                  u(t, "top", 0));
          };
        },
        {
          "../lib/class": 2,
          "../lib/dom": 3,
          "../lib/helper": 6,
          "./instances": 18,
          "./update-scroll": 20,
        },
      ],
      20: [
        function (t, e, i) {
          function o(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0), e;
          }
          var r = t("./instances");
          e.exports = function (t, e, i) {
            if (void 0 === t)
              throw "You must provide an element to the update-scroll function";
            if (void 0 === e)
              throw "You must provide an axis to the update-scroll function";
            if (void 0 === i)
              throw "You must provide a value to the update-scroll function";
            "top" === e &&
              i <= 0 &&
              ((t.scrollTop = i = 0), t.dispatchEvent(o("ps-y-reach-start"))),
              "left" === e &&
                i <= 0 &&
                ((t.scrollLeft = i = 0),
                t.dispatchEvent(o("ps-x-reach-start")));
            var n = r.get(t);
            "top" === e &&
              i >= n.contentHeight - n.containerHeight &&
              ((i = n.contentHeight - n.containerHeight) - t.scrollTop <= 1
                ? (i = t.scrollTop)
                : (t.scrollTop = i),
              t.dispatchEvent(o("ps-y-reach-end"))),
              "left" === e &&
                i >= n.contentWidth - n.containerWidth &&
                ((i = n.contentWidth - n.containerWidth) - t.scrollLeft <= 1
                  ? (i = t.scrollLeft)
                  : (t.scrollLeft = i),
                t.dispatchEvent(o("ps-x-reach-end"))),
              void 0 === n.lastTop && (n.lastTop = t.scrollTop),
              void 0 === n.lastLeft && (n.lastLeft = t.scrollLeft),
              "top" === e &&
                i < n.lastTop &&
                t.dispatchEvent(o("ps-scroll-up")),
              "top" === e &&
                i > n.lastTop &&
                t.dispatchEvent(o("ps-scroll-down")),
              "left" === e &&
                i < n.lastLeft &&
                t.dispatchEvent(o("ps-scroll-left")),
              "left" === e &&
                i > n.lastLeft &&
                t.dispatchEvent(o("ps-scroll-right")),
              "top" === e &&
                i !== n.lastTop &&
                ((t.scrollTop = n.lastTop = i),
                t.dispatchEvent(o("ps-scroll-y"))),
              "left" === e &&
                i !== n.lastLeft &&
                ((t.scrollLeft = n.lastLeft = i),
                t.dispatchEvent(o("ps-scroll-x")));
          };
        },
        { "./instances": 18 },
      ],
      21: [
        function (t, e, i) {
          var n = t("../lib/helper"),
            o = t("../lib/dom"),
            r = t("./instances"),
            s = t("./update-geometry"),
            a = t("./update-scroll");
          e.exports = function (t) {
            var e = r.get(t);
            e &&
              ((e.negativeScrollAdjustment = e.isNegativeScroll
                ? t.scrollWidth - t.clientWidth
                : 0),
              o.css(e.scrollbarXRail, "display", "block"),
              o.css(e.scrollbarYRail, "display", "block"),
              (e.railXMarginWidth =
                n.toInt(o.css(e.scrollbarXRail, "marginLeft")) +
                n.toInt(o.css(e.scrollbarXRail, "marginRight"))),
              (e.railYMarginHeight =
                n.toInt(o.css(e.scrollbarYRail, "marginTop")) +
                n.toInt(o.css(e.scrollbarYRail, "marginBottom"))),
              o.css(e.scrollbarXRail, "display", "none"),
              o.css(e.scrollbarYRail, "display", "none"),
              s(t),
              a(t, "top", t.scrollTop),
              a(t, "left", t.scrollLeft),
              o.css(e.scrollbarXRail, "display", ""),
              o.css(e.scrollbarYRail, "display", ""));
          };
        },
        {
          "../lib/dom": 3,
          "../lib/helper": 6,
          "./instances": 18,
          "./update-geometry": 19,
          "./update-scroll": 20,
        },
      ],
    },
    {},
    [1]
  ),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (c) {
    var n,
      r = window.Slick || {};
    (n = 0),
      ((r = function (t, e) {
        var i = this;
        (i.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: c(t),
          appendDots: c(t),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, e) {
            return c('<button type="button" />').text(e + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (i.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          c.extend(i, i.initials),
          (i.activeBreakpoint = null),
          (i.animType = null),
          (i.animProp = null),
          (i.breakpoints = []),
          (i.breakpointSettings = []),
          (i.cssTransitions = !1),
          (i.focussed = !1),
          (i.interrupted = !1),
          (i.hidden = "hidden"),
          (i.paused = !0),
          (i.positionProp = null),
          (i.respondTo = null),
          (i.rowCount = 1),
          (i.shouldClick = !0),
          (i.$slider = c(t)),
          (i.$slidesCache = null),
          (i.transformType = null),
          (i.transitionType = null),
          (i.visibilityChange = "visibilitychange"),
          (i.windowWidth = 0),
          (i.windowTimer = null),
          (t = c(t).data("slick") || {}),
          (i.options = c.extend({}, i.defaults, e, t)),
          (i.currentSlide = i.options.initialSlide),
          (i.originalSettings = i.options),
          void 0 !== document.mozHidden
            ? ((i.hidden = "mozHidden"),
              (i.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((i.hidden = "webkitHidden"),
              (i.visibilityChange = "webkitvisibilitychange")),
          (i.autoPlay = c.proxy(i.autoPlay, i)),
          (i.autoPlayClear = c.proxy(i.autoPlayClear, i)),
          (i.autoPlayIterator = c.proxy(i.autoPlayIterator, i)),
          (i.changeSlide = c.proxy(i.changeSlide, i)),
          (i.clickHandler = c.proxy(i.clickHandler, i)),
          (i.selectHandler = c.proxy(i.selectHandler, i)),
          (i.setPosition = c.proxy(i.setPosition, i)),
          (i.swipeHandler = c.proxy(i.swipeHandler, i)),
          (i.dragHandler = c.proxy(i.dragHandler, i)),
          (i.keyHandler = c.proxy(i.keyHandler, i)),
          (i.instanceUid = n++),
          (i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          i.registerBreakpoints(),
          i.init(!0);
      }).prototype.activateADA = function () {
        this.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (r.prototype.addSlide = r.prototype.slickAdd =
        function (t, e, i) {
          var n = this;
          if ("boolean" == typeof e) (i = e), (e = null);
          else if (e < 0 || e >= n.slideCount) return !1;
          n.unload(),
            "number" == typeof e
              ? 0 === e && 0 === n.$slides.length
                ? c(t).appendTo(n.$slideTrack)
                : i
                ? c(t).insertBefore(n.$slides.eq(e))
                : c(t).insertAfter(n.$slides.eq(e))
              : !0 === i
              ? c(t).prependTo(n.$slideTrack)
              : c(t).appendTo(n.$slideTrack),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            n.$slides.each(function (t, e) {
              c(e).attr("data-slick-index", t);
            }),
            (n.$slidesCache = n.$slides),
            n.reinit();
        }),
      (r.prototype.animateHeight = function () {
        var t;
        1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical &&
          ((t = this.$slides.eq(this.currentSlide).outerHeight(!0)),
          this.$list.animate({ height: t }, this.options.speed));
      }),
      (r.prototype.animateSlide = function (t, e) {
        var i = {},
          n = this;
        n.animateHeight(),
          !0 === n.options.rtl && !1 === n.options.vertical && (t = -t),
          !1 === n.transformsEnabled
            ? !1 === n.options.vertical
              ? n.$slideTrack.animate(
                  { left: t },
                  n.options.speed,
                  n.options.easing,
                  e
                )
              : n.$slideTrack.animate(
                  { top: t },
                  n.options.speed,
                  n.options.easing,
                  e
                )
            : !1 === n.cssTransitions
            ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
              c({ animStart: n.currentLeft }).animate(
                { animStart: t },
                {
                  duration: n.options.speed,
                  easing: n.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === n.options.vertical
                        ? (i[n.animType] = "translate(" + t + "px, 0px)")
                        : (i[n.animType] = "translate(0px," + t + "px)"),
                      n.$slideTrack.css(i);
                  },
                  complete: function () {
                    e && e.call();
                  },
                }
              ))
            : (n.applyTransition(),
              (t = Math.ceil(t)),
              !1 === n.options.vertical
                ? (i[n.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[n.animType] = "translate3d(0px," + t + "px, 0px)"),
              n.$slideTrack.css(i),
              e &&
                setTimeout(function () {
                  n.disableTransition(), e.call();
                }, n.options.speed));
      }),
      (r.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return (t = t && null !== t ? c(t).not(this.$slider) : t);
      }),
      (r.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t &&
          "object" == typeof t &&
          t.each(function () {
            var t = c(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
          });
      }),
      (r.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        !1 === e.options.fade
          ? (i[e.transitionType] =
              e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase)
          : (i[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(t)).css(i);
      }),
      (r.prototype.autoPlay = function () {
        this.autoPlayClear(),
          this.slideCount > this.options.slidesToShow &&
            (this.autoPlayTimer = setInterval(
              this.autoPlayIterator,
              this.options.autoplaySpeed
            ));
      }),
      (r.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (r.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (r.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (r.prototype.buildDots = function () {
        var t, e;
        if (!0 === this.options.dots) {
          for (
            this.$slider.addClass("slick-dotted"),
              e = c("<ul />").addClass(this.options.dotsClass),
              t = 0;
            t <= this.getDotCount();
            t += 1
          )
            e.append(
              c("<li />").append(this.options.customPaging.call(this, this, t))
            );
          (this.$dots = e.appendTo(this.options.appendDots)),
            this.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (r.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, e) {
            c(e)
              .attr("data-slick-index", t)
              .data("originalStyling", c(e).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? c('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (r.prototype.buildRows = function () {
        var t,
          e,
          i,
          n = this,
          o = document.createDocumentFragment(),
          r = n.$slider.children();
        if (1 < n.options.rows) {
          for (
            i = n.options.slidesPerRow * n.options.rows,
              e = Math.ceil(r.length / i),
              t = 0;
            t < e;
            t++
          ) {
            for (
              var s = document.createElement("div"), a = 0;
              a < n.options.rows;
              a++
            ) {
              for (
                var l = document.createElement("div"), c = 0;
                c < n.options.slidesPerRow;
                c++
              ) {
                var u = t * i + (a * n.options.slidesPerRow + c);
                r.get(u) && l.appendChild(r.get(u));
              }
              s.appendChild(l);
            }
            o.appendChild(s);
          }
          n.$slider.empty().append(o),
            n.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (r.prototype.checkResponsive = function (t, e) {
        var i,
          n,
          o,
          r = this,
          s = !1,
          a = r.$slider.width(),
          l = window.innerWidth || c(window).width();
        if (
          ("window" === r.respondTo
            ? (o = l)
            : "slider" === r.respondTo
            ? (o = a)
            : "min" === r.respondTo && (o = Math.min(l, a)),
          r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          for (i in ((n = null), r.breakpoints))
            r.breakpoints.hasOwnProperty(i) &&
              (!1 === r.originalSettings.mobileFirst
                ? o < r.breakpoints[i] && (n = r.breakpoints[i])
                : o > r.breakpoints[i] && (n = r.breakpoints[i]));
          null !== n
            ? (null !== r.activeBreakpoint && n === r.activeBreakpoint && !e) ||
              ((r.activeBreakpoint = n),
              "unslick" === r.breakpointSettings[n]
                ? r.unslick(n)
                : ((r.options = c.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[n]
                  )),
                  !0 === t && (r.currentSlide = r.options.initialSlide),
                  r.refresh(t)),
              (s = n))
            : null !== r.activeBreakpoint &&
              ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === t && (r.currentSlide = r.options.initialSlide),
              r.refresh(t),
              (s = n)),
            t || !1 === s || r.$slider.trigger("breakpoint", [r, s]);
        }
      }),
      (r.prototype.changeSlide = function (t, e) {
        var i,
          n = this,
          o = c(t.currentTarget);
        switch (
          (o.is("a") && t.preventDefault(),
          o.is("li") || (o = o.closest("li")),
          (i =
            n.slideCount % n.options.slidesToScroll != 0
              ? 0
              : (n.slideCount - n.currentSlide) % n.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (r =
              0 == i ? n.options.slidesToScroll : n.options.slidesToShow - i),
              n.slideCount > n.options.slidesToShow &&
                n.slideHandler(n.currentSlide - r, !1, e);
            break;
          case "next":
            (r = 0 == i ? n.options.slidesToScroll : i),
              n.slideCount > n.options.slidesToShow &&
                n.slideHandler(n.currentSlide + r, !1, e);
            break;
          case "index":
            var r =
              0 === t.data.index
                ? 0
                : t.data.index || o.index() * n.options.slidesToScroll;
            n.slideHandler(n.checkNavigable(r), !1, e),
              o.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (r.prototype.checkNavigable = function (t) {
        var e = this.getNavigableIndexes(),
          i = 0;
        if (t > e[e.length - 1]) t = e[e.length - 1];
        else
          for (var n in e) {
            if (t < e[n]) {
              t = i;
              break;
            }
            i = e[n];
          }
        return t;
      }),
      (r.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (c("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", c.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", c.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          c(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            c(t.$slideTrack).children().off("click.slick", t.selectHandler),
          c(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          c(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          c("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (r.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)),
          this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1));
      }),
      (r.prototype.cleanUpRows = function () {
        var t;
        1 < this.options.rows &&
          ((t = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(t));
      }),
      (r.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (r.prototype.destroy = function (t) {
        var e = this;
        e.autoPlayClear(),
          (e.touchObject = {}),
          e.cleanUpEvents(),
          c(".slick-cloned", e.$slider).detach(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.$prevArrow.length &&
            (e.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
          e.$nextArrow &&
            e.$nextArrow.length &&
            (e.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
          e.$slides &&
            (e.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                c(this).attr("style", c(this).data("originalStyling"));
              }),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slideTrack.detach(),
            e.$list.detach(),
            e.$slider.append(e.$slides)),
          e.cleanUpRows(),
          e.$slider.removeClass("slick-slider"),
          e.$slider.removeClass("slick-initialized"),
          e.$slider.removeClass("slick-dotted"),
          (e.unslicked = !0),
          t || e.$slider.trigger("destroy", [e]);
      }),
      (r.prototype.disableTransition = function (t) {
        var e = {};
        (e[this.transitionType] = ""),
          (!1 === this.options.fade
            ? this.$slideTrack
            : this.$slides.eq(t)
          ).css(e);
      }),
      (r.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (r.prototype.fadeSlideOut = function (t) {
        !1 === this.cssTransitions
          ? this.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: this.options.zIndex - 2 },
                this.options.speed,
                this.options.easing
              )
          : (this.applyTransition(t),
            this.$slides
              .eq(t)
              .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
      }),
      (r.prototype.filterSlides = r.prototype.slickFilter =
        function (t) {
          null !== t &&
            ((this.$slidesCache = this.$slides),
            this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.filter(t).appendTo(this.$slideTrack),
            this.reinit());
        }),
      (r.prototype.focusHandler = function () {
        var i = this;
        i.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var e = c(this);
            setTimeout(function () {
              i.options.pauseOnFocus &&
                ((i.focussed = e.is(":focus")), i.autoPlay());
            }, 0);
          });
      }),
      (r.prototype.getCurrent = r.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (r.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          i = 0,
          n = 0;
        if (!0 === t.options.infinite)
          if (t.slideCount <= t.options.slidesToShow) ++n;
          else
            for (; e < t.slideCount; )
              ++n,
                (e = i + t.options.slidesToScroll),
                (i +=
                  t.options.slidesToScroll <= t.options.slidesToShow
                    ? t.options.slidesToScroll
                    : t.options.slidesToShow);
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
          for (; e < t.slideCount; )
            ++n,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
            );
        return n - 1;
      }),
      (r.prototype.getLeft = function (t) {
        var e,
          i,
          n = this,
          o = 0;
        return (
          (n.slideOffset = 0),
          (e = n.$slides.first().outerHeight(!0)),
          !0 === n.options.infinite
            ? (n.slideCount > n.options.slidesToShow &&
                ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                (i = -1),
                !0 === n.options.vertical &&
                  !0 === n.options.centerMode &&
                  (2 === n.options.slidesToShow
                    ? (i = -1.5)
                    : 1 === n.options.slidesToShow && (i = -2)),
                (o = e * n.options.slidesToShow * i)),
              n.slideCount % n.options.slidesToScroll != 0 &&
                t + n.options.slidesToScroll > n.slideCount &&
                n.slideCount > n.options.slidesToShow &&
                (o =
                  t > n.slideCount
                    ? ((n.slideOffset =
                        (n.options.slidesToShow - (t - n.slideCount)) *
                        n.slideWidth *
                        -1),
                      (n.options.slidesToShow - (t - n.slideCount)) * e * -1)
                    : ((n.slideOffset =
                        (n.slideCount % n.options.slidesToScroll) *
                        n.slideWidth *
                        -1),
                      (n.slideCount % n.options.slidesToScroll) * e * -1)))
            : t + n.options.slidesToShow > n.slideCount &&
              ((n.slideOffset =
                (t + n.options.slidesToShow - n.slideCount) * n.slideWidth),
              (o = (t + n.options.slidesToShow - n.slideCount) * e)),
          n.slideCount <= n.options.slidesToShow && (o = n.slideOffset = 0),
          !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
            ? (n.slideOffset =
                (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
                (n.slideWidth * n.slideCount) / 2)
            : !0 === n.options.centerMode && !0 === n.options.infinite
            ? (n.slideOffset +=
                n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
                n.slideWidth)
            : !0 === n.options.centerMode &&
              ((n.slideOffset = 0),
              (n.slideOffset +=
                n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
          (e =
            !1 === n.options.vertical
              ? t * n.slideWidth * -1 + n.slideOffset
              : t * e * -1 + o),
          !0 === n.options.variableWidth &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(t)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(t + n.options.slidesToShow)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            !0 === n.options.centerMode &&
              ((o =
                n.slideCount <= n.options.slidesToShow ||
                !1 === n.options.infinite
                  ? n.$slideTrack.children(".slick-slide").eq(t)
                  : n.$slideTrack
                      .children(".slick-slide")
                      .eq(t + n.options.slidesToShow + 1)),
              (e =
                !0 === n.options.rtl
                  ? o[0]
                    ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                    : 0
                  : o[0]
                  ? -1 * o[0].offsetLeft
                  : 0),
              (e += (n.$list.width() - o.outerWidth()) / 2))),
          e
        );
      }),
      (r.prototype.getOption = r.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (r.prototype.getNavigableIndexes = function () {
        for (
          var t = this,
            e = 0,
            i = 0,
            n = [],
            o =
              !1 === t.options.infinite
                ? t.slideCount
                : ((e = -1 * t.options.slidesToScroll),
                  (i = -1 * t.options.slidesToScroll),
                  2 * t.slideCount);
          e < o;

        )
          n.push(e),
            (e = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return n;
      }),
      (r.prototype.getSlick = function () {
        return this;
      }),
      (r.prototype.getSlideCount = function () {
        var i,
          n = this,
          o =
            !0 === n.options.centerMode
              ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
              : 0;
        return !0 === n.options.swipeToSlide
          ? (n.$slideTrack.find(".slick-slide").each(function (t, e) {
              if (e.offsetLeft - o + c(e).outerWidth() / 2 > -1 * n.swipeLeft)
                return (i = e), !1;
            }),
            Math.abs(c(i).attr("data-slick-index") - n.currentSlide) || 1)
          : n.options.slidesToScroll;
      }),
      (r.prototype.goTo = r.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (r.prototype.init = function (t) {
        var e = this;
        c(e.$slider).hasClass("slick-initialized") ||
          (c(e.$slider).addClass("slick-initialized"),
          e.buildRows(),
          e.buildOut(),
          e.setProps(),
          e.startLoad(),
          e.loadSlider(),
          e.initializeEvents(),
          e.updateArrows(),
          e.updateDots(),
          e.checkResponsive(!0),
          e.focusHandler()),
          t && e.$slider.trigger("init", [e]),
          !0 === e.options.accessibility && e.initADA(),
          e.options.autoplay && ((e.paused = !1), e.autoPlay());
      }),
      (r.prototype.initADA = function () {
        var i = this,
          n = Math.ceil(i.slideCount / i.options.slidesToShow),
          o = i.getNavigableIndexes().filter(function (t) {
            return 0 <= t && t < i.slideCount;
          });
        i.$slides
          .add(i.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== i.$dots &&
            (i.$slides
              .not(i.$slideTrack.find(".slick-cloned"))
              .each(function (t) {
                var e = o.indexOf(t);
                c(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + i.instanceUid + t,
                  tabindex: -1,
                }),
                  -1 !== e &&
                    c(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + i.instanceUid + e,
                    });
              }),
            i.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (t) {
                var e = o[t];
                c(this).attr({ role: "presentation" }),
                  c(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + i.instanceUid + t,
                      "aria-controls": "slick-slide" + i.instanceUid + e,
                      "aria-label": t + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(i.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++)
          i.$slides.eq(t).attr("tabindex", 0);
        i.activateADA();
      }),
      (r.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, t.changeSlide),
          t.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, t.changeSlide),
          !0 === t.options.accessibility &&
            (t.$prevArrow.on("keydown.slick", t.keyHandler),
            t.$nextArrow.on("keydown.slick", t.keyHandler)));
      }),
      (r.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          (c("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            c("li", t.$dots)
              .on("mouseenter.slick", c.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", c.proxy(t.interrupt, t, !1));
      }),
      (r.prototype.initSlideEvents = function () {
        this.options.pauseOnHover &&
          (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)),
          this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)));
      }),
      (r.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          c(document).on(t.visibilityChange, c.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            c(t.$slideTrack).children().on("click.slick", t.selectHandler),
          c(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            c.proxy(t.orientationChange, t)
          ),
          c(window).on(
            "resize.slick.slick-" + t.instanceUid,
            c.proxy(t.resize, t)
          ),
          c("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          c(t.setPosition);
      }),
      (r.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
      }),
      (r.prototype.keyHandler = function (t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === this.options.accessibility
            ? this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "next" : "previous",
                },
              })
            : 39 === t.keyCode &&
              !0 === this.options.accessibility &&
              this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (r.prototype.lazyLoad = function () {
        function t(t) {
          c("img[data-lazy]", t).each(function () {
            var t = c(this),
              e = c(this).attr("data-lazy"),
              i = c(this).attr("data-srcset"),
              n = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
              o = document.createElement("img");
            (o.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                i && (t.attr("srcset", i), n && t.attr("sizes", n)),
                  t.attr("src", e).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  r.$slider.trigger("lazyLoaded", [r, t, e]);
              });
            }),
              (o.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, t, e]);
              }),
              (o.src = e);
          });
        }
        var e,
          i,
          n,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? (n =
                !0 === r.options.infinite
                  ? (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) +
                    r.options.slidesToShow +
                    2
                  : ((i = Math.max(
                      0,
                      r.currentSlide - (r.options.slidesToShow / 2 + 1)
                    )),
                    r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite
                ? r.options.slidesToShow + r.currentSlide
                : r.currentSlide),
              (n = Math.ceil(i + r.options.slidesToShow)),
              !0 === r.options.fade &&
                (0 < i && i--, n <= r.slideCount && n++)),
          (e = r.$slider.find(".slick-slide").slice(i, n)),
          "anticipated" === r.options.lazyLoad)
        )
          for (
            var o = i - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0;
            l < r.options.slidesToScroll;
            l++
          )
            o < 0 && (o = r.slideCount - 1),
              (e = (e = e.add(a.eq(o))).add(a.eq(s))),
              o--,
              s++;
        t(e),
          r.slideCount <= r.options.slidesToShow
            ? t(r.$slider.find(".slick-slide"))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? t(
                r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)
              )
            : 0 === r.currentSlide &&
              t(
                r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)
              );
      }),
      (r.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass("slick-loading"),
          this.initUI(),
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (r.prototype.next = r.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (r.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (r.prototype.pause = r.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (r.prototype.play = r.prototype.slickPlay =
        function () {
          this.autoPlay(),
            (this.options.autoplay = !0),
            (this.paused = !1),
            (this.focussed = !1),
            (this.interrupted = !1);
        }),
      (r.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked ||
          (e.$slider.trigger("afterChange", [e, t]),
          (e.animating = !1),
          e.slideCount > e.options.slidesToShow && e.setPosition(),
          (e.swipeLeft = null),
          e.options.autoplay && e.autoPlay(),
          !0 === e.options.accessibility &&
            (e.initADA(),
            e.options.focusOnChange &&
              c(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (r.prototype.prev = r.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (r.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (r.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var e,
          i,
          n,
          o,
          r = this,
          s = c("img[data-lazy]", r.$slider);
        s.length
          ? ((e = s.first()),
            (i = e.attr("data-lazy")),
            (n = e.attr("data-srcset")),
            (o = e.attr("data-sizes") || r.$slider.attr("data-sizes")),
            ((s = document.createElement("img")).onload = function () {
              n && (e.attr("srcset", n), o && e.attr("sizes", o)),
                e
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === r.options.adaptiveHeight && r.setPosition(),
                r.$slider.trigger("lazyLoaded", [r, e, i]),
                r.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    r.progressiveLazyLoad(t + 1);
                  }, 500)
                : (e
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, e, i]),
                  r.progressiveLazyLoad());
            }),
            (s.src = i))
          : r.$slider.trigger("allImagesLoaded", [r]);
      }),
      (r.prototype.refresh = function (t) {
        var e = this,
          i = e.slideCount - e.options.slidesToShow;
        !e.options.infinite && e.currentSlide > i && (e.currentSlide = i),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          (i = e.currentSlide),
          e.destroy(!0),
          c.extend(e, e.initials, { currentSlide: i }),
          e.init(),
          t || e.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (r.prototype.registerBreakpoints = function () {
        var t,
          e,
          i,
          n = this,
          o = n.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
          for (t in ((n.respondTo = n.options.respondTo || "window"), o))
            if (((i = n.breakpoints.length - 1), o.hasOwnProperty(t))) {
              for (e = o[t].breakpoint; 0 <= i; )
                n.breakpoints[i] &&
                  n.breakpoints[i] === e &&
                  n.breakpoints.splice(i, 1),
                  i--;
              n.breakpoints.push(e), (n.breakpointSettings[e] = o[t].settings);
            }
          n.breakpoints.sort(function (t, e) {
            return n.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (r.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            c(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (r.prototype.resize = function () {
        var t = this;
        c(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = c(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (r.prototype.removeSlide = r.prototype.slickRemove =
        function (t, e, i) {
          var n = this;
          if (
            ((t =
              "boolean" == typeof t
                ? !0 === (e = t)
                  ? 0
                  : n.slideCount - 1
                : !0 === e
                ? --t
                : t),
            n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
          )
            return !1;
          n.unload(),
            (!0 === i
              ? n.$slideTrack.children()
              : n.$slideTrack.children(this.options.slide).eq(t)
            ).remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            n.reinit();
        }),
      (r.prototype.setCSS = function (t) {
        var e,
          i,
          n = this,
          o = {};
        !0 === n.options.rtl && (t = -t),
          (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (o[n.positionProp] = t),
          !1 === n.transformsEnabled ||
            (!(o = {}) === n.cssTransitions
              ? (o[n.animType] = "translate(" + e + ", " + i + ")")
              : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)")),
          n.$slideTrack.css(o);
      }),
      (r.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            !0 === t.options.centerMode &&
              t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children(".slick-slide").length
                )
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }),
      (r.prototype.setFade = function () {
        var i,
          n = this;
        n.$slides.each(function (t, e) {
          (i = n.slideWidth * t * -1),
            !0 === n.options.rtl
              ? c(e).css({
                  position: "relative",
                  right: i,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : c(e).css({
                  position: "relative",
                  left: i,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (r.prototype.setHeight = function () {
        var t;
        1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical &&
          ((t = this.$slides.eq(this.currentSlide).outerHeight(!0)),
          this.$list.css("height", t));
      }),
      (r.prototype.setOption = r.prototype.slickSetOption =
        function () {
          var t,
            e,
            i,
            n,
            o,
            r = this,
            s = !1;
          if (
            ("object" === c.type(arguments[0])
              ? ((i = arguments[0]), (s = arguments[1]), (o = "multiple"))
              : "string" === c.type(arguments[0]) &&
                ((i = arguments[0]),
                (n = arguments[1]),
                (s = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === c.type(arguments[1])
                  ? (o = "responsive")
                  : void 0 !== arguments[1] && (o = "single")),
            "single" === o)
          )
            r.options[i] = n;
          else if ("multiple" === o)
            c.each(i, function (t, e) {
              r.options[t] = e;
            });
          else if ("responsive" === o)
            for (e in n)
              if ("array" !== c.type(r.options.responsive))
                r.options.responsive = [n[e]];
              else {
                for (t = r.options.responsive.length - 1; 0 <= t; )
                  r.options.responsive[t].breakpoint === n[e].breakpoint &&
                    r.options.responsive.splice(t, 1),
                    t--;
                r.options.responsive.push(n[e]);
              }
          s && (r.unload(), r.reinit());
        }),
      (r.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade(),
          this.$slider.trigger("setPosition", [this]);
      }),
      (r.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
          t.options.fade &&
            ("number" == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (r.prototype.setSlideClasses = function (t) {
        var e,
          i,
          n,
          o = this,
          r = o.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true");
        o.$slides.eq(t).addClass("slick-current"),
          !0 === o.options.centerMode
            ? ((i = o.options.slidesToShow % 2 == 0 ? 1 : 0),
              (n = Math.floor(o.options.slidesToShow / 2)),
              !0 === o.options.infinite &&
                (n <= t && t <= o.slideCount - 1 - n
                  ? o.$slides
                      .slice(t - n + i, t + n + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((e = o.options.slidesToShow + t),
                    r
                      .slice(e - n + 1 + i, e + n + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === t
                  ? r
                      .eq(r.length - 1 - o.options.slidesToShow)
                      .addClass("slick-center")
                  : t === o.slideCount - 1 &&
                    r.eq(o.options.slidesToShow).addClass("slick-center")),
              o.$slides.eq(t).addClass("slick-center"))
            : 0 <= t && t <= o.slideCount - o.options.slidesToShow
            ? o.$slides
                .slice(t, t + o.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : r.length <= o.options.slidesToShow
            ? r.addClass("slick-active").attr("aria-hidden", "false")
            : ((n = o.slideCount % o.options.slidesToShow),
              (e = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
              (o.options.slidesToShow == o.options.slidesToScroll &&
              o.slideCount - t < o.options.slidesToShow
                ? r.slice(e - (o.options.slidesToShow - n), e + n)
                : r.slice(e, e + o.options.slidesToShow)
              )
                .addClass("slick-active")
                .attr("aria-hidden", "false")),
          ("ondemand" !== o.options.lazyLoad &&
            "anticipated" !== o.options.lazyLoad) ||
            o.lazyLoad();
      }),
      (r.prototype.setupInfinite = function () {
        var t,
          e,
          i,
          n = this;
        if (
          (!0 === n.options.fade && (n.options.centerMode = !1),
          !0 === n.options.infinite &&
            !1 === n.options.fade &&
            ((e = null), n.slideCount > n.options.slidesToShow))
        ) {
          for (
            i =
              !0 === n.options.centerMode
                ? n.options.slidesToShow + 1
                : n.options.slidesToShow,
              t = n.slideCount;
            t > n.slideCount - i;
            --t
          )
            c(n.$slides[(e = t - 1)])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e - n.slideCount)
              .prependTo(n.$slideTrack)
              .addClass("slick-cloned");
          for (t = 0; t < i + n.slideCount; t += 1)
            c(n.$slides[(e = t)])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e + n.slideCount)
              .appendTo(n.$slideTrack)
              .addClass("slick-cloned");
          n.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              c(this).attr("id", "");
            });
        }
      }),
      (r.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (r.prototype.selectHandler = function (t) {
        (t = c(t.target).is(".slick-slide")
          ? c(t.target)
          : c(t.target).parents(".slick-slide")),
          (t = (t = parseInt(t.attr("data-slick-index"))) || 0);
        this.slideCount <= this.options.slidesToShow
          ? this.slideHandler(t, !1, !0)
          : this.slideHandler(t);
      }),
      (r.prototype.slideHandler = function (t, e, i) {
        var n,
          o,
          r,
          s,
          a = this;
        if (
          ((e = e || !1),
          !(
            (!0 === a.animating && !0 === a.options.waitForAnimate) ||
            (!0 === a.options.fade && a.currentSlide === t)
          ))
        )
          if (
            (!1 === e && a.asNavFor(t),
            (s = a.getLeft((n = t))),
            (e = a.getLeft(a.currentSlide)),
            (a.currentLeft = null === a.swipeLeft ? e : a.swipeLeft),
            !1 === a.options.infinite &&
              !1 === a.options.centerMode &&
              (t < 0 || t > a.getDotCount() * a.options.slidesToScroll))
          )
            !1 === a.options.fade &&
              ((n = a.currentSlide),
              !0 !== i
                ? a.animateSlide(e, function () {
                    a.postSlide(n);
                  })
                : a.postSlide(n));
          else if (
            !1 === a.options.infinite &&
            !0 === a.options.centerMode &&
            (t < 0 || t > a.slideCount - a.options.slidesToScroll)
          )
            !1 === a.options.fade &&
              ((n = a.currentSlide),
              !0 !== i
                ? a.animateSlide(e, function () {
                    a.postSlide(n);
                  })
                : a.postSlide(n));
          else {
            if (
              (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (o =
                n < 0
                  ? a.slideCount % a.options.slidesToScroll != 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + n
                  : n >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll != 0
                    ? 0
                    : n - a.slideCount
                  : n),
              (a.animating = !0),
              a.$slider.trigger("beforeChange", [a, a.currentSlide, o]),
              (e = a.currentSlide),
              (a.currentSlide = o),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                (r = (r = a.getNavTarget()).slick("getSlick")).slideCount <=
                  r.options.slidesToShow &&
                r.setSlideClasses(a.currentSlide),
              a.updateDots(),
              a.updateArrows(),
              !0 === a.options.fade)
            )
              return (
                !0 !== i
                  ? (a.fadeSlideOut(e),
                    a.fadeSlide(o, function () {
                      a.postSlide(o);
                    }))
                  : a.postSlide(o),
                void a.animateHeight()
              );
            !0 !== i
              ? a.animateSlide(s, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o);
          }
      }),
      (r.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.hide(), t.$nextArrow.hide()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
          t.$slider.addClass("slick-loading");
      }),
      (r.prototype.swipeDirection = function () {
        var t = this.touchObject.startX - this.touchObject.curX,
          e = this.touchObject.startY - this.touchObject.curY,
          t = Math.atan2(e, t);
        return ((t =
          (t = Math.round((180 * t) / Math.PI)) < 0 ? 360 - Math.abs(t) : t) <=
          45 &&
          0 <= t) ||
          (t <= 360 && 315 <= t)
          ? !1 === this.options.rtl
            ? "left"
            : "right"
          : 135 <= t && t <= 225
          ? !1 === this.options.rtl
            ? "right"
            : "left"
          : !0 === this.options.verticalSwiping
          ? 35 <= t && t <= 135
            ? "down"
            : "up"
          : "vertical";
      }),
      (r.prototype.swipeEnd = function (t) {
        var e,
          i,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1);
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(10 < n.touchObject.swipeLength)),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case "left":
            case "down":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          "vertical" != i &&
            (n.slideHandler(e),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, i]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (r.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (r.prototype.swipeMove = function (t) {
        var e,
          i,
          n = this,
          o = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
        return (
          !(!n.dragging || n.scrolling || (o && 1 !== o.length)) &&
          ((e = n.getLeft(n.currentSlide)),
          (n.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
          (n.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
          (n.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(n.touchObject.curX - n.touchObject.startX, 2))
          )),
          (i = Math.round(
            Math.sqrt(Math.pow(n.touchObject.curY - n.touchObject.startY, 2))
          )),
          !n.options.verticalSwiping && !n.swiping && 4 < i
            ? !(n.scrolling = !0)
            : (!0 === n.options.verticalSwiping &&
                (n.touchObject.swipeLength = i),
              (o = n.swipeDirection()),
              void 0 !== t.originalEvent &&
                4 < n.touchObject.swipeLength &&
                ((n.swiping = !0), t.preventDefault()),
              (i =
                (!1 === n.options.rtl ? 1 : -1) *
                (n.touchObject.curX > n.touchObject.startX ? 1 : -1)),
              !0 === n.options.verticalSwiping &&
                (i = n.touchObject.curY > n.touchObject.startY ? 1 : -1),
              (t = n.touchObject.swipeLength),
              (n.touchObject.edgeHit = !1) === n.options.infinite &&
                ((0 === n.currentSlide && "right" === o) ||
                  (n.currentSlide >= n.getDotCount() && "left" === o)) &&
                ((t = n.touchObject.swipeLength * n.options.edgeFriction),
                (n.touchObject.edgeHit = !0)),
              !1 === n.options.vertical
                ? (n.swipeLeft = e + t * i)
                : (n.swipeLeft = e + t * (n.$list.height() / n.listWidth) * i),
              !0 === n.options.verticalSwiping && (n.swipeLeft = e + t * i),
              !0 !== n.options.fade &&
                !1 !== n.options.touchMove &&
                (!0 === n.animating
                  ? ((n.swipeLeft = null), !1)
                  : void n.setCSS(n.swipeLeft))))
        );
      }),
      (r.prototype.swipeStart = function (t) {
        var e,
          i = this;
        if (
          ((i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
            i.slideCount <= i.options.slidesToShow)
        )
          return !(i.touchObject = {});
        void 0 !== t.originalEvent &&
          void 0 !== t.originalEvent.touches &&
          (e = t.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX =
            void 0 !== e ? e.pageX : t.clientX),
          (i.touchObject.startY = i.touchObject.curY =
            void 0 !== e ? e.pageY : t.clientY),
          (i.dragging = !0);
      }),
      (r.prototype.unfilterSlides = r.prototype.slickUnfilter =
        function () {
          null !== this.$slidesCache &&
            (this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.appendTo(this.$slideTrack),
            this.reinit());
        }),
      (r.prototype.unload = function () {
        var t = this;
        c(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (r.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy();
      }),
      (r.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            t.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === t.currentSlide
              ? (t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                  !1 === t.options.centerMode) ||
                  (t.currentSlide >= t.slideCount - 1 &&
                    !0 === t.options.centerMode)) &&
                (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (r.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots.find("li").removeClass("slick-active").end(),
          this.$dots
            .find("li")
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (r.prototype.visibility = function () {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1));
      }),
      (c.fn.slick = function () {
        for (
          var t,
            e = arguments[0],
            i = Array.prototype.slice.call(arguments, 1),
            n = this.length,
            o = 0;
          o < n;
          o++
        )
          if (
            ("object" == typeof e || void 0 === e
              ? (this[o].slick = new r(this[o], e))
              : (t = this[o].slick[e].apply(this[o].slick, i)),
            void 0 !== t)
          )
            return t;
        return this;
      });
  }),
  function () {
    var E = window.jQuery,
      I = E(window);
    E.fn.stick_in_parent = function (t) {
      var _,
        e,
        i,
        n,
        S,
        w = (t = null == t ? {} : t).sticky_class,
        P = t.inner_scrolling,
        x = t.recalc_every,
        A = t.parent,
        M = t.offset_top,
        C = t.spacer,
        k = t.bottoming;
      for (
        null == M && (M = 0),
          null == A && (A = void 0),
          null == P && (P = !0),
          null == w && (w = "is_stuck"),
          _ = E(document),
          null == k && (k = !0),
          S = function (t) {
            var e;
            return window.getComputedStyle
              ? ((t = window.getComputedStyle(t[0])),
                (e =
                  parseFloat(t.getPropertyValue("width")) +
                  parseFloat(t.getPropertyValue("margin-left")) +
                  parseFloat(t.getPropertyValue("margin-right"))),
                "border-box" !== t.getPropertyValue("box-sizing") &&
                  (e +=
                    parseFloat(t.getPropertyValue("border-left-width")) +
                    parseFloat(t.getPropertyValue("border-right-width")) +
                    parseFloat(t.getPropertyValue("padding-left")) +
                    parseFloat(t.getPropertyValue("padding-right"))),
                e)
              : t.outerWidth(!0);
          },
          e = function (o, r, s, a, l, c, u, h) {
            var d, t, p, f, m, g, y, v, e, T, b, n;
            if (!o.data("sticky_kit")) {
              if (
                (o.data("sticky_kit", !0),
                (m = _.height()),
                (y = o.parent()),
                !(y = null != A ? y.closest(A) : y).length)
              )
                throw "failed to find stick parent";
              if (
                ((d = p = !1),
                (b = null != C ? C && o.closest(C) : E("<div />")) &&
                  b.css("position", o.css("position")),
                (v = function () {
                  var t, e, i;
                  if (
                    !h &&
                    ((m = _.height()),
                    (t = parseInt(y.css("border-top-width"), 10)),
                    (e = parseInt(y.css("padding-top"), 10)),
                    (r = parseInt(y.css("padding-bottom"), 10)),
                    (s = y.offset().top + t + e),
                    (a = y.height()),
                    p &&
                      ((d = p = !1),
                      null == C && (o.insertAfter(b), b.detach()),
                      o
                        .css({ position: "", top: "", width: "", bottom: "" })
                        .removeClass(w),
                      (i = !0)),
                    (l =
                      o.offset().top -
                      (parseInt(o.css("margin-top"), 10) || 0) -
                      M),
                    (c = o.outerHeight(!0)),
                    (u = o.css("float")),
                    b &&
                      b.css({
                        width: S(o),
                        height: c,
                        display: o.css("display"),
                        "vertical-align": o.css("vertical-align"),
                        float: u,
                      }),
                    i)
                  )
                    return n();
                })(),
                c !== a)
              )
                return (
                  (f = void 0),
                  (g = M),
                  (T = x),
                  (n = function () {
                    var t, e, i, n;
                    if (
                      !h &&
                      ((i = !1),
                      null != T && --T <= 0 && ((T = x), v(), (i = !0)),
                      i || _.height() === m || v(),
                      (i = I.scrollTop()),
                      null != f && (e = i - f),
                      (f = i),
                      p
                        ? (k &&
                            ((n = a + s < i + c + g),
                            d &&
                              !n &&
                              ((d = !1),
                              o
                                .css({ position: "fixed", bottom: "", top: g })
                                .trigger("sticky_kit:unbottom"))),
                          i < l &&
                            ((p = !1),
                            (g = M),
                            null == C &&
                              (("left" !== u && "right" !== u) ||
                                o.insertAfter(b),
                              b.detach()),
                            o
                              .css((t = { position: "", width: "", top: "" }))
                              .removeClass(w)
                              .trigger("sticky_kit:unstick")),
                          P &&
                            (t = I.height()) < c + M &&
                            !d &&
                            ((g -= e),
                            (g = Math.max(t - c, g)),
                            (g = Math.min(M, g)),
                            p && o.css({ top: g + "px" })))
                        : l < i &&
                          ((p = !0),
                          ((t = { position: "fixed", top: g }).width =
                            "border-box" === o.css("box-sizing")
                              ? o.outerWidth() + "px"
                              : o.width() + "px"),
                          o.css(t).addClass(w),
                          null == C &&
                            (o.after(b),
                            ("left" !== u && "right" !== u) || b.append(o)),
                          o.trigger("sticky_kit:stick")),
                      p && k && (null == n && (n = a + s < i + c + g), !d && n))
                    )
                      return (
                        (d = !0),
                        "static" === y.css("position") &&
                          y.css({ position: "relative" }),
                        o
                          .css({ position: "absolute", bottom: r, top: "auto" })
                          .trigger("sticky_kit:bottom")
                      );
                  }),
                  (e = function () {
                    return v(), n();
                  }),
                  (t = function () {
                    if (
                      ((h = !0),
                      I.off("touchmove", n),
                      I.off("scroll", n),
                      I.off("resize", e),
                      E(document.body).off("sticky_kit:recalc", e),
                      o.off("sticky_kit:detach", t),
                      o.removeData("sticky_kit"),
                      o.css({ position: "", bottom: "", top: "", width: "" }),
                      y.position("position", ""),
                      p)
                    )
                      return (
                        null == C &&
                          (("left" !== u && "right" !== u) || o.insertAfter(b),
                          b.remove()),
                        o.removeClass(w)
                      );
                  }),
                  I.on("touchmove", n),
                  I.on("scroll", n),
                  I.on("resize", e),
                  E(document.body).on("sticky_kit:recalc", e),
                  o.on("sticky_kit:detach", t),
                  setTimeout(n, 0)
                );
            }
          },
          i = 0,
          n = this.length;
        i < n;
        i++
      )
        (t = this[i]), e(E(t));
      return this;
    };
  }.call(this),
  (function (w, P) {
    w.fn.thb_3dImg = function (t) {
      var m = w(P),
        e = w(this),
        i = document,
        g = (i.documentElement, i.getElementsByTagName("body")[0]),
        y = i.getElementsByTagName("html")[0],
        v = (e.length, new MobileDetect(P.navigator.userAgent)),
        T = "ontouchstart" in m || navigator.msMaxTouchPoints;
      function b(t, e, i, n, o) {
        var r = i.find(".atvImg-container"),
          s = g.scrollTop || y.scrollTop,
          a = g.scrollLeft,
          l = (e ? t.touches[0] : t).pageX,
          c = (e ? t.touches[0] : t).pageY,
          u = i[0].getBoundingClientRect(),
          e = i.width(),
          t = i.height(),
          h = 320 / e,
          d = 0.52 - (l - u.left - a) / e,
          p = 0.52 - (c - u.top - s) / t,
          t = c - u.top - s - t / 2,
          e = l - u.left - a - e / 2,
          i = i.parents(".type-portfolio").hasClass("masonry-tall")
            ? 0.03
            : 0.05;
        TweenMax.to(r, 0.15, {
          rotationX: i * h * (t - p) + "deg",
          rotationY: 0.03 * h * (d - e) + "deg",
          scale: 1.07,
          force3D: !0,
        });
        var f = o;
        w.each(n, function (t, e) {
          TweenMax.set(w(this), {
            x: d * f * ((2.5 * t) / h),
            y: p * o * ((2.5 * t) / h),
          }),
            f--;
        });
      }
      function _(t, e) {
        e.addClass("over");
      }
      function S(t, e, i) {
        e.removeClass("over"),
          TweenMax.to(e, 0.15, {
            scale: 1,
            rotationX: "0deg",
            rotationY: "0deg",
          }),
          w.each(i, function () {
            TweenMax.set(w(this), { clearProps: "transform" });
          });
      }
      e.each(function () {
        var t = w(this),
          e = t.find(".atvImg-layer"),
          i = e.length,
          n = w("<div />").addClass("atvImg-container"),
          o = w("<div />").addClass("atvImg-shadow"),
          r = w("<div />").addClass("atvImg-layers"),
          s = [];
        e.each(function () {
          var t = w(this);
          t.addClass("atvImg-rendered-layer"), t.appendTo(r), s.push(t);
        }),
          n.append(o),
          n.append(r),
          t.append(n);
        var a,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          o = t.width();
        TweenMax.set(t, { perspective: 3 * o }),
          T && !v.mobile()
            ? ((m.preventScroll = !1),
              (d = s),
              (p = i),
              (f = n),
              (h = t).on("touchstart", function (t) {
                (m.preventScroll = !0), _(0, f);
              }),
              t.on("touchmove", function (t) {
                m.preventScroll && t.preventDefault(),
                  P.requestAnimationFrame(function () {
                    b(t, !0, h, d, p);
                  });
              }),
              t.on("touchend", function (t) {
                (m.preventScroll = !1), S(0, f, d);
              }))
            : ((l = s),
              (c = i),
              (u = n),
              (a = t).on("mouseenter", function (t) {
                _(0, u);
              }),
              t.on("mousemove", function (t) {
                b(t, !1, a, l, c);
              }),
              t.on("mouseleave", function (t) {
                S(0, u, l);
              }));
      });
    };
  })(jQuery, this),
  (function (o) {
    function r(t, e) {
      (this.el = o(t)),
        (this.options = o.extend({}, o.fn.typed.defaults, e)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = !this.isInput && this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.stringsElement = this.options.stringsElement),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build();
    }
    (r.prototype = {
      constructor: r,
      init: function () {
        var e = this;
        e.timeout = setTimeout(function () {
          for (var t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
          e.shuffle && (e.sequence = e.shuffleArray(e.sequence)),
            e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos);
        }, e.startDelay);
      },
      build: function () {
        var t,
          i = this;
        !0 === this.showCursor &&
          ((this.cursor = o(
            '<span class="typed-cursor">' + this.cursorChar + "</span>"
          )),
          this.el.after(this.cursor)),
          this.stringsElement &&
            ((this.strings = []),
            this.stringsElement.hide(),
            console.log(this.stringsElement.children()),
            (t = this.stringsElement.children()),
            o.each(t, function (t, e) {
              i.strings.push(o(e).html());
            })),
          this.init();
      },
      typewrite: function (o, r) {
        var t, s;
        !0 !== this.stop &&
          ((t = Math.round(70 * Math.random()) + this.typeSpeed),
          ((s = this).timeout = setTimeout(function () {
            var t = 0,
              e = o.substr(r);
            if (
              ("^" === e.charAt(0) &&
                ((i = 1),
                /^\^\d+/.test(e) &&
                  ((i += (e = /\d+/.exec(e)[0]).length), (t = parseInt(e))),
                (o = o.substring(0, r) + o.substring(r + i))),
              "html" === s.contentType)
            ) {
              var i = o.substr(r).charAt(0);
              if ("<" === i || "&" === i) {
                for (
                  var n = "<" === i ? ">" : ";";
                  o.substr(r + 1).charAt(0) !== n &&
                  (o.substr(r).charAt(0), !(++r + 1 > o.length));

                );
                r++, 0;
              }
            }
            s.timeout = setTimeout(function () {
              var t;
              r === o.length
                ? (s.options.onStringTyped(s.arrayPos),
                  (s.arrayPos === s.strings.length - 1 &&
                    (s.options.callback(),
                    s.curLoop++,
                    !1 === s.loop || s.curLoop === s.loopCount)) ||
                    (s.timeout = setTimeout(function () {
                      s.backspace(o, r);
                    }, s.backDelay)))
                : (0 === r && s.options.preStringTyped(s.arrayPos),
                  (t = o.substr(0, r + 1)),
                  s.attr
                    ? s.el.attr(s.attr, t)
                    : s.isInput
                    ? s.el.val(t)
                    : "html" === s.contentType
                    ? s.el.html(t)
                    : s.el.text(t),
                  r++,
                  s.typewrite(o, r));
            }, t);
          }, t)));
      },
      backspace: function (e, i) {
        var t, n;
        !0 !== this.stop &&
          ((t = Math.round(70 * Math.random()) + this.backSpeed),
          ((n = this).timeout = setTimeout(function () {
            if ("html" === n.contentType && ">" === e.substr(i).charAt(0)) {
              for (
                ;
                "<" !== e.substr(i - 1).charAt(0) &&
                (e.substr(i).charAt(0), !(--i < 0));

              );
              i--, 0;
            }
            var t = e.substr(0, i);
            n.attr
              ? n.el.attr(n.attr, t)
              : n.isInput
              ? n.el.val(t)
              : "html" === n.contentType
              ? n.el.html(t)
              : n.el.text(t),
              i > n.stopNum
                ? (i--, n.backspace(e, i))
                : i <= n.stopNum &&
                  (n.arrayPos++,
                  n.arrayPos === n.strings.length
                    ? ((n.arrayPos = 0),
                      n.shuffle && (n.sequence = n.shuffleArray(n.sequence)),
                      n.init())
                    : n.typewrite(n.strings[n.sequence[n.arrayPos]], i));
          }, t)));
      },
      shuffleArray: function (t) {
        var e,
          i,
          n = t.length;
        if (n)
          for (; --n; )
            (e = t[(i = Math.floor(Math.random() * (n + 1)))]),
              (t[i] = t[n]),
              (t[n] = e);
        return t;
      },
      reset: function () {
        clearInterval(this.timeout),
          this.el.attr("id"),
          this.el.empty(),
          void 0 !== this.cursor && this.cursor.remove(),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          this.options.resetCallback();
      },
    }),
      (o.fn.typed = function (n) {
        return this.each(function () {
          var t = o(this),
            e = t.data("typed"),
            i = "object" == typeof n && n;
          e && e.reset(),
            t.data("typed", (e = new r(this, i))),
            "string" == typeof n && e[n]();
        });
      }),
      (o.fn.typed.defaults = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {},
      });
  })(window.jQuery);
