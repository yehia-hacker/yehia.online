function storyyehiaonline() {
	function pG(r, n) {
		var p = document,
			v = this;

		function y(e) {
			return p.querySelectorAll(e)[0]
		}

		function f(e, t) {
			return e && e[t] || ""
		}

		function m(e, t) {
			if (e)
				for (var i = e.length, n = 0; n < i; n++) t(n, e[n])
		}

		function l(i, e, n) {
			e = [e.toLowerCase(), "webkit".concat(e), "MS".concat(e), "o".concat(e)], m(e, function (e, t) {
				i[t] = n
			})
		}

		function s(i, n, e) {
			e = [e.toLowerCase(), "webkit".concat(e), "MS".concat(e), "o".concat(e)], m(e, function (e, t) {
				i.addEventListener(t, n, !1)
			})
		}

		function b(e, t) {
			s(e, t, "AnimationEnd")
		}

		function w(e, t) {
			e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
		}

		function c(e, t) {
			try {
				t ? (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen().catch(function () {}) : document.mozCancelFullScreen ? document.mozCancelFullScreen().catch(function () {}) : document.webkitExitFullscreen && document.webkitExitFullscreen().catch(function () {})) : e.requestFullScreen ? e.requestFullScreen() : e["ms".concat("RequestFullScreen")] ? e["ms".concat("RequestFullScreen")]() : e["moz".concat("RequestFullScreen")] ? e["moz".concat("RequestFullScreen")]() : e["webkit".concat("RequestFullScreen")] && e["webkit".concat("RequestFullScreen")]()
			} catch (e) {
				console.warn("[Zuck.js] Can't access fullscreen")
			}
		}

		function k(e, t, i, n) {
			var s = 0 < t ? 1 : -1;
			if (s *= Math.abs(t) / y("#zuck-modal").offsetWidth * 90, T("cubeEffect")) {
				var a = 0 == s ? "scale(0.95)" : "scale(0.930,0.930)";
				if (l(y("#zuck-modal-content").style, "Transform", a), s < -90 || 90 < s) return
			}
			t = T("cubeEffect") ? "rotateY(".concat(s, "deg)") : "translate3d(".concat(t, "px, 0, 0)"), e && (l(e.style, "TransitionTimingFunction", n), l(e.style, "TransitionDuration", "".concat(i, "ms")), l(e.style, "Transform", t))
		}

		function _(e, t, i, n) {
			var s = 0,
				a = 0;
			if (e) {
				if (e.offsetParent)
					do {
						if (s += e.offsetLeft, a += e.offsetTop, e === n) break
					} while (e = e.offsetParent);
				t && (a -= t), i && (s -= i)
			}
			return [s, a]
		}

		function x(e) {
			e = 1e3 * Number(e);
			var t = (e = new Date(e)).getTime();
			t = ((new Date).getTime() - t) / 1e3;
			var i = T("language", "time");
			i = [
				[60, " ".concat(i.seconds), 1],
				[120, "1 ".concat(i.minute), ""],
				[3600, " ".concat(i.minutes), 60],
				[7200, "1 ".concat(i.hour), ""],
				[86400, " ".concat(i.hours), 3600],
				[172800, " ".concat(i.yesterday), ""],
				[604800, " ".concat(i.days), 86400]
			];
			var n = 1;
			t < 0 && (t = Math.abs(t), n = 2);
			for (var s, a = 0; s = i[a++];)
				if (t < s[0]) return "string" == typeof s[2] ? s[n] : Math.floor(t / s[2]) + s[1];
			return t = e.getDate(), i = e.getMonth(), e = e.getFullYear(), "".concat(t, "/").concat(i + 1, "/").concat(e)
		}

		function u(e) {
			var t = e.getAttribute("data-id"),
				i = !1;
			v.internalData.seenItems[t] && (i = !0), i ? e.classList.add("seen") : e.classList.remove("seen");
			try {
				v.data[t] = {
					id: t,
					photo: e.getAttribute("data-photo"),
					name: e.firstElementChild.lastElementChild.firstChild.innerText,
					link: e.firstElementChild.getAttribute("href"),
					lastUpdated: e.getAttribute("data-last-updated"),
					seen: i,
					items: []
				}
			} catch (e) {
				v.data[t] = {
					items: []
				}
			}
			e.onclick = function (e) {
				e.preventDefault(), D.show(t)
			}
		}
		"string" == typeof r && (r = p.getElementById(r));
		var e, C = r.id,
			a = {
				skin: "snapgram",
				avatars: !0,
				stories: [],
				backButton: !0,
				backNative: !1,
				previousTap: !0,
				autoFullScreen: !1,
				openEffect: !0,
				cubeEffect: !1,
				list: !1,
				localStorage: !0,
				callbacks: {
					onRender: function (e, t) {
						return t
					},
					onOpen: function (e, t) {
						t()
					},
					onView: function (e) {},
					onEnd: function (e, t) {
						t()
					},
					onClose: function (e, t) {
						t()
					},
					onNextItem: function (e, t, i) {
						i()
					},
					onNavigateItem: function (e, t, i) {
						i()
					}
				},
				language: {
					unmute: "Ø£Ø¶ØºØ· Ù„ØªÙØ¹ÙŠÙ„ Ø§Ù„ØµÙˆØª",
					keyboardTip: "Press space to see next",
					visitLink: "Ø²ÙŠØ§Ø±Ù‡ Ø§Ù„Ø±Ø§Ø¨Ø·",
					time: {
						ago: "ago",
						hour: "hour ago",
						hours: "hours ago",
						minute: "minute ago",
						minutes: "minutes ago",
						fromnow: "from now",
						seconds: "seconds ago",
						yesterday: "yesterday",
						tomorrow: "tomorrow",
						days: "days ago"
					}
				}
			},
			T = function (e, t) {
				function i(e) {
					return void 0 !== e
				}
				return t ? i(n[e]) && i(n[e][t]) ? n[e][t] : a[e][t] : i(n[e]) ? n[e] : a[e]
			},
			D = new function () {
				var e, t, i = y("#zuck-modal");
				i || nG.Zuck.hasModal || (nG.Zuck.hasModal = !0, (i = p.createElement("div")).id = "zuck-modal", T("cubeEffect") && (i.className = "with-cube"), i.innerHTML = '<div id="zuck-modal-content"></div>', i.style.display = "none", i.setAttribute("tabIndex", "1"), i.onkeyup = function (e) {
					27 === (e = e.keyCode) ? D.close() : 13 !== e && 32 !== e || D.next()
				}, T("openEffect") && i.classList.add("with-effects"), t = function () {
					i.classList.contains("closed") && (r.innerHTML = "", i.style.display = "none", i.classList.remove("closed"), i.classList.remove("animated"))
				}, (e = i).transitionEndEvent || (e.transitionEndEvent = !0, s(e, t, "TransitionEnd")), p.body.appendChild(i));

				function g(e) {
					var t = y("#zuck-modal"),
						n = "",
						s = "",
						i = "0",
						a = y("#zuck-modal-slider-".concat(C)),
						o = {
							previous: y("#zuck-modal .story-viewer.previous"),
							next: y("#zuck-modal .story-viewer.next"),
							viewing: y("#zuck-modal .story-viewer.viewing")
						};
					!o.previous && !e || !o.next && e || (s = e ? (n = "next", "previous") : (n = "previous", "next"), T("cubeEffect") ? "previous" === n ? i = t.slideWidth : "next" === n && (i = -1 * t.slideWidth) : i = -1 * (i = _(o[n]))[0], k(a, i, 600, null), setTimeout(function () {
						if ("" !== n && o[n] && "" !== s) {
							var e = o[n].getAttribute("data-story-id");
							v.internalData.currentStory = e, (e = y("#zuck-modal .story-viewer.".concat(s))) && e.parentNode.removeChild(e), o.viewing && (o.viewing.classList.add("stopped"), o.viewing.classList.add(s), o.viewing.classList.remove("viewing")), o[n] && (o[n].classList.remove("stopped"), o[n].classList.remove(n), o[n].classList.add("viewing")), (e = h(n)) && l(e, n), e = v.internalData.currentStory;
							var t = y('#zuck-modal [data-story-id="'.concat(e, '"]'));
							if (t) {
								var i = (t = t.querySelectorAll("[data-index].active"))[0].firstElementChild;
								v.data[e].currentItem = parseInt(t[0].getAttribute("data-index"), 10), t[0].innerHTML = '<b style="'.concat(i.style.cssText, '"></b>'), b(t[0].firstElementChild, function () {
									v.nextItem(!1)
								})
							}
							k(a, "0", 0, null), t && S([t[0], t[1]], !0), T("callbacks", "onView")(v.internalData.currentStory)
						}
					}, 650))
				}

				function o(r) {
					function e(e) {
						var t = y("#zuck-modal .viewing");
						if ("A" === e.target.nodeName) return !0;
						e.preventDefault(), e = e.touches ? e.touches[0] : e;
						var i = _(y("#zuck-modal .story-viewer.viewing"));
						c.slideWidth = y("#zuck-modal .story-viewer").offsetWidth, l = i[0], u = {
							x: e.pageX,
							y: e.pageY,
							time: Date.now()
						}, h = void 0, d = {}, r.addEventListener("mousemove", m), r.addEventListener("mouseup", n), r.addEventListener("mouseleave", n), r.addEventListener("touchmove", m), r.addEventListener("touchend", n), t && t.classList.add("paused"), P(), p = setTimeout(function () {
							t.classList.add("longPress")
						}, 600), f = setTimeout(function () {
							clearInterval(f), f = !1
						}, 250)
					}
					var l, c = y("#zuck-modal"),
						u = void 0,
						h = void 0,
						d = void 0,
						p = void 0,
						f = void 0,
						m = function (e) {
							var t = e.touches ? e.touches[0] : e,
								i = t.pageX;
							t = t.pageY, u && (d = {
								x: i - u.x,
								y: t - u.y
							}, void 0 === h && (h = !!(h || Math.abs(d.x) < Math.abs(d.y))), !h && u && (e.preventDefault(), k(r, l + d.x, 0, null)))
						},
						n = function e(t) {
							var i = y("#zuck-modal .viewing"),
								n = u;
							if (d) {
								var s = u ? Date.now() - u.time : void 0;
								s = Number(s) < 300 && 25 < Math.abs(d.x) || Math.abs(d.x) > c.slideWidth / 3;
								var a = d.x < 0,
									o = y(a ? "#zuck-modal .story-viewer.next" : "#zuck-modal .story-viewer.previous");
								h || (!s || a && !o || !a && !o ? k(r, l, 300) : g(a)), u = void 0, r.removeEventListener("mousemove", m), r.removeEventListener("mouseup", e), r.removeEventListener("mouseleave", e), r.removeEventListener("touchmove", m), r.removeEventListener("touchend", e)
							}
							if (s = v.internalData.currentVideoElement, p && clearInterval(p), i && (S(i.querySelectorAll(".active"), !1), i.classList.remove("longPress"), i.classList.remove("paused")), f) {
								if (clearInterval(f), f = !1, i = function () {
										n.x > nG.screen.width / 3 || !T("previousTap") ? v.navigateItem("next", t) : v.navigateItem("previous", t)
									}, !(a = y("#zuck-modal .viewing")) || !s) return i(), !1;
								a.classList.contains("muted") ? A(s, a) : i()
							}
						};
					r.addEventListener("touchstart", e), r.addEventListener("mousedown", e)
				}
				var r = y("#zuck-modal-content"),
					l = function (r, e, t) {
						var i = y("#zuck-modal-slider-".concat(C)),
							l = "",
							c = "",
							n = f(r, "id"),
							s = p.createElement("div"),
							u = f(r, "currentItem") || 0,
							h = "";
						if (y('#zuck-modal .story-viewer[data-story-id="'.concat(n, '"]'))) return !1;
						s.className = "slides", m(f(r, "items"), function (e, t) {
							e < u && (r.items[e].seen = !0, t.seen = !0);
							var i = f(t, "id"),
								n = f(t, "length"),
								s = f(t, "linkText"),
								a = !0 === f(t, "seen") ? "seen" : "";
							i = 'data-index="'.concat(e, '" data-item-id="').concat(i, '"');
							var o = T("callbacks", "onRender");
							u === e && (h = x(f(t, "time"))), c += "\n                            <span ".concat(i, ' class="').concat(u === e ? "active" : "", " ").concat(a, '">\n                                <b style="animation-duration:').concat("" === n ? "3" : n, 's"></b>\n                            </span>'), l += '\n            <div data-time="'.concat(f(t, "time"), '" data-type="').concat(f(t, "type"), '"').concat(i, ' class="item ').concat(a, " ").concat(u === e ? "active" : "", '">\n              ').concat(o(t, "\n                ".concat("video" === f(t, "type") ? '\n                      <video class="media" muted webkit-playsinline playsinline preload="auto" src="'.concat(f(t, "src"), '" ').concat(f(t, "type"), '></video>\n                      <b class="tip muted">').concat(T("language", "unmute"), "</b>\n                ") : '\n                      <img class="media" src="'.concat(f(t, "src"), '" ').concat(f(t, "type"), ">\n                "), "\n\n                ").concat(f(t, "link") ? '\n                      <a class="tip link" href="'.concat(f(t, "link"), '" rel="noopener" target="_blank">\n                        ').concat(s && "" !== s ? s : T("language", "visitLink"), "\n                      </a>\n                ") : "\n                ", "\n              ")), "\n            </div>")
						}), s.innerHTML = l;

						function a(e) {
							e.muted ? d.classList.add("muted") : d.classList.remove("muted")
						}
						var o = s.querySelector("video");
						o && (o.onwaiting = function (e) {
							o.paused && (d.classList.add("paused"), d.classList.add("loading"))
						}, o.onplay = function () {
							a(o), d.classList.remove("stopped"), d.classList.remove("paused"), d.classList.remove("loading")
						}, o.onready = o.onload = o.onplaying = o.oncanplay = function () {
							a(o), d.classList.remove("loading")
						}, o.onvolumechange = function () {
							a(o)
						});
						var d = p.createElement("div");
						d.className = "story-viewer muted ".concat(e, " ").concat(t ? "" : "stopped", " ").concat(T("backButton") ? "with-back-button" : ""), d.setAttribute("data-story-id", n), t = '<div class="head"><div class="left">'.concat(T("backButton") ? '<a class="back">&lsaquo;</a>' : "", '<u class="img" style="background-image:url(').concat(f(r, "photo"), ');"></u><div><strong>').concat(f(r, "name"), '</strong><span class="time">').concat(h, '</span></div></div><div class="right"><span class="time">').concat(h, '</span><span class="loading"></span><a class="close" tabIndex="2">&times;</a></div></div><div class="slides-pointers"><div>').concat(c, "</div></div>"), d.innerHTML = t, m(d.querySelectorAll(".close, .back"), function (e, t) {
							t.onclick = function (e) {
								e.preventDefault(), D.close()
							}
						}), d.appendChild(s), "viewing" === e && S(d.querySelectorAll('[data-index="'.concat(u, '"].active')), !1), m(d.querySelectorAll(".slides-pointers [data-index] > b"), function (e, t) {
							b(t, function () {
								v.nextItem(!1)
							})
						}), "previous" === e ? w(i, d) : i.appendChild(d)
					};
				return {
					show: function (s, e) {
						var a = y("#zuck-modal");
						T("callbacks", "onOpen")(s, function () {
							r.innerHTML = '<div id="zuck-modal-slider-'.concat(C, '" class="slider"></div>');
							var e = v.data[s],
								t = e.currentItem || 0,
								i = y("#zuck-modal-slider-".concat(C));
							o(i), v.internalData.currentStory = s, e.currentItem = t, T("backNative") && (nG.location.hash = "#!".concat(C)), (t = h("previous")) && l(t, "previous"), l(e, "viewing", !0), (e = h("next")) && l(e, "next"), T("autoFullScreen") && a.classList.add("fullscreen");

							function n() {
								a.classList.contains("fullscreen") && T("autoFullScreen") && nG.screen.width <= 1024 && c(a), a.focus()
							}
							T("openEffect") ? (e = y("#".concat(C, ' [data-id="').concat(s, '"] .img')), t = _(e), a.style.marginLeft = "".concat(t[0] + e.offsetWidth / 2, "px"), a.style.marginTop = "".concat(t[1] + e.offsetHeight / 2, "px"), a.style.display = "block", a.slideWidth = y("#zuck-modal .story-viewer").offsetWidth, setTimeout(function () {
								a.classList.add("animated")
							}, 10), setTimeout(function () {
								n()
							}, 300)) : (a.style.display = "block", a.slideWidth = y("#zuck-modal .story-viewer").offsetWidth, n()), T("callbacks", "onView")(s)
						})
					},
					next: function (e) {
						T("callbacks", "onEnd")(v.internalData.currentStory, function () {
							var e = v.internalData.currentStory,
								t = y("#".concat(C, ' [data-id="').concat(e, '"]'));
							t && (t.classList.add("seen"), v.data[e].seen = !0, v.internalData.seenItems[e] = !0, E("seenItems", v.internalData.seenItems), d()), y("#zuck-modal .story-viewer.next") ? g(!0) : D.close()
						})
					},
					close: function () {
						var e = y("#zuck-modal");
						T("callbacks", "onClose")(v.internalData.currentStory, function () {
							T("backNative") && (nG.location.hash = ""), c(e, !0), T("openEffect") ? e.classList.add("closed") : (r.innerHTML = "", e.style.display = "none")
						})
					}
				}
			},
			h = function (e) {
				var t = v.internalData.currentStory;
				return e = "".concat(e, "ElementSibling"), !!(t = t && y("#".concat(C, ' [data-id="').concat(t, '"]'))[e]) && (t = t.getAttribute("data-id"), v.data[t] || !1)
			},
			d = function () {
				m(p.querySelectorAll("#".concat(C, " .story.seen")), function (e, t) {
					var i = v.data[t.getAttribute("data-id")];
					t.parentNode.removeChild(t), v.add(i, !0)
				})
			},
			S = function (e, t) {
				var i = e[1],
					n = e[0],
					s = n.parentNode.parentNode.parentNode;
				if (!i || !n) return !1;
				var a = v.internalData.currentVideoElement;
				if (a && a.pause(), "video" === i.getAttribute("data-type")) {
					var o = i.getElementsByTagName("video")[0];
					if (!o) return v.internalData.currentVideoElement = !1;
					(i = function () {
						o.duration && l(n.getElementsByTagName("b")[0].style, "AnimationDuration", "".concat(o.duration, "s"))
					})(), o.addEventListener("loadedmetadata", i), (v.internalData.currentVideoElement = o).play(), t.target && A(o, s)
				} else v.internalData.currentVideoElement = !1
			},
			P = function () {
				var e = v.internalData.currentVideoElement;
				if (e) try {
					e.pause()
				} catch (e) {}
			},
			A = function (e, t) {
				e.muted = !1, e.volume = 1, e.removeAttribute("muted"), e.play(), e.paused && (e.muted = !0, e.play()), t && t.classList.remove("paused")
			},
			E = function (e, t) {
				try {
					if (T("localStorage")) {
						var i = "zuck-".concat(C, "-").concat(e);
						nG.localStorage[i] = JSON.stringify(t)
					}
				} catch (e) {}
			};
		return v.data = {}, v.internalData = {}, v.internalData.seenItems = (e = "seenItems", !!T("localStorage") && (e = "zuck-".concat(C, "-").concat(e), !!nG.localStorage[e] && JSON.parse(nG.localStorage[e])) || {}), v.add = v.update = function (e, i) {
				var n = f(e, "id"),
					t = y("#".concat(C, ' [data-id="').concat(n, '"]')),
					s = "",
					a = f(e, "items"),
					o = !1;
				v.data[n] = {}, t ? o = t : (o = p.createElement("div")).className = "story", !1 === e.seen && (v.internalData.seenItems[n] = !1, E("seenItems", v.internalData.seenItems)), o.setAttribute("data-id", n), o.setAttribute("data-photo", f(e, "photo")), o.setAttribute("data-last-updated", f(e, "lastUpdated")), s = !1, a[0] && (s = a[0].preview || ""), s = '<a href="'.concat(f(e, "link"), '"><span class="img"><u style="background-image:url(').concat(T("avatars") || !s || "" === s ? f(e, "photo") : s, ')"></u></span><span class="info"><strong>').concat(f(e, "name"), '</strong><span class="time">').concat(x(f(e, "lastUpdated")), '</span></span></a><ul class="items"></ul>'), o.innerHTML = s, u(o), t || (i ? r.appendChild(o) : w(r, o)), m(a, function (e, t) {
					v.addItem(n, t, i)
				}), i || d()
			}, v.next = function () {
				D.next()
			}, v.remove = function (e) {
				(e = y("#".concat(C, ' > [data-id="').concat(e, '"]'))).parentNode.removeChild(e)
			}, v.addItem = function (e, t, i) {
				e = y("#".concat(C, ' > [data-id="').concat(e, '"]'));
				var n = p.createElement("li");
				n.className = f(t, "seen") ? "seen" : "", n.setAttribute("data-id", f(t, "id")), n.innerHTML = '<a href="'.concat(f(t, "src"), '" data-link="').concat(f(t, "link"), '" data-linkText="').concat(f(t, "linkText"), '" data-time="').concat(f(t, "time"), '" data-type="').concat(f(t, "type"), '" data-length="').concat(f(t, "length"), '"><img src="').concat(f(t, "preview"), '"></a>'), t = e.querySelectorAll(".items")[0], i ? t.appendChild(n) : w(t, n),
					function (e) {
						e = e.getAttribute("data-id");
						var t = p.querySelectorAll("#".concat(C, ' [data-id="').concat(e, '"] .items > li')),
							s = [];
						m(t, function (e, t) {
							var i = t.firstElementChild,
								n = i.firstElementChild;
							s.push({
								src: i.getAttribute("href"),
								length: i.getAttribute("data-length"),
								type: i.getAttribute("data-type"),
								time: i.getAttribute("data-time"),
								link: i.getAttribute("data-link"),
								linkText: i.getAttribute("data-linkText"),
								preview: n.getAttribute("src")
							})
						}), v.data[e].items = s
					}(e)
			}, v.removeItem = function (e, t) {
				var i = y("#".concat(C, ' > [data-id="').concat(e, '"] [data-id="').concat(t, '"]'));
				r.parentNode.removeChild(i)
			}, v.navigateItem = v.nextItem = function (e, t) {
				var i = v.internalData.currentStory,
					n = v.data[i].currentItem,
					s = y('#zuck-modal .story-viewer[data-story-id="'.concat(i, '"]')),
					a = "previous" === e ? -1 : 1;
				if (!s || 1 === s.touchMove) return !1;
				var o = s.querySelectorAll('[data-index="'.concat(n, '"]')),
					r = o[0],
					l = o[1],
					c = s.querySelectorAll('[data-index="'.concat(n + a, '"]')),
					u = c[0],
					h = c[1];
				s && u && h ? (n = (n = T("callbacks", "onNavigateItem")) ? T("callbacks", "onNavigateItem") : T("callbacks", "onNextItem"))(i, h.getAttribute("data-story-id"), function () {
					"previous" === e ? (r.classList.remove("seen"), l.classList.remove("seen")) : (r.classList.add("seen"), l.classList.add("seen")), r.classList.remove("active"), l.classList.remove("active"), u.classList.remove("seen"), u.classList.add("active"), h.classList.remove("seen"), h.classList.add("active"), m(s.querySelectorAll(".time"), function (e, t) {
						t.innerText = x(h.getAttribute("data-time"))
					}), v.data[i].currentItem += a, S(c, t)
				}) : s && "previous" !== e && D.next(t)
			},
			function () {
				y("#".concat(C, " .story")) && m(r.querySelectorAll(".story"), function (e, t) {
					u(t)
				}), T("backNative") && (nG.location.hash === "#!".concat(C) && (nG.location.hash = ""), nG.addEventListener("popstate", function (e) {
					nG.location.hash !== "#!".concat(C) && (nG.location.hash = "")
				}, !1)), m(T("stories"), function (e, t) {
					v.add(t, !0)
				}), d();
				var e = T("avatars") ? "user-icon" : "story-preview",
					t = T("list") ? "list" : "carousel";
				return r.className = "stories ".concat(e, " ").concat(t, " ").concat("".concat(T("skin")).toLowerCase()), v
			}()
	}
	var nG, oG;

	function plyrvideore() {
		var e, t;
		"object" == typeof navigator && (e = this, t = function () {
			"use strict";

			function c(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function n(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}

			function e(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}

			function a(e, t, i) {
				return t in e ? Object.defineProperty(e, t, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = i, e
			}

			function p(e, t) {
				return function (e) {
					if (Array.isArray(e)) return e
				}(e) || function (e, t) {
					var i = [],
						n = !0,
						s = !1,
						a = void 0;
					try {
						for (var o, r = e[Symbol.iterator](); !(n = (o = r.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
					} catch (e) {
						s = !0, a = e
					} finally {
						try {
							n || null == r.return || r.return()
						} finally {
							if (s) throw a
						}
					}
					return i
				}(e, t) || function () {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}

			function t(e) {
				return null != e ? e.constructor : null
			}

			function i(e, t) {
				return Boolean(e && t && e instanceof t)
			}

			function s(e) {
				return null == e
			}

			function o(e) {
				return t(e) === Object
			}

			function r(e) {
				return t(e) === String
			}

			function l(e) {
				return Array.isArray(e)
			}

			function u(e) {
				return i(e, NodeList)
			}

			function h(e) {
				return s(e) || (r(e) || l(e) || u(e)) && !e.length || o(e) && !Object.keys(e).length
			}
			var m = {
					nullOrUndefined: s,
					object: o,
					number: function (e) {
						return t(e) === Number && !Number.isNaN(e)
					},
					string: r,
					boolean: function (e) {
						return t(e) === Boolean
					},
					function: function (e) {
						return t(e) === Function
					},
					array: l,
					weakMap: function (e) {
						return i(e, WeakMap)
					},
					nodeList: u,
					element: function (e) {
						return i(e, Element)
					},
					textNode: function (e) {
						return t(e) === Text
					},
					event: function (e) {
						return i(e, Event)
					},
					keyboardEvent: function (e) {
						return i(e, KeyboardEvent)
					},
					cue: function (e) {
						return i(e, window.TextTrackCue) || i(e, window.VTTCue)
					},
					track: function (e) {
						return i(e, TextTrack) || !s(e) && r(e.kind)
					},
					url: function (e) {
						if (i(e, window.URL)) return !0;
						if (!r(e)) return !1;
						var t = e;
						e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
						try {
							return !h(new URL(t).hostname)
						} catch (e) {
							return !1
						}
					},
					empty: h
				},
				d = function () {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function () {
								return e = !0, null
							}
						});
						window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
					} catch (e) {}
					return e
				}();

			function f(t, e, i) {
				var n = this,
					s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
					a = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
					o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
				if (t && "addEventListener" in t && !m.empty(e) && m.function(i)) {
					var r = e.split(" "),
						l = o;
					d && (l = {
						passive: a,
						capture: o
					}), r.forEach(function (e) {
						n && n.eventListeners && s && n.eventListeners.push({
							element: t,
							type: e,
							callback: i,
							options: l
						}), t[s ? "addEventListener" : "removeEventListener"](e, i, l)
					})
				}
			}

			function g(e) {
				f.call(this, e, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "", 2 < arguments.length ? arguments[2] : void 0, !0, !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3], 4 < arguments.length && void 0 !== arguments[4] && arguments[4])
			}

			function v(e) {
				f.call(this, e, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "", 2 < arguments.length ? arguments[2] : void 0, !1, !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3], 4 < arguments.length && void 0 !== arguments[4] && arguments[4])
			}

			function y(s) {
				var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
					o = 2 < arguments.length ? arguments[2] : void 0,
					r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
					l = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
				f.call(this, s, a, function e() {
					v(s, a, e, r, l);
					for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
					o.apply(this, i)
				}, !0, r, l)
			}

			function b(e) {
				var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
					i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
					n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
				if (m.element(e) && !m.empty(t)) {
					var s = new CustomEvent(t, {
						bubbles: i,
						detail: Object.assign({}, n, {
							plyr: this
						})
					});
					e.dispatchEvent(s)
				}
			}

			function w(e, a) {
				var t = e.length ? e : [e];
				Array.from(t).reverse().forEach(function (e, t) {
					var i = 0 < t ? a.cloneNode(!0) : a,
						n = e.parentNode,
						s = e.nextSibling;
					i.appendChild(e), s ? n.insertBefore(i, s) : n.appendChild(i)
				})
			}

			function k(s, e) {
				m.element(s) && !m.empty(e) && Object.entries(e).filter(function (e) {
					var t = p(e, 2)[1];
					return !m.nullOrUndefined(t)
				}).forEach(function (e) {
					var t = p(e, 2),
						i = t[0],
						n = t[1];
					return s.setAttribute(i, n)
				})
			}

			function _(e, t, i) {
				var n = document.createElement(e);
				return m.object(t) && k(n, t), m.string(i) && (n.innerText = i), n
			}

			function x(e, t, i, n) {
				m.element(t) && t.appendChild(_(e, i, n))
			}

			function C(e) {
				m.nodeList(e) || m.array(e) ? Array.from(e).forEach(C) : m.element(e) && m.element(e.parentNode) && e.parentNode.removeChild(e)
			}

			function T(e) {
				if (m.element(e))
					for (var t = e.childNodes.length; 0 < t;) e.removeChild(e.lastChild), --t
			}

			function D(e, t) {
				return m.element(t) && m.element(t.parentNode) && m.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
			}

			function S(e, t) {
				if (!m.string(e) || m.empty(e)) return {};
				var o = {},
					r = t;
				return e.split(",").forEach(function (e) {
					var t = e.trim(),
						i = t.replace(".", ""),
						n = t.replace(/[[\]]/g, "").split("="),
						s = n[0],
						a = 1 < n.length ? n[1].replace(/["']/g, "") : "";
					switch (t.charAt(0)) {
						case ".":
							m.object(r) && m.string(r.class) && (r.class += " ".concat(i)), o.class = i;
							break;
						case "#":
							o.id = t.replace("#", "");
							break;
						case "[":
							o[s] = a
					}
				}), o
			}

			function P(e, t) {
				if (m.element(e)) {
					var i = t;
					m.boolean(i) || (i = !e.hidden), i ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
				}
			}

			function A(e, t, i) {
				if (m.nodeList(e)) return Array.from(e).map(function (e) {
					return A(e, t, i)
				});
				if (m.element(e)) {
					var n = "toggle";
					return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t)
				}
				return !1
			}

			function E(e, t) {
				return m.element(e) && e.classList.contains(t)
			}

			function M(e, t) {
				var i = {
					Element: Element
				};
				return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
					return Array.from(document.querySelectorAll(t)).includes(this)
				}).call(e, t)
			}

			function I(e) {
				return this.elements.container.querySelectorAll(e)
			}

			function N(e) {
				return this.elements.container.querySelector(e)
			}

			function L() {
				var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
					t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
				m.element(e) && (e.focus(), t && A(e, this.config.classNames.tabFocus))
			}
			var z, H, $, O = (z = document.createElement("span"), H = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			}, $ = Object.keys(H).find(function (e) {
				return void 0 !== z.style[e]
			}), !!m.string($) && H[$]);

			function j(e) {
				setTimeout(function () {
					try {
						P(e, !0), e.offsetHeight, P(e, !1)
					} catch (e) {}
				}, 0)
			}
			var W, F = {
					isIE: !!document.documentMode,
					isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
					isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
					isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
				},
				R = {
					"audio/ogg": "vorbis",
					"audio/wav": "1",
					"video/webm": "vp8, vorbis",
					"video/mp4": "avc1.42E01E, mp4a.40.2",
					"video/ogg": "theora"
				},
				q = {
					audio: "canPlayType" in document.createElement("audio"),
					video: "canPlayType" in document.createElement("video"),
					check: function (e, t, i) {
						var n = F.isIPhone && i && q.playsinline,
							s = q[e] || "html5" !== t;
						return {
							api: s,
							ui: s && q.rangeInput && ("video" !== e || !F.isIPhone || n)
						}
					},
					pip: !(F.isIPhone || !m.function(_("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || _("video").disablePictureInPicture)),
					airplay: m.function(window.WebKitPlaybackTargetAvailabilityEvent),
					playsinline: "playsInline" in document.createElement("video"),
					mime: function (e) {
						var t, i = p(e.split("/"), 1)[0];
						if (!this.isHTML5 || i !== this.type) return !1;
						e && e.includes("codecs=") ? t = e : "audio/mpeg" === e ? t = "audio/mpeg;" : e in R && (t = "".concat(e, '; codecs="').concat(R[e], '"'));
						try {
							return Boolean(t && this.media.canPlayType(t).replace(/no/, ""))
						} catch (e) {
							return !1
						}
					},
					textTracks: "textTracks" in document.createElement("video"),
					rangeInput: ((W = document.createElement("input")).type = "range") === W.type,
					touch: "ontouchstart" in document.documentElement,
					transitions: !1 !== O,
					reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
				},
				B = {
					getSources: function () {
						var t = this;
						return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (e) {
							return q.mime.call(t, e.getAttribute("type"))
						}) : []
					},
					getQualityOptions: function () {
						return B.getSources.call(this).map(function (e) {
							return Number(e.getAttribute("size"))
						}).filter(Boolean)
					},
					extend: function () {
						if (this.isHTML5) {
							var r = this;
							Object.defineProperty(r.media, "quality", {
								get: function () {
									var e = B.getSources.call(r).find(function (e) {
										return e.getAttribute("src") === r.source
									});
									return e && Number(e.getAttribute("size"))
								},
								set: function (t) {
									var e = B.getSources.call(r).find(function (e) {
										return Number(e.getAttribute("size")) === t
									});
									if (e) {
										var i = r.media,
											n = i.currentTime,
											s = i.paused,
											a = i.preload,
											o = i.readyState;
										r.media.src = e.getAttribute("src"), "none" === a && !o || (r.once("loadedmetadata", function () {
											r.currentTime = n, s || r.play()
										}), r.media.load()), b.call(r, r.media, "qualitychange", !1, {
											quality: t
										})
									}
								}
							})
						}
					},
					cancelRequests: function () {
						this.isHTML5 && (C(B.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
					}
				};

			function U(i) {
				return m.array(i) ? i.filter(function (e, t) {
					return i.indexOf(e) === t
				}) : i
			}

			function Y(e, t) {
				return t.split(".").reduce(function (e, t) {
					return e && e[t]
				}, e)
			}

			function V() {
				for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length, i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				if (!i.length) return t;
				var s = i.shift();
				return m.object(s) ? (Object.keys(s).forEach(function (e) {
					m.object(s[e]) ? (Object.keys(t).includes(e) || Object.assign(t, a({}, e, {})), V(t[e], s[e])) : Object.assign(t, a({}, e, s[e]))
				}), V.apply(void 0, [t].concat(i))) : t
			}

			function K(e) {
				for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
				return m.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
					return i[t].toString()
				})
			}

			function X(e, t, i) {
				var n = 1 < arguments.length && void 0 !== t ? t : "",
					s = 2 < arguments.length && void 0 !== i ? i : "";
				return (0 < arguments.length && void 0 !== e ? e : "").replace(new RegExp(n.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), s.toString())
			}

			function G(e) {
				return (0 < arguments.length && void 0 !== e ? e : "").toString().replace(/\w\S*/g, function (e) {
					return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
				})
			}

			function Q(e) {
				var t = document.createElement("div");
				return t.appendChild(e), t.innerHTML
			}

			function J() {
				var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
					t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				if (m.empty(e) || m.empty(t)) return "";
				var s = Y(t.i18n, e);
				if (m.empty(s)) return Object.keys(Z).includes(e) ? Z[e] : "";
				var i = {
					"{seektime}": t.seekTime,
					"{title}": t.title
				};
				return Object.entries(i).forEach(function (e) {
					var t = p(e, 2),
						i = t[0],
						n = t[1];
					s = X(s, i, n)
				}), s
			}
			var Z = {
					pip: "PIP",
					airplay: "AirPlay",
					html5: "HTML5",
					vimeo: "Vimeo",
					youtube: "YouTube"
				},
				ee = (e(te, [{
					key: "get",
					value: function (e) {
						if (!te.supported || !this.enabled) return null;
						var t = window.localStorage.getItem(this.key);
						if (m.empty(t)) return null;
						var i = JSON.parse(t);
						return m.string(e) && e.length ? i[e] : i
					}
				}, {
					key: "set",
					value: function (e) {
						if (te.supported && this.enabled && m.object(e)) {
							var t = this.get();
							m.empty(t) && (t = {}), V(t, e), window.localStorage.setItem(this.key, JSON.stringify(t))
						}
					}
				}], [{
					key: "supported",
					get: function () {
						try {
							return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
						} catch (e) {
							return !1
						}
					}
				}]), te);

			function te(e) {
				c(this, te), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key
			}

			function ie(e, t) {
				var s = 1 < arguments.length && void 0 !== t ? t : "text";
				return new Promise(function (t, i) {
					try {
						var n = new XMLHttpRequest;
						if (!("withCredentials" in n)) return;
						n.addEventListener("load", function () {
							if ("text" === s) try {
								t(JSON.parse(n.responseText))
							} catch (e) {
								t(n.responseText)
							} else t(n.response)
						}), n.addEventListener("error", function () {
							throw new Error(n.status)
						}), n.open("GET", e, !0), n.responseType = s, n.send()
					} catch (e) {
						i(e)
					}
				})
			}

			function ne(e, t) {
				if (m.string(e)) {
					var i = m.string(t),
						n = function () {
							return null !== document.getElementById(t)
						},
						s = function (e, t) {
							e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e)
						};
					if (!i || !n()) {
						var a = ee.supported,
							o = document.createElement("div");
						if (o.setAttribute("hidden", ""), i && o.setAttribute("id", t), a) {
							var r = window.localStorage.getItem("".concat("cache", "-").concat(t));
							if (null !== r) {
								var l = JSON.parse(r);
								s(o, l.content)
							}
						}
						ie(e).then(function (e) {
							m.empty(e) || (a && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
								content: e
							})), s(o, e))
						}).catch(function () {})
					}
				}
			}
			var se = function (e) {
					return parseInt(e / 60 / 60 % 60, 10)
				},
				ae = function (e) {
					return parseInt(e / 60 % 60, 10)
				},
				oe = function (e) {
					return parseInt(e % 60, 10)
				};

			function re(e, t, i) {
				var n = 0 < arguments.length && void 0 !== e ? e : 0,
					s = 1 < arguments.length && void 0 !== t && t,
					a = 2 < arguments.length && void 0 !== i && i;
				if (!m.number(n)) return re(null, s, a);

				function o(e) {
					return "0".concat(e).slice(-2)
				}
				var r = se(n),
					l = ae(n),
					c = oe(n);
				return r = s || 0 < r ? "".concat(r, ":") : "", "".concat(a && 0 < n ? "-" : "").concat(r).concat(o(l), ":").concat(o(c))
			}
			var le = {
				getIconUrl: function () {
					var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || F.isIE && !window.svg4everybody;
					return {
						url: this.config.iconUrl,
						cors: e
					}
				},
				findElements: function () {
					try {
						return this.elements.controls = N.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
							play: I.call(this, this.config.selectors.buttons.play),
							pause: N.call(this, this.config.selectors.buttons.pause),
							restart: N.call(this, this.config.selectors.buttons.restart),
							rewind: N.call(this, this.config.selectors.buttons.rewind),
							fastForward: N.call(this, this.config.selectors.buttons.fastForward),
							mute: N.call(this, this.config.selectors.buttons.mute),
							pip: N.call(this, this.config.selectors.buttons.pip),
							airplay: N.call(this, this.config.selectors.buttons.airplay),
							settings: N.call(this, this.config.selectors.buttons.settings),
							captions: N.call(this, this.config.selectors.buttons.captions),
							fullscreen: N.call(this, this.config.selectors.buttons.fullscreen)
						}, this.elements.progress = N.call(this, this.config.selectors.progress), this.elements.inputs = {
							seek: N.call(this, this.config.selectors.inputs.seek),
							volume: N.call(this, this.config.selectors.inputs.volume)
						}, this.elements.display = {
							buffer: N.call(this, this.config.selectors.display.buffer),
							currentTime: N.call(this, this.config.selectors.display.currentTime),
							duration: N.call(this, this.config.selectors.display.duration)
						}, m.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
					} catch (e) {
						return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
					}
				},
				createIcon: function (e, t) {
					var i = le.getIconUrl.call(this),
						n = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
						s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
					k(s, V(t, {
						role: "presentation",
						focusable: "false"
					}));
					var a = document.createElementNS("http://www.w3.org/2000/svg", "use"),
						o = "".concat(n, "-").concat(e);
					return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), s.appendChild(a), s
				},
				createLabel: function (e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
						i = J(e, this.config);
					return _("span", Object.assign({}, t, {
						class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
					}), i)
				},
				createBadge: function (e) {
					if (m.empty(e)) return null;
					var t = _("span", {
						class: this.config.classNames.menu.value
					});
					return t.appendChild(_("span", {
						class: this.config.classNames.menu.badge
					}, e)), t
				},
				createButton: function (e, t) {
					var i = Object.assign({}, t),
						n = function (e) {
							var t = (0 < arguments.length && void 0 !== e ? e : "").toString();
							return (t = function (e) {
								var t = (0 < arguments.length && void 0 !== e ? e : "").toString();
								return t = X(t, "-", " "), t = X(t, "_", " "), X(t = G(t), " ", "")
							}(t)).charAt(0).toLowerCase() + t.slice(1)
						}(e),
						s = {
							element: "button",
							toggle: !1,
							label: null,
							icon: null,
							labelPressed: null,
							iconPressed: null
						};
					switch (["element", "icon", "label"].forEach(function (e) {
						Object.keys(i).includes(e) && (s[e] = i[e], delete i[e])
					}), "button" !== s.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.includes(this.config.classNames.control) || (i.class += " ".concat(this.config.classNames.control)) : i.class = this.config.classNames.control, e) {
						case "play":
							s.toggle = !0, s.label = "play", s.labelPressed = "pause", s.icon = "play", s.iconPressed = "pause";
							break;
						case "mute":
							s.toggle = !0, s.label = "mute", s.labelPressed = "unmute", s.icon = "volume", s.iconPressed = "muted";
							break;
						case "captions":
							s.toggle = !0, s.label = "enableCaptions", s.labelPressed = "disableCaptions", s.icon = "captions-off", s.iconPressed = "captions-on";
							break;
						case "fullscreen":
							s.toggle = !0, s.label = "enterFullscreen", s.labelPressed = "exitFullscreen", s.icon = "enter-fullscreen", s.iconPressed = "exit-fullscreen";
							break;
						case "play-large":
							i.class += " ".concat(this.config.classNames.control, "--overlaid"), n = "play", s.label = "play", s.icon = "play";
							break;
						default:
							m.empty(s.label) && (s.label = n), m.empty(s.icon) && (s.icon = e)
					}
					var a = _(s.element);
					return s.toggle ? (a.appendChild(le.createIcon.call(this, s.iconPressed, {
						class: "icon--pressed"
					})), a.appendChild(le.createIcon.call(this, s.icon, {
						class: "icon--not-pressed"
					})), a.appendChild(le.createLabel.call(this, s.labelPressed, {
						class: "label--pressed"
					})), a.appendChild(le.createLabel.call(this, s.label, {
						class: "label--not-pressed"
					}))) : (a.appendChild(le.createIcon.call(this, s.icon)), a.appendChild(le.createLabel.call(this, s.label))), V(i, S(this.config.selectors.buttons[n], i)), k(a, i), "play" === n ? (m.array(this.elements.buttons[n]) || (this.elements.buttons[n] = []), this.elements.buttons[n].push(a)) : this.elements.buttons[n] = a, a
				},
				createRange: function (e, t) {
					var i = _("input", V(S(this.config.selectors.inputs[e]), {
						type: "range",
						min: 0,
						max: 100,
						step: .01,
						value: 0,
						autocomplete: "off",
						role: "slider",
						"aria-label": J(e, this.config),
						"aria-valuemin": 0,
						"aria-valuemax": 100,
						"aria-valuenow": 0
					}, t));
					return this.elements.inputs[e] = i, le.updateRangeFill.call(this, i), i
				},
				createProgress: function (e, t) {
					var i = _("progress", V(S(this.config.selectors.display[e]), {
						min: 0,
						max: 100,
						value: 0,
						role: "presentation",
						"aria-hidden": !0
					}, t));
					if ("volume" !== e) {
						i.appendChild(_("span", null, "0"));
						var n = {
								played: "played",
								buffer: "buffered"
							}[e],
							s = n ? J(n, this.config) : "";
						i.innerText = "% ".concat(s.toLowerCase())
					}
					return this.elements.display[e] = i
				},
				createTime: function (e) {
					var t = S(this.config.selectors.display[e]),
						i = _("div", V(t, {
							class: "".concat(this.config.classNames.display.time, " ").concat(t.class ? t.class : "").trim(),
							"aria-label": J(e, this.config)
						}), "00:00");
					return this.elements.display[e] = i
				},
				bindMenuItemShortcuts: function (n, s) {
					var a = this;
					g(n, "keydown keyup", function (e) {
						if ([32, 38, 39, 40].includes(e.which) && (e.preventDefault(), e.stopPropagation(), "keydown" !== e.type)) {
							var t, i = M(n, '[role="menuitemradio"]');
							!i && [32, 39].includes(e.which) ? le.showMenuPanel.call(a, s, !0) : 32 !== e.which && (40 === e.which || i && 39 === e.which ? (t = n.nextElementSibling, m.element(t) || (t = n.parentNode.firstElementChild)) : (t = n.previousElementSibling, m.element(t) || (t = n.parentNode.lastElementChild)), L.call(a, t, !0))
						}
					}, !1), g(n, "keyup", function (e) {
						13 === e.which && le.focusFirstMenuItem.call(a, null, !0)
					})
				},
				createMenuItem: function (e) {
					var t = this,
						i = e.value,
						n = e.list,
						s = e.type,
						a = e.title,
						o = e.badge,
						r = void 0 === o ? null : o,
						l = e.checked,
						c = void 0 !== l && l,
						u = S(this.config.selectors.inputs[s]),
						h = _("button", V(u, {
							type: "button",
							role: "menuitemradio",
							class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
							"aria-checked": c,
							value: i
						})),
						d = _("span");
					d.innerHTML = a, m.element(r) && d.appendChild(r), h.appendChild(d), Object.defineProperty(h, "checked", {
						enumerable: !0,
						get: function () {
							return "true" === h.getAttribute("aria-checked")
						},
						set: function (e) {
							e && Array.from(h.parentNode.children).filter(function (e) {
								return M(e, '[role="menuitemradio"]')
							}).forEach(function (e) {
								return e.setAttribute("aria-checked", "false")
							}), h.setAttribute("aria-checked", e ? "true" : "false")
						}
					}), this.listeners.bind(h, "click keyup", function (e) {
						if (!m.keyboardEvent(e) || 32 === e.which) {
							switch (e.preventDefault(), e.stopPropagation(), h.checked = !0, s) {
								case "language":
									t.currentTrack = Number(i);
									break;
								case "quality":
									t.quality = i;
									break;
								case "speed":
									t.speed = parseFloat(i)
							}
							le.showMenuPanel.call(t, "home", m.keyboardEvent(e))
						}
					}, s, !1), le.bindMenuItemShortcuts.call(this, h, s), n.appendChild(h)
				},
				formatTime: function () {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
						t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
					return m.number(e) ? re(e, 0 < se(this.duration), t) : e
				},
				updateTimeDisplay: function () {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
						t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
						i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
					m.element(e) && m.number(t) && (e.innerText = le.formatTime(t, i))
				},
				updateVolume: function () {
					this.supported.ui && (m.element(this.elements.inputs.volume) && le.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), m.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
				},
				setRange: function (e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
					m.element(e) && (e.value = t, le.updateRangeFill.call(this, e))
				},
				updateProgress: function (e) {
					var a = this;
					if (this.supported.ui && m.event(e)) {
						var t, i, n = 0;
						if (e) switch (e.type) {
							case "timeupdate":
							case "seeking":
							case "seeked":
								t = this.currentTime, i = this.duration, n = 0 === t || 0 === i || Number.isNaN(t) || Number.isNaN(i) ? 0 : (t / i * 100).toFixed(2), "timeupdate" === e.type && le.setRange.call(this, this.elements.inputs.seek, n);
								break;
							case "playing":
							case "progress":
								! function (e, t) {
									var i = m.number(t) ? t : 0,
										n = m.element(e) ? e : a.elements.display.buffer;
									if (m.element(n)) {
										n.value = i;
										var s = n.getElementsByTagName("span")[0];
										m.element(s) && (s.childNodes[0].nodeValue = i)
									}
								}(this.elements.display.buffer, 100 * this.buffered)
						}
					}
				},
				updateRangeFill: function (e) {
					var t = m.event(e) ? e.target : e;
					if (m.element(t) && "range" === t.getAttribute("type")) {
						if (M(t, this.config.selectors.inputs.seek)) {
							t.setAttribute("aria-valuenow", this.currentTime);
							var i = le.formatTime(this.currentTime),
								n = le.formatTime(this.duration),
								s = J("seekLabel", this.config);
							t.setAttribute("aria-valuetext", s.replace("{currentTime}", i).replace("{duration}", n))
						} else if (M(t, this.config.selectors.inputs.volume)) {
							var a = 100 * t.value;
							t.setAttribute("aria-valuenow", a), t.setAttribute("aria-valuetext", "".concat(a.toFixed(1), "%"))
						} else t.setAttribute("aria-valuenow", t.value);
						F.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
					}
				},
				updateSeekTooltip: function (e) {
					var t = this;
					if (this.config.tooltips.seek && m.element(this.elements.inputs.seek) && m.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
						var i = 0,
							n = this.elements.progress.getBoundingClientRect(),
							s = "".concat(this.config.classNames.tooltip, "--visible"),
							a = function (e) {
								A(t.elements.display.seekTooltip, s, e)
							};
						if (this.touch) a(!1);
						else {
							if (m.event(e)) i = 100 / n.width * (e.pageX - n.left);
							else {
								if (!E(this.elements.display.seekTooltip, s)) return;
								i = parseFloat(this.elements.display.seekTooltip.style.left, 10)
							}
							i < 0 ? i = 0 : 100 < i && (i = 100), le.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = "".concat(i, "%"), m.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && a("mouseenter" === e.type)
						}
					}
				},
				timeUpdate: function (e) {
					var t = !m.element(this.elements.display.duration) && this.config.invertTime;
					le.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || le.updateProgress.call(this, e)
				},
				durationUpdate: function () {
					if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
						if (this.duration >= Math.pow(2, 32)) return P(this.elements.display.currentTime, !0), void P(this.elements.progress, !0);
						m.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
						var e = m.element(this.elements.display.duration);
						!e && this.config.displayDuration && this.paused && le.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && le.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), le.updateSeekTooltip.call(this)
					}
				},
				toggleMenuButton: function (e, t) {
					P(this.elements.settings.buttons[e], !t)
				},
				updateSetting: function (e, t, i) {
					var n = this.elements.settings.panels[e],
						s = null,
						a = t;
					if ("captions" === e) s = this.currentTrack;
					else {
						if (s = m.empty(i) ? this[e] : i, m.empty(s) && (s = this.config[e].default), !m.empty(this.options[e]) && !this.options[e].includes(s)) return void this.debug.warn("Unsupported value of '".concat(s, "' for ").concat(e));
						if (!this.config[e].options.includes(s)) return void this.debug.warn("Disabled value of '".concat(s, "' for ").concat(e))
					}
					if (m.element(a) || (a = n && n.querySelector('[role="menu"]')), m.element(a)) {
						this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = le.getLabel.call(this, e, s);
						var o = a && a.querySelector('[value="'.concat(s, '"]'));
						m.element(o) && (o.checked = !0)
					}
				},
				getLabel: function (e, t) {
					switch (e) {
						case "speed":
							return 1 === t ? J("normal", this.config) : "".concat(t, "&times;");
						case "quality":
							if (m.number(t)) {
								var i = J("qualityLabel.".concat(t), this.config);
								return i.length ? i : "".concat(t, "p")
							}
							return G(t);
						case "captions":
							return de.getLabel.call(this);
						default:
							return null
					}
				},
				setQualityMenu: function (e) {
					var n = this;
					if (m.element(this.elements.settings.panels.quality)) {
						var i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
						m.array(e) && (this.options.quality = U(e).filter(function (e) {
							return n.config.quality.options.includes(e)
						}));
						var t = !m.empty(this.options.quality) && 1 < this.options.quality.length;
						le.toggleMenuButton.call(this, "quality", t), T(i), le.checkMenu.call(this), t && (this.options.quality.sort(function (e, t) {
							var i = n.config.quality.options;
							return i.indexOf(e) > i.indexOf(t) ? 1 : -1
						}).forEach(function (e) {
							var t;
							le.createMenuItem.call(n, {
								value: e,
								list: i,
								type: "quality",
								title: le.getLabel.call(n, "quality", e),
								badge: (t = J("qualityBadge.".concat(e), n.config)).length ? le.createBadge.call(n, t) : null
							})
						}), le.updateSetting.call(this, "quality", i))
					}
				},
				setCaptionsMenu: function () {
					var i = this;
					if (m.element(this.elements.settings.panels.captions)) {
						var n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
							e = de.getTracks.call(this),
							t = Boolean(e.length);
						if (le.toggleMenuButton.call(this, "captions", t), T(n), le.checkMenu.call(this), t) {
							var s = e.map(function (e, t) {
								return {
									value: t,
									checked: i.captions.toggled && i.currentTrack === t,
									title: de.getLabel.call(i, e),
									badge: e.language && le.createBadge.call(i, e.language.toUpperCase()),
									list: n,
									type: "language"
								}
							});
							s.unshift({
								value: -1,
								checked: !this.captions.toggled,
								title: J("disabled", this.config),
								list: n,
								type: "language"
							}), s.forEach(le.createMenuItem.bind(this)), le.updateSetting.call(this, "captions", n)
						}
					}
				},
				setSpeedMenu: function (e) {
					var t = this;
					if (m.element(this.elements.settings.panels.speed)) {
						var i = this.elements.settings.panels.speed.querySelector('[role="menu"]');
						m.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
							return t.config.speed.options.includes(e)
						});
						var n = !m.empty(this.options.speed) && 1 < this.options.speed.length;
						le.toggleMenuButton.call(this, "speed", n), T(i), le.checkMenu.call(this), n && (this.options.speed.forEach(function (e) {
							le.createMenuItem.call(t, {
								value: e,
								list: i,
								type: "speed",
								title: le.getLabel.call(t, "speed", e)
							})
						}), le.updateSetting.call(this, "speed", i))
					}
				},
				checkMenu: function () {
					var e = this.elements.settings.buttons,
						t = !m.empty(e) && Object.values(e).some(function (e) {
							return !e.hidden
						});
					P(this.elements.settings.menu, !t)
				},
				focusFirstMenuItem: function (e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
					if (!this.elements.settings.popup.hidden) {
						var i = e;
						m.element(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
							return !e.hidden
						}));
						var n = i.querySelector('[role^="menuitem"]');
						L.call(this, n, t)
					}
				},
				toggleMenu: function (e) {
					var t = this.elements.settings.popup,
						i = this.elements.buttons.settings;
					if (m.element(t) && m.element(i)) {
						var n = t.hidden,
							s = n;
						if (m.boolean(e)) s = e;
						else if (m.keyboardEvent(e) && 27 === e.which) s = !1;
						else if (m.event(e)) {
							var a = t.contains(e.target);
							if (a || !a && e.target !== i && s) return
						}
						i.setAttribute("aria-expanded", s), P(t, !s), A(this.elements.container, this.config.classNames.menu.open, s), s && m.keyboardEvent(e) ? le.focusFirstMenuItem.call(this, null, !0) : s || n || L.call(this, i, m.keyboardEvent(e))
					}
				},
				getMenuSize: function (e) {
					var t = e.cloneNode(!0);
					t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
					var i = t.scrollWidth,
						n = t.scrollHeight;
					return C(t), {
						width: i,
						height: n
					}
				},
				showMenuPanel: function () {
					var i = this,
						e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
						t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
						n = document.getElementById("plyr-settings-".concat(this.id, "-").concat(e));
					if (m.element(n)) {
						var s = n.parentNode,
							a = Array.from(s.children).find(function (e) {
								return !e.hidden
							});
						if (q.transitions && !q.reducedMotion) {
							s.style.width = "".concat(a.scrollWidth, "px"), s.style.height = "".concat(a.scrollHeight, "px");
							var o = le.getMenuSize.call(this, n);
							g.call(this, s, O, function e(t) {
								t.target === s && ["width", "height"].includes(t.propertyName) && (s.style.width = "", s.style.height = "", v.call(i, s, O, e))
							}), s.style.width = "".concat(o.width, "px"), s.style.height = "".concat(o.height, "px")
						}
						P(a, !0), P(n, !1), le.focusFirstMenuItem.call(this, n, t)
					}
				},
				setDownloadLink: function () {
					var e = this.elements.buttons.download;
					m.element(e) && e.setAttribute("href", this.download)
				},
				create: function (o) {
					var r = this,
						e = _("div", S(this.config.selectors.controls.wrapper));
					if (this.config.controls.includes("restart") && e.appendChild(le.createButton.call(this, "restart")), this.config.controls.includes("rewind") && e.appendChild(le.createButton.call(this, "rewind")), this.config.controls.includes("play") && e.appendChild(le.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && e.appendChild(le.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
						var t = _("div", S(this.config.selectors.progress));
						if (t.appendChild(le.createRange.call(this, "seek", {
								id: "plyr-seek-".concat(o.id)
							})), t.appendChild(le.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
							var i = _("span", {
								class: this.config.classNames.tooltip
							}, "00:00");
							t.appendChild(i), this.elements.display.seekTooltip = i
						}
						this.elements.progress = t, e.appendChild(this.elements.progress)
					}
					if (this.config.controls.includes("current-time") && e.appendChild(le.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && e.appendChild(le.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
						var n = _("div", {
							class: "plyr__volume"
						});
						if (this.config.controls.includes("mute") && n.appendChild(le.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
							var s = {
								max: 1,
								step: .05,
								value: this.config.volume
							};
							n.appendChild(le.createRange.call(this, "volume", V(s, {
								id: "plyr-volume-".concat(o.id)
							}))), this.elements.volume = n
						}
						e.appendChild(n)
					}
					if (this.config.controls.includes("captions") && e.appendChild(le.createButton.call(this, "captions")), this.config.controls.includes("settings") && !m.empty(this.config.settings)) {
						var a = _("div", {
							class: "plyr__menu",
							hidden: ""
						});
						a.appendChild(le.createButton.call(this, "settings", {
							"aria-haspopup": !0,
							"aria-controls": "plyr-settings-".concat(o.id),
							"aria-expanded": !1
						}));
						var l = _("div", {
								class: "plyr__menu__container",
								id: "plyr-settings-".concat(o.id),
								hidden: ""
							}),
							c = _("div"),
							u = _("div", {
								id: "plyr-settings-".concat(o.id, "-home")
							}),
							h = _("div", {
								role: "menu"
							});
						u.appendChild(h), c.appendChild(u), this.elements.settings.panels.home = u, this.config.settings.forEach(function (e) {
							var t = _("button", V(S(r.config.selectors.buttons.settings), {
								type: "button",
								class: "".concat(r.config.classNames.control, " ").concat(r.config.classNames.control, "--forward"),
								role: "menuitem",
								"aria-haspopup": !0,
								hidden: ""
							}));
							le.bindMenuItemShortcuts.call(r, t, e), g(t, "click", function () {
								le.showMenuPanel.call(r, e, !1)
							});
							var i = _("span", null, J(e, r.config)),
								n = _("span", {
									class: r.config.classNames.menu.value
								});
							n.innerHTML = o[e], i.appendChild(n), t.appendChild(i), h.appendChild(t);
							var s = _("div", {
									id: "plyr-settings-".concat(o.id, "-").concat(e),
									hidden: ""
								}),
								a = _("button", {
									type: "button",
									class: "".concat(r.config.classNames.control, " ").concat(r.config.classNames.control, "--back")
								});
							a.appendChild(_("span", {
								"aria-hidden": !0
							}, J(e, r.config))), a.appendChild(_("span", {
								class: r.config.classNames.hidden
							}, J("menuBack", r.config))), g(s, "keydown", function (e) {
								37 === e.which && (e.preventDefault(), e.stopPropagation(), le.showMenuPanel.call(r, "home", !0))
							}, !1), g(a, "click", function () {
								le.showMenuPanel.call(r, "home", !1)
							}), s.appendChild(a), s.appendChild(_("div", {
								role: "menu"
							})), c.appendChild(s), r.elements.settings.buttons[e] = t, r.elements.settings.panels[e] = s
						}), l.appendChild(c), a.appendChild(l), e.appendChild(a), this.elements.settings.popup = l, this.elements.settings.menu = a
					}
					if (this.config.controls.includes("pip") && q.pip && e.appendChild(le.createButton.call(this, "pip")), this.config.controls.includes("airplay") && q.airplay && e.appendChild(le.createButton.call(this, "airplay")), this.config.controls.includes("download")) {
						var d = {
								element: "a",
								href: this.download,
								target: "_blank"
							},
							p = this.config.urls.download;
						!m.url(p) && this.isEmbed && V(d, {
							icon: "logo-".concat(this.provider),
							label: this.provider
						}), e.appendChild(le.createButton.call(this, "download", d))
					}
					return this.config.controls.includes("fullscreen") && e.appendChild(le.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(le.createButton.call(this, "play-large")), this.elements.controls = e, this.isHTML5 && le.setQualityMenu.call(this, B.getQualityOptions.call(this)), le.setSpeedMenu.call(this), e
				},
				inject: function () {
					var i = this;
					if (this.config.loadSprite) {
						var e = le.getIconUrl.call(this);
						e.cors && ne(e.url, "sprite-plyr")
					}
					this.id = Math.floor(1e4 * Math.random());
					var t = null;
					this.elements.controls = null;
					var n = {
							id: this.id,
							seektime: this.config.seekTime,
							title: this.config.title
						},
						s = !0;
					m.function(this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), m.element(this.config.controls) || m.string(this.config.controls) ? t = this.config.controls : (t = le.create.call(this, {
						id: this.id,
						seektime: this.config.seekTime,
						speed: this.speed,
						quality: this.quality,
						captions: de.getLabel.call(this)
					}), s = !1);

					function a(e) {
						var s = e;
						return Object.entries(n).forEach(function (e) {
							var t = p(e, 2),
								i = t[0],
								n = t[1];
							s = X(s, "{".concat(i, "}"), n)
						}), s
					}
					var o;
					if (s && (m.string(this.config.controls) ? t = a(t) : m.element(t) && (t.innerHTML = a(t.innerHTML))), m.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), m.element(o) || (o = this.elements.container), o[m.element(t) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", t), m.element(this.elements.controls) || le.findElements.call(this), !m.empty(this.elements.buttons)) {
						var r = function (e) {
							var t = i.config.classNames.controlPressed;
							Object.defineProperty(e, "pressed", {
								enumerable: !0,
								get: function () {
									return E(e, t)
								},
								set: function () {
									A(e, t, 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
								}
							})
						};
						Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
							m.array(e) || m.nodeList(e) ? Array.from(e).filter(Boolean).forEach(r) : r(e)
						})
					}
					if (window.navigator.userAgent.includes("Edge") && j(o), this.config.tooltips.controls) {
						var l = this.config,
							c = l.classNames,
							u = l.selectors,
							h = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
							d = I.call(this, h);
						Array.from(d).forEach(function (e) {
							A(e, i.config.classNames.hidden, !1), A(e, i.config.classNames.tooltip, !0)
						})
					}
				}
			};

			function ce(e, t) {
				var i = e;
				if (!(1 < arguments.length && void 0 !== t) || t) {
					var n = document.createElement("a");
					n.href = i, i = n.href
				}
				try {
					return new URL(i)
				} catch (e) {
					return null
				}
			}

			function ue(e) {
				var s = new URLSearchParams;
				return m.object(e) && Object.entries(e).forEach(function (e) {
					var t = p(e, 2),
						i = t[0],
						n = t[1];
					s.set(i, n)
				}), s
			}

			function he() {}
			var de = {
					setup: function () {
						if (this.supported.ui)
							if (!this.isVideo || this.isYouTube || this.isHTML5 && !q.textTracks) m.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && le.setCaptionsMenu.call(this);
							else {
								var e, t;
								if (m.element(this.elements.captions) || (this.elements.captions = _("div", S(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, m.element(e) && m.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), F.isIE && window.URL) {
									var i = this.media.querySelectorAll("track");
									Array.from(i).forEach(function (t) {
										var e = t.getAttribute("src"),
											i = ce(e);
										null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && ie(e, "blob").then(function (e) {
											t.setAttribute("src", window.URL.createObjectURL(e))
										}).catch(function () {
											C(t)
										})
									})
								}
								var n = U((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
										return e.split("-")[0]
									})),
									s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
								"auto" === s && (s = p(n, 1)[0]);
								var a = this.storage.get("captions");
								if (m.boolean(a) || (a = this.config.captions.active), Object.assign(this.captions, {
										toggled: !1,
										active: a,
										language: s,
										languages: n
									}), this.isHTML5) {
									var o = this.config.captions.update ? "addtrack removetrack" : "removetrack";
									g.call(this, this.media.textTracks, o, de.update.bind(this))
								}
								setTimeout(de.update.bind(this), 0)
							}
					},
					update: function () {
						var t = this,
							e = de.getTracks.call(this, !0),
							i = this.captions,
							n = i.active,
							s = i.language,
							a = i.meta,
							o = i.currentTrackNode,
							r = Boolean(e.find(function (e) {
								return e.language === s
							}));
						this.isHTML5 && this.isVideo && e.filter(function (e) {
							return !a.get(e)
						}).forEach(function (e) {
							t.debug.log("Track added", e), a.set(e, {
								default: "showing" === e.mode
							}), e.mode = "hidden", g.call(t, e, "cuechange", function () {
								return de.updateCues.call(t)
							})
						}), (r && this.language !== s || !e.includes(o)) && (de.setLanguage.call(this, s), de.toggle.call(this, n && r)), A(this.elements.container, this.config.classNames.captions.enabled, !m.empty(e)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && le.setCaptionsMenu.call(this)
					},
					toggle: function (e) {
						var t, i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
						if (this.supported.ui) {
							var n = this.captions.toggled,
								s = this.config.classNames.captions.active,
								a = m.nullOrUndefined(e) ? !n : e;
							if (a !== n) {
								if (i || (this.captions.active = a, this.storage.set({
										captions: a
									})), !this.language && a && !i) {
									var o = de.getTracks.call(this),
										r = de.findTrack.call(this, [this.captions.language].concat(function (e) {
											if (Array.isArray(e)) {
												for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
												return i
											}
										}(t = this.captions.languages) || function (e) {
											if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
										}(t) || function () {
											throw new TypeError("Invalid attempt to spread non-iterable instance")
										}()), !0);
									return this.captions.language = r.language, void de.set.call(this, o.indexOf(r))
								}
								this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), A(this.elements.container, s, a), this.captions.toggled = a, le.updateSetting.call(this, "captions"), b.call(this, this.media, a ? "captionsenabled" : "captionsdisabled")
							}
						}
					},
					set: function (e) {
						var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
							i = de.getTracks.call(this);
						if (-1 !== e)
							if (m.number(e))
								if (e in i) {
									if (this.captions.currentTrack !== e) {
										var n = i[this.captions.currentTrack = e],
											s = (n || {}).language;
										this.captions.currentTrackNode = n, le.updateSetting.call(this, "captions"), t || (this.captions.language = s, this.storage.set({
											language: s
										})), this.isVimeo && this.embed.enableTextTrack(s), b.call(this, this.media, "languagechange")
									}
									de.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && de.updateCues.call(this)
								} else this.debug.warn("Track not found", e);
						else this.debug.warn("Invalid caption argument", e);
						else de.toggle.call(this, !1, t)
					},
					setLanguage: function (e) {
						var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
						if (m.string(e)) {
							var i = e.toLowerCase();
							this.captions.language = i;
							var n = de.getTracks.call(this),
								s = de.findTrack.call(this, [i]);
							de.set.call(this, n.indexOf(s), t)
						} else this.debug.warn("Invalid language argument", e)
					},
					getTracks: function () {
						var t = this,
							i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
						return Array.from((this.media || {}).textTracks || []).filter(function (e) {
							return !t.isHTML5 || i || t.captions.meta.has(e)
						}).filter(function (e) {
							return ["captions", "subtitles"].includes(e.kind)
						})
					},
					findTrack: function (e) {
						function i(e) {
							return Number((t.captions.meta.get(e) || {}).default)
						}
						var n, t = this,
							s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
							a = de.getTracks.call(this),
							o = Array.from(a).sort(function (e, t) {
								return i(t) - i(e)
							});
						return e.every(function (t) {
							return !(n = o.find(function (e) {
								return e.language === t
							}))
						}), n || (s ? o[0] : void 0)
					},
					getCurrentTrack: function () {
						return de.getTracks.call(this)[this.currentTrack]
					},
					getLabel: function (e) {
						var t = e;
						return !m.track(t) && q.textTracks && this.captions.toggled && (t = de.getCurrentTrack.call(this)), m.track(t) ? m.empty(t.label) ? m.empty(t.language) ? J("enabled", this.config) : e.language.toUpperCase() : t.label : J("disabled", this.config)
					},
					updateCues: function (e) {
						if (this.supported.ui)
							if (m.element(this.elements.captions))
								if (m.nullOrUndefined(e) || Array.isArray(e)) {
									var t = e;
									if (!t) {
										var i = de.getCurrentTrack.call(this);
										t = Array.from((i || {}).activeCues || []).map(function (e) {
											return e.getCueAsHTML()
										}).map(Q)
									}
									var n = t.map(function (e) {
										return e.trim()
									}).join("\n");
									if (n !== this.elements.captions.innerHTML) {
										T(this.elements.captions);
										var s = _("span", S(this.config.selectors.caption));
										s.innerHTML = n, this.elements.captions.appendChild(s), b.call(this, this.media, "cuechange")
									}
								} else this.debug.warn("updateCues: Invalid input", e);
						else this.debug.warn("No captions element to render to")
					}
				},
				pe = {
					enabled: !0,
					title: "",
					debug: !1,
					autoplay: !1,
					autopause: !0,
					playsinline: !0,
					seekTime: 10,
					volume: 1,
					muted: !1,
					duration: null,
					displayDuration: !0,
					invertTime: !0,
					toggleInvert: !0,
					ratio: "16:9",
					clickToPlay: !0,
					hideControls: !0,
					resetOnEnd: !1,
					disableContextMenu: !0,
					loadSprite: !0,
					iconPrefix: "plyr",
					iconUrl: "https://cdn.plyr.io/3.4.6/plyr.svg",
					blankVideo: "https://cdn.plyr.io/static/blank.mp4",
					quality: {
						default: 576,
						options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
					},
					loop: {
						active: !1
					},
					speed: {
						selected: 1,
						options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
					},
					keyboard: {
						focused: !0,
						global: !1
					},
					tooltips: {
						controls: !1,
						seek: !0
					},
					captions: {
						active: !1,
						language: "auto",
						update: !1
					},
					fullscreen: {
						enabled: !0,
						fallback: !0,
						iosNative: !1
					},
					storage: {
						enabled: !0,
						key: "plyr"
					},
					controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
					settings: ["captions", "quality", "speed"],
					i18n: {
						restart: "Restart",
						rewind: "Rewind {seektime}s",
						play: "Play",
						pause: "Pause",
						fastForward: "Forward {seektime}s",
						seek: "Seek",
						seekLabel: "{currentTime} of {duration}",
						played: "Played",
						buffered: "Buffered",
						currentTime: "Current time",
						duration: "Duration",
						volume: "Volume",
						mute: "Mute",
						unmute: "Unmute",
						enableCaptions: "Enable captions",
						disableCaptions: "Disable captions",
						download: "Download",
						enterFullscreen: "Enter fullscreen",
						exitFullscreen: "Exit fullscreen",
						frameTitle: "Player for {title}",
						captions: "Captions",
						settings: "Settings",
						menuBack: "Go back to previous menu",
						speed: "Speed",
						normal: "Normal",
						quality: "Quality",
						loop: "Loop",
						start: "Start",
						end: "End",
						all: "All",
						reset: "Reset",
						disabled: "Disabled",
						enabled: "Enabled",
						advertisement: "Ad",
						qualityBadge: {
							2160: "4K",
							1440: "HD",
							1080: "HD",
							720: "HD",
							576: "SD",
							480: "SD"
						}
					},
					urls: {
						download: null,
						vimeo: {
							sdk: "https://player.vimeo.com/api/player.js",
							iframe: "https://player.vimeo.com/video/{0}?{1}",
							api: "https://vimeo.com/api/v2/video/{0}.json"
						},
						youtube: {
							sdk: "https://www.youtube.com/iframe_api",
							api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
						},
						googleIMA: {
							sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
						}
					},
					listeners: {
						seek: null,
						play: null,
						pause: null,
						restart: null,
						rewind: null,
						fastForward: null,
						mute: null,
						volume: null,
						captions: null,
						download: null,
						fullscreen: null,
						pip: null,
						airplay: null,
						speed: null,
						quality: null,
						loop: null,
						language: null
					},
					events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
					selectors: {
						editable: "input, textarea, select, [contenteditable]",
						container: ".plyr",
						controls: {
							container: null,
							wrapper: ".plyr__controls"
						},
						labels: "[data-plyr]",
						buttons: {
							play: '[data-plyr="play"]',
							pause: '[data-plyr="pause"]',
							restart: '[data-plyr="restart"]',
							rewind: '[data-plyr="rewind"]',
							fastForward: '[data-plyr="fast-forward"]',
							mute: '[data-plyr="mute"]',
							captions: '[data-plyr="captions"]',
							download: '[data-plyr="download"]',
							fullscreen: '[data-plyr="fullscreen"]',
							pip: '[data-plyr="pip"]',
							airplay: '[data-plyr="airplay"]',
							settings: '[data-plyr="settings"]',
							loop: '[data-plyr="loop"]'
						},
						inputs: {
							seek: '[data-plyr="seek"]',
							volume: '[data-plyr="volume"]',
							speed: '[data-plyr="speed"]',
							language: '[data-plyr="language"]',
							quality: '[data-plyr="quality"]'
						},
						display: {
							currentTime: ".plyr__time--current",
							duration: ".plyr__time--duration",
							buffer: ".plyr__progress__buffer",
							loop: ".plyr__progress__loop",
							volume: ".plyr__volume--display"
						},
						progress: ".plyr__progress",
						captions: ".plyr__captions",
						caption: ".plyr__caption",
						menu: {
							quality: ".js-plyr__menu__list--quality"
						}
					},
					classNames: {
						type: "plyr--{0}",
						provider: "plyr--{0}",
						video: "plyr__video-wrapper",
						embed: "plyr__video-embed",
						embedContainer: "plyr__video-embed__container",
						poster: "plyr__poster",
						posterEnabled: "plyr__poster-enabled",
						ads: "plyr__ads",
						control: "plyr__control",
						controlPressed: "plyr__control--pressed",
						playing: "plyr--playing",
						paused: "plyr--paused",
						stopped: "plyr--stopped",
						loading: "plyr--loading",
						hover: "plyr--hover",
						tooltip: "plyr__tooltip",
						cues: "plyr__cues",
						hidden: "plyr__sr-only",
						hideControls: "plyr--hide-controls",
						isIos: "plyr--is-ios",
						isTouch: "plyr--is-touch",
						uiSupported: "plyr--full-ui",
						noTransition: "plyr--no-transition",
						display: {
							time: "plyr__time"
						},
						menu: {
							value: "plyr__menu__value",
							badge: "plyr__badge",
							open: "plyr--menu-open"
						},
						captions: {
							enabled: "plyr--captions-enabled",
							active: "plyr--captions-active"
						},
						fullscreen: {
							enabled: "plyr--fullscreen-enabled",
							fallback: "plyr--fullscreen-fallback"
						},
						pip: {
							supported: "plyr--pip-supported",
							active: "plyr--pip-active"
						},
						airplay: {
							supported: "plyr--airplay-supported",
							active: "plyr--airplay-active"
						},
						tabFocus: "plyr__tab-focus"
					},
					attributes: {
						embed: {
							provider: "data-plyr-provider",
							id: "data-plyr-embed-id"
						}
					},
					keys: {
						google: null
					},
					ads: {
						enabled: !1,
						publisherId: ""
					}
				},
				fe = "picture-in-picture",
				me = {
					html5: "html5",
					youtube: "youtube",
					vimeo: "vimeo"
				},
				ge = "audio",
				ve = "video",
				ye = (e(be, [{
					key: "log",
					get: function () {
						return this.enabled ? Function.prototype.bind.call(console.log, console) : he
					}
				}, {
					key: "warn",
					get: function () {
						return this.enabled ? Function.prototype.bind.call(console.warn, console) : he
					}
				}, {
					key: "error",
					get: function () {
						return this.enabled ? Function.prototype.bind.call(console.error, console) : he
					}
				}]), be);

			function be() {
				var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
				c(this, be), this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
			}

			function we() {
				if (this.enabled) {
					var e = this.player.elements.buttons.fullscreen;
					m.element(e) && (e.pressed = this.active), b.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), F.isIos || function () {
						var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
							t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
						if (m.element(e)) {
							var i = I.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
								n = i[0],
								s = i[i.length - 1];
							f.call(this, this.elements.container, "keydown", function (e) {
								if ("Tab" === e.key && 9 === e.keyCode) {
									var t = document.activeElement;
									t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(), e.preventDefault()) : (n.focus(), e.preventDefault())
								}
							}, t, !1)
						}
					}.call(this.player, this.target, this.active)
				}
			}

			function ke() {
				var e = this,
					t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
				if (t ? this.scrollPosition = {
						x: window.scrollX || 0,
						y: window.scrollY || 0
					} : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", A(this.target, this.player.config.classNames.fullscreen.fallback, t), F.isIos) {
					var i = document.head.querySelector('meta[name="viewport"]'),
						n = "viewport-fit=cover";
					i || (i = document.createElement("meta")).setAttribute("name", "viewport");
					var s = m.string(i.content) && i.content.includes(n);
					t ? (this.cleanupViewport = !s, s || (i.content += ",".concat(n))) : this.cleanupViewport && (i.content = i.content.split(",").filter(function (e) {
						return e.trim() !== n
					}).join(",")), setTimeout(function () {
						return j(e.target)
					}, 100)
				}
				we.call(this)
			}
			var _e = (e(xe, [{
				key: "update",
				value: function () {
					this.enabled ? this.player.debug.log("".concat(xe.native ? "Native" : "Fallback", " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), A(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
				}
			}, {
				key: "enter",
				value: function () {
					this.enabled && (F.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : xe.native ? this.prefix ? m.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen() : ke.call(this, !0))
				}
			}, {
				key: "exit",
				value: function () {
					if (this.enabled)
						if (F.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
						else if (xe.native)
						if (this.prefix) {
							if (!m.empty(this.prefix)) {
								var e = "moz" === this.prefix ? "Cancel" : "Exit";
								document["".concat(this.prefix).concat(e).concat(this.property)]()
							}
						} else(document.cancelFullScreen || document.exitFullscreen).call(document);
					else ke.call(this, !1)
				}
			}, {
				key: "toggle",
				value: function () {
					this.active ? this.exit() : this.enter()
				}
			}, {
				key: "enabled",
				get: function () {
					return (xe.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
				}
			}, {
				key: "active",
				get: function () {
					return !!this.enabled && (xe.native ? (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target : E(this.target, this.player.config.classNames.fullscreen.fallback))
				}
			}, {
				key: "target",
				get: function () {
					return F.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
				}
			}], [{
				key: "native",
				get: function () {
					return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
				}
			}, {
				key: "prefix",
				get: function () {
					if (m.function(document.exitFullscreen)) return "";
					var t = "";
					return ["webkit", "moz", "ms"].some(function (e) {
						return !(!m.function(document["".concat(e, "ExitFullscreen")]) && !m.function(document["".concat(e, "CancelFullScreen")]) || (t = e, 0))
					}), t
				}
			}, {
				key: "property",
				get: function () {
					return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
				}
			}]), xe);

			function xe(e) {
				var t = this;
				c(this, xe), this.player = e, this.prefix = xe.prefix, this.property = xe.property, this.scrollPosition = {
					x: 0,
					y: 0
				}, g.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
					we.call(t)
				}), g.call(this.player, this.player.elements.container, "dblclick", function (e) {
					m.element(t.player.elements.controls) && t.player.elements.controls.contains(e.target) || t.toggle()
				}), this.update()
			}

			function Ce(s, e) {
				var a = 1 < arguments.length && void 0 !== e ? e : 1;
				return new Promise(function (e, t) {
					function i() {
						delete n.onload, delete n.onerror, (n.naturalWidth >= a ? e : t)(n)
					}
					var n = new Image;
					Object.assign(n, {
						onload: i,
						onerror: i,
						src: s
					})
				})
			}
			var Te = {
					addStyleHook: function () {
						A(this.elements.container, this.config.selectors.container.replace(".", ""), !0), A(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
					},
					toggleNativeControls: function () {
						0 < arguments.length && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
					},
					build: function () {
						var e = this;
						if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Te.toggleNativeControls.call(this, !0);
						m.element(this.elements.controls) || (le.inject.call(this), this.listeners.controls()), Te.toggleNativeControls.call(this), this.isHTML5 && de.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, le.updateVolume.call(this), le.timeUpdate.call(this), Te.checkPlaying.call(this), A(this.elements.container, this.config.classNames.pip.supported, q.pip && this.isHTML5 && this.isVideo), A(this.elements.container, this.config.classNames.airplay.supported, q.airplay && this.isHTML5), A(this.elements.container, this.config.classNames.isIos, F.isIos), A(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
							b.call(e, e.media, "ready")
						}, 0), Te.setTitle.call(this), this.poster && Te.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && le.durationUpdate.call(this)
					},
					setTitle: function () {
						var t = J("play", this.config);
						if (m.string(this.config.title) && !m.empty(this.config.title) && (t += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (e) {
								e.setAttribute("aria-label", t)
							}), this.isEmbed) {
							var e = N.call(this, "iframe");
							if (!m.element(e)) return;
							var i = m.empty(this.config.title) ? "video" : this.config.title,
								n = J("frameTitle", this.config);
							e.setAttribute("title", n.replace("{title}", i))
						}
					},
					togglePoster: function (e) {
						A(this.elements.container, this.config.classNames.posterEnabled, e)
					},
					setPoster: function (t) {
						var i = this;
						return 1 < arguments.length && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", t), function () {
							var t = this;
							return new Promise(function (e) {
								return t.ready ? setTimeout(e, 0) : g.call(t, t.elements.container, "ready", e)
							}).then(function () {})
						}.call(this).then(function () {
							return Ce(t)
						}).catch(function (e) {
							throw t === i.poster && Te.togglePoster.call(i, !1), e
						}).then(function () {
							if (t !== i.poster) throw new Error("setPoster cancelled by later call to setPoster")
						}).then(function () {
							return Object.assign(i.elements.poster.style, {
								backgroundImage: "url('".concat(t, "')"),
								backgroundSize: ""
							}), Te.togglePoster.call(i, !0), t
						})) : Promise.reject(new Error("Poster already set"))
					},
					checkPlaying: function (e) {
						var t = this;
						A(this.elements.container, this.config.classNames.playing, this.playing), A(this.elements.container, this.config.classNames.paused, this.paused), A(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
							e.pressed = t.playing
						}), m.event(e) && "timeupdate" === e.type || Te.toggleControls.call(this)
					},
					checkLoading: function (e) {
						var t = this;
						this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
							A(t.elements.container, t.config.classNames.loading, t.loading), Te.toggleControls.call(t)
						}, this.loading ? 250 : 0)
					},
					toggleControls: function (e) {
						var t = this.elements.controls;
						if (t && this.config.hideControls) {
							var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
							this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
						}
					}
				},
				De = (e(Se, [{
					key: "handleKey",
					value: function (e) {
						var t = this.player,
							i = t.elements,
							n = e.keyCode ? e.keyCode : e.which,
							s = "keydown" === e.type,
							a = s && n === this.lastKey;
						if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && m.number(n))
							if (s) {
								var o = document.activeElement;
								if (m.element(o)) {
									var r = t.config.selectors.editable;
									if (o !== i.inputs.seek && M(o, r)) return;
									if (32 === e.which && M(o, 'button, [role^="menuitem"]')) return
								}
								switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
									case 48:
									case 49:
									case 50:
									case 51:
									case 52:
									case 53:
									case 54:
									case 55:
									case 56:
									case 57:
										a || (t.currentTime = t.duration / 10 * (n - 48));
										break;
									case 32:
									case 75:
										a || t.togglePlay();
										break;
									case 38:
										t.increaseVolume(.1);
										break;
									case 40:
										t.decreaseVolume(.1);
										break;
									case 77:
										a || (t.muted = !t.muted);
										break;
									case 39:
										t.forward();
										break;
									case 37:
										t.rewind();
										break;
									case 70:
										t.fullscreen.toggle();
										break;
									case 67:
										a || t.toggleCaptions();
										break;
									case 76:
										t.loop = !t.loop
								}!t.fullscreen.enabled && t.fullscreen.active && 27 === n && t.fullscreen.toggle(), this.lastKey = n
							} else this.lastKey = null
					}
				}, {
					key: "toggleMenu",
					value: function (e) {
						le.toggleMenu.call(this.player, e)
					}
				}, {
					key: "firstTouch",
					value: function () {
						var e = this.player,
							t = e.elements;
						e.touch = !0, A(t.container, e.config.classNames.isTouch, !0)
					}
				}, {
					key: "setTabFocus",
					value: function (e) {
						var t = this.player,
							i = t.elements;
						if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
							"keydown" === e.type && (this.lastKeyDown = e.timeStamp);
							var n, s = e.timeStamp - this.lastKeyDown <= 20;
							"focus" === e.type && !s || (n = t.config.classNames.tabFocus, A(I.call(t, ".".concat(n)), n, !1), this.focusTimer = setTimeout(function () {
								var e = document.activeElement;
								i.container.contains(e) && A(document.activeElement, t.config.classNames.tabFocus, !0)
							}, 10))
						}
					}
				}, {
					key: "global",
					value: function () {
						var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
							t = this.player;
						t.config.keyboard.global && f.call(t, window, "keydown keyup", this.handleKey, e, !1), f.call(t, document.body, "click", this.toggleMenu, e), y.call(t, document.body, "touchstart", this.firstTouch), f.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
					}
				}, {
					key: "container",
					value: function () {
						var n = this.player,
							s = n.elements;
						!n.config.keyboard.global && n.config.keyboard.focused && g.call(n, s.container, "keydown keyup", this.handleKey, !1), g.call(n, s.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (e) {
							var t = s.controls;
							t && "enterfullscreen" === e.type && (t.pressed = !1, t.hover = !1);
							var i = 0;
							["touchstart", "touchmove", "mousemove"].includes(e.type) && (Te.toggleControls.call(n, !0), i = n.touch ? 3e3 : 2e3), clearTimeout(n.timers.controls), n.timers.controls = setTimeout(function () {
								return Te.toggleControls.call(n, !1)
							}, i)
						})
					}
				}, {
					key: "media",
					value: function () {
						var n = this.player,
							s = n.elements;
						if (g.call(n, n.media, "timeupdate seeking seeked", function (e) {
								return le.timeUpdate.call(n, e)
							}), g.call(n, n.media, "durationchange loadeddata loadedmetadata", function (e) {
								return le.durationUpdate.call(n, e)
							}), g.call(n, n.media, "canplay", function () {
								P(s.volume, !n.hasAudio), P(s.buttons.mute, !n.hasAudio)
							}), g.call(n, n.media, "ended", function () {
								n.isHTML5 && n.isVideo && n.config.resetOnEnd && n.restart()
							}), g.call(n, n.media, "progress playing seeking seeked", function (e) {
								return le.updateProgress.call(n, e)
							}), g.call(n, n.media, "volumechange", function (e) {
								return le.updateVolume.call(n, e)
							}), g.call(n, n.media, "playing play pause ended emptied timeupdate", function (e) {
								return Te.checkPlaying.call(n, e)
							}), g.call(n, n.media, "waiting canplay seeked playing", function (e) {
								return Te.checkLoading.call(n, e)
							}), g.call(n, n.media, "playing", function () {
								n.ads && n.ads.enabled && !n.ads.initialized && n.ads.managerPromise.then(function () {
									return n.ads.play()
								}).catch(function () {
									return n.play()
								})
							}), n.supported.ui && n.config.clickToPlay && !n.isAudio) {
							var t = N.call(n, ".".concat(n.config.classNames.video));
							if (!m.element(t)) return;
							g.call(n, s.container, "click", function (e) {
								([s.container, t].includes(e.target) || t.contains(e.target)) && (n.touch && n.config.hideControls || (n.ended ? (n.restart(), n.play()) : n.togglePlay()))
							})
						}
						n.supported.ui && n.config.disableContextMenu && g.call(n, s.wrapper, "contextmenu", function (e) {
							e.preventDefault()
						}, !1), g.call(n, n.media, "volumechange", function () {
							n.storage.set({
								volume: n.volume,
								muted: n.muted
							})
						}), g.call(n, n.media, "ratechange", function () {
							le.updateSetting.call(n, "speed"), n.storage.set({
								speed: n.speed
							})
						}), g.call(n, n.media, "qualitychange", function (e) {
							le.updateSetting.call(n, "quality", null, e.detail.quality)
						}), g.call(n, n.media, "ready qualitychange", function () {
							le.setDownloadLink.call(n)
						});
						var e = n.config.events.concat(["keyup", "keydown"]).join(" ");
						g.call(n, n.media, e, function (e) {
							var t = e.detail,
								i = void 0 === t ? {} : t;
							"error" === e.type && (i = n.media.error), b.call(n, s.container, e.type, !0, i)
						})
					}
				}, {
					key: "proxy",
					value: function (e, t, i) {
						var n = this.player,
							s = n.config.listeners[i],
							a = !0;
						m.function(s) && (a = s.call(n, e)), a && m.function(t) && t.call(n, e)
					}
				}, {
					key: "bind",
					value: function (e, t, i, n) {
						var s = this,
							a = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
							o = this.player,
							r = o.config.listeners[n],
							l = m.function(r);
						g.call(o, e, t, function (e) {
							return s.proxy(e, i, n)
						}, a && !l)
					}
				}, {
					key: "controls",
					value: function () {
						var s = this,
							r = this.player,
							n = r.elements,
							t = F.isIE ? "change" : "input";
						if (n.buttons.play && Array.from(n.buttons.play).forEach(function (e) {
								s.bind(e, "click", r.togglePlay, "play")
							}), this.bind(n.buttons.restart, "click", r.restart, "restart"), this.bind(n.buttons.rewind, "click", r.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", r.forward, "fastForward"), this.bind(n.buttons.mute, "click", function () {
								r.muted = !r.muted
							}, "mute"), this.bind(n.buttons.captions, "click", function () {
								return r.toggleCaptions()
							}), this.bind(n.buttons.download, "click", function () {
								b.call(r, r.media, "download")
							}, "download"), this.bind(n.buttons.fullscreen, "click", function () {
								r.fullscreen.toggle()
							}, "fullscreen"), this.bind(n.buttons.pip, "click", function () {
								r.pip = "toggle"
							}, "pip"), this.bind(n.buttons.airplay, "click", r.airplay, "airplay"), this.bind(n.buttons.settings, "click", function (e) {
								e.stopPropagation(), le.toggleMenu.call(r, e)
							}), this.bind(n.buttons.settings, "keyup", function (e) {
								var t = e.which;
								[13, 32].includes(t) && (13 !== t ? (e.preventDefault(), e.stopPropagation(), le.toggleMenu.call(r, e)) : le.focusFirstMenuItem.call(r, null, !0))
							}, null, !1), this.bind(n.settings.menu, "keydown", function (e) {
								27 === e.which && le.toggleMenu.call(r, e)
							}), this.bind(n.inputs.seek, "mousedown mousemove", function (e) {
								var t = n.progress.getBoundingClientRect(),
									i = 100 / t.width * (e.pageX - t.left);
								e.currentTarget.setAttribute("seek-value", i)
							}), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
								var t = e.currentTarget,
									i = e.keyCode ? e.keyCode : e.which;
								if (!m.keyboardEvent(e) || 39 === i || 37 === i) {
									r.lastSeekTime = Date.now();
									var n = t.hasAttribute("play-on-seeked"),
										s = ["mouseup", "touchend", "keyup"].includes(e.type);
									n && s ? (t.removeAttribute("play-on-seeked"), r.play()) : !s && r.playing && (t.setAttribute("play-on-seeked", ""), r.pause())
								}
							}), F.isIos) {
							var e = I.call(r, 'input[type="range"]');
							Array.from(e).forEach(function (e) {
								return s.bind(e, t, function (e) {
									return j(e.target)
								})
							})
						}
						this.bind(n.inputs.seek, t, function (e) {
							var t = e.currentTarget,
								i = t.getAttribute("seek-value");
							m.empty(i) && (i = t.value), t.removeAttribute("seek-value"), r.currentTime = i / t.max * r.duration
						}, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function (e) {
							return le.updateSeekTooltip.call(r, e)
						}), F.isWebkit && Array.from(I.call(r, 'input[type="range"]')).forEach(function (e) {
							s.bind(e, "input", function (e) {
								return le.updateRangeFill.call(r, e.target)
							})
						}), r.config.toggleInvert && !m.element(n.display.duration) && this.bind(n.display.currentTime, "click", function () {
							0 !== r.currentTime && (r.config.invertTime = !r.config.invertTime, le.timeUpdate.call(r))
						}), this.bind(n.inputs.volume, t, function (e) {
							r.volume = e.target.value
						}, "volume"), this.bind(n.controls, "mouseenter mouseleave", function (e) {
							n.controls.hover = !r.touch && "mouseenter" === e.type
						}), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
							n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
						}), this.bind(n.controls, "focusin", function () {
							var e = r.config,
								t = r.elements,
								i = r.timers;
							A(t.controls, e.classNames.noTransition, !0), Te.toggleControls.call(r, !0), setTimeout(function () {
								A(t.controls, e.classNames.noTransition, !1)
							}, 0);
							var n = s.touch ? 3e3 : 4e3;
							clearTimeout(i.controls), i.controls = setTimeout(function () {
								return Te.toggleControls.call(r, !1)
							}, n)
						}), this.bind(n.inputs.volume, "wheel", function (e) {
							var t = e.webkitDirectionInvertedFromDevice,
								i = p([e.deltaX, -e.deltaY].map(function (e) {
									return t ? -e : e
								}), 2),
								n = i[0],
								s = i[1],
								a = Math.sign(Math.abs(n) > Math.abs(s) ? n : s);
							r.increaseVolume(a / 50);
							var o = r.media.volume;
							(1 === a && o < 1 || -1 === a && 0 < o) && e.preventDefault()
						}, "volume", !1)
					}
				}]), Se);

			function Se(e) {
				c(this, Se), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
			}
			var Pe, Ae, Ee, Me = (Ae = Pe = {
				exports: {}
			}, Ee = function () {
				var h = function () {},
					n = {},
					l = {},
					c = {};

				function u(e, t) {
					if (e) {
						var i = c[e];
						if (l[e] = t, i)
							for (; i.length;) i[0](e, t), i.splice(0, 1)
					}
				}

				function d(e, t) {
					e.call && (e = {
						success: e
					}), t.length ? (e.error || h)(t) : (e.success || h)(e)
				}

				function p(i, n, s, a) {
					var o, r, e = document,
						t = s.async,
						l = (s.numRetries || 0) + 1,
						c = s.before || h,
						u = i.replace(/^(css|img)!/, "");
					a = a || 0, /(^css!|\.css$)/.test(i) ? (o = !0, (r = e.createElement("link")).rel = "stylesheet", r.href = u) : /(^img!|\.(png|gif|jpg|svg)$)/.test(i) ? (r = e.createElement("img")).src = u : ((r = e.createElement("script")).src = i, r.async = void 0 === t || t), !(r.onload = r.onerror = r.onbeforeload = function (e) {
						var t = e.type[0];
						if (o && "hideFocus" in r) try {
							r.sheet.cssText.length || (t = "e")
						} catch (e) {
							t = "e"
						}
						if ("e" == t && (a += 1) < l) return p(i, n, s, a);
						n(i, t, e.defaultPrevented)
					}) !== c(i, r) && e.head.appendChild(r)
				}

				function t(e, t, i) {
					var r, l;
					if (t && t.trim && (r = t), l = (r ? i : t) || {}, r) {
						if (r in n) throw "LoadJS";
						n[r] = !0
					}! function (e, t) {
						var i, n, s = (e = e.push ? e : [e]).length,
							a = s,
							o = [];
						for (i = function (e, t, i) {
								if ("e" == t && o.push(e), "b" == t) {
									if (!i) return;
									o.push(e)
								}
								var n;
								--s || (d(l, n = o), u(r, n))
							}, n = 0; n < a; n++) p(e[n], i, t)
					}(e, l)
				}
				return t.ready = function (e, r) {
					return function (e) {
						e = e.push ? e : [e];
						var t, i, n, s = [],
							a = e.length,
							o = a;
						for (t = function (e, t) {
								t.length && s.push(e), --o || d(r, s)
							}; a--;) i = e[a], (n = l[i]) ? t(i, n) : (c[i] = c[i] || []).push(t)
					}(e), t
				}, t.done = function (e) {
					u(e, [])
				}, t.reset = function () {
					n = {}, l = {}, c = {}
				}, t.isDefined = function (e) {
					return e in n
				}, t
			}, Ae.exports = Ee(), Pe.exports);

			function Ie(i) {
				return new Promise(function (e, t) {
					Me(i, {
						success: e,
						error: t
					})
				})
			}

			function Ne(e) {
				e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, b.call(this, this.media, e ? "play" : "pause"))
			}
			var Le = {
				setup: function () {
					var t = this;
					A(this.elements.wrapper, this.config.classNames.embed, !0), Le.setAspectRatio.call(this), m.object(window.Vimeo) ? Le.ready.call(this) : Ie(this.config.urls.vimeo.sdk).then(function () {
						Le.ready.call(t)
					}).catch(function (e) {
						t.debug.warn("Vimeo API failed to load", e)
					})
				},
				setAspectRatio: function (e) {
					var t = p((m.string(e) ? e : this.config.ratio).split(":"), 2),
						i = 100 / t[0] * t[1];
					if (this.elements.wrapper.style.paddingBottom = "".concat(i, "%"), this.supported.ui) {
						var n = (240 - i) / 4.8;
						this.media.style.transform = "translateY(-".concat(n, "%)")
					}
				},
				ready: function () {
					var a = this,
						o = this,
						e = ue({
							loop: o.config.loop.active,
							autoplay: o.autoplay,
							byline: !1,
							portrait: !1,
							title: !1,
							speed: !0,
							transparent: 0,
							gesture: "media",
							playsinline: !this.config.fullscreen.iosNative
						}),
						t = o.media.getAttribute("src");
					m.empty(t) && (t = o.media.getAttribute(o.config.attributes.embed.id));
					var i, n = (i = t, m.empty(i) ? null : m.number(Number(i)) ? i : i.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : i),
						s = _("iframe"),
						r = K(o.config.urls.vimeo.iframe, n, e);
					s.setAttribute("src", r), s.setAttribute("allowfullscreen", ""), s.setAttribute("allowtransparency", ""), s.setAttribute("allow", "autoplay");
					var l = _("div", {
						poster: o.poster,
						class: o.config.classNames.embedContainer
					});
					l.appendChild(s), o.media = D(l, o.media), ie(K(o.config.urls.vimeo.api, n), "json").then(function (e) {
						if (!m.empty(e)) {
							var t = new URL(e[0].thumbnail_large);
							t.pathname = "".concat(t.pathname.split("_")[0], ".jpg"), Te.setPoster.call(o, t.href).catch(function () {})
						}
					}), o.embed = new window.Vimeo.Player(s, {
						autopause: o.config.autopause,
						muted: o.muted
					}), o.media.paused = !0, o.media.currentTime = 0, o.supported.ui && o.embed.disableTextTrack(), o.media.play = function () {
						return Ne.call(o, !0), o.embed.play()
					}, o.media.pause = function () {
						return Ne.call(o, !1), o.embed.pause()
					}, o.media.stop = function () {
						o.pause(), o.currentTime = 0
					};
					var c = o.media.currentTime;
					Object.defineProperty(o.media, "currentTime", {
						get: function () {
							return c
						},
						set: function (e) {
							var t = o.embed,
								i = o.media,
								n = o.paused,
								s = o.volume,
								a = n && !t.hasPlayed;
							i.seeking = !0, b.call(o, i, "seeking"), Promise.resolve(a && t.setVolume(0)).then(function () {
								return t.setCurrentTime(e)
							}).then(function () {
								return a && t.pause()
							}).then(function () {
								return a && t.setVolume(s)
							}).catch(function () {})
						}
					});
					var u = o.config.speed.selected;
					Object.defineProperty(o.media, "playbackRate", {
						get: function () {
							return u
						},
						set: function (e) {
							o.embed.setPlaybackRate(e).then(function () {
								u = e, b.call(o, o.media, "ratechange")
							}).catch(function (e) {
								"Error" === e.name && le.setSpeedMenu.call(o, [])
							})
						}
					});
					var h = o.config.volume;
					Object.defineProperty(o.media, "volume", {
						get: function () {
							return h
						},
						set: function (e) {
							o.embed.setVolume(e).then(function () {
								h = e, b.call(o, o.media, "volumechange")
							})
						}
					});
					var d = o.config.muted;
					Object.defineProperty(o.media, "muted", {
						get: function () {
							return d
						},
						set: function (e) {
							var t = !!m.boolean(e) && e;
							o.embed.setVolume(t ? 0 : o.config.volume).then(function () {
								d = t, b.call(o, o.media, "volumechange")
							})
						}
					});
					var p, f = o.config.loop;
					Object.defineProperty(o.media, "loop", {
						get: function () {
							return f
						},
						set: function (e) {
							var t = m.boolean(e) ? e : o.config.loop.active;
							o.embed.setLoop(t).then(function () {
								f = t
							})
						}
					}), o.embed.getVideoUrl().then(function (e) {
						p = e, le.setDownloadLink.call(o)
					}).catch(function (e) {
						a.debug.warn(e)
					}), Object.defineProperty(o.media, "currentSrc", {
						get: function () {
							return p
						}
					}), Object.defineProperty(o.media, "ended", {
						get: function () {
							return o.currentTime === o.duration
						}
					}), Promise.all([o.embed.getVideoWidth(), o.embed.getVideoHeight()]).then(function (e) {
						var t, i, n, s = (t = e[0], i = e[1], n = function e(t, i) {
							return 0 === i ? t : e(i, t % i)
						}(t, i), "".concat(t / n, ":").concat(i / n));
						Le.setAspectRatio.call(a, s)
					}), o.embed.setAutopause(o.config.autopause).then(function (e) {
						o.config.autopause = e
					}), o.embed.getVideoTitle().then(function (e) {
						o.config.title = e, Te.setTitle.call(a)
					}), o.embed.getCurrentTime().then(function (e) {
						c = e, b.call(o, o.media, "timeupdate")
					}), o.embed.getDuration().then(function (e) {
						o.media.duration = e, b.call(o, o.media, "durationchange")
					}), o.embed.getTextTracks().then(function (e) {
						o.media.textTracks = e, de.setup.call(o)
					}), o.embed.on("cuechange", function (e) {
						var t = e.cues,
							i = (void 0 === t ? [] : t).map(function (e) {
								return t = e.text, i = document.createDocumentFragment(), n = document.createElement("div"), i.appendChild(n), n.innerHTML = t, i.firstChild.innerText;
								var t, i, n
							});
						de.updateCues.call(o, i)
					}), o.embed.on("loaded", function () {
						o.embed.getPaused().then(function (e) {
							Ne.call(o, !e), e || b.call(o, o.media, "playing")
						}), m.element(o.embed.element) && o.supported.ui && o.embed.element.setAttribute("tabindex", -1)
					}), o.embed.on("play", function () {
						Ne.call(o, !0), b.call(o, o.media, "playing")
					}), o.embed.on("pause", function () {
						Ne.call(o, !1)
					}), o.embed.on("timeupdate", function (e) {
						o.media.seeking = !1, c = e.seconds, b.call(o, o.media, "timeupdate")
					}), o.embed.on("progress", function (e) {
						o.media.buffered = e.percent, b.call(o, o.media, "progress"), 1 === parseInt(e.percent, 10) && b.call(o, o.media, "canplaythrough"), o.embed.getDuration().then(function (e) {
							e !== o.media.duration && (o.media.duration = e, b.call(o, o.media, "durationchange"))
						})
					}), o.embed.on("seeked", function () {
						o.media.seeking = !1, b.call(o, o.media, "seeked")
					}), o.embed.on("ended", function () {
						o.media.paused = !0, b.call(o, o.media, "ended")
					}), o.embed.on("error", function (e) {
						o.media.error = e, b.call(o, o.media, "error")
					}), setTimeout(function () {
						return Te.build.call(o)
					}, 0)
				}
			};

			function ze(e) {
				e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, b.call(this, this.media, e ? "play" : "pause"))
			}
			var He = {
					setup: function () {
						var t = this;
						A(this.elements.wrapper, this.config.classNames.embed, !0), He.setAspectRatio.call(this), m.object(window.YT) && m.function(window.YT.Player) ? He.ready.call(this) : (Ie(this.config.urls.youtube.sdk).catch(function (e) {
							t.debug.warn("YouTube API failed to load", e)
						}), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
							He.ready.call(t)
						}), window.onYouTubeIframeAPIReady = function () {
							window.onYouTubeReadyCallbacks.forEach(function (e) {
								e()
							})
						})
					},
					getTitle: function (e) {
						var t = this;
						if (m.function(this.embed.getVideoData)) {
							var i = this.embed.getVideoData().title;
							if (m.empty(i)) return this.config.title = i, void Te.setTitle.call(this)
						}
						var n = this.config.keys.google;
						m.string(n) && !m.empty(n) && ie(K(this.config.urls.youtube.api, e, n)).then(function (e) {
							m.object(e) && (t.config.title = e.items[0].snippet.title, Te.setTitle.call(t))
						}).catch(function () {})
					},
					setAspectRatio: function () {
						var e = this.config.ratio.split(":");
						this.elements.wrapper.style.paddingBottom = "".concat(100 / e[0] * e[1], "%")
					},
					ready: function () {
						var s = this,
							e = s.media.getAttribute("id");
						if (m.empty(e) || !e.startsWith("youtube-")) {
							var t = s.media.getAttribute("src");
							m.empty(t) && (t = s.media.getAttribute(this.config.attributes.embed.id));
							var i, n, a = (i = t, m.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
								o = (n = s.provider, "".concat(n, "-").concat(Math.floor(1e4 * Math.random()))),
								r = _("div", {
									id: o,
									poster: s.poster
								});
							s.media = D(r, s.media);
							var l = function (e) {
								return "https://img.youtube.com/vi/".concat(a, "/").concat(e, "default.jpg")
							};
							Ce(l("maxres"), 121).catch(function () {
								return Ce(l("sd"), 121)
							}).catch(function () {
								return Ce(l("hq"))
							}).then(function (e) {
								return Te.setPoster.call(s, e.src)
							}).then(function (e) {
								e.includes("maxres") || (s.elements.poster.style.backgroundSize = "cover")
							}).catch(function () {}), s.embed = new window.YT.Player(o, {
								videoId: a,
								playerVars: {
									autoplay: s.config.autoplay ? 1 : 0,
									hl: s.config.hl,
									controls: s.supported.ui ? 0 : 1,
									rel: 0,
									showinfo: 0,
									iv_load_policy: 3,
									modestbranding: 1,
									disablekb: 1,
									playsinline: 1,
									widget_referrer: window ? window.location.href : null,
									cc_load_policy: s.captions.active ? 1 : 0,
									cc_lang_pref: s.config.captions.language
								},
								events: {
									onError: function (e) {
										if (!s.media.error) {
											var t = e.data,
												i = {
													2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
													5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
													100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
													101: "The owner of the requested video does not allow it to be played in embedded players.",
													150: "The owner of the requested video does not allow it to be played in embedded players."
												}[t] || "An unknown error occured";
											s.media.error = {
												code: t,
												message: i
											}, b.call(s, s.media, "error")
										}
									},
									onPlaybackRateChange: function (e) {
										var t = e.target;
										s.media.playbackRate = t.getPlaybackRate(), b.call(s, s.media, "ratechange")
									},
									onReady: function (e) {
										if (!m.function(s.media.play)) {
											var i = e.target;
											He.getTitle.call(s, a), s.media.play = function () {
												ze.call(s, !0), i.playVideo()
											}, s.media.pause = function () {
												ze.call(s, !1), i.pauseVideo()
											}, s.media.stop = function () {
												i.stopVideo()
											}, s.media.duration = i.getDuration(), s.media.paused = !0, s.media.currentTime = 0, Object.defineProperty(s.media, "currentTime", {
												get: function () {
													return Number(i.getCurrentTime())
												},
												set: function (e) {
													s.paused && !s.embed.hasPlayed && s.embed.mute(), s.media.seeking = !0, b.call(s, s.media, "seeking"), i.seekTo(e)
												}
											}), Object.defineProperty(s.media, "playbackRate", {
												get: function () {
													return i.getPlaybackRate()
												},
												set: function (e) {
													i.setPlaybackRate(e)
												}
											});
											var t = s.config.volume;
											Object.defineProperty(s.media, "volume", {
												get: function () {
													return t
												},
												set: function (e) {
													t = e, i.setVolume(100 * t), b.call(s, s.media, "volumechange")
												}
											});
											var n = s.config.muted;
											Object.defineProperty(s.media, "muted", {
												get: function () {
													return n
												},
												set: function (e) {
													var t = m.boolean(e) ? e : n;
													i[(n = t) ? "mute" : "unMute"](), b.call(s, s.media, "volumechange")
												}
											}), Object.defineProperty(s.media, "currentSrc", {
												get: function () {
													return i.getVideoUrl()
												}
											}), Object.defineProperty(s.media, "ended", {
												get: function () {
													return s.currentTime === s.duration
												}
											}), s.options.speed = i.getAvailablePlaybackRates(), s.supported.ui && s.media.setAttribute("tabindex", -1), b.call(s, s.media, "timeupdate"), b.call(s, s.media, "durationchange"), clearInterval(s.timers.buffering), s.timers.buffering = setInterval(function () {
												s.media.buffered = i.getVideoLoadedFraction(), (null === s.media.lastBuffered || s.media.lastBuffered < s.media.buffered) && b.call(s, s.media, "progress"), s.media.lastBuffered = s.media.buffered, 1 === s.media.buffered && (clearInterval(s.timers.buffering), b.call(s, s.media, "canplaythrough"))
											}, 200), setTimeout(function () {
												return Te.build.call(s)
											}, 50)
										}
									},
									onStateChange: function (e) {
										var t = e.target;
										switch (clearInterval(s.timers.playing), s.media.seeking && [1, 2].includes(e.data) && (s.media.seeking = !1, b.call(s, s.media, "seeked")), e.data) {
											case -1:
												b.call(s, s.media, "timeupdate"), s.media.buffered = t.getVideoLoadedFraction(), b.call(s, s.media, "progress");
												break;
											case 0:
												ze.call(s, !1), s.media.loop ? (t.stopVideo(), t.playVideo()) : b.call(s, s.media, "ended");
												break;
											case 1:
												s.media.paused && !s.embed.hasPlayed ? s.media.pause() : (ze.call(s, !0), b.call(s, s.media, "playing"), s.timers.playing = setInterval(function () {
													b.call(s, s.media, "timeupdate")
												}, 50), s.media.duration !== t.getDuration() && (s.media.duration = t.getDuration(), b.call(s, s.media, "durationchange")));
												break;
											case 2:
												s.muted || s.embed.unMute(), ze.call(s, !1)
										}
										b.call(s, s.elements.container, "statechange", !1, {
											code: e.data
										})
									}
								}
							})
						}
					}
				},
				$e = {
					setup: function () {
						this.media ? (A(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), A(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && A(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = _("div", {
							class: this.config.classNames.video
						}), w(this.media, this.elements.wrapper), this.elements.poster = _("div", {
							class: this.config.classNames.poster
						}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? B.extend.call(this) : this.isYouTube ? He.setup.call(this) : this.isVimeo && Le.setup.call(this)) : this.debug.warn("No media element found!")
					}
				},
				Oe = (e(Re, [{
					key: "load",
					value: function () {
						var e = this;
						this.enabled && (m.object(window.google) && m.object(window.google.ima) ? this.ready() : Ie(this.player.config.urls.googleIMA.sdk).then(function () {
							e.ready()
						}).catch(function () {
							e.trigger("error", new Error("Google IMA SDK failed to load"))
						}))
					}
				}, {
					key: "ready",
					value: function () {
						var e = this;
						this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
							e.clearSafetyTimer("onAdsManagerLoaded()")
						}), this.listeners(), this.setupIMA()
					}
				}, {
					key: "setupIMA",
					value: function () {
						this.elements.container = _("div", {
							class: this.player.config.classNames.ads
						}), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
					}
				}, {
					key: "requestAds",
					value: function () {
						var t = this,
							e = this.player.elements.container;
						try {
							this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
								return t.onAdsManagerLoaded(e)
							}, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
								return t.onAdError(e)
							}, !1);
							var i = new google.ima.AdsRequest;
							i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = e.offsetWidth, i.linearAdSlotHeight = e.offsetHeight, i.nonLinearAdSlotWidth = e.offsetWidth, i.nonLinearAdSlotHeight = e.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i)
						} catch (t) {
							this.onAdError(t)
						}
					}
				}, {
					key: "pollCountdown",
					value: function () {
						var i = this;
						if (!(0 < arguments.length && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
						this.countdownTimer = setInterval(function () {
							var e = re(Math.max(i.manager.getRemainingTime(), 0)),
								t = "".concat(J("advertisement", i.player.config), " - ").concat(e);
							i.elements.container.setAttribute("data-badge-text", t)
						}, 100)
					}
				}, {
					key: "onAdsManagerLoaded",
					value: function (e) {
						var s = this;
						if (this.enabled) {
							var t = new google.ima.AdsRenderingSettings;
							t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), m.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
								if (0 !== e && -1 !== e && e < s.player.duration) {
									var t = s.player.elements.progress;
									if (m.element(t)) {
										var i = 100 / s.player.duration * e,
											n = _("span", {
												class: s.player.config.classNames.cues
											});
										n.style.left = "".concat(i.toString(), "%"), t.appendChild(n)
									}
								}
							}), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
								return s.onAdError(e)
							}), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
								s.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
									return s.onAdEvent(e)
								})
							}), this.trigger("loaded")
						}
					}
				}, {
					key: "onAdEvent",
					value: function (e) {
						function t(e) {
							var t = "ads".concat(e.replace(/_/g, "").toLowerCase());
							b.call(i.player, i.player.media, t)
						}
						var i = this,
							n = this.player.elements.container,
							s = e.getAd();
						switch (e.type) {
							case google.ima.AdEvent.Type.LOADED:
								this.trigger("loaded"), t(e.type), this.pollCountdown(!0), s.isLinear() || (s.width = n.offsetWidth, s.height = n.offsetHeight);
								break;
							case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
								t(e.type), this.loadAds();
								break;
							case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
								t(e.type), this.pauseContent();
								break;
							case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
								t(e.type), this.pollCountdown(), this.resumeContent();
								break;
							case google.ima.AdEvent.Type.STARTED:
							case google.ima.AdEvent.Type.MIDPOINT:
							case google.ima.AdEvent.Type.COMPLETE:
							case google.ima.AdEvent.Type.IMPRESSION:
							case google.ima.AdEvent.Type.CLICK:
								t(e.type)
						}
					}
				}, {
					key: "onAdError",
					value: function (e) {
						this.cancel(), this.player.debug.warn("Ads error", e)
					}
				}, {
					key: "listeners",
					value: function () {
						var n, s = this,
							e = this.player.elements.container;
						this.player.on("ended", function () {
							s.loader.contentComplete()
						}), this.player.on("seeking", function () {
							return n = s.player.currentTime
						}), this.player.on("seeked", function () {
							var i = s.player.currentTime;
							m.empty(s.cuePoints) || s.cuePoints.forEach(function (e, t) {
								n < e && e < i && (s.manager.discardAdBreak(), s.cuePoints.splice(t, 1))
							})
						}), window.addEventListener("resize", function () {
							s.manager && s.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
						})
					}
				}, {
					key: "play",
					value: function () {
						var t = this,
							e = this.player.elements.container;
						this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
							t.elements.displayContainer.initialize();
							try {
								t.initialized || (t.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), t.manager.start()), t.initialized = !0
							} catch (e) {
								t.onAdError(e)
							}
						}).catch(function () {})
					}
				}, {
					key: "resumeContent",
					value: function () {
						this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
					}
				}, {
					key: "pauseContent",
					value: function () {
						this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
					}
				}, {
					key: "cancel",
					value: function () {
						this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
					}
				}, {
					key: "loadAds",
					value: function () {
						var t = this;
						this.managerPromise.then(function () {
							t.manager && t.manager.destroy(), t.managerPromise = new Promise(function (e) {
								t.on("loaded", e), t.player.debug.log(t.manager)
							}), t.requestAds()
						}).catch(function () {})
					}
				}, {
					key: "trigger",
					value: function (e) {
						for (var t = this, i = arguments.length, n = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
						var a = this.events[e];
						m.array(a) && a.forEach(function (e) {
							m.function(e) && e.apply(t, n)
						})
					}
				}, {
					key: "on",
					value: function (e, t) {
						return m.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
					}
				}, {
					key: "startSafetyTimer",
					value: function (e, t) {
						var i = this;
						this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
							i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
						}, e)
					}
				}, {
					key: "clearSafetyTimer",
					value: function (e) {
						m.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
					}
				}, {
					key: "enabled",
					get: function () {
						return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !m.empty(this.publisherId)
					}
				}, {
					key: "tagUrl",
					get: function () {
						var e = {
							AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
							AV_CHANNELID: "5a0458dc28a06145e4519d21",
							AV_URL: window.location.hostname,
							cb: Date.now(),
							AV_WIDTH: 640,
							AV_HEIGHT: 480,
							AV_CDIM2: this.publisherId
						};
						return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(ue(e))
					}
				}]), Re),
				je = {
					insertElements: function (t, e) {
						var i = this;
						m.string(e) ? x(t, this.media, {
							src: e
						}) : m.array(e) && e.forEach(function (e) {
							x(t, i.media, e)
						})
					},
					change: function (l) {
						var c = this;
						Y(l, "sources.length") ? (B.cancelRequests.call(this), this.destroy.call(this, function () {
							c.options.quality = [], C(c.media), c.media = null, m.element(c.elements.container) && c.elements.container.removeAttribute("class");
							var e = l.sources,
								t = l.type,
								i = p(e, 1)[0],
								n = i.provider,
								s = void 0 === n ? me.html5 : n,
								a = i.src,
								o = "html5" === s ? t : "div",
								r = "html5" === s ? {} : {
									src: a
								};
							Object.assign(c, {
								provider: s,
								type: t,
								supported: q.check(t, s, c.config.playsinline),
								media: _(o, r)
							}), c.elements.container.appendChild(c.media), m.boolean(l.autoplay) && (c.config.autoplay = l.autoplay), c.isHTML5 && (c.config.crossorigin && c.media.setAttribute("crossorigin", ""), c.config.autoplay && c.media.setAttribute("autoplay", ""), m.empty(l.poster) || (c.poster = l.poster), c.config.loop.active && c.media.setAttribute("loop", ""), c.config.muted && c.media.setAttribute("muted", ""), c.config.playsinline && c.media.setAttribute("playsinline", "")), Te.addStyleHook.call(c), c.isHTML5 && je.insertElements.call(c, "source", e), c.config.title = l.title, $e.setup.call(c), c.isHTML5 && ("tracks" in l && je.insertElements.call(c, "track", l.tracks), c.media.load()), (c.isHTML5 || c.isEmbed && !c.supported.ui) && Te.build.call(c), c.fullscreen.update()
						}, !0)) : this.debug.warn("Invalid source format")
					}
				},
				We = (e(Fe, [{
					key: "play",
					value: function () {
						return m.function(this.media.play) ? this.media.play() : null
					}
				}, {
					key: "pause",
					value: function () {
						this.playing && m.function(this.media.pause) && this.media.pause()
					}
				}, {
					key: "togglePlay",
					value: function (e) {
						(m.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
					}
				}, {
					key: "stop",
					value: function () {
						this.isHTML5 ? (this.pause(), this.restart()) : m.function(this.media.stop) && this.media.stop()
					}
				}, {
					key: "restart",
					value: function () {
						this.currentTime = 0
					}
				}, {
					key: "rewind",
					value: function (e) {
						this.currentTime = this.currentTime - (m.number(e) ? e : this.config.seekTime)
					}
				}, {
					key: "forward",
					value: function (e) {
						this.currentTime = this.currentTime + (m.number(e) ? e : this.config.seekTime)
					}
				}, {
					key: "increaseVolume",
					value: function (e) {
						var t = this.media.muted ? 0 : this.volume;
						this.volume = t + (m.number(e) ? e : 0)
					}
				}, {
					key: "decreaseVolume",
					value: function (e) {
						this.increaseVolume(-e)
					}
				}, {
					key: "toggleCaptions",
					value: function (e) {
						de.toggle.call(this, e, !1)
					}
				}, {
					key: "airplay",
					value: function () {
						q.airplay && this.media.webkitShowPlaybackTargetPicker()
					}
				}, {
					key: "toggleControls",
					value: function (e) {
						if (!this.supported.ui || this.isAudio) return !1;
						var t = E(this.elements.container, this.config.classNames.hideControls),
							i = void 0 === e ? void 0 : !e,
							n = A(this.elements.container, this.config.classNames.hideControls, i);
						if (n && this.config.controls.includes("settings") && !m.empty(this.config.settings) && le.toggleMenu.call(this, !1), n !== t) {
							var s = n ? "controlshidden" : "controlsshown";
							b.call(this, this.media, s)
						}
						return !n
					}
				}, {
					key: "on",
					value: function (e, t) {
						g.call(this, this.elements.container, e, t)
					}
				}, {
					key: "once",
					value: function (e, t) {
						y.call(this, this.elements.container, e, t)
					}
				}, {
					key: "off",
					value: function (e, t) {
						v(this.elements.container, e, t)
					}
				}, {
					key: "destroy",
					value: function (e) {
						var t = this,
							i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
						if (this.ready) {
							var n = function () {
								document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (C(t.elements.buttons.play), C(t.elements.captions), C(t.elements.controls), C(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), m.function(e) && e()) : (function () {
									this && this.eventListeners && (this.eventListeners.forEach(function (e) {
										var t = e.element,
											i = e.type,
											n = e.callback,
											s = e.options;
										t.removeEventListener(i, n, s)
									}), this.eventListeners = [])
								}.call(t), D(t.elements.original, t.elements.container), b.call(t, t.elements.original, "destroyed", !0), m.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
									t.elements = null, t.media = null
								}, 200))
							};
							this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), Te.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && m.function(this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200))
						}
					}
				}, {
					key: "supports",
					value: function (e) {
						return q.mime.call(this, e)
					}
				}, {
					key: "isHTML5",
					get: function () {
						return Boolean(this.provider === me.html5)
					}
				}, {
					key: "isEmbed",
					get: function () {
						return Boolean(this.isYouTube || this.isVimeo)
					}
				}, {
					key: "isYouTube",
					get: function () {
						return Boolean(this.provider === me.youtube)
					}
				}, {
					key: "isVimeo",
					get: function () {
						return Boolean(this.provider === me.vimeo)
					}
				}, {
					key: "isVideo",
					get: function () {
						return Boolean(this.type === ve)
					}
				}, {
					key: "isAudio",
					get: function () {
						return Boolean(this.type === ge)
					}
				}, {
					key: "playing",
					get: function () {
						return Boolean(this.ready && !this.paused && !this.ended)
					}
				}, {
					key: "paused",
					get: function () {
						return Boolean(this.media.paused)
					}
				}, {
					key: "stopped",
					get: function () {
						return Boolean(this.paused && 0 === this.currentTime)
					}
				}, {
					key: "ended",
					get: function () {
						return Boolean(this.media.ended)
					}
				}, {
					key: "currentTime",
					set: function (e) {
						if (this.duration) {
							var t = m.number(e) && 0 < e;
							this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
						}
					},
					get: function () {
						return Number(this.media.currentTime)
					}
				}, {
					key: "buffered",
					get: function () {
						var e = this.media.buffered;
						return m.number(e) ? e : e && e.length && 0 < this.duration ? e.end(0) / this.duration : 0
					}
				}, {
					key: "seeking",
					get: function () {
						return Boolean(this.media.seeking)
					}
				}, {
					key: "duration",
					get: function () {
						var e = parseFloat(this.config.duration),
							t = (this.media || {}).duration,
							i = m.number(t) && t !== 1 / 0 ? t : 0;
						return e || i
					}
				}, {
					key: "volume",
					set: function (e) {
						var t = e;
						m.string(t) && (t = Number(t)), m.number(t) || (t = this.storage.get("volume")), m.number(t) || (t = this.config.volume), 1 < t && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !m.empty(e) && this.muted && 0 < t && (this.muted = !1)
					},
					get: function () {
						return Number(this.media.volume)
					}
				}, {
					key: "muted",
					set: function (e) {
						var t = e;
						m.boolean(t) || (t = this.storage.get("muted")), m.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
					},
					get: function () {
						return Boolean(this.media.muted)
					}
				}, {
					key: "hasAudio",
					get: function () {
						return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
					}
				}, {
					key: "speed",
					set: function (e) {
						var t = null;
						m.number(e) && (t = e), m.number(t) || (t = this.storage.get("speed")), m.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), 2 < t && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (".concat(t, ")"))
					},
					get: function () {
						return Number(this.media.playbackRate)
					}
				}, {
					key: "quality",
					set: function (e) {
						var t, i, n = this.config.quality,
							s = this.options.quality;
						if (s.length) {
							var a = [!m.empty(e) && Number(e), this.storage.get("quality"), n.selected, n.default].find(m.number),
								o = !0;
							if (!s.includes(a)) {
								var r = (t = s, i = a, m.array(t) && t.length ? t.reduce(function (e, t) {
									return Math.abs(t - i) < Math.abs(e - i) ? t : e
								}) : null);
								this.debug.warn("Unsupported quality option: ".concat(a, ", using ").concat(r, " instead")), a = r, o = !1
							}
							n.selected = a, this.media.quality = a, o && this.storage.set({
								quality: a
							})
						}
					},
					get: function () {
						return this.media.quality
					}
				}, {
					key: "loop",
					set: function (e) {
						var t = m.boolean(e) ? e : this.config.loop.active;
						this.config.loop.active = t, this.media.loop = t
					},
					get: function () {
						return Boolean(this.media.loop)
					}
				}, {
					key: "source",
					set: function (e) {
						je.change.call(this, e)
					},
					get: function () {
						return this.media.currentSrc
					}
				}, {
					key: "download",
					get: function () {
						var e = this.config.urls.download;
						return m.url(e) ? e : this.source
					}
				}, {
					key: "poster",
					set: function (e) {
						this.isVideo ? Te.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video")
					},
					get: function () {
						return this.isVideo ? this.media.getAttribute("poster") : null
					}
				}, {
					key: "autoplay",
					set: function (e) {
						var t = m.boolean(e) ? e : this.config.autoplay;
						this.config.autoplay = t
					},
					get: function () {
						return Boolean(this.config.autoplay)
					}
				}, {
					key: "currentTrack",
					set: function (e) {
						de.set.call(this, e, !1)
					},
					get: function () {
						var e = this.captions,
							t = e.toggled,
							i = e.currentTrack;
						return t ? i : -1
					}
				}, {
					key: "language",
					set: function (e) {
						de.setLanguage.call(this, e, !1)
					},
					get: function () {
						return (de.getCurrentTrack.call(this) || {}).language
					}
				}, {
					key: "pip",
					set: function (e) {
						if (q.pip) {
							var t = m.boolean(e) ? e : !this.pip;
							m.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? fe : "inline"), m.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
						}
					},
					get: function () {
						return q.pip ? m.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === fe : null
					}
				}], [{
					key: "supported",
					value: function (e, t, i) {
						return q.check(e, t, i)
					}
				}, {
					key: "loadSprite",
					value: function (e, t) {
						return ne(e, t)
					}
				}, {
					key: "setup",
					value: function (e) {
						var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
							i = null;
						return m.string(e) ? i = Array.from(document.querySelectorAll(e)) : m.nodeList(e) ? i = Array.from(e) : m.array(e) && (i = e.filter(m.element)), m.empty(i) ? null : i.map(function (e) {
							return new Fe(e, t)
						})
					}
				}]), Fe);

			function Fe(e, t) {
				var i, n = this;
				if (c(this, Fe), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = q.touch, this.media = e, m.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || m.nodeList(this.media) || m.array(this.media)) && (this.media = this.media[0]), this.config = V({}, pe, Fe.defaults, t || {}, function () {
						try {
							return JSON.parse(n.media.getAttribute("data-plyr-config"))
						} catch (e) {
							return {}
						}
					}()), this.elements = {
						container: null,
						captions: null,
						buttons: {},
						display: {},
						progress: {},
						inputs: {},
						settings: {
							popup: null,
							menu: null,
							panels: {},
							buttons: {}
						}
					}, this.captions = {
						active: null,
						currentTrack: -1,
						meta: new WeakMap
					}, this.fullscreen = {
						active: !1
					}, this.options = {
						speed: [],
						quality: []
					}, this.debug = new ye(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", q), !m.nullOrUndefined(this.media) && m.element(this.media))
					if (this.media.plyr) this.debug.warn("Target already setup");
					else if (this.config.enabled)
					if (q.check().api) {
						var s = this.media.cloneNode(!0);
						s.autoplay = !1, this.elements.original = s;
						var a = this.media.tagName.toLowerCase(),
							o = null,
							r = null;
						switch (a) {
							case "div":
								if (o = this.media.querySelector("iframe"), m.element(o)) {
									if (r = ce(o.getAttribute("src")), this.provider = (i = r.toString(), /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(i) ? me.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(i) ? me.vimeo : null), this.elements.container = this.media, this.media = o, this.elements.container.className = "", r.search.length) {
										var l = ["1", "true"];
										l.includes(r.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(r.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(r.searchParams.get("playsinline")), this.config.hl = r.searchParams.get("hl")) : this.config.playsinline = !0
									}
								} else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
								if (m.empty(this.provider) || !Object.keys(me).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
								this.type = ve;
								break;
							case "video":
							case "audio":
								this.type = a, this.provider = me.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
								break;
							default:
								return void this.debug.error("Setup failed: unsupported type")
						}
						this.supported = q.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new De(this), this.storage = new ee(this), this.media.plyr = this, m.element(this.elements.container) || (this.elements.container = _("div"), w(this.media, this.elements.container)), Te.addStyleHook.call(this), $e.setup.call(this), this.config.debug && g.call(this, this.elements.container, this.config.events.join(" "), function (e) {
							n.debug.log("event: ".concat(e.type))
						}), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Te.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new _e(this), this.config.ads.enabled && (this.ads = new Oe(this)), this.config.autoplay && this.play(), this.lastSeekTime = 0) : this.debug.error("Setup failed: no support")
					} else this.debug.error("Setup failed: no support");
				else this.debug.error("Setup failed: disabled by config");
				else this.debug.error("Setup failed: no suitable element passed")
			}

			function Re(e) {
				var i = this;
				c(this, Re), this.player = e, this.publisherId = e.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
					container: null,
					displayContainer: null
				}, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
					i.on("loaded", e), i.on("error", t)
				}), this.load()
			}
			return We.defaults = JSON.parse(JSON.stringify(pe)), We
		}, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t())
	}

	function serchautocomp() {
		var kDa, oDa, pDa, CBa, uBa, aya, cya, dya, eya, upa, wpa, xpa, ypa, zpa, Apa, Cpa, Uoa, Lna, Nna, Cma, tma, ima, Ula, mla, cla, Xka, Hka, Cka, rka, gka, Wja, Gja, vja, $da, zda, Y7, x5, c5, e5, U2;

		function Dpa() {
			var e = upa(this).find(":ui-button");
			setTimeout(function () {
				e.button("refresh")
			}, 1)
		}

		function Epa(e) {
			var t = e.name,
				i = e.form,
				n = upa([]);
			return t && (n = i ? upa(i).find("[name='" + t + "']") : upa("[name='" + t + "']", e.ownerDocument).filter(function () {
				return !this.form
			})), n
		}

		function W2(e, t) {
			var i = e.nodeName.toLowerCase();
			if ("area" !== i) return (/input|select|textarea|button|object/.test(i) ? !e.disabled : "a" == i && e.href || t) && X2(e);
			var n, s = e.parentNode,
				a = s.name;
			return !(!e.href || !a || "map" !== s.nodeName.toLowerCase()) && (!!(n = U2("img[usemap=#" + a + "]")[0]) && X2(n))
		}

		function X2(e) {
			return !U2(e).parents().andSelf().filter(function () {
				return "hidden" === U2.curCSS(this, "visibility") || U2.expr.filters.hidden(this)
			}).length
		}
		U2 = jQuery, U2.ui = U2.ui || {}, U2.ui.version || (U2.extend(U2.ui, {
				version: "1.8.24",
				keyCode: {
					ALT: 18,
					BACKSPACE: 8,
					CAPS_LOCK: 20,
					COMMA: 188,
					COMMAND: 91,
					COMMAND_LEFT: 91,
					COMMAND_RIGHT: 93,
					CONTROL: 17,
					DELETE: 46,
					DOWN: 40,
					END: 35,
					ENTER: 13,
					ESCAPE: 27,
					HOME: 36,
					INSERT: 45,
					LEFT: 37,
					MENU: 93,
					NUMPAD_ADD: 107,
					NUMPAD_DECIMAL: 110,
					NUMPAD_DIVIDE: 111,
					NUMPAD_ENTER: 108,
					NUMPAD_MULTIPLY: 106,
					NUMPAD_SUBTRACT: 109,
					PAGE_DOWN: 34,
					PAGE_UP: 33,
					PERIOD: 190,
					RIGHT: 39,
					SHIFT: 16,
					SPACE: 32,
					TAB: 9,
					UP: 38,
					WINDOWS: 91
				}
			}), U2.fn.extend({
				propAttr: U2.fn.prop || U2.fn.attr,
				_focus: U2.fn.focus,
				focus: function (t, i) {
					return "number" == typeof t ? this.each(function () {
						var e = this;
						setTimeout(function () {
							U2(e).focus(), i && i.call(e)
						}, t)
					}) : this._focus.apply(this, arguments)
				},
				scrollParent: function () {
					var e;
					return e = U2.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
						return /(relative|absolute|fixed)/.test(U2.curCSS(this, "position", 1)) && /(auto|scroll)/.test(U2.curCSS(this, "overflow", 1) + U2.curCSS(this, "overflow-y", 1) + U2.curCSS(this, "overflow-x", 1))
					}).eq(0) : this.parents().filter(function () {
						return /(auto|scroll)/.test(U2.curCSS(this, "overflow", 1) + U2.curCSS(this, "overflow-y", 1) + U2.curCSS(this, "overflow-x", 1))
					}).eq(0), /fixed/.test(this.css("position")) || !e.length ? U2(document) : e
				},
				zIndex: function (e) {
					if (void 0 !== e) return this.css("zIndex", e);
					if (this.length)
						for (var t, i, n = U2(this[0]); n.length && n[0] !== document;) {
							if (("absolute" === (t = n.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
							n = n.parent()
						}
					return 0
				},
				disableSelection: function () {
					return this.bind((U2.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
						e.preventDefault()
					})
				},
				enableSelection: function () {
					return this.unbind(".ui-disableSelection")
				}
			}), U2("<a>").outerWidth(1).jquery || U2.each(["Width", "Height"], function (e, i) {
				function n(e, t, i, n) {
					return U2.each(s, function () {
						t -= parseFloat(U2.curCSS(e, "padding" + this, !0)) || 0, i && (t -= parseFloat(U2.curCSS(e, "border" + this + "Width", !0)) || 0), n && (t -= parseFloat(U2.curCSS(e, "margin" + this, !0)) || 0)
					}), t
				}
				var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
					a = i.toLowerCase(),
					o = {
						innerWidth: U2.fn.innerWidth,
						innerHeight: U2.fn.innerHeight,
						outerWidth: U2.fn.outerWidth,
						outerHeight: U2.fn.outerHeight
					};
				U2.fn["inner" + i] = function (e) {
					return void 0 === e ? o["inner" + i].call(this) : this.each(function () {
						U2(this).css(a, n(this, e) + "px")
					})
				}, U2.fn["outer" + i] = function (e, t) {
					return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function () {
						U2(this).css(a, n(this, e, !0, t) + "px")
					})
				}
			}), U2.extend(U2.expr[":"], {
				data: U2.expr.createPseudo ? U2.expr.createPseudo(function (t) {
					return function (e) {
						return !!U2.data(e, t)
					}
				}) : function (e, t, i) {
					return !!U2.data(e, i[3])
				},
				focusable: function (e) {
					return W2(e, !isNaN(U2.attr(e, "tabindex")))
				},
				tabbable: function (e) {
					var t = U2.attr(e, "tabindex"),
						i = isNaN(t);
					return (i || 0 <= t) && W2(e, !i)
				}
			}), U2(function () {
				var e = document.body,
					t = e.appendChild(t = document.createElement("div"));
				t.offsetHeight, U2.extend(t.style, {
					minHeight: "100px",
					height: "auto",
					padding: 0,
					borderWidth: 0
				}), U2.support.minHeight = 100 === t.offsetHeight, U2.support.selectstart = "onselectstart" in t, e.removeChild(t).style.display = "none"
			}), U2.curCSS || (U2.curCSS = U2.css), U2.extend(U2.ui, {
				plugin: {
					add: function (e, t, i) {
						var n = U2.ui[e].prototype;
						for (var s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([t, i[s]])
					},
					call: function (e, t, i) {
						var n = e.plugins[t];
						if (n && e.element[0].parentNode)
							for (var s = 0; s < n.length; s++) e.options[n[s][0]] && n[s][1].apply(e.element, i)
					}
				},
				contains: function (e, t) {
					return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
				},
				hasScroll: function (e, t) {
					if ("hidden" === U2(e).css("overflow")) return !1;
					var i = t && "left" === t ? "scrollLeft" : "scrollTop",
						n = !1;
					return 0 < e[i] || (e[i] = 1, n = 0 < e[i], e[i] = 0, n)
				},
				isOverAxis: function (e, t, i) {
					return t < e && e < t + i
				},
				isOver: function (e, t, i, n, s, a) {
					return U2.ui.isOverAxis(e, i, s) && U2.ui.isOverAxis(t, n, a)
				}
			})),
			function (o) {
				if (o.cleanData) {
					var n = o.cleanData;
					o.cleanData = function (e) {
						for (var t, i = 0; null != (t = e[i]); i++) try {
							o(t).triggerHandler("remove")
						} catch (e) {}
						n(e)
					}
				} else {
					var i = o.fn.remove;
					o.fn.remove = function (e, t) {
						return this.each(function () {
							return t || (e && !o.filter(e, [this]).length || o("*", this).add([this]).each(function () {
								try {
									o(this).triggerHandler("remove")
								} catch (e) {}
							})), i.call(o(this), e, t)
						})
					}
				}
				o.widget = function (t, e, i) {
					var n, s = t.split(".")[0];
					n = s + "-" + (t = t.split(".")[1]), i || (i = e, e = o.Widget), o.expr[":"][n] = function (e) {
						return !!o.data(e, t)
					}, o[s] = o[s] || {}, o[s][t] = function (e, t) {
						arguments.length && this._createWidget(e, t)
					};
					var a = new e;
					a.options = o.extend(!0, {}, a.options), o[s][t].prototype = o.extend(!0, a, {
						namespace: s,
						widgetName: t,
						widgetEventPrefix: o[s][t].prototype.widgetEventPrefix || t,
						widgetBaseClass: n
					}, i), o.widget.bridge(t, o[s][t])
				}, o.widget.bridge = function (a, t) {
					o.fn[a] = function (i) {
						var e = "string" == typeof i,
							n = Array.prototype.slice.call(arguments, 1),
							s = this;
						return i = !e && n.length ? o.extend.apply(null, [!0, i].concat(n)) : i, e && "_" === i.charAt(0) || (e ? this.each(function () {
							var e = o.data(this, a),
								t = e && o.isFunction(e[i]) ? e[i].apply(e, n) : e;
							if (t !== e && void 0 !== t) return s = t, !1
						}) : this.each(function () {
							var e = o.data(this, a);
							e ? e.option(i || {})._init() : o.data(this, a, new t(i, this))
						})), s
					}
				}, o.Widget = function (e, t) {
					arguments.length && this._createWidget(e, t)
				}, o.Widget.prototype = {
					widgetName: "widget",
					widgetEventPrefix: "",
					options: {
						disabled: !1
					},
					_createWidget: function (e, t) {
						o.data(t, this.widgetName, this), this.element = o(t), this.options = o.extend(!0, {}, this.options, this._getCreateOptions(), e);
						var i = this;
						this.element.bind("remove." + this.widgetName, function () {
							i.destroy()
						}), this._create(), this._trigger("create"), this._init()
					},
					_getCreateOptions: function () {
						return o.metadata && o.metadata.get(this.element[0])[this.widgetName]
					},
					_create: function () {},
					_init: function () {},
					destroy: function () {
						this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
					},
					widget: function () {
						return this.element
					},
					option: function (e, t) {
						var i = e;
						if (0 === arguments.length) return o.extend({}, this.options);
						if ("string" == typeof e) {
							if (void 0 === t) return this.options[e];
							(i = {})[e] = t
						}
						return this._setOptions(i), this
					},
					_setOptions: function (e) {
						var i = this;
						return o.each(e, function (e, t) {
							i._setOption(e, t)
						}), this
					},
					_setOption: function (e, t) {
						return this.options[e] = t, "disabled" === e && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
					},
					enable: function () {
						return this._setOption("disabled", !1)
					},
					disable: function () {
						return this._setOption("disabled", !0)
					},
					_trigger: function (e, t, i) {
						var n, s, a = this.options[e];
						if (i = i || {}, (t = o.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], s = t.originalEvent)
							for (n in s) n in t || (t[n] = s[n]);
						return this.element.trigger(t, i), !(o.isFunction(a) && !1 === a.call(this.element[0], t, i) || t.isDefaultPrevented())
					}
				}
			}(jQuery), c5 = jQuery, e5 = !1, c5(document).mouseup(function (e) {
				e5 = !1
			}), c5.widget("ui.mouse", {
				options: {
					cancel: ":input,option",
					distance: 1,
					delay: 0
				},
				_mouseInit: function () {
					var t = this;
					this.element.bind("mousedown." + this.widgetName, function (e) {
						return t._mouseDown(e)
					}).bind("click." + this.widgetName, function (e) {
						if (!0 === c5.data(e.target, t.widgetName + ".preventClickEvent")) return c5.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
					}), this.started = !1
				},
				_mouseDestroy: function () {
					this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && c5(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
				},
				_mouseDown: function (e) {
					if (!e5) {
						this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
						var t = this,
							i = 1 == e.which,
							n = !("string" != typeof this.options.cancel || !e.target.nodeName) && c5(e.target).closest(this.options.cancel).length;
						return i && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
							t.mouseDelayMet = !0
						}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? e.preventDefault() : (!0 === c5.data(e.target, this.widgetName + ".preventClickEvent") && c5.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
							return t._mouseMove(e)
						}, this._mouseUpDelegate = function (e) {
							return t._mouseUp(e)
						}, c5(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), e5 = !0), !0) : !0
					}
				},
				_mouseMove: function (e) {
					return !c5.browser.msie || 9 <= document.documentMode || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
				},
				_mouseUp: function (e) {
					return c5(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target == this._mouseDownEvent.target && c5.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
				},
				_mouseDistanceMet: function (e) {
					return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
				},
				_mouseDelayMet: function (e) {
					return this.mouseDelayMet
				},
				_mouseStart: function (e) {},
				_mouseDrag: function (e) {},
				_mouseStop: function (e) {},
				_mouseCapture: function (e) {
					return !0
				}
			}), x5 = jQuery, x5.widget("ui.draggable", x5.ui.mouse, {
				widgetEventPrefix: "drag",
				options: {
					addClasses: !0,
					appendTo: "parent",
					axis: !1,
					connectToSortable: !1,
					containment: !1,
					cursor: "auto",
					cursorAt: !1,
					grid: !1,
					handle: !1,
					helper: "original",
					iframeFix: !1,
					opacity: !1,
					refreshPositions: !1,
					revert: !1,
					revertDuration: 500,
					scope: "default",
					scroll: !0,
					scrollSensitivity: 20,
					scrollSpeed: 20,
					snap: !1,
					snapMode: "both",
					snapTolerance: 20,
					stack: !1,
					zIndex: !1
				},
				_create: function () {
					"original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
				},
				destroy: function () {
					if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
				},
				_mouseCapture: function (e) {
					var t = this.options;
					return !(this.helper || t.disabled || x5(e.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(e), !!this.handle && (t.iframeFix && x5(!0 === t.iframeFix ? "iframe" : t.iframeFix).each(function () {
						x5('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
							width: this.offsetWidth + "px",
							height: this.offsetHeight + "px",
							position: "absolute",
							opacity: "0.001",
							zIndex: 1e3
						}).css(x5(this).offset()).appendTo("body")
					}), !0))
				},
				_mouseStart: function (e) {
					var t = this.options;
					return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), x5.ui.ddmanager && (x5.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
						top: this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, x5.extend(this.offset, {
						click: {
							left: e.pageX - this.offset.left,
							top: e.pageY - this.offset.top
						},
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, t.cursorAt && this._adjustOffsetFromHelper(t.cursorAt), t.containment && this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), x5.ui.ddmanager && !t.dropBehaviour && x5.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), x5.ui.ddmanager && x5.ui.ddmanager.dragStart(this, e), !0)
				},
				_mouseDrag: function (e, t) {
					if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !t) {
						var i = this._uiHash();
						if (!1 === this._trigger("drag", e, i)) return this._mouseUp({}), !1;
						this.position = i.position
					}
					return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), x5.ui.ddmanager && x5.ui.ddmanager.drag(this, e), !1
				},
				_mouseStop: function (e) {
					var t = !1;
					x5.ui.ddmanager && !this.options.dropBehaviour && (t = x5.ui.ddmanager.drop(this, e)), this.dropped && (t = this.dropped, this.dropped = !1);
					for (var i = this.element[0], n = !1; i = i && i.parentNode;) i == document && (n = !0);
					if (!n && "original" === this.options.helper) return !1;
					if ("invalid" == this.options.revert && !t || "valid" == this.options.revert && t || !0 === this.options.revert || x5.isFunction(this.options.revert) && this.options.revert.call(this.element, t)) {
						var s = this;
						x5(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
							!1 !== s._trigger("stop", e) && s._clear()
						})
					} else !1 !== this._trigger("stop", e) && this._clear();
					return !1
				},
				_mouseUp: function (e) {
					return x5("div.ui-draggable-iframeFix").each(function () {
						this.parentNode.removeChild(this)
					}), x5.ui.ddmanager && x5.ui.ddmanager.dragStop(this, e), x5.ui.mouse.prototype._mouseUp.call(this, e)
				},
				cancel: function () {
					return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
				},
				_getHandle: function (e) {
					var t = !this.options.handle || !x5(this.options.handle, this.element).length;
					return x5(this.options.handle, this.element).find("*").andSelf().each(function () {
						this == e.target && (t = !0)
					}), t
				},
				_createHelper: function (e) {
					var t = this.options,
						i = x5.isFunction(t.helper) ? x5(t.helper.apply(this.element[0], [e])) : "clone" == t.helper ? this.element.clone().removeAttr("id") : this.element;
					return i.parents("body").length || i.appendTo("parent" == t.appendTo ? this.element[0].parentNode : t.appendTo), i[0] == this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
				},
				_adjustOffsetFromHelper: function (e) {
					"string" == typeof e && (e = e.split(" ")), x5.isArray(e) && (e = {
						left: +e[0],
						top: +e[1] || 0
					}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
				},
				_getParentOffset: function () {
					this.offsetParent = this.helper.offsetParent();
					var e = this.offsetParent.offset();
					return "absolute" == this.cssPosition && this.scrollParent[0] != document && x5.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && x5.browser.msie) && (e = {
						top: 0,
						left: 0
					}), {
						top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
						left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
					}
				},
				_getRelativeOffset: function () {
					if ("relative" != this.cssPosition) return {
						top: 0,
						left: 0
					};
					var e = this.element.position();
					return {
						top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					}
				},
				_cacheMargins: function () {
					this.margins = {
						left: parseInt(this.element.css("marginLeft"), 10) || 0,
						top: parseInt(this.element.css("marginTop"), 10) || 0,
						right: parseInt(this.element.css("marginRight"), 10) || 0,
						bottom: parseInt(this.element.css("marginBottom"), 10) || 0
					}
				},
				_cacheHelperProportions: function () {
					this.helperProportions = {
						width: this.helper.outerWidth(),
						height: this.helper.outerHeight()
					}
				},
				_setContainment: function () {
					var e = this.options;
					if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), "document" != e.containment && "window" != e.containment || (this.containment = ["document" == e.containment ? 0 : x5(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : x5(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : x5(window).scrollLeft()) + x5("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : x5(window).scrollTop()) + (x5("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
					else {
						var t = x5(e.containment),
							i = t[0];
						if (!i) return;
						t.offset();
						var n = "hidden" != x5(i).css("overflow");
						this.containment = [(parseInt(x5(i).css("borderLeftWidth"), 10) || 0) + (parseInt(x5(i).css("paddingLeft"), 10) || 0), (parseInt(x5(i).css("borderTopWidth"), 10) || 0) + (parseInt(x5(i).css("paddingTop"), 10) || 0), (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(x5(i).css("borderLeftWidth"), 10) || 0) - (parseInt(x5(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(x5(i).css("borderTopWidth"), 10) || 0) - (parseInt(x5(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t
					}
				},
				_convertPositionTo: function (e, t) {
					t = t || this.position;
					var i = "absolute" == e ? 1 : -1,
						n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && x5.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
						s = /(html|body)/i.test(n[0].tagName);
					return {
						top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (x5.browser.safari && x5.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i),
						left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (x5.browser.safari && x5.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i)
					}
				},
				_generatePosition: function (e) {
					var t = this.options,
						i = "absolute" != this.cssPosition || this.scrollParent[0] != document && x5.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
						n = /(html|body)/i.test(i[0].tagName),
						s = e.pageX,
						a = e.pageY;
					if (this.originalPosition) {
						var o;
						if (this.containment) {
							if (this.relative_container) {
								var r = this.relative_container.offset();
								o = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]
							} else o = this.containment;
							e.pageX - this.offset.click.left < o[0] && (s = o[0] + this.offset.click.left), e.pageY - this.offset.click.top < o[1] && (a = o[1] + this.offset.click.top), e.pageX - this.offset.click.left > o[2] && (s = o[2] + this.offset.click.left), e.pageY - this.offset.click.top > o[3] && (a = o[3] + this.offset.click.top)
						}
						if (t.grid) {
							var l = t.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / t.grid[1]) * t.grid[1] : this.originalPageY;
							a = o && (l - this.offset.click.top < o[1] || l - this.offset.click.top > o[3]) ? l - this.offset.click.top < o[1] ? l + t.grid[1] : l - t.grid[1] : l;
							var c = t.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / t.grid[0]) * t.grid[0] : this.originalPageX;
							s = o && (c - this.offset.click.left < o[0] || c - this.offset.click.left > o[2]) ? c - this.offset.click.left < o[0] ? c + t.grid[0] : c - t.grid[0] : c
						}
					}
					return {
						top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (x5.browser.safari && x5.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : i.scrollTop()),
						left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (x5.browser.safari && x5.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : i.scrollLeft())
					}
				},
				_clear: function () {
					this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
				},
				_trigger: function (e, t, i) {
					return i = i || this._uiHash(), x5.ui.plugin.call(this, e, [t, i]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), x5.Widget.prototype._trigger.call(this, e, t, i)
				},
				plugins: {},
				_uiHash: function (e) {
					return {
						helper: this.helper,
						position: this.position,
						originalPosition: this.originalPosition,
						offset: this.positionAbs
					}
				}
			}), x5.extend(x5.ui.draggable, {
				version: "1.8.24"
			}), x5.ui.plugin.add("draggable", "connectToSortable", {
				start: function (t, e) {
					var i = x5(this).data("draggable"),
						n = i.options,
						s = x5.extend({}, e, {
							item: i.element
						});
					i.sortables = [], x5(n.connectToSortable).each(function () {
						var e = x5.data(this, "sortable");
						e && !e.options.disabled && (i.sortables.push({
							instance: e,
							shouldRevert: e.options.revert
						}), e.refreshPositions(), e._trigger("activate", t, s))
					})
				},
				stop: function (e, t) {
					var i = x5(this).data("draggable"),
						n = x5.extend({}, t, {
							item: i.element
						});
					x5.each(i.sortables, function () {
						this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == i.options.helper && this.instance.currentItem.css({
							top: "auto",
							left: "auto"
						})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
					})
				},
				drag: function (t, i) {
					var n = x5(this).data("draggable"),
						s = this;
					x5.each(n.sortables, function (e) {
						this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = x5(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
							return i.helper[0]
						}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", t), n.dropped = !1)
					})
				}
			}), x5.ui.plugin.add("draggable", "cursor", {
				start: function (e, t) {
					var i = x5("body"),
						n = x5(this).data("draggable").options;
					i.css("cursor") && (n._cursor = i.css("cursor")), i.css("cursor", n.cursor)
				},
				stop: function (e, t) {
					var i = x5(this).data("draggable").options;
					i._cursor && x5("body").css("cursor", i._cursor)
				}
			}), x5.ui.plugin.add("draggable", "opacity", {
				start: function (e, t) {
					var i = x5(t.helper),
						n = x5(this).data("draggable").options;
					i.css("opacity") && (n._opacity = i.css("opacity")), i.css("opacity", n.opacity)
				},
				stop: function (e, t) {
					var i = x5(this).data("draggable").options;
					i._opacity && x5(t.helper).css("opacity", i._opacity)
				}
			}), x5.ui.plugin.add("draggable", "scroll", {
				start: function (e, t) {
					var i = x5(this).data("draggable");
					i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName && (i.overflowOffset = i.scrollParent.offset())
				},
				drag: function (e, t) {
					var i = x5(this).data("draggable"),
						n = i.options,
						s = !1;
					i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (e.pageY - x5(document).scrollTop() < n.scrollSensitivity ? s = x5(document).scrollTop(x5(document).scrollTop() - n.scrollSpeed) : x5(window).height() - (e.pageY - x5(document).scrollTop()) < n.scrollSensitivity && (s = x5(document).scrollTop(x5(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (e.pageX - x5(document).scrollLeft() < n.scrollSensitivity ? s = x5(document).scrollLeft(x5(document).scrollLeft() - n.scrollSpeed) : x5(window).width() - (e.pageX - x5(document).scrollLeft()) < n.scrollSensitivity && (s = x5(document).scrollLeft(x5(document).scrollLeft() + n.scrollSpeed)))), !1 !== s && x5.ui.ddmanager && !n.dropBehaviour && x5.ui.ddmanager.prepareOffsets(i, e)
				}
			}), x5.ui.plugin.add("draggable", "snap", {
				start: function (e, t) {
					var i = x5(this).data("draggable"),
						n = i.options;
					i.snapElements = [], x5(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function () {
						var e = x5(this),
							t = e.offset();
						this != i.element[0] && i.snapElements.push({
							item: this,
							width: e.outerWidth(),
							height: e.outerHeight(),
							top: t.top,
							left: t.left
						})
					})
				},
				drag: function (e, t) {
					for (var i = x5(this).data("draggable"), n = i.options, s = n.snapTolerance, a = t.offset.left, o = a + i.helperProportions.width, r = t.offset.top, l = r + i.helperProportions.height, c = i.snapElements.length - 1; 0 <= c; c--) {
						var u = i.snapElements[c].left,
							h = u + i.snapElements[c].width,
							d = i.snapElements[c].top,
							p = d + i.snapElements[c].height;
						if (u - s < a && a < h + s && d - s < r && r < p + s || u - s < a && a < h + s && d - s < l && l < p + s || u - s < o && o < h + s && d - s < r && r < p + s || u - s < o && o < h + s && d - s < l && l < p + s) {
							if ("inner" != n.snapMode) {
								var f = Math.abs(d - l) <= s,
									m = Math.abs(p - r) <= s,
									g = Math.abs(u - o) <= s,
									v = Math.abs(h - a) <= s;
								f && (t.position.top = i._convertPositionTo("relative", {
									top: d - i.helperProportions.height,
									left: 0
								}).top - i.margins.top), m && (t.position.top = i._convertPositionTo("relative", {
									top: p,
									left: 0
								}).top - i.margins.top), g && (t.position.left = i._convertPositionTo("relative", {
									top: 0,
									left: u - i.helperProportions.width
								}).left - i.margins.left), v && (t.position.left = i._convertPositionTo("relative", {
									top: 0,
									left: h
								}).left - i.margins.left)
							}
							var y = f || m || g || v;
							if ("outer" != n.snapMode) {
								f = Math.abs(d - r) <= s, m = Math.abs(p - l) <= s, g = Math.abs(u - a) <= s, v = Math.abs(h - o) <= s;
								f && (t.position.top = i._convertPositionTo("relative", {
									top: d,
									left: 0
								}).top - i.margins.top), m && (t.position.top = i._convertPositionTo("relative", {
									top: p - i.helperProportions.height,
									left: 0
								}).top - i.margins.top), g && (t.position.left = i._convertPositionTo("relative", {
									top: 0,
									left: u
								}).left - i.margins.left), v && (t.position.left = i._convertPositionTo("relative", {
									top: 0,
									left: h - i.helperProportions.width
								}).left - i.margins.left)
							}!i.snapElements[c].snapping && (f || m || g || v || y) && i.options.snap.snap && i.options.snap.snap.call(i.element, e, x5.extend(i._uiHash(), {
								snapItem: i.snapElements[c].item
							})), i.snapElements[c].snapping = f || m || g || v || y
						} else i.snapElements[c].snapping && i.options.snap.release && i.options.snap.release.call(i.element, e, x5.extend(i._uiHash(), {
							snapItem: i.snapElements[c].item
						})), i.snapElements[c].snapping = !1
					}
				}
			}), x5.ui.plugin.add("draggable", "stack", {
				start: function (e, t) {
					var i = x5(this).data("draggable").options,
						n = x5.makeArray(x5(i.stack)).sort(function (e, t) {
							return (parseInt(x5(e).css("zIndex"), 10) || 0) - (parseInt(x5(t).css("zIndex"), 10) || 0)
						});
					if (n.length) {
						var s = parseInt(n[0].style.zIndex) || 0;
						x5(n).each(function (e) {
							this.style.zIndex = s + e
						}), this[0].style.zIndex = s + n.length
					}
				}
			}), x5.ui.plugin.add("draggable", "zIndex", {
				start: function (e, t) {
					var i = x5(t.helper),
						n = x5(this).data("draggable").options;
					i.css("zIndex") && (n._zIndex = i.css("zIndex")), i.css("zIndex", n.zIndex)
				},
				stop: function (e, t) {
					var i = x5(this).data("draggable").options;
					i._zIndex && x5(t.helper).css("zIndex", i._zIndex)
				}
			}), Y7 = jQuery, Y7.widget("ui.droppable", {
				widgetEventPrefix: "drop",
				options: {
					accept: "*",
					activeClass: !1,
					addClasses: !0,
					greedy: !1,
					hoverClass: !1,
					scope: "default",
					tolerance: "intersect"
				},
				_create: function () {
					var e = this.options,
						t = e.accept;
					this.isover = 0, this.isout = 1, this.accept = Y7.isFunction(t) ? t : function (e) {
						return e.is(t)
					}, this.proportions = {
						width: this.element[0].offsetWidth,
						height: this.element[0].offsetHeight
					}, Y7.ui.ddmanager.droppables[e.scope] = Y7.ui.ddmanager.droppables[e.scope] || [], Y7.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
				},
				destroy: function () {
					for (var e = Y7.ui.ddmanager.droppables[this.options.scope], t = 0; t < e.length; t++) e[t] == this && e.splice(t, 1);
					return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
				},
				_setOption: function (e, t) {
					"accept" == e && (this.accept = Y7.isFunction(t) ? t : function (e) {
						return e.is(t)
					}), Y7.Widget.prototype._setOption.apply(this, arguments)
				},
				_activate: function (e) {
					var t = Y7.ui.ddmanager.current;
					this.options.activeClass && this.element.addClass(this.options.activeClass), t && this._trigger("activate", e, this.ui(t))
				},
				_deactivate: function (e) {
					var t = Y7.ui.ddmanager.current;
					this.options.activeClass && this.element.removeClass(this.options.activeClass), t && this._trigger("deactivate", e, this.ui(t))
				},
				_over: function (e) {
					var t = Y7.ui.ddmanager.current;
					t && (t.currentItem || t.element)[0] != this.element[0] && this.accept.call(this.element[0], t.currentItem || t.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(t)))
				},
				_out: function (e) {
					var t = Y7.ui.ddmanager.current;
					t && (t.currentItem || t.element)[0] != this.element[0] && this.accept.call(this.element[0], t.currentItem || t.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(t)))
				},
				_drop: function (e, t) {
					var i = t || Y7.ui.ddmanager.current;
					if (!i || (i.currentItem || i.element)[0] == this.element[0]) return !1;
					var n = !1;
					return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
						var e = Y7.data(this, "droppable");
						if (e.options.greedy && !e.options.disabled && e.options.scope == i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && Y7.ui.intersect(i, Y7.extend(e, {
								offset: e.element.offset()
							}), e.options.tolerance)) return !(n = !0)
					}), !n && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(i)), this.element))
				},
				ui: function (e) {
					return {
						draggable: e.currentItem || e.element,
						helper: e.helper,
						position: e.position,
						offset: e.positionAbs
					}
				}
			}), Y7.extend(Y7.ui.droppable, {
				version: "1.8.24"
			}), Y7.ui.intersect = function (e, t, i) {
				if (!t.offset) return !1;
				var n = (e.positionAbs || e.position.absolute).left,
					s = n + e.helperProportions.width,
					a = (e.positionAbs || e.position.absolute).top,
					o = a + e.helperProportions.height,
					r = t.offset.left,
					l = r + t.proportions.width,
					c = t.offset.top,
					u = c + t.proportions.height;
				switch (i) {
					case "fit":
						return r <= n && s <= l && c <= a && o <= u;
					case "intersect":
						return r < n + e.helperProportions.width / 2 && s - e.helperProportions.width / 2 < l && c < a + e.helperProportions.height / 2 && o - e.helperProportions.height / 2 < u;
					case "pointer":
						var h = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
							d = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top;
						return Y7.ui.isOver(d, h, c, r, t.proportions.height, t.proportions.width);
					case "touch":
						return (c <= a && a <= u || c <= o && o <= u || a < c && u < o) && (r <= n && n <= l || r <= s && s <= l || n < r && l < s);
					default:
						return !1
				}
			}, Y7.ui.ddmanager = {
				current: null,
				droppables: {
					default: []
				},
				prepareOffsets: function (e, t) {
					var i = Y7.ui.ddmanager.droppables[e.options.scope] || [],
						n = t ? t.type : null,
						s = (e.currentItem || e.element).find(":data(droppable)").andSelf();
					e: for (var a = 0; a < i.length; a++)
						if (!(i[a].options.disabled || e && !i[a].accept.call(i[a].element[0], e.currentItem || e.element))) {
							for (var o = 0; o < s.length; o++)
								if (s[o] == i[a].element[0]) {
									i[a].proportions.height = 0;
									continue e
								}
							i[a].visible = "none" != i[a].element.css("display"), i[a].visible && ("mousedown" == n && i[a]._activate.call(i[a], t), i[a].offset = i[a].element.offset(), i[a].proportions = {
								width: i[a].element[0].offsetWidth,
								height: i[a].element[0].offsetHeight
							})
						}
				},
				drop: function (e, t) {
					var i = !1;
					return Y7.each(Y7.ui.ddmanager.droppables[e.options.scope] || [], function () {
						this.options && (!this.options.disabled && this.visible && Y7.ui.intersect(e, this, this.options.tolerance) && (i = this._drop.call(this, t) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, t)))
					}), i
				},
				dragStart: function (e, t) {
					e.element.parents(":not(body,html)").bind("scroll.droppable", function () {
						e.options.refreshPositions || Y7.ui.ddmanager.prepareOffsets(e, t)
					})
				},
				drag: function (a, o) {
					a.options.refreshPositions && Y7.ui.ddmanager.prepareOffsets(a, o), Y7.each(Y7.ui.ddmanager.droppables[a.options.scope] || [], function () {
						if (!this.options.disabled && !this.greedyChild && this.visible) {
							var e = Y7.ui.intersect(a, this, this.options.tolerance),
								t = e || 1 != this.isover ? e && 0 == this.isover ? "isover" : null : "isout";
							if (t) {
								var i;
								if (this.options.greedy) {
									var n = this.options.scope,
										s = this.element.parents(":data(droppable)").filter(function () {
											return Y7.data(this, "droppable").options.scope === n
										});
									s.length && ((i = Y7.data(s[0], "droppable")).greedyChild = "isover" == t ? 1 : 0)
								}
								i && "isover" == t && (i.isover = 0, i.isout = 1, i._out.call(i, o)), this[t] = 1, this["isout" == t ? "isover" : "isout"] = 0, this["isover" == t ? "_over" : "_out"].call(this, o), i && "isout" == t && (i.isout = 0, i.isover = 1, i._over.call(i, o))
							}
						}
					})
				},
				dragStop: function (e, t) {
					e.element.parents(":not(body,html)").unbind("scroll.droppable"), e.options.refreshPositions || Y7.ui.ddmanager.prepareOffsets(e, t)
				}
			},
			function (f) {
				f.widget("ui.resizable", f.ui.mouse, {
					widgetEventPrefix: "resize",
					options: {
						alsoResize: !1,
						animate: !1,
						animateDuration: "slow",
						animateEasing: "swing",
						aspectRatio: !1,
						autoHide: !1,
						containment: !1,
						ghost: !1,
						grid: !1,
						handles: "e,s,se",
						helper: !1,
						maxHeight: null,
						maxWidth: null,
						minHeight: 10,
						minWidth: 10,
						zIndex: 1e3
					},
					_create: function () {
						var t = this,
							e = this.options;
						if (this.element.addClass("ui-resizable"), f.extend(this, {
								_aspectRatio: !!e.aspectRatio,
								aspectRatio: e.aspectRatio,
								originalElement: this.element,
								_proportionallyResizeElements: [],
								_helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
							}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(f('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
								position: this.element.css("position"),
								width: this.element.outerWidth(),
								height: this.element.outerHeight(),
								top: this.element.css("top"),
								left: this.element.css("left")
							})), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
								marginLeft: this.originalElement.css("marginLeft"),
								marginTop: this.originalElement.css("marginTop"),
								marginRight: this.originalElement.css("marginRight"),
								marginBottom: this.originalElement.css("marginBottom")
							}), this.originalElement.css({
								marginLeft: 0,
								marginTop: 0,
								marginRight: 0,
								marginBottom: 0
							}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
								position: "static",
								zoom: 1,
								display: "block"
							})), this.originalElement.css({
								margin: this.originalElement.css("margin")
							}), this._proportionallyResize()), this.handles = e.handles || (f(".ui-resizable-handle", this.element).length ? {
								n: ".ui-resizable-n",
								e: ".ui-resizable-e",
								s: ".ui-resizable-s",
								w: ".ui-resizable-w",
								se: ".ui-resizable-se",
								sw: ".ui-resizable-sw",
								ne: ".ui-resizable-ne",
								nw: ".ui-resizable-nw"
							} : "e,s,se"), this.handles.constructor == String) {
							"all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
							var i = this.handles.split(",");
							this.handles = {};
							for (var n = 0; n < i.length; n++) {
								var s = f.trim(i[n]),
									a = f('<div class="ui-resizable-handle ' + ("ui-resizable-" + s) + '"></div>');
								a.css({
									zIndex: e.zIndex
								}), "se" == s && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(a)
							}
						}
						this._renderAxis = function (e) {
							for (var t in e = e || this.element, this.handles) {
								if (this.handles[t].constructor == String && (this.handles[t] = f(this.handles[t], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
									var i, n = f(this.handles[t], this.element);
									i = /sw|ne|nw|se|n|s/.test(t) ? n.outerHeight() : n.outerWidth();
									var s = ["padding", /ne|nw|n/.test(t) ? "Top" : /se|sw|s/.test(t) ? "Bottom" : /^e$/.test(t) ? "Right" : "Left"].join("");
									e.css(s, i), this._proportionallyResize()
								}
								f(this.handles[t]).length
							}
						}, this._renderAxis(this.element), this._handles = f(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
							if (!t.resizing) {
								if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
								t.axis = e && e[1] ? e[1] : "se"
							}
						}), e.autoHide && (this._handles.hide(), f(this.element).addClass("ui-resizable-autohide").hover(function () {
							e.disabled || (f(this).removeClass("ui-resizable-autohide"), t._handles.show())
						}, function () {
							e.disabled || t.resizing || (f(this).addClass("ui-resizable-autohide"), t._handles.hide())
						})), this._mouseInit()
					},
					destroy: function () {
						this._mouseDestroy();

						function e(e) {
							f(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
						}
						if (this.elementIsWrapper) {
							e(this.element);
							var t = this.element;
							t.after(this.originalElement.css({
								position: t.css("position"),
								width: t.outerWidth(),
								height: t.outerHeight(),
								top: t.css("top"),
								left: t.css("left")
							})).remove()
						}
						return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
					},
					_mouseCapture: function (e) {
						var t = !1;
						for (var i in this.handles) f(this.handles[i])[0] == e.target && (t = !0);
						return !this.options.disabled && t
					},
					_mouseStart: function (e) {
						var t = this.options,
							i = this.element.position(),
							n = this.element;
						this.resizing = !0, this.documentScroll = {
							top: f(document).scrollTop(),
							left: f(document).scrollLeft()
						}, (n.is(".ui-draggable") || /absolute/.test(n.css("position"))) && n.css({
							position: "absolute",
							top: i.top,
							left: i.left
						}), this._renderProxy();
						var s = m(this.helper.css("left")),
							a = m(this.helper.css("top"));
						t.containment && (s += f(t.containment).scrollLeft() || 0, a += f(t.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
							left: s,
							top: a
						}, this.size = this._helper ? {
							width: n.outerWidth(),
							height: n.outerHeight()
						} : {
							width: n.width(),
							height: n.height()
						}, this.originalSize = this._helper ? {
							width: n.outerWidth(),
							height: n.outerHeight()
						} : {
							width: n.width(),
							height: n.height()
						}, this.originalPosition = {
							left: s,
							top: a
						}, this.sizeDiff = {
							width: n.outerWidth() - n.width(),
							height: n.outerHeight() - n.height()
						}, this.originalMousePosition = {
							left: e.pageX,
							top: e.pageY
						}, this.aspectRatio = "number" == typeof t.aspectRatio ? t.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
						var o = f(".ui-resizable-" + this.axis).css("cursor");
						return f("body").css("cursor", "auto" == o ? this.axis + "-resize" : o), n.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
					},
					_mouseDrag: function (e) {
						var t = this.helper,
							i = (this.options, this.originalMousePosition),
							n = this.axis,
							s = e.pageX - i.left || 0,
							a = e.pageY - i.top || 0,
							o = this._change[n];
						if (!o) return !1;
						var r = o.apply(this, [e, s, a]);
						f.browser.msie && f.browser.version, this.sizeDiff;
						return this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (r = this._updateRatio(r, e)), r = this._respectSize(r, e), this._propagate("resize", e), t.css({
							top: this.position.top + "px",
							left: this.position.left + "px",
							width: this.size.width + "px",
							height: this.size.height + "px"
						}), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(r), this._trigger("resize", e, this.ui()), !1
					},
					_mouseStop: function (e) {
						this.resizing = !1;
						var t = this.options,
							i = this;
						if (this._helper) {
							var n = this._proportionallyResizeElements,
								s = n.length && /textarea/i.test(n[0].nodeName),
								a = s && f.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
								o = s ? 0 : i.sizeDiff.width,
								r = {
									width: i.helper.width() - o,
									height: i.helper.height() - a
								},
								l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
								c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
							t.animate || this.element.css(f.extend(r, {
								top: c,
								left: l
							})), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !t.animate && this._proportionallyResize()
						}
						return f("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
					},
					_updateVirtualBoundaries: function (e) {
						var t, i, n, s, a, o = this.options;
						a = {
							minWidth: p(o.minWidth) ? o.minWidth : 0,
							maxWidth: p(o.maxWidth) ? o.maxWidth : 1 / 0,
							minHeight: p(o.minHeight) ? o.minHeight : 0,
							maxHeight: p(o.maxHeight) ? o.maxHeight : 1 / 0
						}, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, s = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), n > a.minHeight && (a.minHeight = n), i < a.maxWidth && (a.maxWidth = i), s < a.maxHeight && (a.maxHeight = s)), this._vBoundaries = a
					},
					_updateCache: function (e) {
						this.options;
						this.offset = this.helper.offset(), p(e.left) && (this.position.left = e.left), p(e.top) && (this.position.top = e.top), p(e.height) && (this.size.height = e.height), p(e.width) && (this.size.width = e.width)
					},
					_updateRatio: function (e, t) {
						this.options;
						var i = this.position,
							n = this.size,
							s = this.axis;
						return p(e.height) ? e.width = e.height * this.aspectRatio : p(e.width) && (e.height = e.width / this.aspectRatio), "sw" == s && (e.left = i.left + (n.width - e.width), e.top = null), "nw" == s && (e.top = i.top + (n.height - e.height), e.left = i.left + (n.width - e.width)), e
					},
					_respectSize: function (e, t) {
						this.helper;
						var i = this._vBoundaries,
							n = (this._aspectRatio || t.shiftKey, this.axis),
							s = p(e.width) && i.maxWidth && i.maxWidth < e.width,
							a = p(e.height) && i.maxHeight && i.maxHeight < e.height,
							o = p(e.width) && i.minWidth && i.minWidth > e.width,
							r = p(e.height) && i.minHeight && i.minHeight > e.height;
						o && (e.width = i.minWidth), r && (e.height = i.minHeight), s && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
						var l = this.originalPosition.left + this.originalSize.width,
							c = this.position.top + this.size.height,
							u = /sw|nw|w/.test(n),
							h = /nw|ne|n/.test(n);
						o && u && (e.left = l - i.minWidth), s && u && (e.left = l - i.maxWidth), r && h && (e.top = c - i.minHeight), a && h && (e.top = c - i.maxHeight);
						var d = !e.width && !e.height;
						return d && !e.left && e.top ? e.top = null : d && !e.top && e.left && (e.left = null), e
					},
					_proportionallyResize: function () {
						this.options;
						if (this._proportionallyResizeElements.length)
							for (var e = this.helper || this.element, t = 0; t < this._proportionallyResizeElements.length; t++) {
								var i = this._proportionallyResizeElements[t];
								if (!this.borderDif) {
									var n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
										s = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
									this.borderDif = f.map(n, function (e, t) {
										return (parseInt(e, 10) || 0) + (parseInt(s[t], 10) || 0)
									})
								}
								f.browser.msie && (f(e).is(":hidden") || f(e).parents(":hidden").length) || i.css({
									height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
									width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
								})
							}
					},
					_renderProxy: function () {
						var e = this.element,
							t = this.options;
						if (this.elementOffset = e.offset(), this._helper) {
							this.helper = this.helper || f('<div style="overflow:hidden;"></div>');
							var i = f.browser.msie && f.browser.version < 7,
								n = i ? 1 : 0,
								s = i ? 2 : -1;
							this.helper.addClass(this._helper).css({
								width: this.element.outerWidth() + s,
								height: this.element.outerHeight() + s,
								position: "absolute",
								left: this.elementOffset.left - n + "px",
								top: this.elementOffset.top - n + "px",
								zIndex: ++t.zIndex
							}), this.helper.appendTo("body").disableSelection()
						} else this.helper = this.element
					},
					_change: {
						e: function (e, t, i) {
							return {
								width: this.originalSize.width + t
							}
						},
						w: function (e, t, i) {
							this.options;
							var n = this.originalSize;
							return {
								left: this.originalPosition.left + t,
								width: n.width - t
							}
						},
						n: function (e, t, i) {
							this.options;
							var n = this.originalSize;
							return {
								top: this.originalPosition.top + i,
								height: n.height - i
							}
						},
						s: function (e, t, i) {
							return {
								height: this.originalSize.height + i
							}
						},
						se: function (e, t, i) {
							return f.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
						},
						sw: function (e, t, i) {
							return f.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
						},
						ne: function (e, t, i) {
							return f.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
						},
						nw: function (e, t, i) {
							return f.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
						}
					},
					_propagate: function (e, t) {
						f.ui.plugin.call(this, e, [t, this.ui()]), "resize" != e && this._trigger(e, t, this.ui())
					},
					plugins: {},
					ui: function () {
						return {
							originalElement: this.originalElement,
							element: this.element,
							helper: this.helper,
							position: this.position,
							size: this.size,
							originalSize: this.originalSize,
							originalPosition: this.originalPosition
						}
					}
				}), f.extend(f.ui.resizable, {
					version: "1.8.24"
				}), f.ui.plugin.add("resizable", "alsoResize", {
					start: function (e, t) {
						function i(e) {
							f(e).each(function () {
								var e = f(this);
								e.data("resizable-alsoresize", {
									width: parseInt(e.width(), 10),
									height: parseInt(e.height(), 10),
									left: parseInt(e.css("left"), 10),
									top: parseInt(e.css("top"), 10)
								})
							})
						}
						var n = f(this).data("resizable").options;
						"object" != typeof n.alsoResize || n.alsoResize.parentNode ? i(n.alsoResize) : n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], i(n.alsoResize)) : f.each(n.alsoResize, function (e) {
							i(e)
						})
					},
					resize: function (e, a) {
						function i(e, i) {
							f(e).each(function () {
								var e = f(this),
									n = f(this).data("resizable-alsoresize"),
									s = {},
									t = i && i.length ? i : e.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
								f.each(t, function (e, t) {
									var i = (n[t] || 0) + (r[t] || 0);
									i && 0 <= i && (s[t] = i || null)
								}), e.css(s)
							})
						}
						var t = f(this).data("resizable"),
							n = t.options,
							s = t.originalSize,
							o = t.originalPosition,
							r = {
								height: t.size.height - s.height || 0,
								width: t.size.width - s.width || 0,
								top: t.position.top - o.top || 0,
								left: t.position.left - o.left || 0
							};
						"object" != typeof n.alsoResize || n.alsoResize.nodeType ? i(n.alsoResize) : f.each(n.alsoResize, function (e, t) {
							i(e, t)
						})
					},
					stop: function (e, t) {
						f(this).removeData("resizable-alsoresize")
					}
				}), f.ui.plugin.add("resizable", "animate", {
					stop: function (t, e) {
						var i = f(this).data("resizable"),
							n = i.options,
							s = i._proportionallyResizeElements,
							a = s.length && /textarea/i.test(s[0].nodeName),
							o = a && f.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
							r = a ? 0 : i.sizeDiff.width,
							l = {
								width: i.size.width - r,
								height: i.size.height - o
							},
							c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
							u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
						i.element.animate(f.extend(l, u && c ? {
							top: u,
							left: c
						} : {}), {
							duration: n.animateDuration,
							easing: n.animateEasing,
							step: function () {
								var e = {
									width: parseInt(i.element.css("width"), 10),
									height: parseInt(i.element.css("height"), 10),
									top: parseInt(i.element.css("top"), 10),
									left: parseInt(i.element.css("left"), 10)
								};
								s && s.length && f(s[0]).css({
									width: e.width,
									height: e.height
								}), i._updateCache(e), i._propagate("resize", t)
							}
						})
					}
				}), f.ui.plugin.add("resizable", "containment", {
					start: function (e, t) {
						var i = f(this).data("resizable"),
							n = i.options,
							s = i.element,
							a = n.containment,
							o = a instanceof f ? a.get(0) : /parent/.test(a) ? s.parent().get(0) : a;
						if (o)
							if (i.containerElement = f(o), /document/.test(a) || a == document) i.containerOffset = {
								left: 0,
								top: 0
							}, i.containerPosition = {
								left: 0,
								top: 0
							}, i.parentData = {
								element: f(document),
								left: 0,
								top: 0,
								width: f(document).width(),
								height: f(document).height() || document.body.parentNode.scrollHeight
							};
							else {
								var r = f(o),
									l = [];
								f(["Top", "Right", "Left", "Bottom"]).each(function (e, t) {
									l[e] = m(r.css("padding" + t))
								}), i.containerOffset = r.offset(), i.containerPosition = r.position(), i.containerSize = {
									height: r.innerHeight() - l[3],
									width: r.innerWidth() - l[1]
								};
								var c = i.containerOffset,
									u = i.containerSize.height,
									h = i.containerSize.width,
									d = f.ui.hasScroll(o, "left") ? o.scrollWidth : h,
									p = f.ui.hasScroll(o) ? o.scrollHeight : u;
								i.parentData = {
									element: o,
									left: c.left,
									top: c.top,
									width: d,
									height: p
								}
							}
					},
					resize: function (e, t) {
						var i = f(this).data("resizable"),
							n = i.options,
							s = (i.containerSize, i.containerOffset),
							a = (i.size, i.position),
							o = i._aspectRatio || e.shiftKey,
							r = {
								top: 0,
								left: 0
							},
							l = i.containerElement;
						l[0] != document && /static/.test(l.css("position")) && (r = s), a.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - r.left), o && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0), a.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), o && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
						var c = Math.abs((i._helper, i.offset.left - r.left + i.sizeDiff.width)),
							u = Math.abs((i._helper ? i.offset.top - r.top : i.offset.top - s.top) + i.sizeDiff.height),
							h = i.containerElement.get(0) == i.element.parent().get(0),
							d = /relative|absolute/.test(i.containerElement.css("position"));
						h && d && (c -= i.parentData.left), c + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - c, o && (i.size.height = i.size.width / i.aspectRatio)), u + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - u, o && (i.size.width = i.size.height * i.aspectRatio))
					},
					stop: function (e, t) {
						var i = f(this).data("resizable"),
							n = i.options,
							s = (i.position, i.containerOffset),
							a = i.containerPosition,
							o = i.containerElement,
							r = f(i.helper),
							l = r.offset(),
							c = r.outerWidth() - i.sizeDiff.width,
							u = r.outerHeight() - i.sizeDiff.height;
						i._helper && !n.animate && /relative/.test(o.css("position")) && f(this).css({
							left: l.left - a.left - s.left,
							width: c,
							height: u
						}), i._helper && !n.animate && /static/.test(o.css("position")) && f(this).css({
							left: l.left - a.left - s.left,
							width: c,
							height: u
						})
					}
				}), f.ui.plugin.add("resizable", "ghost", {
					start: function (e, t) {
						var i = f(this).data("resizable"),
							n = i.options,
							s = i.size;
						i.ghost = i.originalElement.clone(), i.ghost.css({
							opacity: .25,
							display: "block",
							position: "relative",
							height: s.height,
							width: s.width,
							margin: 0,
							left: 0,
							top: 0
						}).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), i.ghost.appendTo(i.helper)
					},
					resize: function (e, t) {
						var i = f(this).data("resizable");
						i.options;
						i.ghost && i.ghost.css({
							position: "relative",
							height: i.size.height,
							width: i.size.width
						})
					},
					stop: function (e, t) {
						var i = f(this).data("resizable");
						i.options;
						i.ghost && i.helper && i.helper.get(0).removeChild(i.ghost.get(0))
					}
				}), f.ui.plugin.add("resizable", "grid", {
					resize: function (e, t) {
						var i = f(this).data("resizable"),
							n = i.options,
							s = i.size,
							a = i.originalSize,
							o = i.originalPosition,
							r = i.axis;
						n._aspectRatio || e.shiftKey;
						n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
						var l = Math.round((s.width - a.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
							c = Math.round((s.height - a.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
						/^(se|s|e)$/.test(r) ? (i.size.width = a.width + l, i.size.height = a.height + c) : /^(ne)$/.test(r) ? (i.size.width = a.width + l, i.size.height = a.height + c, i.position.top = o.top - c) : (/^(sw)$/.test(r) ? (i.size.width = a.width + l, i.size.height = a.height + c) : (i.size.width = a.width + l, i.size.height = a.height + c, i.position.top = o.top - c), i.position.left = o.left - l)
					}
				});
				var m = function (e) {
						return parseInt(e, 10) || 0
					},
					p = function (e) {
						return !isNaN(parseInt(e, 10))
					}
			}(jQuery), zda = jQuery, zda.widget("ui.selectable", zda.ui.mouse, {
				options: {
					appendTo: "body",
					autoRefresh: !0,
					distance: 0,
					filter: "*",
					tolerance: "touch"
				},
				_create: function () {
					var e, t = this;
					this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
						(e = zda(t.options.filter, t.element[0])).addClass("ui-selectee"), e.each(function () {
							var e = zda(this),
								t = e.offset();
							zda.data(this, "selectable-item", {
								element: this,
								$element: e,
								left: t.left,
								top: t.top,
								right: t.left + e.outerWidth(),
								bottom: t.top + e.outerHeight(),
								startselected: !1,
								selected: e.hasClass("ui-selected"),
								selecting: e.hasClass("ui-selecting"),
								unselecting: e.hasClass("ui-unselecting")
							})
						})
					}, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = zda("<div class='ui-selectable-helper'></div>")
				},
				destroy: function () {
					return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
				},
				_mouseStart: function (i) {
					var n = this;
					if (this.opos = [i.pageX, i.pageY], !this.options.disabled) {
						var e = this.options;
						this.selectees = zda(e.filter, this.element[0]), this._trigger("start", i), zda(e.appendTo).append(this.helper), this.helper.css({
							left: i.clientX,
							top: i.clientY,
							width: 0,
							height: 0
						}), e.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
							var e = zda.data(this, "selectable-item");
							e.startselected = !0, i.metaKey || i.ctrlKey || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, n._trigger("unselecting", i, {
								unselecting: e.element
							}))
						}), zda(i.target).parents().andSelf().each(function () {
							var e = zda.data(this, "selectable-item");
							if (e) {
								var t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected");
								return e.$element.removeClass(t ? "ui-unselecting" : "ui-selected").addClass(t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? n._trigger("selecting", i, {
									selecting: e.element
								}) : n._trigger("unselecting", i, {
									unselecting: e.element
								}), !1
							}
						})
					}
				},
				_mouseDrag: function (i) {
					var n = this;
					if (this.dragged = !0, !this.options.disabled) {
						var s = this.options,
							a = this.opos[0],
							o = this.opos[1],
							r = i.pageX,
							l = i.pageY;
						if (r < a) {
							var e = r;
							r = a, a = e
						}
						if (l < o) {
							e = l;
							l = o, o = e
						}
						return this.helper.css({
							left: a,
							top: o,
							width: r - a,
							height: l - o
						}), this.selectees.each(function () {
							var e = zda.data(this, "selectable-item");
							if (e && e.element != n.element[0]) {
								var t = !1;
								"touch" == s.tolerance ? t = !(e.left > r || e.right < a || e.top > l || e.bottom < o) : "fit" == s.tolerance && (t = e.left > a && e.right < r && e.top > o && e.bottom < l), t ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, n._trigger("selecting", i, {
									selecting: e.element
								}))) : (e.selecting && ((i.metaKey || i.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), n._trigger("unselecting", i, {
									unselecting: e.element
								}))), !e.selected || i.metaKey || i.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, n._trigger("unselecting", i, {
									unselecting: e.element
								})))
							}
						}), !1
					}
				},
				_mouseStop: function (t) {
					var i = this;
					this.dragged = !1;
					this.options;
					return zda(".ui-unselecting", this.element[0]).each(function () {
						var e = zda.data(this, "selectable-item");
						e.$element.removeClass("ui-unselecting"), e.unselecting = !1, e.startselected = !1, i._trigger("unselected", t, {
							unselected: e.element
						})
					}), zda(".ui-selecting", this.element[0]).each(function () {
						var e = zda.data(this, "selectable-item");
						e.$element.removeClass("ui-selecting").addClass("ui-selected"), e.selecting = !1, e.selected = !0, e.startselected = !0, i._trigger("selected", t, {
							selected: e.element
						})
					}), this._trigger("stop", t), this.helper.remove(), !1
				}
			}), zda.extend(zda.ui.selectable, {
				version: "1.8.24"
			}), $da = jQuery, $da.widget("ui.sortable", $da.ui.mouse, {
				widgetEventPrefix: "sort",
				ready: !1,
				options: {
					appendTo: "parent",
					axis: !1,
					connectWith: !1,
					containment: !1,
					cursor: "auto",
					cursorAt: !1,
					dropOnEmpty: !0,
					forcePlaceholderSize: !1,
					forceHelperSize: !1,
					grid: !1,
					handle: !1,
					helper: "original",
					items: "> *",
					opacity: !1,
					placeholder: !1,
					revert: !1,
					scroll: !0,
					scrollSensitivity: 20,
					scrollSpeed: 20,
					scope: "default",
					tolerance: "intersect",
					zIndex: 1e3
				},
				_create: function () {
					var e = this.options;
					this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display"))), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
				},
				destroy: function () {
					$da.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
					for (var e = this.items.length - 1; 0 <= e; e--) this.items[e].item.removeData(this.widgetName + "-item");
					return this
				},
				_setOption: function (e, t) {
					"disabled" === e ? (this.options[e] = t, this.widget()[t ? "addClass" : "removeClass"]("ui-sortable-disabled")) : $da.Widget.prototype._setOption.apply(this, arguments)
				},
				_mouseCapture: function (e, t) {
					var i = this;
					if (this.reverting) return !1;
					if (this.options.disabled || "static" == this.options.type) return !1;
					this._refreshItems(e);
					var n = null,
						s = this;
					$da(e.target).parents().each(function () {
						if ($da.data(this, i.widgetName + "-item") == s) return n = $da(this), !1
					});
					if ($da.data(e.target, i.widgetName + "-item") == s && (n = $da(e.target)), !n) return !1;
					if (this.options.handle && !t) {
						var a = !1;
						if ($da(this.options.handle, n).find("*").andSelf().each(function () {
								this == e.target && (a = !0)
							}), !a) return !1
					}
					return this.currentItem = n, this._removeCurrentsFromItems(), !0
				},
				_mouseStart: function (e, t, i) {
					var n = this.options;
					if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
							top: this.offset.top - this.margins.top,
							left: this.offset.left - this.margins.left
						}, $da.extend(this.offset, {
							click: {
								left: e.pageX - this.offset.left,
								top: e.pageY - this.offset.top
							},
							parent: this._getParentOffset(),
							relative: this._getRelativeOffset()
						}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
							prev: this.currentItem.prev()[0],
							parent: this.currentItem.parent()[0]
						}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && ($da("body").css("cursor") && (this._storedCursor = $da("body").css("cursor")), $da("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
						for (var s = this.containers.length - 1; 0 <= s; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
					return $da.ui.ddmanager && ($da.ui.ddmanager.current = this), $da.ui.ddmanager && !n.dropBehaviour && $da.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
				},
				_mouseDrag: function (e) {
					if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
						var t = this.options,
							i = !1;
						this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < t.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + t.scrollSpeed : e.pageY - this.overflowOffset.top < t.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - t.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < t.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + t.scrollSpeed : e.pageX - this.overflowOffset.left < t.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - t.scrollSpeed)) : (e.pageY - $da(document).scrollTop() < t.scrollSensitivity ? i = $da(document).scrollTop($da(document).scrollTop() - t.scrollSpeed) : $da(window).height() - (e.pageY - $da(document).scrollTop()) < t.scrollSensitivity && (i = $da(document).scrollTop($da(document).scrollTop() + t.scrollSpeed)), e.pageX - $da(document).scrollLeft() < t.scrollSensitivity ? i = $da(document).scrollLeft($da(document).scrollLeft() - t.scrollSpeed) : $da(window).width() - (e.pageX - $da(document).scrollLeft()) < t.scrollSensitivity && (i = $da(document).scrollLeft($da(document).scrollLeft() + t.scrollSpeed))), !1 !== i && $da.ui.ddmanager && !t.dropBehaviour && $da.ui.ddmanager.prepareOffsets(this, e)
					}
					this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
					for (var n = this.items.length - 1; 0 <= n; n--) {
						var s = this.items[n],
							a = s.item[0],
							o = this._intersectsWithPointer(s);
						if (o && (s.instance === this.currentContainer && !(a == this.currentItem[0] || this.placeholder[1 == o ? "next" : "prev"]()[0] == a || $da.ui.contains(this.placeholder[0], a) || "semi-dynamic" == this.options.type && $da.ui.contains(this.element[0], a)))) {
							if (this.direction = 1 == o ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(s)) break;
							this._rearrange(e, s), this._trigger("change", e, this._uiHash());
							break
						}
					}
					return this._contactContainers(e), $da.ui.ddmanager && $da.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
				},
				_mouseStop: function (e, t) {
					if (e) {
						if ($da.ui.ddmanager && !this.options.dropBehaviour && $da.ui.ddmanager.drop(this, e), this.options.revert) {
							var i = this,
								n = i.placeholder.offset();
							i.reverting = !0, $da(this.helper).animate({
								left: n.left - this.offset.parent.left - i.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
								top: n.top - this.offset.parent.top - i.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
							}, parseInt(this.options.revert, 10) || 500, function () {
								i._clear(e)
							})
						} else this._clear(e, t);
						return !1
					}
				},
				cancel: function () {
					if (this.dragging) {
						this._mouseUp({
							target: null
						}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
						for (var e = this.containers.length - 1; 0 <= e; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
					}
					return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), $da.extend(this, {
						helper: null,
						dragging: !1,
						reverting: !1,
						_noFinalSort: null
					}), this.domPosition.prev ? $da(this.domPosition.prev).after(this.currentItem) : $da(this.domPosition.parent).prepend(this.currentItem)), this
				},
				serialize: function (t) {
					var e = this._getItemsAsjQuery(t && t.connected),
						i = [];
					return t = t || {}, $da(e).each(function () {
						var e = ($da(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
						e && i.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
					}), !i.length && t.key && i.push(t.key + "="), i.join("&")
				},
				toArray: function (e) {
					var t = this._getItemsAsjQuery(e && e.connected),
						i = [];
					return e = e || {}, t.each(function () {
						i.push($da(e.item || this).attr(e.attribute || "id") || "")
					}), i
				},
				_intersectsWith: function (e) {
					var t = this.positionAbs.left,
						i = t + this.helperProportions.width,
						n = this.positionAbs.top,
						s = n + this.helperProportions.height,
						a = e.left,
						o = a + e.width,
						r = e.top,
						l = r + e.height,
						c = this.offset.click.top,
						u = this.offset.click.left,
						h = r < n + c && n + c < l && a < t + u && t + u < o;
					return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : a < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
				},
				_intersectsWithPointer: function (e) {
					var t = "x" === this.options.axis || $da.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
						i = "y" === this.options.axis || $da.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
						n = t && i,
						s = this._getDragVerticalDirection(),
						a = this._getDragHorizontalDirection();
					return !!n && (this.floating ? a && "right" == a || "down" == s ? 2 : 1 : s && ("down" == s ? 2 : 1))
				},
				_intersectsWithSides: function (e) {
					var t = $da.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
						i = $da.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
						n = this._getDragVerticalDirection(),
						s = this._getDragHorizontalDirection();
					return this.floating && s ? "right" == s && i || "left" == s && !i : n && ("down" == n && t || "up" == n && !t)
				},
				_getDragVerticalDirection: function () {
					var e = this.positionAbs.top - this.lastPositionAbs.top;
					return 0 != e && (0 < e ? "down" : "up")
				},
				_getDragHorizontalDirection: function () {
					var e = this.positionAbs.left - this.lastPositionAbs.left;
					return 0 != e && (0 < e ? "right" : "left")
				},
				refresh: function (e) {
					return this._refreshItems(e), this.refreshPositions(), this
				},
				_connectWith: function () {
					var e = this.options;
					return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
				},
				_getItemsAsjQuery: function (e) {
					var t = [],
						i = [],
						n = this._connectWith();
					if (n && e)
						for (var s = n.length - 1; 0 <= s; s--)
							for (var a = $da(n[s]), o = a.length - 1; 0 <= o; o--) {
								var r = $da.data(a[o], this.widgetName);
								r && r != this && !r.options.disabled && i.push([$da.isFunction(r.options.items) ? r.options.items.call(r.element) : $da(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r])
							}
					i.push([$da.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
						options: this.options,
						item: this.currentItem
					}) : $da(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
					for (s = i.length - 1; 0 <= s; s--) i[s][0].each(function () {
						t.push(this)
					});
					return $da(t)
				},
				_removeCurrentsFromItems: function () {
					for (var e = this.currentItem.find(":data(" + this.widgetName + "-item)"), t = 0; t < this.items.length; t++)
						for (var i = 0; i < e.length; i++) e[i] == this.items[t].item[0] && this.items.splice(t, 1)
				},
				_refreshItems: function (e) {
					this.items = [], this.containers = [this];
					var t = this.items,
						i = [
							[$da.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
								item: this.currentItem
							}) : $da(this.options.items, this.element), this]
						],
						n = this._connectWith();
					if (n && this.ready)
						for (var s = n.length - 1; 0 <= s; s--)
							for (var a = $da(n[s]), o = a.length - 1; 0 <= o; o--) {
								var r = $da.data(a[o], this.widgetName);
								r && r != this && !r.options.disabled && (i.push([$da.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
									item: this.currentItem
								}) : $da(r.options.items, r.element), r]), this.containers.push(r))
							}
					for (s = i.length - 1; 0 <= s; s--)
						for (var l = i[s][1], c = i[s][0], u = (o = 0, c.length); o < u; o++) {
							var h = $da(c[o]);
							h.data(this.widgetName + "-item", l), t.push({
								item: h,
								instance: l,
								width: 0,
								height: 0,
								left: 0,
								top: 0
							})
						}
				},
				refreshPositions: function (e) {
					this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
					for (var t = this.items.length - 1; 0 <= t; t--) {
						var i = this.items[t];
						if (i.instance == this.currentContainer || !this.currentContainer || i.item[0] == this.currentItem[0]) {
							var n = this.options.toleranceElement ? $da(this.options.toleranceElement, i.item) : i.item;
							e || (i.width = n.outerWidth(), i.height = n.outerHeight());
							var s = n.offset();
							i.left = s.left, i.top = s.top
						}
					}
					if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
					else
						for (t = this.containers.length - 1; 0 <= t; t--) {
							s = this.containers[t].element.offset();
							this.containers[t].containerCache.left = s.left, this.containers[t].containerCache.top = s.top, this.containers[t].containerCache.width = this.containers[t].element.outerWidth(), this.containers[t].containerCache.height = this.containers[t].element.outerHeight()
						}
					return this
				},
				_createPlaceholder: function (e) {
					var i = e || this,
						n = i.options;
					if (!n.placeholder || n.placeholder.constructor == String) {
						var s = n.placeholder;
						n.placeholder = {
							element: function () {
								var e = $da(document.createElement(i.currentItem[0].nodeName)).addClass(s || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
								return s || (e.style.visibility = "hidden"), e
							},
							update: function (e, t) {
								s && !n.forcePlaceholderSize || (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
							}
						}
					}
					i.placeholder = $da(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder)
				},
				_contactContainers: function (e) {
					for (var t = null, i = null, n = this.containers.length - 1; 0 <= n; n--)
						if (!$da.ui.contains(this.currentItem[0], this.containers[n].element[0]))
							if (this._intersectsWith(this.containers[n].containerCache)) {
								if (t && $da.ui.contains(this.containers[n].element[0], t.element[0])) continue;
								t = this.containers[n], i = n
							} else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
					if (t)
						if (1 === this.containers.length) this.containers[i]._trigger("over", e, this._uiHash(this)), this.containers[i].containerCache.over = 1;
						else if (this.currentContainer != this.containers[i]) {
						for (var s = 1e4, a = null, o = this.positionAbs[this.containers[i].floating ? "left" : "top"], r = this.items.length - 1; 0 <= r; r--)
							if ($da.ui.contains(this.containers[i].element[0], this.items[r].item[0])) {
								var l = this.containers[i].floating ? this.items[r].item.offset().left : this.items[r].item.offset().top;
								Math.abs(l - o) < s && (s = Math.abs(l - o), a = this.items[r], this.direction = 0 < l - o ? "down" : "up")
							}
						if (!a && !this.options.dropOnEmpty) return;
						this.currentContainer = this.containers[i], a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[i].element, !0), this._trigger("change", e, this._uiHash()), this.containers[i]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[i]._trigger("over", e, this._uiHash(this)), this.containers[i].containerCache.over = 1
					}
				},
				_createHelper: function (e) {
					var t = this.options,
						i = $da.isFunction(t.helper) ? $da(t.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == t.helper ? this.currentItem.clone() : this.currentItem;
					return i.parents("body").length || $da("parent" != t.appendTo ? t.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] == this.currentItem[0] && (this._storedCSS = {
						width: this.currentItem[0].style.width,
						height: this.currentItem[0].style.height,
						position: this.currentItem.css("position"),
						top: this.currentItem.css("top"),
						left: this.currentItem.css("left")
					}), "" != i[0].style.width && !t.forceHelperSize || i.width(this.currentItem.width()), "" != i[0].style.height && !t.forceHelperSize || i.height(this.currentItem.height()), i
				},
				_adjustOffsetFromHelper: function (e) {
					"string" == typeof e && (e = e.split(" ")), $da.isArray(e) && (e = {
						left: +e[0],
						top: +e[1] || 0
					}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
				},
				_getParentOffset: function () {
					this.offsetParent = this.helper.offsetParent();
					var e = this.offsetParent.offset();
					return "absolute" == this.cssPosition && this.scrollParent[0] != document && $da.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && $da.browser.msie) && (e = {
						top: 0,
						left: 0
					}), {
						top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
						left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
					}
				},
				_getRelativeOffset: function () {
					if ("relative" != this.cssPosition) return {
						top: 0,
						left: 0
					};
					var e = this.currentItem.position();
					return {
						top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					}
				},
				_cacheMargins: function () {
					this.margins = {
						left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
						top: parseInt(this.currentItem.css("marginTop"), 10) || 0
					}
				},
				_cacheHelperProportions: function () {
					this.helperProportions = {
						width: this.helper.outerWidth(),
						height: this.helper.outerHeight()
					}
				},
				_setContainment: function () {
					var e = this.options;
					if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), "document" != e.containment && "window" != e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, $da("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ($da("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
						var t = $da(e.containment)[0],
							i = $da(e.containment).offset(),
							n = "hidden" != $da(t).css("overflow");
						this.containment = [i.left + (parseInt($da(t).css("borderLeftWidth"), 10) || 0) + (parseInt($da(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt($da(t).css("borderTopWidth"), 10) || 0) + (parseInt($da(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt($da(t).css("borderLeftWidth"), 10) || 0) - (parseInt($da(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt($da(t).css("borderTopWidth"), 10) || 0) - (parseInt($da(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
					}
				},
				_convertPositionTo: function (e, t) {
					t = t || this.position;
					var i = "absolute" == e ? 1 : -1,
						n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && $da.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
						s = /(html|body)/i.test(n[0].tagName);
					return {
						top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ($da.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i),
						left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ($da.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i)
					}
				},
				_generatePosition: function (e) {
					var t = this.options,
						i = "absolute" != this.cssPosition || this.scrollParent[0] != document && $da.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
						n = /(html|body)/i.test(i[0].tagName);
					"relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
					var s = e.pageX,
						a = e.pageY;
					if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), t.grid)) {
						var o = this.originalPageY + Math.round((a - this.originalPageY) / t.grid[1]) * t.grid[1];
						a = this.containment && (o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3]) ? o - this.offset.click.top < this.containment[1] ? o + t.grid[1] : o - t.grid[1] : o;
						var r = this.originalPageX + Math.round((s - this.originalPageX) / t.grid[0]) * t.grid[0];
						s = this.containment && (r - this.offset.click.left < this.containment[0] || r - this.offset.click.left > this.containment[2]) ? r - this.offset.click.left < this.containment[0] ? r + t.grid[0] : r - t.grid[0] : r
					}
					return {
						top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ($da.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : i.scrollTop()),
						left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ($da.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : i.scrollLeft())
					}
				},
				_rearrange: function (e, t, i, n) {
					i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
					var s = this,
						a = this.counter;
					window.setTimeout(function () {
						a == s.counter && s.refreshPositions(!n)
					}, 0)
				},
				_clear: function (e, t) {
					this.reverting = !1;
					var i = [];
					if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
						for (var n in this._storedCSS) "auto" != this._storedCSS[n] && "static" != this._storedCSS[n] || (this._storedCSS[n] = "");
						this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
					} else this.currentItem.show();
					this.fromOutside && !t && i.push(function (e) {
						this._trigger("receive", e, this._uiHash(this.fromOutside))
					}), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || t || i.push(function (e) {
						this._trigger("update", e, this._uiHash())
					}), this !== this.currentContainer && (t || (i.push(function (e) {
						this._trigger("remove", e, this._uiHash())
					}), i.push(function (t) {
						return function (e) {
							t._trigger("receive", e, this._uiHash(this))
						}
					}.call(this, this.currentContainer)), i.push(function (t) {
						return function (e) {
							t._trigger("update", e, this._uiHash(this))
						}
					}.call(this, this.currentContainer))));
					for (n = this.containers.length - 1; 0 <= n; n--) t || i.push(function (t) {
						return function (e) {
							t._trigger("deactivate", e, this._uiHash(this))
						}
					}.call(this, this.containers[n])), this.containers[n].containerCache.over && (i.push(function (t) {
						return function (e) {
							t._trigger("out", e, this._uiHash(this))
						}
					}.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
					if (this._storedCursor && $da("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
						if (!t) {
							this._trigger("beforeStop", e, this._uiHash());
							for (n = 0; n < i.length; n++) i[n].call(this, e);
							this._trigger("stop", e, this._uiHash())
						}
						return this.fromOutside = !1
					}
					if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
						for (n = 0; n < i.length; n++) i[n].call(this, e);
						this._trigger("stop", e, this._uiHash())
					}
					return !(this.fromOutside = !1)
				},
				_trigger: function () {
					!1 === $da.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
				},
				_uiHash: function (e) {
					var t = e || this;
					return {
						helper: t.helper,
						placeholder: t.placeholder || $da([]),
						position: t.position,
						originalPosition: t.originalPosition,
						offset: t.positionAbs,
						item: t.currentItem,
						sender: e ? e.element : null
					}
				}
			}), $da.extend($da.ui.sortable, {
				version: "1.8.24"
			}), jQuery.effects || function (c) {
				function n(e) {
					var t;
					return e && e.constructor == Array && 3 == e.length ? e : (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10)] : (t = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) ? [2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3])] : (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : (t = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) ? [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] : (t = /rgba\(0, 0, 0, 0\)/.exec(e)) ? s.transparent : s[c.trim(e).toLowerCase()]
				}

				function u() {
					var e, t = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
						i = {};
					if (t && t.length && t[0] && t[t[0]])
						for (var n = t.length; n--;) "string" == typeof t[e = t[n]] && (i[e.replace(/\-(\w)/g, function (e, t) {
							return t.toUpperCase()
						})] = t[e]);
					else
						for (e in t) "string" == typeof t[e] && (i[e] = t[e]);
					return i
				}

				function h(e) {
					var t, i;
					for (t in e)(null == (i = e[t]) || c.isFunction(i) || t in a || /scrollbar/.test(t) || !/color/i.test(t) && isNaN(parseFloat(i))) && delete e[t];
					return e
				}

				function l(e, t, i, n) {
					return "object" == typeof e && (n = t, i = null, e = (t = e).effect), c.isFunction(t) && (n = t, i = null, t = {}), "number" != typeof t && !c.fx.speeds[t] || (n = i, i = t, t = {}), c.isFunction(i) && (n = i, i = null), t = t || {}, i = i || t.duration, [e, t, i = c.fx.off ? 0 : "number" == typeof i ? i : i in c.fx.speeds ? c.fx.speeds[i] : c.fx.speeds._default, n = n || t.complete]
				}

				function i(e) {
					return !e || "number" == typeof e || c.fx.speeds[e] || "string" == typeof e && !c.effects[e]
				}
				c.effects = {}, c.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (e, t) {
					c.fx.step[t] = function (e) {
						e.colorInit || (e.start = function (e, t) {
							var i;
							do {
								if ("" != (i = (c.curCSS || c.css)(e, t)) && "transparent" != i || c.nodeName(e, "body")) break;
								t = "backgroundColor"
							} while (e = e.parentNode);
							return n(i)
						}(e.elem, t), e.end = n(e.end), e.colorInit = !0), e.elem.style[t] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
					}
				});
				var s = {
						aqua: [0, 255, 255],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						black: [0, 0, 0],
						blue: [0, 0, 255],
						brown: [165, 42, 42],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgrey: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkviolet: [148, 0, 211],
						fuchsia: [255, 0, 255],
						gold: [255, 215, 0],
						green: [0, 128, 0],
						indigo: [75, 0, 130],
						khaki: [240, 230, 140],
						lightblue: [173, 216, 230],
						lightcyan: [224, 255, 255],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						navy: [0, 0, 128],
						olive: [128, 128, 0],
						orange: [255, 165, 0],
						pink: [255, 192, 203],
						purple: [128, 0, 128],
						violet: [128, 0, 128],
						red: [255, 0, 0],
						silver: [192, 192, 192],
						white: [255, 255, 255],
						yellow: [255, 255, 0],
						transparent: [255, 255, 255]
					},
					d = ["add", "remove", "toggle"],
					a = {
						border: 1,
						borderBottom: 1,
						borderColor: 1,
						borderLeft: 1,
						borderRight: 1,
						borderTop: 1,
						borderWidth: 1,
						margin: 1,
						padding: 1
					};
				c.effects.animateClass = function (a, o, r, l) {
					return c.isFunction(r) && (l = r, r = null), this.queue(function () {
						var e, i = c(this),
							t = i.attr("style") || " ",
							n = h(u.call(this)),
							s = i.attr("class") || "";
						c.each(d, function (e, t) {
							a[t] && i[t + "Class"](a[t])
						}), e = h(u.call(this)), i.attr("class", s), i.animate(function (e, t) {
							var i, n = {
								_: 0
							};
							for (i in t) e[i] != t[i] && (n[i] = t[i]);
							return n
						}(n, e), {
							queue: !1,
							duration: o,
							easing: r,
							complete: function () {
								c.each(d, function (e, t) {
									a[t] && i[t + "Class"](a[t])
								}), "object" == typeof i.attr("style") ? (i.attr("style").cssText = "", i.attr("style").cssText = t) : i.attr("style", t), l && l.apply(this, arguments), c.dequeue(this)
							}
						})
					})
				}, c.fn.extend({
					_addClass: c.fn.addClass,
					addClass: function (e, t, i, n) {
						return t ? c.effects.animateClass.apply(this, [{
							add: e
						}, t, i, n]) : this._addClass(e)
					},
					_removeClass: c.fn.removeClass,
					removeClass: function (e, t, i, n) {
						return t ? c.effects.animateClass.apply(this, [{
							remove: e
						}, t, i, n]) : this._removeClass(e)
					},
					_toggleClass: c.fn.toggleClass,
					toggleClass: function (e, t, i, n, s) {
						return "boolean" == typeof t || void 0 === t ? i ? c.effects.animateClass.apply(this, [t ? {
							add: e
						} : {
							remove: e
						}, i, n, s]) : this._toggleClass(e, t) : c.effects.animateClass.apply(this, [{
							toggle: e
						}, t, i, n])
					},
					switchClass: function (e, t, i, n, s) {
						return c.effects.animateClass.apply(this, [{
							add: t,
							remove: e
						}, i, n, s])
					}
				}), c.extend(c.effects, {
					version: "1.8.24",
					save: function (e, t) {
						for (var i = 0; i < t.length; i++) null !== t[i] && e.data("ec.storage." + t[i], e[0].style[t[i]])
					},
					restore: function (e, t) {
						for (var i = 0; i < t.length; i++) null !== t[i] && e.css(t[i], e.data("ec.storage." + t[i]))
					},
					setMode: function (e, t) {
						return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t
					},
					getBaseline: function (e, t) {
						var i, n;
						switch (e[0]) {
							case "top":
								i = 0;
								break;
							case "middle":
								i = .5;
								break;
							case "bottom":
								i = 1;
								break;
							default:
								i = e[0] / t.height
						}
						switch (e[1]) {
							case "left":
								n = 0;
								break;
							case "center":
								n = .5;
								break;
							case "right":
								n = 1;
								break;
							default:
								n = e[1] / t.width
						}
						return {
							x: n,
							y: i
						}
					},
					createWrapper: function (i) {
						if (i.parent().is(".ui-effects-wrapper")) return i.parent();
						var n = {
								width: i.outerWidth(!0),
								height: i.outerHeight(!0),
								float: i.css("float")
							},
							e = c("<div></div>").addClass("ui-effects-wrapper").css({
								fontSize: "100%",
								background: "transparent",
								border: "none",
								margin: 0,
								padding: 0
							}),
							t = document.activeElement;
						try {
							t.id
						} catch (e) {
							t = document.body
						}
						return i.wrap(e), i[0] !== t && !c.contains(i[0], t) || c(t).focus(), e = i.parent(), "static" == i.css("position") ? (e.css({
							position: "relative"
						}), i.css({
							position: "relative"
						})) : (c.extend(n, {
							position: i.css("position"),
							zIndex: i.css("z-index")
						}), c.each(["top", "left", "bottom", "right"], function (e, t) {
							n[t] = i.css(t), isNaN(parseInt(n[t], 10)) && (n[t] = "auto")
						}), i.css({
							position: "relative",
							top: 0,
							left: 0,
							right: "auto",
							bottom: "auto"
						})), e.css(n).show()
					},
					removeWrapper: function (e) {
						var t, i = document.activeElement;
						return e.parent().is(".ui-effects-wrapper") ? (t = e.parent().replaceWith(e), e[0] !== i && !c.contains(e[0], i) || c(i).focus(), t) : e
					},
					setTransition: function (n, e, s, a) {
						return a = a || {}, c.each(e, function (e, t) {
							var i = n.cssUnit(t);
							0 < i[0] && (a[t] = i[0] * s + i[1])
						}), a
					}
				}), c.fn.extend({
					effect: function (e, t, i, n) {
						var s = l.apply(this, arguments),
							a = {
								options: s[1],
								duration: s[2],
								callback: s[3]
							},
							o = a.options.mode,
							r = c.effects[e];
						return c.fx.off || !r ? o ? this[o](a.duration, a.callback) : this.each(function () {
							a.callback && a.callback.call(this)
						}) : r.call(this, a)
					},
					_show: c.fn.show,
					show: function (e) {
						if (i(e)) return this._show.apply(this, arguments);
						var t = l.apply(this, arguments);
						return t[1].mode = "show", this.effect.apply(this, t)
					},
					_hide: c.fn.hide,
					hide: function (e) {
						if (i(e)) return this._hide.apply(this, arguments);
						var t = l.apply(this, arguments);
						return t[1].mode = "hide", this.effect.apply(this, t)
					},
					__toggle: c.fn.toggle,
					toggle: function (e) {
						if (i(e) || "boolean" == typeof e || c.isFunction(e)) return this.__toggle.apply(this, arguments);
						var t = l.apply(this, arguments);
						return t[1].mode = "toggle", this.effect.apply(this, t)
					},
					cssUnit: function (e) {
						var i = this.css(e),
							n = [];
						return c.each(["em", "px", "%", "pt"], function (e, t) {
							0 < i.indexOf(t) && (n = [parseFloat(i), t])
						}), n
					}
				});
				var o = {};
				c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, e) {
					o[e] = function (e) {
						return Math.pow(e, t + 2)
					}
				}), c.extend(o, {
					Sine: function (e) {
						return 1 - Math.cos(e * Math.PI / 2)
					},
					Circ: function (e) {
						return 1 - Math.sqrt(1 - e * e)
					},
					Elastic: function (e) {
						return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
					},
					Back: function (e) {
						return e * e * (3 * e - 2)
					},
					Bounce: function (e) {
						for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;);
						return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
					}
				}), c.each(o, function (e, t) {
					c.easing["easeIn" + e] = t, c.easing["easeOut" + e] = function (e) {
						return 1 - t(1 - e)
					}, c.easing["easeInOut" + e] = function (e) {
						return e < .5 ? t(2 * e) / 2 : t(-2 * e + 2) / -2 + 1
					}
				})
			}(jQuery), vja = jQuery, vja.effects.blind = function (l) {
				return this.queue(function () {
					var e = vja(this),
						t = ["position", "top", "bottom", "left", "right"],
						i = vja.effects.setMode(e, l.options.mode || "hide"),
						n = l.options.direction || "vertical";
					vja.effects.save(e, t), e.show();
					var s = vja.effects.createWrapper(e).css({
							overflow: "hidden"
						}),
						a = "vertical" == n ? "height" : "width",
						o = "vertical" == n ? s.height() : s.width();
					"show" == i && s.css(a, 0);
					var r = {};
					r[a] = "show" == i ? o : 0, s.animate(r, l.duration, l.options.easing, function () {
						"hide" == i && e.hide(), vja.effects.restore(e, t), vja.effects.removeWrapper(e), l.callback && l.callback.apply(e[0], arguments), e.dequeue()
					})
				})
			}, Gja = jQuery, Gja.effects.bounce = function (p) {
				return this.queue(function () {
					var e = Gja(this),
						t = ["position", "top", "bottom", "left", "right"],
						i = Gja.effects.setMode(e, p.options.mode || "effect"),
						n = p.options.direction || "up",
						s = p.options.distance || 20,
						a = p.options.times || 5,
						o = p.duration || 250;
					/show|hide/.test(i) && t.push("opacity"), Gja.effects.save(e, t), e.show(), Gja.effects.createWrapper(e);
					var r = "up" == n || "down" == n ? "top" : "left",
						l = "up" == n || "left" == n ? "pos" : "neg";
					s = p.options.distance || ("top" == r ? e.outerHeight(!0) / 3 : e.outerWidth(!0) / 3);
					"show" == i && e.css("opacity", 0).css(r, "pos" == l ? -s : s), "hide" == i && (s /= 2 * a), "hide" != i && a--, "show" == i && ((h = {
						opacity: 1
					})[r] = ("pos" == l ? "+=" : "-=") + s, e.animate(h, o / 2, p.options.easing), s /= 2, a--);
					for (var c = 0; c < a; c++) {
						var u = {};
						(d = {})[r] = ("pos" == l ? "-=" : "+=") + s, u[r] = ("pos" == l ? "+=" : "-=") + s, e.animate(d, o / 2, p.options.easing).animate(u, o / 2, p.options.easing), s = "hide" == i ? 2 * s : s / 2
					}
					if ("hide" == i) {
						var h;
						(h = {
							opacity: 0
						})[r] = ("pos" == l ? "-=" : "+=") + s, e.animate(h, o / 2, p.options.easing, function () {
							e.hide(), Gja.effects.restore(e, t), Gja.effects.removeWrapper(e), p.callback && p.callback.apply(this, arguments)
						})
					} else {
						var d;
						u = {};
						(d = {})[r] = ("pos" == l ? "-=" : "+=") + s, u[r] = ("pos" == l ? "+=" : "-=") + s, e.animate(d, o / 2, p.options.easing).animate(u, o / 2, p.options.easing, function () {
							Gja.effects.restore(e, t), Gja.effects.removeWrapper(e), p.callback && p.callback.apply(this, arguments)
						})
					}
					e.queue("fx", function () {
						e.dequeue()
					}), e.dequeue()
				})
			}, Wja = jQuery, Wja.effects.clip = function (c) {
				return this.queue(function () {
					var e = Wja(this),
						t = ["position", "top", "bottom", "left", "right", "height", "width"],
						i = Wja.effects.setMode(e, c.options.mode || "hide"),
						n = c.options.direction || "vertical";
					Wja.effects.save(e, t), e.show();
					var s = Wja.effects.createWrapper(e).css({
							overflow: "hidden"
						}),
						a = "IMG" == e[0].tagName ? s : e,
						o = {
							size: "vertical" == n ? "height" : "width",
							position: "vertical" == n ? "top" : "left"
						},
						r = "vertical" == n ? a.height() : a.width();
					"show" == i && (a.css(o.size, 0), a.css(o.position, r / 2));
					var l = {};
					l[o.size] = "show" == i ? r : 0, l[o.position] = "show" == i ? 0 : r / 2, a.animate(l, {
						queue: !1,
						duration: c.duration,
						easing: c.options.easing,
						complete: function () {
							"hide" == i && e.hide(), Wja.effects.restore(e, t), Wja.effects.removeWrapper(e), c.callback && c.callback.apply(e[0], arguments), e.dequeue()
						}
					})
				})
			}, gka = jQuery, gka.effects.drop = function (l) {
				return this.queue(function () {
					var e = gka(this),
						t = ["position", "top", "bottom", "left", "right", "opacity"],
						i = gka.effects.setMode(e, l.options.mode || "hide"),
						n = l.options.direction || "left";
					gka.effects.save(e, t), e.show(), gka.effects.createWrapper(e);
					var s = "up" == n || "down" == n ? "top" : "left",
						a = "up" == n || "left" == n ? "pos" : "neg",
						o = l.options.distance || ("top" == s ? e.outerHeight(!0) / 2 : e.outerWidth(!0) / 2);
					"show" == i && e.css("opacity", 0).css(s, "pos" == a ? -o : o);
					var r = {
						opacity: "show" == i ? 1 : 0
					};
					r[s] = ("show" == i ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + o, e.animate(r, {
						queue: !1,
						duration: l.duration,
						easing: l.options.easing,
						complete: function () {
							"hide" == i && e.hide(), gka.effects.restore(e, t), gka.effects.removeWrapper(e), l.callback && l.callback.apply(this, arguments), e.dequeue()
						}
					})
				})
			}, rka = jQuery, rka.effects.explode = function (l) {
				return this.queue(function () {
					var e = l.options.pieces ? Math.round(Math.sqrt(l.options.pieces)) : 3,
						t = l.options.pieces ? Math.round(Math.sqrt(l.options.pieces)) : 3;
					l.options.mode = "toggle" == l.options.mode ? rka(this).is(":visible") ? "hide" : "show" : l.options.mode;
					var i = rka(this).show().css("visibility", "hidden"),
						n = i.offset();
					n.top -= parseInt(i.css("marginTop"), 10) || 0, n.left -= parseInt(i.css("marginLeft"), 10) || 0;
					for (var s = i.outerWidth(!0), a = i.outerHeight(!0), o = 0; o < e; o++)
						for (var r = 0; r < t; r++) i.clone().appendTo("body").wrap("<div></div>").css({
							position: "absolute",
							visibility: "visible",
							left: s / t * -r,
							top: a / e * -o
						}).parent().addClass("ui-effects-explode").css({
							position: "absolute",
							overflow: "hidden",
							width: s / t,
							height: a / e,
							left: n.left + r * (s / t) + ("show" == l.options.mode ? (r - Math.floor(t / 2)) * (s / t) : 0),
							top: n.top + o * (a / e) + ("show" == l.options.mode ? (o - Math.floor(e / 2)) * (a / e) : 0),
							opacity: "show" == l.options.mode ? 0 : 1
						}).animate({
							left: n.left + r * (s / t) + ("show" == l.options.mode ? 0 : (r - Math.floor(t / 2)) * (s / t)),
							top: n.top + o * (a / e) + ("show" == l.options.mode ? 0 : (o - Math.floor(e / 2)) * (a / e)),
							opacity: "show" == l.options.mode ? 1 : 0
						}, l.duration || 500);
					setTimeout(function () {
						"show" == l.options.mode ? i.css({
							visibility: "visible"
						}) : i.css({
							visibility: "visible"
						}).hide(), l.callback && l.callback.apply(i[0]), i.dequeue(), rka("div.ui-effects-explode").remove()
					}, l.duration || 500)
				})
			}, Cka = jQuery, Cka.effects.fade = function (i) {
				return this.queue(function () {
					var e = Cka(this),
						t = Cka.effects.setMode(e, i.options.mode || "hide");
					e.animate({
						opacity: t
					}, {
						queue: !1,
						duration: i.duration,
						easing: i.options.easing,
						complete: function () {
							i.callback && i.callback.apply(this, arguments), e.dequeue()
						}
					})
				})
			}, Hka = jQuery, Hka.effects.fold = function (p) {
				return this.queue(function () {
					var e = Hka(this),
						t = ["position", "top", "bottom", "left", "right"],
						i = Hka.effects.setMode(e, p.options.mode || "hide"),
						n = p.options.size || 15,
						s = !!p.options.horizFirst,
						a = p.duration ? p.duration / 2 : Hka.fx.speeds._default / 2;
					Hka.effects.save(e, t), e.show();
					var o = Hka.effects.createWrapper(e).css({
							overflow: "hidden"
						}),
						r = "show" == i != s,
						l = r ? ["width", "height"] : ["height", "width"],
						c = r ? [o.width(), o.height()] : [o.height(), o.width()],
						u = /([0-9]+)%/.exec(n);
					u && (n = parseInt(u[1], 10) / 100 * c["hide" == i ? 0 : 1]), "show" == i && o.css(s ? {
						height: 0,
						width: n
					} : {
						height: n,
						width: 0
					});
					var h = {},
						d = {};
					h[l[0]] = "show" == i ? c[0] : n, d[l[1]] = "show" == i ? c[1] : 0, o.animate(h, a, p.options.easing).animate(d, a, p.options.easing, function () {
						"hide" == i && e.hide(), Hka.effects.restore(e, t), Hka.effects.removeWrapper(e), p.callback && p.callback.apply(e[0], arguments), e.dequeue()
					})
				})
			}, Xka = jQuery, Xka.effects.highlight = function (s) {
				return this.queue(function () {
					var e = Xka(this),
						t = ["backgroundImage", "backgroundColor", "opacity"],
						i = Xka.effects.setMode(e, s.options.mode || "show"),
						n = {
							backgroundColor: e.css("backgroundColor")
						};
					"hide" == i && (n.opacity = 0), Xka.effects.save(e, t), e.show().css({
						backgroundImage: "none",
						backgroundColor: s.options.color || "#ffff99"
					}).animate(n, {
						queue: !1,
						duration: s.duration,
						easing: s.options.easing,
						complete: function () {
							"hide" == i && e.hide(), Xka.effects.restore(e, t), "show" != i || Xka.support.opacity || this.style.removeAttribute("filter"), s.callback && s.callback.apply(this, arguments), e.dequeue()
						}
					})
				})
			}, cla = jQuery, cla.effects.pulsate = function (r) {
				return this.queue(function () {
					var e = cla(this),
						t = cla.effects.setMode(e, r.options.mode || "show"),
						i = 2 * (r.options.times || 5) - 1,
						n = r.duration ? r.duration / 2 : cla.fx.speeds._default / 2,
						s = e.is(":visible"),
						a = 0;
					s || (e.css("opacity", 0).show(), a = 1), ("hide" == t && s || "show" == t && !s) && i--;
					for (var o = 0; o < i; o++) e.animate({
						opacity: a
					}, n, r.options.easing), a = (a + 1) % 2;
					e.animate({
						opacity: a
					}, n, r.options.easing, function () {
						0 == a && e.hide(), r.callback && r.callback.apply(this, arguments)
					}), e.queue("fx", function () {
						e.dequeue()
					}).dequeue()
				})
			}, mla = jQuery, mla.effects.puff = function (a) {
				return this.queue(function () {
					var e = mla(this),
						t = mla.effects.setMode(e, a.options.mode || "hide"),
						i = parseInt(a.options.percent, 10) || 150,
						n = i / 100,
						s = {
							height: e.height(),
							width: e.width()
						};
					mla.extend(a.options, {
						fade: !0,
						mode: t,
						percent: "hide" == t ? i : 100,
						from: "hide" == t ? s : {
							height: s.height * n,
							width: s.width * n
						}
					}), e.effect("scale", a.options, a.duration, a.callback), e.dequeue()
				})
			}, mla.effects.scale = function (c) {
				return this.queue(function () {
					var e = mla(this),
						t = mla.extend(!0, {}, c.options),
						i = mla.effects.setMode(e, c.options.mode || "effect"),
						n = parseInt(c.options.percent, 10) || (0 == parseInt(c.options.percent, 10) || "hide" == i ? 0 : 100),
						s = c.options.direction || "both",
						a = c.options.origin;
					"effect" != i && (t.origin = a || ["middle", "center"], t.restore = !0);
					var o = {
						height: e.height(),
						width: e.width()
					};
					e.from = c.options.from || ("show" == i ? {
						height: 0,
						width: 0
					} : o);
					var r = "horizontal" != s ? n / 100 : 1,
						l = "vertical" != s ? n / 100 : 1;
					e.to = {
						height: o.height * r,
						width: o.width * l
					}, c.options.fade && ("show" == i && (e.from.opacity = 0, e.to.opacity = 1), "hide" == i && (e.from.opacity = 1, e.to.opacity = 0)), t.from = e.from, t.to = e.to, t.mode = i, e.effect("size", t, c.duration, c.callback), e.dequeue()
				})
			}, mla.effects.size = function (f) {
				return this.queue(function () {
					var e = mla(this),
						t = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
						i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
						n = ["width", "height", "overflow"],
						s = ["fontSize"],
						a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
						o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
						r = mla.effects.setMode(e, f.options.mode || "effect"),
						l = f.options.restore || !1,
						c = f.options.scale || "both",
						u = f.options.origin,
						h = {
							height: e.height(),
							width: e.width()
						};
					if (e.from = f.options.from || h, e.to = f.options.to || h, u) {
						var d = mla.effects.getBaseline(u, h);
						e.from.top = (h.height - e.from.height) * d.y, e.from.left = (h.width - e.from.width) * d.x, e.to.top = (h.height - e.to.height) * d.y, e.to.left = (h.width - e.to.width) * d.x
					}
					var p = {
						from: {
							y: e.from.height / h.height,
							x: e.from.width / h.width
						},
						to: {
							y: e.to.height / h.height,
							x: e.to.width / h.width
						}
					};
					"box" != c && "both" != c || (p.from.y != p.to.y && (t = t.concat(a), e.from = mla.effects.setTransition(e, a, p.from.y, e.from), e.to = mla.effects.setTransition(e, a, p.to.y, e.to)), p.from.x != p.to.x && (t = t.concat(o), e.from = mla.effects.setTransition(e, o, p.from.x, e.from), e.to = mla.effects.setTransition(e, o, p.to.x, e.to))), "content" != c && "both" != c || p.from.y == p.to.y || (t = t.concat(s), e.from = mla.effects.setTransition(e, s, p.from.y, e.from), e.to = mla.effects.setTransition(e, s, p.to.y, e.to)), mla.effects.save(e, l ? t : i), e.show(), mla.effects.createWrapper(e), e.css("overflow", "hidden").css(e.from), "content" != c && "both" != c || (a = a.concat(["marginTop", "marginBottom"]).concat(s), o = o.concat(["marginLeft", "marginRight"]), n = t.concat(a).concat(o), e.find("*[width]").each(function () {
						var e = mla(this);
						l && mla.effects.save(e, n);
						var t = e.height(),
							i = e.width();
						e.from = {
							height: t * p.from.y,
							width: i * p.from.x
						}, e.to = {
							height: t * p.to.y,
							width: i * p.to.x
						}, p.from.y != p.to.y && (e.from = mla.effects.setTransition(e, a, p.from.y, e.from), e.to = mla.effects.setTransition(e, a, p.to.y, e.to)), p.from.x != p.to.x && (e.from = mla.effects.setTransition(e, o, p.from.x, e.from), e.to = mla.effects.setTransition(e, o, p.to.x, e.to)), e.css(e.from), e.animate(e.to, f.duration, f.options.easing, function () {
							l && mla.effects.restore(e, n)
						})
					})), e.animate(e.to, {
						queue: !1,
						duration: f.duration,
						easing: f.options.easing,
						complete: function () {
							0 === e.to.opacity && e.css("opacity", e.from.opacity), "hide" == r && e.hide(), mla.effects.restore(e, l ? t : i), mla.effects.removeWrapper(e), f.callback && f.callback.apply(this, arguments), e.dequeue()
						}
					})
				})
			}, Ula = jQuery, Ula.effects.shake = function (d) {
				return this.queue(function () {
					var e = Ula(this),
						t = ["position", "top", "bottom", "left", "right"],
						i = (Ula.effects.setMode(e, d.options.mode || "effect"), d.options.direction || "left"),
						n = d.options.distance || 20,
						s = d.options.times || 3,
						a = d.duration || d.options.duration || 140;
					Ula.effects.save(e, t), e.show(), Ula.effects.createWrapper(e);
					var o = "up" == i || "down" == i ? "top" : "left",
						r = "up" == i || "left" == i ? "pos" : "neg",
						l = {},
						c = {},
						u = {};
					l[o] = ("pos" == r ? "-=" : "+=") + n, c[o] = ("pos" == r ? "+=" : "-=") + 2 * n, u[o] = ("pos" == r ? "-=" : "+=") + 2 * n, e.animate(l, a, d.options.easing);
					for (var h = 1; h < s; h++) e.animate(c, a, d.options.easing).animate(u, a, d.options.easing);
					e.animate(c, a, d.options.easing).animate(l, a / 2, d.options.easing, function () {
						Ula.effects.restore(e, t), Ula.effects.removeWrapper(e), d.callback && d.callback.apply(this, arguments)
					}), e.queue("fx", function () {
						e.dequeue()
					}), e.dequeue()
				})
			}, ima = jQuery, ima.effects.slide = function (l) {
				return this.queue(function () {
					var e = ima(this),
						t = ["position", "top", "bottom", "left", "right"],
						i = ima.effects.setMode(e, l.options.mode || "show"),
						n = l.options.direction || "left";
					ima.effects.save(e, t), e.show(), ima.effects.createWrapper(e).css({
						overflow: "hidden"
					});
					var s = "up" == n || "down" == n ? "top" : "left",
						a = "up" == n || "left" == n ? "pos" : "neg",
						o = l.options.distance || ("top" == s ? e.outerHeight(!0) : e.outerWidth(!0));
					"show" == i && e.css(s, "pos" == a ? isNaN(o) ? "-" + o : -o : o);
					var r = {};
					r[s] = ("show" == i ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + o, e.animate(r, {
						queue: !1,
						duration: l.duration,
						easing: l.options.easing,
						complete: function () {
							"hide" == i && e.hide(), ima.effects.restore(e, t), ima.effects.removeWrapper(e), l.callback && l.callback.apply(this, arguments), e.dequeue()
						}
					})
				})
			}, tma = jQuery, tma.effects.transfer = function (o) {
				return this.queue(function () {
					var e = tma(this),
						t = tma(o.options.to),
						i = t.offset(),
						n = {
							top: i.top,
							left: i.left,
							height: t.innerHeight(),
							width: t.innerWidth()
						},
						s = e.offset(),
						a = tma('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(o.options.className).css({
							top: s.top,
							left: s.left,
							height: e.innerHeight(),
							width: e.innerWidth(),
							position: "absolute"
						}).animate(n, o.duration, o.options.easing, function () {
							a.remove(), o.callback && o.callback.apply(e[0], arguments), e.dequeue()
						})
				})
			}, Cma = jQuery, Cma.widget("ui.accordion", {
				options: {
					active: 0,
					animated: "slide",
					autoHeight: !0,
					clearStyle: !1,
					collapsible: !1,
					event: "click",
					fillSpace: !1,
					header: "> li > :first-child,> :not(li):even",
					icons: {
						header: "ui-icon-triangle-1-e",
						headerSelected: "ui-icon-triangle-1-s"
					},
					navigation: !1,
					navigationFilter: function () {
						return this.href.toLowerCase() === location.href.toLowerCase()
					}
				},
				_create: function () {
					var t = this,
						e = t.options;
					if (t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(e.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
							e.disabled || Cma(this).addClass("ui-state-hover")
						}).bind("mouseleave.accordion", function () {
							e.disabled || Cma(this).removeClass("ui-state-hover")
						}).bind("focus.accordion", function () {
							e.disabled || Cma(this).addClass("ui-state-focus")
						}).bind("blur.accordion", function () {
							e.disabled || Cma(this).removeClass("ui-state-focus")
						}), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), e.navigation) {
						var i = t.element.find("a").filter(e.navigationFilter).eq(0);
						if (i.length) {
							var n = i.closest(".ui-accordion-header");
							n.length ? t.active = n : t.active = i.closest(".ui-accordion-content").prev()
						}
					}
					t.active = t._findActive(t.active || e.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function (e) {
						return t._keydown(e)
					}).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
						"aria-expanded": "false",
						"aria-selected": "false",
						tabIndex: -1
					}).next().hide(), t.active.length ? t.active.attr({
						"aria-expanded": "true",
						"aria-selected": "true",
						tabIndex: 0
					}) : t.headers.eq(0).attr("tabIndex", 0), Cma.browser.safari || t.headers.find("a").attr("tabIndex", -1), e.event && t.headers.bind(e.event.split(" ").join(".accordion ") + ".accordion", function (e) {
						t._clickHandler.call(t, e, this), e.preventDefault()
					})
				},
				_createIcons: function () {
					var e = this.options;
					e.icons && (Cma("<span></span>").addClass("ui-icon " + e.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(e.icons.header).toggleClass(e.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
				},
				_destroyIcons: function () {
					this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
				},
				destroy: function () {
					var e = this.options;
					this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
					var t = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
					return (e.autoHeight || e.fillHeight) && t.css("height", ""), Cma.Widget.prototype.destroy.call(this)
				},
				_setOption: function (e, t) {
					Cma.Widget.prototype._setOption.apply(this, arguments), "active" == e && this.activate(t), "icons" == e && (this._destroyIcons(), t && this._createIcons()), "disabled" == e && this.headers.add(this.headers.next())[t ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
				},
				_keydown: function (e) {
					if (!(this.options.disabled || e.altKey || e.ctrlKey)) {
						var t = Cma.ui.keyCode,
							i = this.headers.length,
							n = this.headers.index(e.target),
							s = !1;
						switch (e.keyCode) {
							case t.RIGHT:
							case t.DOWN:
								s = this.headers[(n + 1) % i];
								break;
							case t.LEFT:
							case t.UP:
								s = this.headers[(n - 1 + i) % i];
								break;
							case t.SPACE:
							case t.ENTER:
								this._clickHandler({
									target: e.target
								}, e.target), e.preventDefault()
						}
						return !s || (Cma(e.target).attr("tabIndex", -1), Cma(s).attr("tabIndex", 0), s.focus(), !1)
					}
				},
				resize: function () {
					var e, t = this.options;
					if (t.fillSpace) {
						if (Cma.browser.msie) {
							var i = this.element.parent().css("overflow");
							this.element.parent().css("overflow", "hidden")
						}
						e = this.element.parent().height(), Cma.browser.msie && this.element.parent().css("overflow", i), this.headers.each(function () {
							e -= Cma(this).outerHeight(!0)
						}), this.headers.next().each(function () {
							Cma(this).height(Math.max(0, e - Cma(this).innerHeight() + Cma(this).height()))
						}).css("overflow", "auto")
					} else t.autoHeight && (e = 0, this.headers.next().each(function () {
						e = Math.max(e, Cma(this).height("").height())
					}).height(e));
					return this
				},
				activate: function (e) {
					this.options.active = e;
					var t = this._findActive(e)[0];
					return this._clickHandler({
						target: t
					}, t), this
				},
				_findActive: function (e) {
					return e ? "number" == typeof e ? this.headers.filter(":eq(" + e + ")") : this.headers.not(this.headers.not(e)) : !1 === e ? Cma([]) : this.headers.filter(":eq(0)")
				},
				_clickHandler: function (e, t) {
					var i = this.options;
					if (!i.disabled)
						if (e.target) {
							var n = Cma(e.currentTarget || t),
								s = n[0] === this.active[0];
							if (i.active = (!i.collapsible || !s) && this.headers.index(n), !(this.running || !i.collapsible && s)) {
								var a = this.active,
									o = (c = n.next(), r = this.active.next(), l = {
										options: i,
										newHeader: s && i.collapsible ? Cma([]) : n,
										oldHeader: this.active,
										newContent: s && i.collapsible ? Cma([]) : c,
										oldContent: r
									}, this.headers.index(this.active[0]) > this.headers.index(n[0]));
								this.active = s ? Cma([]) : n, this._toggle(c, r, l, s, o), a.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(i.icons.headerSelected).addClass(i.icons.header), s || (n.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(i.icons.header).addClass(i.icons.headerSelected), n.next().addClass("ui-accordion-content-active"))
							}
						} else {
							if (!i.collapsible) return;
							this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(i.icons.headerSelected).addClass(i.icons.header), this.active.next().addClass("ui-accordion-content-active");
							var r = this.active.next(),
								l = {
									options: i,
									newHeader: Cma([]),
									oldHeader: i.active,
									newContent: Cma([]),
									oldContent: r
								},
								c = this.active = Cma([]);
							this._toggle(c, r, l)
						}
				},
				_toggle: function (e, t, i, n, s) {
					var a = this,
						o = a.options;
					a.toShow = e, a.toHide = t, a.data = i;

					function r() {
						if (a) return a._completed.apply(a, arguments)
					}
					if (a._trigger("changestart", null, a.data), a.running = 0 === t.size() ? e.size() : t.size(), o.animated) {
						var l = {};
						l = o.collapsible && n ? {
							toShow: Cma([]),
							toHide: t,
							complete: r,
							down: s,
							autoHeight: o.autoHeight || o.fillSpace
						} : {
							toShow: e,
							toHide: t,
							complete: r,
							down: s,
							autoHeight: o.autoHeight || o.fillSpace
						}, o.proxied || (o.proxied = o.animated), o.proxiedDuration || (o.proxiedDuration = o.duration), o.animated = Cma.isFunction(o.proxied) ? o.proxied(l) : o.proxied, o.duration = Cma.isFunction(o.proxiedDuration) ? o.proxiedDuration(l) : o.proxiedDuration;
						var c = Cma.ui.accordion.animations,
							u = o.duration,
							h = o.animated;
						!h || c[h] || Cma.easing[h] || (h = "slide"), c[h] || (c[h] = function (e) {
							this.slide(e, {
								easing: h,
								duration: u || 700
							})
						}), c[h](l)
					} else o.collapsible && n ? e.toggle() : (t.hide(), e.show()), r(!0);
					t.prev().attr({
						"aria-expanded": "false",
						"aria-selected": "false",
						tabIndex: -1
					}).blur(), e.prev().attr({
						"aria-expanded": "true",
						"aria-selected": "true",
						tabIndex: 0
					}).focus()
				},
				_completed: function (e) {
					this.running = e ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
						height: "",
						overflow: ""
					}), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
				}
			}), Cma.extend(Cma.ui.accordion, {
				version: "1.8.24",
				animations: {
					slide: function (n, e) {
						if ((n = Cma.extend({
								easing: "swing",
								duration: 300
							}, n, e)).toHide.size())
							if (n.toShow.size()) {
								var t, i = n.toShow.css("overflow"),
									s = 0,
									a = {},
									o = {},
									r = n.toShow;
								t = r[0].style.width, r.width(r.parent().width() - parseFloat(r.css("paddingLeft")) - parseFloat(r.css("paddingRight")) - (parseFloat(r.css("borderLeftWidth")) || 0) - (parseFloat(r.css("borderRightWidth")) || 0)), Cma.each(["height", "paddingTop", "paddingBottom"], function (e, t) {
									o[t] = "hide";
									var i = ("" + Cma.css(n.toShow[0], t)).match(/^([\d+-.]+)(.*)$/);
									a[t] = {
										value: i[1],
										unit: i[2] || "px"
									}
								}), n.toShow.css({
									height: 0,
									overflow: "hidden"
								}).show(), n.toHide.filter(":hidden").each(n.complete).end().filter(":visible").animate(o, {
									step: function (e, t) {
										"height" == t.prop && (s = t.end - t.start == 0 ? 0 : (t.now - t.start) / (t.end - t.start)), n.toShow[0].style[t.prop] = s * a[t.prop].value + a[t.prop].unit
									},
									duration: n.duration,
									easing: n.easing,
									complete: function () {
										n.autoHeight || n.toShow.css("height", ""), n.toShow.css({
											width: t,
											overflow: i
										}), n.complete()
									}
								})
							} else n.toHide.animate({
								height: "hide",
								paddingTop: "hide",
								paddingBottom: "hide"
							}, n);
						else n.toShow.animate({
							height: "show",
							paddingTop: "show",
							paddingBottom: "show"
						}, n)
					},
					bounceslide: function (e) {
						this.slide(e, {
							easing: e.down ? "easeOutBounce" : "swing",
							duration: e.down ? 1e3 : 200
						})
					}
				}
			}), Lna = jQuery, Nna = 0, Lna.widget("ui.autocomplete", {
				options: {
					appendTo: "body",
					autoFocus: !1,
					delay: 300,
					minLength: 1,
					position: {
						my: "left top",
						at: "left bottom",
						collision: "none"
					},
					source: null
				},
				pending: 0,
				_create: function () {
					var i, s = this,
						a = this.element[0].ownerDocument;
					this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
						role: "textbox",
						"aria-autocomplete": "list",
						"aria-haspopup": "true"
					}).bind("keydown.autocomplete", function (e) {
						if (!s.options.disabled && !s.element.propAttr("readOnly")) {
							i = !1;
							var t = Lna.ui.keyCode;
							switch (e.keyCode) {
								case t.PAGE_UP:
									s._move("previousPage", e);
									break;
								case t.PAGE_DOWN:
									s._move("nextPage", e);
									break;
								case t.UP:
									s._keyEvent("previous", e);
									break;
								case t.DOWN:
									s._keyEvent("next", e);
									break;
								case t.ENTER:
								case t.NUMPAD_ENTER:
									s.menu.active && (i = !0, e.preventDefault());
								case t.TAB:
									if (!s.menu.active) return;
									s.menu.select(e);
									break;
								case t.ESCAPE:
									s.element.val(s.term), s.close(e);
									break;
								default:
									clearTimeout(s.searching), s.searching = setTimeout(function () {
										s.term != s.element.val() && (s.selectedItem = null, s.search(null, e))
									}, s.options.delay)
							}
						}
					}).bind("keypress.autocomplete", function (e) {
						i && (i = !1, e.preventDefault())
					}).bind("focus.autocomplete", function () {
						s.options.disabled || (s.selectedItem = null, s.previous = s.element.val())
					}).bind("blur.autocomplete", function (e) {
						s.options.disabled || (clearTimeout(s.searching), s.closing = setTimeout(function () {
							s.close(e), s._change(e)
						}, 150))
					}), this._initSource(), this.menu = Lna("<ul></ul>").addClass("ui-autocomplete").appendTo(Lna(this.options.appendTo || "body", a)[0]).mousedown(function (e) {
						var t = s.menu.element[0];
						Lna(e.target).closest(".ui-menu-item").length || setTimeout(function () {
							Lna(document).one("mousedown", function (e) {
								e.target === s.element[0] || e.target === t || Lna.ui.contains(t, e.target) || s.close()
							})
						}, 1), setTimeout(function () {
							clearTimeout(s.closing)
						}, 13)
					}).menu({
						focus: function (e, t) {
							var i = t.item.data("item.autocomplete");
							!1 !== s._trigger("focus", e, {
								item: i
							}) && /^key/.test(e.originalEvent.type) && s.element.val(i.value)
						},
						selected: function (e, t) {
							var i = t.item.data("item.autocomplete"),
								n = s.previous;
							s.element[0] !== a.activeElement && (s.element.focus(), s.previous = n, setTimeout(function () {
								s.previous = n, s.selectedItem = i
							}, 1)), !1 !== s._trigger("select", e, {
								item: i
							}) && s.element.val(i.value), s.term = s.element.val(), s.close(e), s.selectedItem = i
						},
						blur: function (e, t) {
							s.menu.element.is(":visible") && s.element.val() !== s.term && s.element.val(s.term)
						}
					}).zIndex(this.element.zIndex() + 1).css({
						top: 0,
						left: 0
					}).hide().data("menu"), Lna.fn.bgiframe && this.menu.element.bgiframe(), s.beforeunloadHandler = function () {
						s.element.removeAttr("autocomplete")
					}, Lna(window).bind("beforeunload", s.beforeunloadHandler)
				},
				destroy: function () {
					this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), Lna(window).unbind("beforeunload", this.beforeunloadHandler), Lna.Widget.prototype.destroy.call(this)
				},
				_setOption: function (e, t) {
					Lna.Widget.prototype._setOption.apply(this, arguments), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(Lna(t || "body", this.element[0].ownerDocument)[0]), "disabled" === e && t && this.xhr && this.xhr.abort()
				},
				_initSource: function () {
					var i, t, n = this;
					Lna.isArray(this.options.source) ? (i = this.options.source, this.source = function (e, t) {
						t(Lna.ui.autocomplete.filter(i, e.term))
					}) : "string" == typeof this.options.source ? (t = this.options.source, this.source = function (e, i) {
						n.xhr && n.xhr.abort(), n.xhr = Lna.ajax({
							url: t,
							data: e,
							dataType: "json",
							success: function (e, t) {
								i(e)
							},
							error: function () {
								i([])
							}
						})
					}) : this.source = this.options.source
				},
				search: function (e, t) {
					return e = null != e ? e : this.element.val(), this.term = this.element.val(), e.length < this.options.minLength ? this.close(t) : (clearTimeout(this.closing), !1 !== this._trigger("search", t) ? this._search(e) : void 0)
				},
				_search: function (e) {
					this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
						term: e
					}, this._response())
				},
				_response: function () {
					var t = this,
						i = ++Nna;
					return function (e) {
						i === Nna && t.__response(e), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
					}
				},
				__response: function (e) {
					!this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close()
				},
				close: function (e) {
					clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
				},
				_change: function (e) {
					this.previous !== this.element.val() && this._trigger("change", e, {
						item: this.selectedItem
					})
				},
				_normalize: function (e) {
					return e.length && e[0].label && e[0].value ? e : Lna.map(e, function (e) {
						return "string" == typeof e ? {
							label: e,
							value: e
						} : Lna.extend({
							label: e.label || e.value,
							value: e.value || e.label
						}, e)
					})
				},
				_suggest: function (e) {
					var t = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
					this._renderMenu(t, e), this.menu.deactivate(), this.menu.refresh(), t.show(), this._resizeMenu(), t.position(Lna.extend({ of: this.element
					}, this.options.position)), this.options.autoFocus && this.menu.next(new Lna.Event("mouseover"))
				},
				_resizeMenu: function () {
					var e = this.menu.element;
					e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
				},
				_renderMenu: function (i, e) {
					var n = this;
					Lna.each(e, function (e, t) {
						n._renderItem(i, t)
					})
				},
				_renderItem: function (e, t) {
					return Lna("<li></li>").data("item.autocomplete", t).append(Lna("<a></a>").text(t.label)).appendTo(e)
				},
				_move: function (e, t) {
					if (this.menu.element.is(":visible")) return this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), void this.menu.deactivate()) : void this.menu[e](t);
					this.search(null, t)
				},
				widget: function () {
					return this.menu.element
				},
				_keyEvent: function (e, t) {
					this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
				}
			}), Lna.extend(Lna.ui.autocomplete, {
				escapeRegex: function (e) {
					return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
				},
				filter: function (e, t) {
					var i = new RegExp(Lna.ui.autocomplete.escapeRegex(t), "i");
					return Lna.grep(e, function (e) {
						return i.test(e.label || e.value || e)
					})
				}
			}), Uoa = jQuery, Uoa.widget("ui.menu", {
				_create: function () {
					var t = this;
					this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
						role: "listbox",
						"aria-activedescendant": "ui-active-menuitem"
					}).click(function (e) {
						Uoa(e.target).closest(".ui-menu-item a").length && (e.preventDefault(), t.select(e))
					}), this.refresh()
				},
				refresh: function () {
					var t = this;
					this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (e) {
						t.activate(e, Uoa(this).parent())
					}).mouseleave(function () {
						t.deactivate()
					})
				},
				activate: function (e, t) {
					if (this.deactivate(), this.hasScroll()) {
						var i = t.offset().top - this.element.offset().top,
							n = this.element.scrollTop(),
							s = this.element.height();
						i < 0 ? this.element.scrollTop(n + i) : s <= i && this.element.scrollTop(n + i - s + t.height())
					}
					this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
						item: t
					})
				},
				deactivate: function () {
					this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
				},
				next: function (e) {
					this.move("next", ".ui-menu-item:first", e)
				},
				previous: function (e) {
					this.move("prev", ".ui-menu-item:last", e)
				},
				first: function () {
					return this.active && !this.active.prevAll(".ui-menu-item").length
				},
				last: function () {
					return this.active && !this.active.nextAll(".ui-menu-item").length
				},
				move: function (e, t, i) {
					if (this.active) {
						var n = this.active[e + "All"](".ui-menu-item").eq(0);
						n.length ? this.activate(i, n) : this.activate(i, this.element.children(t))
					} else this.activate(i, this.element.children(t))
				},
				nextPage: function (e) {
					if (this.hasScroll()) {
						if (!this.active || this.last()) return void this.activate(e, this.element.children(".ui-menu-item:first"));
						var t = this.active.offset().top,
							i = this.element.height(),
							n = this.element.children(".ui-menu-item").filter(function () {
								var e = Uoa(this).offset().top - t - i + Uoa(this).height();
								return e < 10 && -10 < e
							});
						n.length || (n = this.element.children(".ui-menu-item:last")), this.activate(e, n)
					} else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
				},
				previousPage: function (e) {
					if (this.hasScroll()) {
						if (!this.active || this.first()) return void this.activate(e, this.element.children(".ui-menu-item:last"));
						var t = this.active.offset().top,
							i = this.element.height(),
							n = this.element.children(".ui-menu-item").filter(function () {
								var e = Uoa(this).offset().top - t + i - Uoa(this).height();
								return e < 10 && -10 < e
							});
						n.length || (n = this.element.children(".ui-menu-item:first")), this.activate(e, n)
					} else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
				},
				hasScroll: function () {
					return this.element.height() < this.element[Uoa.fn.prop ? "prop" : "attr"]("scrollHeight")
				},
				select: function (e) {
					this._trigger("selected", e, {
						item: this.active
					})
				}
			}), upa = jQuery, Apa = "ui-button ui-widget ui-state-default ui-corner-all", Cpa = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", upa.widget("ui.button", {
				options: {
					disabled: null,
					text: !0,
					label: null,
					icons: {
						primary: null,
						secondary: null
					}
				},
				_create: function () {
					this.element.closest("form").unbind("reset.button").bind("reset.button", Dpa), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
					var t = this,
						i = this.options,
						e = "checkbox" === this.type || "radio" === this.type,
						n = "ui-state-hover" + (e ? "" : " ui-state-active"),
						s = "ui-state-focus";
					null === i.label && (i.label = this.buttonElement.html()), this.buttonElement.addClass(Apa).attr("role", "button").bind("mouseenter.button", function () {
						i.disabled || (upa(this).addClass("ui-state-hover"), this === wpa && upa(this).addClass("ui-state-active"))
					}).bind("mouseleave.button", function () {
						i.disabled || upa(this).removeClass(n)
					}).bind("click.button", function (e) {
						i.disabled && (e.preventDefault(), e.stopImmediatePropagation())
					}), this.element.bind("focus.button", function () {
						t.buttonElement.addClass(s)
					}).bind("blur.button", function () {
						t.buttonElement.removeClass(s)
					}), e && (this.element.bind("change.button", function () {
						zpa || t.refresh()
					}), this.buttonElement.bind("mousedown.button", function (e) {
						i.disabled || (zpa = !1, xpa = e.pageX, ypa = e.pageY)
					}).bind("mouseup.button", function (e) {
						i.disabled || xpa === e.pageX && ypa === e.pageY || (zpa = !0)
					})), "checkbox" === this.type ? this.buttonElement.bind("click.button", function () {
						if (i.disabled || zpa) return !1;
						upa(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
					}) : "radio" === this.type ? this.buttonElement.bind("click.button", function () {
						if (i.disabled || zpa) return !1;
						upa(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
						var e = t.element[0];
						Epa(e).not(e).map(function () {
							return upa(this).button("widget")[0]
						}).removeClass("ui-state-active").attr("aria-pressed", "false")
					}) : (this.buttonElement.bind("mousedown.button", function () {
						if (i.disabled) return !1;
						upa(this).addClass("ui-state-active"), wpa = this, upa(document).one("mouseup", function () {
							wpa = null
						})
					}).bind("mouseup.button", function () {
						if (i.disabled) return !1;
						upa(this).removeClass("ui-state-active")
					}).bind("keydown.button", function (e) {
						if (i.disabled) return !1;
						e.keyCode != upa.ui.keyCode.SPACE && e.keyCode != upa.ui.keyCode.ENTER || upa(this).addClass("ui-state-active")
					}).bind("keyup.button", function () {
						upa(this).removeClass("ui-state-active")
					}), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
						e.keyCode === upa.ui.keyCode.SPACE && upa(this).click()
					})), this._setOption("disabled", i.disabled), this._resetButton()
				},
				_determineButtonType: function () {
					if (this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type) {
						var e = this.element.parents().filter(":last"),
							t = "label[for='" + this.element.attr("id") + "']";
						this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible");
						var i = this.element.is(":checked");
						i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", i)
					} else this.buttonElement = this.element
				},
				widget: function () {
					return this.buttonElement
				},
				destroy: function () {
					this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(Apa + " ui-state-hover ui-state-active  " + Cpa).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), upa.Widget.prototype.destroy.call(this)
				},
				_setOption: function (e, t) {
					upa.Widget.prototype._setOption.apply(this, arguments), "disabled" !== e ? this._resetButton() : t ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1)
				},
				refresh: function () {
					var e = this.element.is(":disabled");
					e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? Epa(this.element[0]).each(function () {
						upa(this).is(":checked") ? upa(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : upa(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
					}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
				},
				_resetButton: function () {
					if ("input" !== this.type) {
						var e = this.buttonElement.removeClass(Cpa),
							t = upa("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
							i = this.options.icons,
							n = i.primary && i.secondary,
							s = [];
						i.primary || i.secondary ? (this.options.text && s.push("ui-button-text-icon" + (n ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (s.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t))) : s.push("ui-button-text-only"), e.addClass(s.join(" "))
					} else this.options.label && this.element.val(this.options.label)
				}
			}), upa.widget("ui.buttonset", {
				options: {
					items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
				},
				_create: function () {
					this.element.addClass("ui-buttonset")
				},
				_init: function () {
					this.refresh()
				},
				_setOption: function (e, t) {
					"disabled" === e && this.buttons.button("option", e, t), upa.Widget.prototype._setOption.apply(this, arguments)
				},
				refresh: function () {
					var e = "rtl" === this.element.css("direction");
					this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
						return upa(this).button("widget")[0]
					}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
				},
				destroy: function () {
					this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
						return upa(this).button("widget")[0]
					}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), upa.Widget.prototype.destroy.call(this)
				}
			}),
			function ($, undefined) {
				function Datepicker() {
					this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
						closeText: "Done",
						prevText: "Prev",
						nextText: "Next",
						currentText: "Today",
						monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
						dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
						dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
						dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
						weekHeader: "Wk",
						dateFormat: "mm/dd/yy",
						firstDay: 0,
						isRTL: !1,
						showMonthAfterYear: !1,
						yearSuffix: ""
					}, this._defaults = {
						showOn: "focus",
						showAnim: "fadeIn",
						showOptions: {},
						defaultDate: null,
						appendText: "",
						buttonText: "...",
						buttonImage: "",
						buttonImageOnly: !1,
						hideIfNoPrevNext: !1,
						navigationAsDateFormat: !1,
						gotoCurrent: !1,
						changeMonth: !1,
						changeYear: !1,
						yearRange: "c-10:c+10",
						showOtherMonths: !1,
						selectOtherMonths: !1,
						showWeek: !1,
						calculateWeek: this.iso8601Week,
						shortYearCutoff: "+10",
						minDate: null,
						maxDate: null,
						duration: "fast",
						beforeShowDay: null,
						beforeShow: null,
						onSelect: null,
						onChangeMonthYear: null,
						onClose: null,
						numberOfMonths: 1,
						showCurrentAtPos: 0,
						stepMonths: 1,
						stepBigMonths: 12,
						altField: "",
						altFormat: "",
						constrainInput: !0,
						showButtonPanel: !1,
						autoSize: !1,
						disabled: !1
					}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
				}

				function bindHover(i) {
					var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
					return i.bind("mouseout", function (e) {
						var t = $(e.target).closest(n);
						t.length && t.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
					}).bind("mouseover", function (e) {
						var t = $(e.target).closest(n);
						!$.datepicker._isDisabledDatepicker(instActive.inline ? i.parent()[0] : instActive.input[0]) && t.length && (t.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t.addClass("ui-state-hover"), t.hasClass("ui-datepicker-prev") && t.addClass("ui-datepicker-prev-hover"), t.hasClass("ui-datepicker-next") && t.addClass("ui-datepicker-next-hover"))
					})
				}

				function extendRemove(e, t) {
					for (var i in $.extend(e, t), t) null != t[i] && t[i] != undefined || (e[i] = t[i]);
					return e
				}

				function isArray(e) {
					return e && ($.browser.safari && "object" == typeof e && e.length || e.constructor && e.constructor.toString().match(/\Array\(\)/))
				}
				$.extend($.ui, {
					datepicker: {
						version: "1.8.24"
					}
				});
				var PROP_NAME = "datepicker",
					dpuuid = (new Date).getTime(),
					instActive;
				$.extend(Datepicker.prototype, {
					markerClassName: "hasDatepicker",
					maxRows: 4,
					log: function () {
						this.debug && console.log.apply("", arguments)
					},
					_widgetDatepicker: function () {
						return this.dpDiv
					},
					setDefaults: function (e) {
						return extendRemove(this._defaults, e || {}), this
					},
					_attachDatepicker: function (target, settings) {
						var inlineSettings = null;
						for (var attrName in this._defaults) {
							var attrValue = target.getAttribute("date:" + attrName);
							if (attrValue) {
								inlineSettings = inlineSettings || {};
								try {
									inlineSettings[attrName] = eval(attrValue)
								} catch (e) {
									inlineSettings[attrName] = attrValue
								}
							}
						}
						var nodeName = target.nodeName.toLowerCase(),
							inline = "div" == nodeName || "span" == nodeName;
						target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
						var inst = this._newInst($(target), inline);
						inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
					},
					_newInst: function (e, t) {
						return {
							id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
							input: e,
							selectedDay: 0,
							selectedMonth: 0,
							selectedYear: 0,
							drawMonth: 0,
							drawYear: 0,
							inline: t,
							dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
						}
					},
					_connectDatepicker: function (e, n) {
						var t = $(e);
						n.append = $([]), n.trigger = $([]), t.hasClass(this.markerClassName) || (this._attachments(t, n), t.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, t, i) {
							n.settings[t] = i
						}).bind("getData.datepicker", function (e, t) {
							return this._get(n, t)
						}), this._autoSize(n), $.data(e, PROP_NAME, n), n.settings.disabled && this._disableDatepicker(e))
					},
					_attachments: function (e, t) {
						var i = this._get(t, "appendText"),
							n = this._get(t, "isRTL");
						t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
						var s = this._get(t, "showOn");
						if ("focus" != s && "both" != s || e.focus(this._showDatepicker), "button" == s || "both" == s) {
							var a = this._get(t, "buttonText"),
								o = this._get(t, "buttonImage");
							t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
								src: o,
								alt: a,
								title: a
							}) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == o ? a : $("<img/>").attr({
								src: o,
								alt: a,
								title: a
							}))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function () {
								return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : ($.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] && $.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])), !1
							})
						}
					},
					_autoSize: function (e) {
						if (this._get(e, "autoSize") && !e.inline) {
							var t = new Date(2009, 11, 20),
								i = this._get(e, "dateFormat");
							if (i.match(/[DM]/)) {
								function n(e) {
									for (var t = 0, i = 0, n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length, i = n);
									return i
								}
								t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
							}
							e.input.attr("size", this._formatDate(e, t).length)
						}
					},
					_inlineDatepicker: function (e, n) {
						var t = $(e);
						t.hasClass(this.markerClassName) || (t.addClass(this.markerClassName).append(n.dpDiv).bind("setData.datepicker", function (e, t, i) {
							n.settings[t] = i
						}).bind("getData.datepicker", function (e, t) {
							return this._get(n, t)
						}), $.data(e, PROP_NAME, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(e), n.dpDiv.css("display", "block"))
					},
					_dialogDatepicker: function (e, t, i, n, s) {
						var a = this._dialogInst;
						if (!a) {
							this.uuid += 1;
							var o = "dp" + this.uuid;
							this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), (a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], PROP_NAME, a)
						}
						if (extendRemove(a.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(a, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
							var r = document.documentElement.clientWidth,
								l = document.documentElement.clientHeight,
								c = document.documentElement.scrollLeft || document.body.scrollLeft,
								u = document.documentElement.scrollTop || document.body.scrollTop;
							this._pos = [r / 2 - 100 + c, l / 2 - 150 + u]
						}
						return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, a), this
					},
					_destroyDatepicker: function (e) {
						var t = $(e),
							i = $.data(e, PROP_NAME);
						if (t.hasClass(this.markerClassName)) {
							var n = e.nodeName.toLowerCase();
							$.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" != n && "span" != n || t.removeClass(this.markerClassName).empty()
						}
					},
					_enableDatepicker: function (t) {
						var e = $(t),
							i = $.data(t, PROP_NAME);
						if (e.hasClass(this.markerClassName)) {
							var n = t.nodeName.toLowerCase();
							if ("input" == n) t.disabled = !1, i.trigger.filter("button").each(function () {
								this.disabled = !1
							}).end().filter("img").css({
								opacity: "1.0",
								cursor: ""
							});
							else if ("div" == n || "span" == n) {
								var s = e.children("." + this._inlineClass);
								s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
							}
							this._disabledInputs = $.map(this._disabledInputs, function (e) {
								return e == t ? null : e
							})
						}
					},
					_disableDatepicker: function (t) {
						var e = $(t),
							i = $.data(t, PROP_NAME);
						if (e.hasClass(this.markerClassName)) {
							var n = t.nodeName.toLowerCase();
							if ("input" == n) t.disabled = !0, i.trigger.filter("button").each(function () {
								this.disabled = !0
							}).end().filter("img").css({
								opacity: "0.5",
								cursor: "default"
							});
							else if ("div" == n || "span" == n) {
								var s = e.children("." + this._inlineClass);
								s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
							}
							this._disabledInputs = $.map(this._disabledInputs, function (e) {
								return e == t ? null : e
							}), this._disabledInputs[this._disabledInputs.length] = t
						}
					},
					_isDisabledDatepicker: function (e) {
						if (!e) return !1;
						for (var t = 0; t < this._disabledInputs.length; t++)
							if (this._disabledInputs[t] == e) return !0;
						return !1
					},
					_getInst: function (e) {
						try {
							return $.data(e, PROP_NAME)
						} catch (e) {
							throw "Missing instance data for this datepicker"
						}
					},
					_optionDatepicker: function (e, t, i) {
						var n = this._getInst(e);
						if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : n ? "all" == t ? $.extend({}, n.settings) : this._get(n, t) : null;
						var s = t || {};
						if ("string" == typeof t && ((s = {})[t] = i), n) {
							this._curInst == n && this._hideDatepicker();
							var a = this._getDateDatepicker(e, !0),
								o = this._getMinMaxDate(n, "min"),
								r = this._getMinMaxDate(n, "max");
							extendRemove(n.settings, s), null !== o && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, o)), null !== r && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, r)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, a), this._updateAlternate(n), this._updateDatepicker(n)
						}
					},
					_changeDatepicker: function (e, t, i) {
						this._optionDatepicker(e, t, i)
					},
					_refreshDatepicker: function (e) {
						var t = this._getInst(e);
						t && this._updateDatepicker(t)
					},
					_setDateDatepicker: function (e, t) {
						var i = this._getInst(e);
						i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
					},
					_getDateDatepicker: function (e, t) {
						var i = this._getInst(e);
						return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
					},
					_doKeyDown: function (e) {
						var t = $.datepicker._getInst(e.target),
							i = !0,
							n = t.dpDiv.is(".ui-datepicker-rtl");
						if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
							case 9:
								$.datepicker._hideDatepicker(), i = !1;
								break;
							case 13:
								var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
								s[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, s[0]);
								var a = $.datepicker._get(t, "onSelect");
								if (a) {
									var o = $.datepicker._formatDate(t);
									a.apply(t.input ? t.input[0] : null, [o, t])
								} else $.datepicker._hideDatepicker();
								return !1;
							case 27:
								$.datepicker._hideDatepicker();
								break;
							case 33:
								$.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
								break;
							case 34:
								$.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
								break;
							case 35:
								(e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
								break;
							case 36:
								(e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
								break;
							case 37:
								(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
								break;
							case 38:
								(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
								break;
							case 39:
								(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
								break;
							case 40:
								(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
								break;
							default:
								i = !1
						} else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
						i && (e.preventDefault(), e.stopPropagation())
					},
					_doKeyPress: function (e) {
						var t = $.datepicker._getInst(e.target);
						if ($.datepicker._get(t, "constrainInput")) {
							var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
								n = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
							return e.ctrlKey || e.metaKey || n < " " || !i || -1 < i.indexOf(n)
						}
					},
					_doKeyUp: function (e) {
						var t = $.datepicker._getInst(e.target);
						if (t.input.val() != t.lastVal) try {
							$.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t)) && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
						} catch (e) {
							$.datepicker.log(e)
						}
						return !0
					},
					_showDatepicker: function (e) {
						if ("input" != (e = e.target || e).nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
							var i = $.datepicker._getInst(e);
							$.datepicker._curInst && $.datepicker._curInst != i && ($.datepicker._curInst.dpDiv.stop(!0, !0), i && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
							var t = $.datepicker._get(i, "beforeShow"),
								n = t ? t.apply(e, [e, i]) : {};
							if (!1 !== n) {
								extendRemove(i.settings, n), i.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(i), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
								var s = !1;
								$(e).parents().each(function () {
									return !(s |= "fixed" == $(this).css("position"))
								}), s && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
								var a = {
									left: $.datepicker._pos[0],
									top: $.datepicker._pos[1]
								};
								if ($.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
										position: "absolute",
										display: "block",
										top: "-1000px"
									}), $.datepicker._updateDatepicker(i), a = $.datepicker._checkOffset(i, a, s), i.dpDiv.css({
										position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
										display: "none",
										left: a.left + "px",
										top: a.top + "px"
									}), !i.inline) {
									function o() {
										var e = i.dpDiv.find("iframe.ui-datepicker-cover");
										if (e.length) {
											var t = $.datepicker._getBorders(i.dpDiv);
											e.css({
												left: -t[0],
												top: -t[1],
												width: i.dpDiv.outerWidth(),
												height: i.dpDiv.outerHeight()
											})
										}
									}
									var r = $.datepicker._get(i, "showAnim"),
										l = $.datepicker._get(i, "duration");
									i.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[r] ? i.dpDiv.show(r, $.datepicker._get(i, "showOptions"), l, o) : i.dpDiv[r || "show"](r ? l : null, o), r && l || o(), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), $.datepicker._curInst = i
								}
							}
						}
					},
					_updateDatepicker: function (e) {
						this.maxRows = 4;
						var t = $.datepicker._getBorders(e.dpDiv);
						(instActive = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
						var i = e.dpDiv.find("iframe.ui-datepicker-cover");
						i.length && i.css({
							left: -t[0],
							top: -t[1],
							width: e.dpDiv.outerWidth(),
							height: e.dpDiv.outerHeight()
						}), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
						var n = this._getNumberOfMonths(e),
							s = n[1];
						if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
							var a = e.yearshtml;
							setTimeout(function () {
								a === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), a = e.yearshtml = null
							}, 0)
						}
					},
					_getBorders: function (e) {
						function t(e) {
							return {
								thin: 1,
								medium: 2,
								thick: 3
							}[e] || e
						}
						return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
					},
					_checkOffset: function (e, t, i) {
						var n = e.dpDiv.outerWidth(),
							s = e.dpDiv.outerHeight(),
							a = e.input ? e.input.outerWidth() : 0,
							o = e.input ? e.input.outerHeight() : 0,
							r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
							l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
						return t.left -= this._get(e, "isRTL") ? n - a : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > r && n < r ? Math.abs(t.left + n - r) : 0), t.top -= Math.min(t.top, t.top + s > l && s < l ? Math.abs(s + o) : 0), t
					},
					_findPos: function (e) {
						for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
						var n = $(e).offset();
						return [n.left, n.top]
					},
					_hideDatepicker: function (e) {
						var t = this._curInst;
						if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
							function i() {
								$.datepicker._tidyDialog(t)
							}
							var n = this._get(t, "showAnim"),
								s = this._get(t, "duration");
							$.effects && $.effects[n] ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), s, i) : t.dpDiv["slideDown" == n ? "slideUp" : "fadeIn" == n ? "fadeOut" : "hide"](n ? s : null, i), n || i(), this._datepickerShowing = !1;
							var a = this._get(t, "onClose");
							a && a.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
								position: "absolute",
								left: "0",
								top: "-100px"
							}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
						}
					},
					_tidyDialog: function (e) {
						e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
					},
					_checkExternalClick: function (e) {
						if ($.datepicker._curInst) {
							var t = $(e.target),
								i = $.datepicker._getInst(t[0]);
							(t[0].id == $.datepicker._mainDivId || 0 != t.parents("#" + $.datepicker._mainDivId).length || t.hasClass($.datepicker.markerClassName) || t.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!t.hasClass($.datepicker.markerClassName) || $.datepicker._curInst == i) || $.datepicker._hideDatepicker()
						}
					},
					_adjustDate: function (e, t, i) {
						var n = $(e),
							s = this._getInst(n[0]);
						this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, t + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
					},
					_gotoToday: function (e) {
						var t = $(e),
							i = this._getInst(t[0]);
						if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
						else {
							var n = new Date;
							i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
						}
						this._notifyChange(i), this._adjustDate(t)
					},
					_selectMonthYear: function (e, t, i) {
						var n = $(e),
							s = this._getInst(n[0]);
						s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
					},
					_selectDay: function (e, t, i, n) {
						var s = $(e);
						if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
							var a = this._getInst(s[0]);
							a.selectedDay = a.currentDay = $("a", n).html(), a.selectedMonth = a.currentMonth = t, a.selectedYear = a.currentYear = i, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))
						}
					},
					_clearDate: function (e) {
						var t = $(e);
						this._getInst(t[0]);
						this._selectDate(t, "")
					},
					_selectDate: function (e, t) {
						var i = $(e),
							n = this._getInst(i[0]);
						t = null != t ? t : this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
						var s = this._get(n, "onSelect");
						s ? s.apply(n.input ? n.input[0] : null, [t, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
					},
					_updateAlternate: function (e) {
						var t = this._get(e, "altField");
						if (t) {
							var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
								n = this._getDate(e),
								s = this.formatDate(i, n, this._getFormatConfig(e));
							$(t).each(function () {
								$(this).val(s)
							})
						}
					},
					noWeekends: function (e) {
						var t = e.getDay();
						return [0 < t && t < 6, ""]
					},
					iso8601Week: function (e) {
						var t = new Date(e.getTime());
						t.setDate(t.getDate() + 4 - (t.getDay() || 7));
						var i = t.getTime();
						return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
					},
					parseDate: function (i, a, e) {
						if (null == i || null == a) throw "Invalid arguments";
						if ("" == (a = "object" == typeof a ? a.toString() : a + "")) return null;
						var t = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff;
						t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10);

						function o(e) {
							var t = y + 1 < i.length && i.charAt(y + 1) == e;
							return t && y++, t
						}

						function n(e) {
							var t = o(e),
								i = new RegExp("^\\d{1," + ("@" == e ? 14 : "!" == e ? 20 : "y" == e && t ? 4 : "o" == e ? 3 : 2) + "}"),
								n = a.substring(v).match(i);
							if (!n) throw "Missing number at position " + v;
							return v += n[0].length, parseInt(n[0], 10)
						}

						function s(e, t, i) {
							var n = $.map(o(e) ? i : t, function (e, t) {
									return [
										[t, e]
									]
								}).sort(function (e, t) {
									return -(e[1].length - t[1].length)
								}),
								s = -1;
							if ($.each(n, function (e, t) {
									var i = t[1];
									if (a.substr(v, i.length).toLowerCase() == i.toLowerCase()) return s = t[0], v += i.length, !1
								}), -1 != s) return s + 1;
							throw "Unknown name at position " + v
						}

						function r() {
							if (a.charAt(v) != i.charAt(y)) throw "Unexpected literal at position " + v;
							v++
						}
						for (var l = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, c = (e ? e.dayNames : null) || this._defaults.dayNames, u = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, h = (e ? e.monthNames : null) || this._defaults.monthNames, d = -1, p = -1, f = -1, m = -1, g = !1, v = 0, y = 0; y < i.length; y++)
							if (g) "'" != i.charAt(y) || o("'") ? r() : g = !1;
							else switch (i.charAt(y)) {
								case "d":
									f = n("d");
									break;
								case "D":
									s("D", l, c);
									break;
								case "o":
									m = n("o");
									break;
								case "m":
									p = n("m");
									break;
								case "M":
									p = s("M", u, h);
									break;
								case "y":
									d = n("y");
									break;
								case "@":
									d = (b = new Date(n("@"))).getFullYear(), p = b.getMonth() + 1, f = b.getDate();
									break;
								case "!":
									var b;
									d = (b = new Date((n("!") - this._ticksTo1970) / 1e4)).getFullYear(), p = b.getMonth() + 1, f = b.getDate();
									break;
								case "'":
									o("'") ? r() : g = !0;
									break;
								default:
									r()
							}
						if (v < a.length) throw "Extra/unparsed characters found in date: " + a.substring(v);
						if (-1 == d ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= t ? 0 : -100)), -1 < m)
							for (p = 1, f = m;;) {
								var w = this._getDaysInMonth(d, p - 1);
								if (f <= w) break;
								p++, f -= w
							}
						if ((b = this._daylightSavingAdjust(new Date(d, p - 1, f))).getFullYear() != d || b.getMonth() + 1 != p || b.getDate() != f) throw "Invalid date";
						return b
					},
					ATOM: "yy-mm-dd",
					COOKIE: "D, dd M yy",
					ISO_8601: "yy-mm-dd",
					RFC_822: "D, d M y",
					RFC_850: "DD, dd-M-y",
					RFC_1036: "D, d M y",
					RFC_1123: "D, d M yy",
					RFC_2822: "D, d M yy",
					RSS: "D, d M y",
					TICKS: "!",
					TIMESTAMP: "@",
					W3C: "yy-mm-dd",
					_ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
					formatDate: function (i, e, t) {
						if (!e) return "";

						function s(e) {
							var t = d + 1 < i.length && i.charAt(d + 1) == e;
							return t && d++, t
						}

						function n(e, t, i) {
							var n = "" + t;
							if (s(e))
								for (; n.length < i;) n = "0" + n;
							return n
						}

						function a(e, t, i, n) {
							return s(e) ? n[t] : i[t]
						}
						var o = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
							r = (t ? t.dayNames : null) || this._defaults.dayNames,
							l = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
							c = (t ? t.monthNames : null) || this._defaults.monthNames,
							u = "",
							h = !1;
						if (e)
							for (var d = 0; d < i.length; d++)
								if (h) "'" != i.charAt(d) || s("'") ? u += i.charAt(d) : h = !1;
								else switch (i.charAt(d)) {
									case "d":
										u += n("d", e.getDate(), 2);
										break;
									case "D":
										u += a("D", e.getDay(), o, r);
										break;
									case "o":
										u += n("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
										break;
									case "m":
										u += n("m", e.getMonth() + 1, 2);
										break;
									case "M":
										u += a("M", e.getMonth(), l, c);
										break;
									case "y":
										u += s("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
										break;
									case "@":
										u += e.getTime();
										break;
									case "!":
										u += 1e4 * e.getTime() + this._ticksTo1970;
										break;
									case "'":
										s("'") ? u += "'" : h = !0;
										break;
									default:
										u += i.charAt(d)
								}
						return u
					},
					_possibleChars: function (i) {
						function e(e) {
							var t = s + 1 < i.length && i.charAt(s + 1) == e;
							return t && s++, t
						}
						for (var t = "", n = !1, s = 0; s < i.length; s++)
							if (n) "'" != i.charAt(s) || e("'") ? t += i.charAt(s) : n = !1;
							else switch (i.charAt(s)) {
								case "d":
								case "m":
								case "y":
								case "@":
									t += "0123456789";
									break;
								case "D":
								case "M":
									return null;
								case "'":
									e("'") ? t += "'" : n = !0;
									break;
								default:
									t += i.charAt(s)
							}
						return t
					},
					_get: function (e, t) {
						return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
					},
					_setDateFromField: function (e, t) {
						if (e.input.val() != e.lastVal) {
							var i, n, s = this._get(e, "dateFormat"),
								a = e.lastVal = e.input ? e.input.val() : null;
							i = n = this._getDefaultDate(e);
							var o = this._getFormatConfig(e);
							try {
								i = this.parseDate(s, a, o) || n
							} catch (e) {
								this.log(e), a = t ? "" : a
							}
							e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = a ? i.getDate() : 0, e.currentMonth = a ? i.getMonth() : 0, e.currentYear = a ? i.getFullYear() : 0, this._adjustInstDate(e)
						}
					},
					_getDefaultDate: function (e) {
						return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
					},
					_determineDate: function (r, e, t) {
						var i, n, s = null == e || "" === e ? t : "string" == typeof e ? function (e) {
							try {
								return $.datepicker.parseDate($.datepicker._get(r, "dateFormat"), e, $.datepicker._getFormatConfig(r))
							} catch (e) {}
							for (var t = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(r) : null) || new Date, i = t.getFullYear(), n = t.getMonth(), s = t.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = a.exec(e); o;) {
								switch (o[2] || "d") {
									case "d":
									case "D":
										s += parseInt(o[1], 10);
										break;
									case "w":
									case "W":
										s += 7 * parseInt(o[1], 10);
										break;
									case "m":
									case "M":
										n += parseInt(o[1], 10), s = Math.min(s, $.datepicker._getDaysInMonth(i, n));
										break;
									case "y":
									case "Y":
										i += parseInt(o[1], 10), s = Math.min(s, $.datepicker._getDaysInMonth(i, n))
								}
								o = a.exec(e)
							}
							return new Date(i, n, s)
						}(e) : "number" == typeof e ? isNaN(e) ? t : (i = e, (n = new Date).setDate(n.getDate() + i), n) : new Date(e.getTime());
						return (s = s && "Invalid Date" == s.toString() ? t : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
					},
					_daylightSavingAdjust: function (e) {
						return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null
					},
					_setDate: function (e, t, i) {
						var n = !t,
							s = e.selectedMonth,
							a = e.selectedYear,
							o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
						e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), s == e.selectedMonth && a == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
					},
					_getDate: function (e) {
						return !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
					},
					_attachHandlers: function (e) {
						var t = this._get(e, "stepMonths"),
							i = "#" + e.id.replace(/\\\\/g, "\\");
						e.dpDiv.find("[data-handler]").map(function () {
							var e = {
								prev: function () {
									window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M")
								},
								next: function () {
									window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M")
								},
								hide: function () {
									window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
								},
								today: function () {
									window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
								},
								selectDay: function () {
									return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
								},
								selectMonth: function () {
									return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
								},
								selectYear: function () {
									return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
								}
							};
							$(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
						})
					},
					_generateHTML: function (e) {
						var t = new Date;
						t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
						var i = this._get(e, "isRTL"),
							n = this._get(e, "showButtonPanel"),
							s = this._get(e, "hideIfNoPrevNext"),
							a = this._get(e, "navigationAsDateFormat"),
							o = this._getNumberOfMonths(e),
							r = this._get(e, "showCurrentAtPos"),
							l = this._get(e, "stepMonths"),
							c = 1 != o[0] || 1 != o[1],
							u = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
							h = this._getMinMaxDate(e, "min"),
							d = this._getMinMaxDate(e, "max"),
							p = e.drawMonth - r,
							f = e.drawYear;
						if (p < 0 && (p += 12, f--), d) {
							var m = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - o[0] * o[1] + 1, d.getDate()));
							for (m = h && m < h ? h : m; this._daylightSavingAdjust(new Date(f, p, 1)) > m;) --p < 0 && (p = 11, f--)
						}
						e.drawMonth = p, e.drawYear = f;
						var g = this._get(e, "prevText");
						g = a ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(e)) : g;
						var v = this._canAdjustMonth(e, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>",
							y = this._get(e, "nextText");
						y = a ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(e)) : y;
						var b = this._canAdjustMonth(e, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>",
							w = this._get(e, "currentText"),
							k = this._get(e, "gotoCurrent") && e.currentDay ? u : t;
						w = a ? this.formatDate(w, k, this._getFormatConfig(e)) : w;
						var _ = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
							x = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? _ : "") + (this._isInRange(e, k) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (i ? "" : _) + "</div>" : "",
							C = parseInt(this._get(e, "firstDay"), 10);
						C = isNaN(C) ? 0 : C;
						for (var T = this._get(e, "showWeek"), D = this._get(e, "dayNames"), S = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")), P = this._get(e, "monthNames"), A = this._get(e, "monthNamesShort"), E = this._get(e, "beforeShowDay"), M = this._get(e, "showOtherMonths"), I = this._get(e, "selectOtherMonths"), N = (this._get(e, "calculateWeek") || this.iso8601Week, this._getDefaultDate(e)), L = "", z = 0; z < o[0]; z++) {
							var H = "";
							this.maxRows = 4;
							for (var O = 0; O < o[1]; O++) {
								var j = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)),
									W = " ui-corner-all",
									F = "";
								if (c) {
									if (F += '<div class="ui-datepicker-group', 1 < o[1]) switch (O) {
										case 0:
											F += " ui-datepicker-group-first", W = " ui-corner-" + (i ? "right" : "left");
											break;
										case o[1] - 1:
											F += " ui-datepicker-group-last", W = " ui-corner-" + (i ? "left" : "right");
											break;
										default:
											F += " ui-datepicker-group-middle", W = ""
									}
									F += '">'
								}
								F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + W + '">' + (/all|left/.test(W) && 0 == z ? i ? b : v : "") + (/all|right/.test(W) && 0 == z ? i ? v : b : "") + this._generateMonthYearHeader(e, p, f, h, d, 0 < z || 0 < O, P, A) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
								for (var R = T ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", q = 0; q < 7; q++) {
									var B = (q + C) % 7;
									R += "<th" + (5 <= (q + C + 6) % 7 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + D[B] + '">' + S[B] + "</span></th>"
								}
								F += R + "</tr></thead><tbody>";
								var U = this._getDaysInMonth(f, p);
								f == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, U));
								var Y = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
									V = Math.ceil((Y + U) / 7),
									K = c && this.maxRows > V ? this.maxRows : V;
								this.maxRows = K;
								for (var X = this._daylightSavingAdjust(new Date(f, p, 1 - Y)), G = 0; G < K; G++) {
									F += "<tr>";
									var Q = T ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(X) + "</td>" : "";
									for (q = 0; q < 7; q++) {
										var J = E ? E.apply(e.input ? e.input[0] : null, [X]) : [!0, ""],
											Z = X.getMonth() != p,
											ee = Z && !I || !J[0] || h && X < h || d && d < X;
										Q += '<td class="' + (5 <= (q + C + 6) % 7 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (X.getTime() == j.getTime() && p == e.selectedMonth && e._keyEvent || N.getTime() == X.getTime() && N.getTime() == j.getTime() ? " " + this._dayOverClass : "") + (ee ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !M ? "" : " " + J[1] + (X.getTime() == u.getTime() ? " " + this._currentClass : "") + (X.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !M || !J[2] ? "" : ' title="' + J[2] + '"') + (ee ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (Z && !M ? "&#xa0;" : ee ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == t.getTime() ? " ui-state-highlight" : "") + (X.getTime() == u.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>", X.setDate(X.getDate() + 1), X = this._daylightSavingAdjust(X)
									}
									F += Q + "</tr>"
								}
								11 < ++p && (p = 0, f++), H += F += "</tbody></table>" + (c ? "</div>" + (0 < o[0] && O == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "")
							}
							L += H
						}
						return L += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, L
					},
					_generateMonthYearHeader: function (e, t, i, n, s, a, o, r) {
						var l = this._get(e, "changeMonth"),
							c = this._get(e, "changeYear"),
							u = this._get(e, "showMonthAfterYear"),
							h = '<div class="ui-datepicker-title">',
							d = "";
						if (a || !l) d += '<span class="ui-datepicker-month">' + o[t] + "</span>";
						else {
							var p = n && n.getFullYear() == i,
								f = s && s.getFullYear() == i;
							d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
							for (var m = 0; m < 12; m++)(!p || m >= n.getMonth()) && (!f || m <= s.getMonth()) && (d += '<option value="' + m + '"' + (m == t ? ' selected="selected"' : "") + ">" + r[m] + "</option>");
							d += "</select>"
						}
						if (u || (h += d + (!a && l && c ? "" : "&#xa0;")), !e.yearshtml)
							if (e.yearshtml = "", a || !c) h += '<span class="ui-datepicker-year">' + i + "</span>";
							else {
								function g(e) {
									var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? y + parseInt(e, 10) : parseInt(e, 10);
									return isNaN(t) ? y : t
								}
								var v = this._get(e, "yearRange").split(":"),
									y = (new Date).getFullYear(),
									b = g(v[0]),
									w = Math.max(b, g(v[1] || ""));
								for (b = n ? Math.max(b, n.getFullYear()) : b, w = s ? Math.min(w, s.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
								e.yearshtml += "</select>", h += e.yearshtml, e.yearshtml = null
							}
						return h += this._get(e, "yearSuffix"), u && (h += (!a && l && c ? "" : "&#xa0;") + d), h += "</div>"
					},
					_adjustInstDate: function (e, t, i) {
						var n = e.drawYear + ("Y" == i ? t : 0),
							s = e.drawMonth + ("M" == i ? t : 0),
							a = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? t : 0),
							o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, a)));
						e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), "M" != i && "Y" != i || this._notifyChange(e)
					},
					_restrictMinMax: function (e, t) {
						var i = this._getMinMaxDate(e, "min"),
							n = this._getMinMaxDate(e, "max"),
							s = i && t < i ? i : t;
						return s = n && n < s ? n : s
					},
					_notifyChange: function (e) {
						var t = this._get(e, "onChangeMonthYear");
						t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
					},
					_getNumberOfMonths: function (e) {
						var t = this._get(e, "numberOfMonths");
						return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
					},
					_getMinMaxDate: function (e, t) {
						return this._determineDate(e, this._get(e, t + "Date"), null)
					},
					_getDaysInMonth: function (e, t) {
						return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
					},
					_getFirstDayOfMonth: function (e, t) {
						return new Date(e, t, 1).getDay()
					},
					_canAdjustMonth: function (e, t, i, n) {
						var s = this._getNumberOfMonths(e),
							a = this._daylightSavingAdjust(new Date(i, n + (t < 0 ? t : s[0] * s[1]), 1));
						return t < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
					},
					_isInRange: function (e, t) {
						var i = this._getMinMaxDate(e, "min"),
							n = this._getMinMaxDate(e, "max");
						return (!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime())
					},
					_getFormatConfig: function (e) {
						var t = this._get(e, "shortYearCutoff");
						return {
							shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
							dayNamesShort: this._get(e, "dayNamesShort"),
							dayNames: this._get(e, "dayNames"),
							monthNamesShort: this._get(e, "monthNamesShort"),
							monthNames: this._get(e, "monthNames")
						}
					},
					_formatDate: function (e, t, i, n) {
						t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
						var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
						return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
					}
				}), $.fn.datepicker = function (e) {
					if (!this.length) return this;
					$.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
					var t = Array.prototype.slice.call(arguments, 1);
					return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
						"string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
					}) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
				}, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.24", window["DP_jQuery_" + dpuuid] = $
			}(jQuery), aya = jQuery, cya = "ui-dialog ui-widget ui-widget-content ui-corner-all ", dya = {
				buttons: !0,
				height: !0,
				maxHeight: !0,
				maxWidth: !0,
				minHeight: !0,
				minWidth: !0,
				width: !0
			}, eya = {
				maxHeight: !0,
				maxWidth: !0,
				minHeight: !0,
				minWidth: !0
			}, aya.widget("ui.dialog", {
				options: {
					autoOpen: !0,
					buttons: {},
					closeOnEscape: !0,
					closeText: "close",
					dialogClass: "",
					draggable: !0,
					hide: null,
					height: "auto",
					maxHeight: !1,
					maxWidth: !1,
					minHeight: 150,
					minWidth: 150,
					modal: !1,
					position: {
						my: "center",
						at: "center",
						collision: "fit",
						using: function (e) {
							var t = aya(this).css(e).offset().top;
							t < 0 && aya(this).css("top", e.top - t)
						}
					},
					resizable: !0,
					show: null,
					stack: !0,
					title: "",
					width: 300,
					zIndex: 1e3
				},
				_create: function () {
					this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
					var t = this,
						i = t.options,
						e = i.title || "&#160;",
						n = aya.ui.dialog.getTitleId(t.element),
						s = (t.uiDialog = aya("<div></div>")).appendTo(document.body).hide().addClass(cya + i.dialogClass).css({
							zIndex: i.zIndex
						}).attr("tabIndex", -1).css("outline", 0).keydown(function (e) {
							i.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === aya.ui.keyCode.ESCAPE && (t.close(e), e.preventDefault())
						}).attr({
							role: "dialog",
							"aria-labelledby": n
						}).mousedown(function (e) {
							t.moveToTop(!1, e)
						}),
						a = (t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), (t.uiDialogTitlebar = aya("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s)),
						o = aya('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
							o.addClass("ui-state-hover")
						}, function () {
							o.removeClass("ui-state-hover")
						}).focus(function () {
							o.addClass("ui-state-focus")
						}).blur(function () {
							o.removeClass("ui-state-focus")
						}).click(function (e) {
							return t.close(e), !1
						}).appendTo(a);
					(t.uiDialogTitlebarCloseText = aya("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(o), aya("<span></span>").addClass("ui-dialog-title").attr("id", n).html(e).prependTo(a);
					aya.isFunction(i.beforeclose) && !aya.isFunction(i.beforeClose) && (i.beforeClose = i.beforeclose), a.find("*").add(a).disableSelection(), i.draggable && aya.fn.draggable && t._makeDraggable(), i.resizable && aya.fn.resizable && t._makeResizable(), t._createButtons(i.buttons), t._isOpen = !1, aya.fn.bgiframe && s.bgiframe()
				},
				_init: function () {
					this.options.autoOpen && this.open()
				},
				destroy: function () {
					return this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), this
				},
				widget: function () {
					return this.uiDialog
				},
				close: function (e) {
					var t, i, n = this;
					if (!1 !== n._trigger("beforeClose", e)) return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function () {
						n._trigger("close", e)
					}) : (n.uiDialog.hide(), n._trigger("close", e)), aya.ui.dialog.overlay.resize(), n.options.modal && (t = 0, aya(".ui-dialog").each(function () {
						this !== n.uiDialog[0] && (i = aya(this).css("z-index"), isNaN(i) || (t = Math.max(t, i)))
					}), aya.ui.dialog.maxZ = t), n
				},
				isOpen: function () {
					return this._isOpen
				},
				moveToTop: function (e, t) {
					var i, n = this,
						s = n.options;
					return s.modal && !e || !s.stack && !s.modal ? n._trigger("focus", t) : (s.zIndex > aya.ui.dialog.maxZ && (aya.ui.dialog.maxZ = s.zIndex), n.overlay && (aya.ui.dialog.maxZ += 1, n.overlay.$el.css("z-index", aya.ui.dialog.overlay.maxZ = aya.ui.dialog.maxZ)), i = {
						scrollTop: n.element.scrollTop(),
						scrollLeft: n.element.scrollLeft()
					}, aya.ui.dialog.maxZ += 1, n.uiDialog.css("z-index", aya.ui.dialog.maxZ), n.element.attr(i), n._trigger("focus", t), n)
				},
				open: function () {
					if (!this._isOpen) {
						var e = this,
							t = e.options,
							i = e.uiDialog;
						return e.overlay = t.modal ? new aya.ui.dialog.overlay(e) : null, e._size(), e._position(t.position), i.show(t.show), e.moveToTop(!0), t.modal && i.bind("keydown.ui-dialog", function (e) {
							if (e.keyCode === aya.ui.keyCode.TAB) {
								var t = aya(":tabbable", this),
									i = t.filter(":first"),
									n = t.filter(":last");
								return e.target !== n[0] || e.shiftKey ? e.target === i[0] && e.shiftKey ? (n.focus(1), !1) : void 0 : (i.focus(1), !1)
							}
						}), aya(e.element.find(":tabbable").get().concat(i.find(".ui-dialog-buttonpane :tabbable").get().concat(i.get()))).eq(0).focus(), e._isOpen = !0, e._trigger("open"), e
					}
				},
				_createButtons: function (e) {
					var n = this,
						t = !1,
						i = aya("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
						s = aya("<div></div>").addClass("ui-dialog-buttonset").appendTo(i);
					n.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof e && null !== e && aya.each(e, function () {
						return !(t = !0)
					}), t && (aya.each(e, function (e, t) {
						t = aya.isFunction(t) ? {
							click: t,
							text: e
						} : t;
						var i = aya('<button type="button"></button>').click(function () {
							t.click.apply(n.element[0], arguments)
						}).appendTo(s);
						aya.each(t, function (e, t) {
							"click" !== e && (e in i ? i[e](t) : i.attr(e, t))
						}), aya.fn.button && i.button()
					}), i.appendTo(n.uiDialog))
				},
				_makeDraggable: function () {
					function i(e) {
						return {
							position: e.position,
							offset: e.offset
						}
					}
					var n, s = this,
						a = s.options,
						o = aya(document);
					s.uiDialog.draggable({
						cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
						handle: ".ui-dialog-titlebar",
						containment: "document",
						start: function (e, t) {
							n = "auto" === a.height ? "auto" : aya(this).height(), aya(this).height(aya(this).height()).addClass("ui-dialog-dragging"), s._trigger("dragStart", e, i(t))
						},
						drag: function (e, t) {
							s._trigger("drag", e, i(t))
						},
						stop: function (e, t) {
							a.position = [t.position.left - o.scrollLeft(), t.position.top - o.scrollTop()], aya(this).removeClass("ui-dialog-dragging").height(n), s._trigger("dragStop", e, i(t)), aya.ui.dialog.overlay.resize()
						}
					})
				},
				_makeResizable: function (e) {
					function i(e) {
						return {
							originalPosition: e.originalPosition,
							originalSize: e.originalSize,
							position: e.position,
							size: e.size
						}
					}
					e = void 0 === e ? this.options.resizable : e;
					var n = this,
						s = n.options,
						t = n.uiDialog.css("position"),
						a = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
					n.uiDialog.resizable({
						cancel: ".ui-dialog-content",
						containment: "document",
						alsoResize: n.element,
						maxWidth: s.maxWidth,
						maxHeight: s.maxHeight,
						minWidth: s.minWidth,
						minHeight: n._minHeight(),
						handles: a,
						start: function (e, t) {
							aya(this).addClass("ui-dialog-resizing"), n._trigger("resizeStart", e, i(t))
						},
						resize: function (e, t) {
							n._trigger("resize", e, i(t))
						},
						stop: function (e, t) {
							aya(this).removeClass("ui-dialog-resizing"), s.height = aya(this).height(), s.width = aya(this).width(), n._trigger("resizeStop", e, i(t)), aya.ui.dialog.overlay.resize()
						}
					}).css("position", t).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
				},
				_minHeight: function () {
					var e = this.options;
					return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
				},
				_position: function (e) {
					var t, i = [],
						n = [0, 0];
					e = e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (1 === (i = e.split ? e.split(" ") : [e[0], e[1]]).length && (i[1] = i[0]), aya.each(["left", "top"], function (e, t) {
						+i[e] === i[e] && (n[e] = i[e], i[e] = t)
					}), e = {
						my: i.join(" "),
						at: i.join(" "),
						offset: n.join(" ")
					}), aya.extend({}, aya.ui.dialog.prototype.options.position, e)) : aya.ui.dialog.prototype.options.position, (t = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
						top: 0,
						left: 0
					}).position(aya.extend({ of: window
					}, e)), t || this.uiDialog.hide()
				},
				_setOptions: function (e) {
					var i = this,
						n = {},
						s = !1;
					aya.each(e, function (e, t) {
						i._setOption(e, t), e in dya && (s = !0), e in eya && (n[e] = t)
					}), s && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", n)
				},
				_setOption: function (e, t) {
					var i = this.uiDialog;
					switch (e) {
						case "beforeclose":
							e = "beforeClose";
							break;
						case "buttons":
							this._createButtons(t);
							break;
						case "closeText":
							this.uiDialogTitlebarCloseText.text("" + t);
							break;
						case "dialogClass":
							i.removeClass(this.options.dialogClass).addClass(cya + t);
							break;
						case "disabled":
							t ? i.addClass("ui-dialog-disabled") : i.removeClass("ui-dialog-disabled");
							break;
						case "draggable":
							var n = i.is(":data(draggable)");
							n && !t && i.draggable("destroy"), !n && t && this._makeDraggable();
							break;
						case "position":
							this._position(t);
							break;
						case "resizable":
							var s = i.is(":data(resizable)");
							s && !t && i.resizable("destroy"), s && "string" == typeof t && i.resizable("option", "handles", t), s || !1 === t || this._makeResizable(t);
							break;
						case "title":
							aya(".ui-dialog-title", this.uiDialogTitlebar).html("" + (t || "&#160;"))
					}
					aya.Widget.prototype._setOption.apply(this, arguments)
				},
				_size: function () {
					var e, t, i = this.options,
						n = this.uiDialog.is(":visible");
					if (this.element.show().css({
							width: "auto",
							minHeight: 0,
							height: 0
						}), i.minWidth > i.width && (i.width = i.minWidth), e = this.uiDialog.css({
							height: "auto",
							width: i.width
						}).height(), t = Math.max(0, i.minHeight - e), "auto" === i.height)
						if (aya.support.minHeight) this.element.css({
							minHeight: t,
							height: "auto"
						});
						else {
							this.uiDialog.show();
							var s = this.element.css("height", "auto").height();
							n || this.uiDialog.hide(), this.element.height(Math.max(s, t))
						}
					else this.element.height(Math.max(i.height - e, 0));
					this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
				}
			}), aya.extend(aya.ui.dialog, {
				version: "1.8.24",
				uuid: 0,
				maxZ: 0,
				getTitleId: function (e) {
					var t = e.attr("id");
					return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
				},
				overlay: function (e) {
					this.$el = aya.ui.dialog.overlay.create(e)
				}
			}), aya.extend(aya.ui.dialog.overlay, {
				instances: [],
				oldInstances: [],
				maxZ: 0,
				events: aya.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
					return e + ".dialog-overlay"
				}).join(" "),
				create: function (t) {
					0 === this.instances.length && (setTimeout(function () {
						aya.ui.dialog.overlay.instances.length && aya(document).bind(aya.ui.dialog.overlay.events, function (e) {
							if (aya(e.target).zIndex() < aya.ui.dialog.overlay.maxZ) return !1
						})
					}, 1), aya(document).bind("keydown.dialog-overlay", function (e) {
						t.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === aya.ui.keyCode.ESCAPE && (t.close(e), e.preventDefault())
					}), aya(window).bind("resize.dialog-overlay", aya.ui.dialog.overlay.resize));
					var e = (this.oldInstances.pop() || aya("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
						width: this.width(),
						height: this.height()
					});
					return aya.fn.bgiframe && e.bgiframe(), this.instances.push(e), e
				},
				destroy: function (e) {
					var t = aya.inArray(e, this.instances); - 1 != t && this.oldInstances.push(this.instances.splice(t, 1)[0]), 0 === this.instances.length && aya([document, window]).unbind(".dialog-overlay"), e.remove();
					var i = 0;
					aya.each(this.instances, function () {
						i = Math.max(i, this.css("z-index"))
					}), this.maxZ = i
				},
				height: function () {
					var e;
					return aya.browser.msie && aya.browser.version < 7 ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)) < Math.max(document.documentElement.offsetHeight, document.body.offsetHeight) ? aya(window).height() + "px" : e + "px" : aya(document).height() + "px"
				},
				width: function () {
					var e;
					return aya.browser.msie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)) < Math.max(document.documentElement.offsetWidth, document.body.offsetWidth) ? aya(window).width() + "px" : e + "px" : aya(document).width() + "px"
				},
				resize: function () {
					var e = aya([]);
					aya.each(aya.ui.dialog.overlay.instances, function () {
						e = e.add(this)
					}), e.css({
						width: 0,
						height: 0
					}).css({
						width: aya.ui.dialog.overlay.width(),
						height: aya.ui.dialog.overlay.height()
					})
				}
			}), aya.extend(aya.ui.dialog.overlay.prototype, {
				destroy: function () {
					aya.ui.dialog.overlay.destroy(this.$el)
				}
			}),
			function (m) {
				m.ui = m.ui || {};
				var i = /left|center|right/,
					n = /top|center|bottom/,
					g = "center",
					v = {},
					s = m.fn.position,
					a = m.fn.offset;
				m.fn.position = function (c) {
						if (!c || !c.of) return s.apply(this, arguments);
						c = m.extend({}, c);
						var u, h, d, e = m(c.of),
							t = e[0],
							p = (c.collision || "flip").split(" "),
							f = c.offset ? c.offset.split(" ") : [0, 0];
						return d = 9 === t.nodeType ? (u = e.width(), h = e.height(), {
							top: 0,
							left: 0
						}) : t.setTimeout ? (u = e.width(), h = e.height(), {
							top: e.scrollTop(),
							left: e.scrollLeft()
						}) : t.preventDefault ? (c.at = "left top", u = h = 0, {
							top: c.of.pageY,
							left: c.of.pageX
						}) : (u = e.outerWidth(), h = e.outerHeight(), e.offset()), m.each(["my", "at"], function () {
							var e = (c[this] || "").split(" ");
							1 === e.length && (e = i.test(e[0]) ? e.concat([g]) : n.test(e[0]) ? [g].concat(e) : [g, g]), e[0] = i.test(e[0]) ? e[0] : g, e[1] = n.test(e[1]) ? e[1] : g, c[this] = e
						}), 1 === p.length && (p[1] = p[0]), f[0] = parseInt(f[0], 10) || 0, 1 === f.length && (f[1] = f[0]), f[1] = parseInt(f[1], 10) || 0, "right" === c.at[0] ? d.left += u : c.at[0] === g && (d.left += u / 2), "bottom" === c.at[1] ? d.top += h : c.at[1] === g && (d.top += h / 2), d.left += f[0], d.top += f[1], this.each(function () {
							var i, e = m(this),
								n = e.outerWidth(),
								s = e.outerHeight(),
								t = parseInt(m.curCSS(this, "marginLeft", !0)) || 0,
								a = parseInt(m.curCSS(this, "marginTop", !0)) || 0,
								o = n + t + (parseInt(m.curCSS(this, "marginRight", !0)) || 0),
								r = s + a + (parseInt(m.curCSS(this, "marginBottom", !0)) || 0),
								l = m.extend({}, d);
							"right" === c.my[0] ? l.left -= n : c.my[0] === g && (l.left -= n / 2), "bottom" === c.my[1] ? l.top -= s : c.my[1] === g && (l.top -= s / 2), v.fractions || (l.left = Math.round(l.left), l.top = Math.round(l.top)), i = {
								left: l.left - t,
								top: l.top - a
							}, m.each(["left", "top"], function (e, t) {
								m.ui.position[p[e]] && m.ui.position[p[e]][t](l, {
									targetWidth: u,
									targetHeight: h,
									elemWidth: n,
									elemHeight: s,
									collisionPosition: i,
									collisionWidth: o,
									collisionHeight: r,
									offset: f,
									my: c.my,
									at: c.at
								})
							}), m.fn.bgiframe && e.bgiframe(), e.offset(m.extend(l, {
								using: c.using
							}))
						})
					}, m.ui.position = {
						fit: {
							left: function (e, t) {
								var i = m(window),
									n = t.collisionPosition.left + t.collisionWidth - i.width() - i.scrollLeft();
								e.left = 0 < n ? e.left - n : Math.max(e.left - t.collisionPosition.left, e.left)
							},
							top: function (e, t) {
								var i = m(window),
									n = t.collisionPosition.top + t.collisionHeight - i.height() - i.scrollTop();
								e.top = 0 < n ? e.top - n : Math.max(e.top - t.collisionPosition.top, e.top)
							}
						},
						flip: {
							left: function (e, t) {
								if (t.at[0] !== g) {
									var i = m(window),
										n = t.collisionPosition.left + t.collisionWidth - i.width() - i.scrollLeft(),
										s = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
										a = "left" === t.at[0] ? t.targetWidth : -t.targetWidth,
										o = -2 * t.offset[0];
									e.left += t.collisionPosition.left < 0 || 0 < n ? s + a + o : 0
								}
							},
							top: function (e, t) {
								if (t.at[1] !== g) {
									var i = m(window),
										n = t.collisionPosition.top + t.collisionHeight - i.height() - i.scrollTop(),
										s = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
										a = "top" === t.at[1] ? t.targetHeight : -t.targetHeight,
										o = -2 * t.offset[1];
									e.top += t.collisionPosition.top < 0 || 0 < n ? s + a + o : 0
								}
							}
						}
					}, m.offset.setOffset || (m.offset.setOffset = function (e, t) {
						/static/.test(m.curCSS(e, "position")) && (e.style.position = "relative");
						var i = m(e),
							n = i.offset(),
							s = parseInt(m.curCSS(e, "top", !0), 10) || 0,
							a = parseInt(m.curCSS(e, "left", !0), 10) || 0,
							o = {
								top: t.top - n.top + s,
								left: t.left - n.left + a
							};
						"using" in t ? t.using.call(e, o) : i.css(o)
					}, m.fn.offset = function (t) {
						var e = this[0];
						return e && e.ownerDocument ? t ? m.isFunction(t) ? this.each(function (e) {
							m(this).offset(t.call(this, e, m(this).offset()))
						}) : this.each(function () {
							m.offset.setOffset(this, t)
						}) : a.call(this) : null
					}), m.curCSS || (m.curCSS = m.css),
					function () {
						var e, t, i, n, s, a = document.getElementsByTagName("body")[0],
							o = document.createElement("div");
						for (var r in e = document.createElement(a ? "div" : "body"), i = {
								visibility: "hidden",
								width: 0,
								height: 0,
								border: 0,
								margin: 0,
								background: "none"
							}, a && m.extend(i, {
								position: "absolute",
								left: "-1000px",
								top: "-1000px"
							}), i) e.style[r] = i[r];
						e.appendChild(o), (t = a || document.documentElement).insertBefore(e, t.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", n = m(o).offset(function (e, t) {
							return t
						}).offset(), e.innerHTML = "", t.removeChild(e), s = n.top + n.left + (a ? 2e3 : 0), v.fractions = 21 < s && s < 22
					}()
			}(jQuery), uBa = jQuery, uBa.widget("ui.progressbar", {
				options: {
					value: 0,
					max: 100
				},
				min: 0,
				_create: function () {
					this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
						role: "progressbar",
						"aria-valuemin": this.min,
						"aria-valuemax": this.options.max,
						"aria-valuenow": this._value()
					}), this.valueDiv = uBa("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
				},
				destroy: function () {
					this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), uBa.Widget.prototype.destroy.apply(this, arguments)
				},
				value: function (e) {
					return void 0 === e ? this._value() : (this._setOption("value", e), this)
				},
				_setOption: function (e, t) {
					"value" === e && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), uBa.Widget.prototype._setOption.apply(this, arguments)
				},
				_value: function () {
					var e = this.options.value;
					return "number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
				},
				_percentage: function () {
					return 100 * this._value() / this.options.max
				},
				_refreshValue: function () {
					var e = this.value(),
						t = this._percentage();
					this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
				}
			}), uBa.extend(uBa.ui.progressbar, {
				version: "1.8.24"
			}), CBa = jQuery, CBa.widget("ui.slider", CBa.ui.mouse, {
				widgetEventPrefix: "slide",
				options: {
					animate: !1,
					distance: 0,
					max: 100,
					min: 0,
					orientation: "horizontal",
					range: !1,
					step: 1,
					value: 0,
					values: null
				},
				_create: function () {
					var a = this,
						e = this.options,
						t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
						i = e.values && e.values.length || 1,
						n = [];
					this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = CBa([]), e.range && (!0 === e.range && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && 2 !== e.values.length && (e.values = [e.values[0], e.values[0]])), this.range = CBa("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : "")));
					for (var s = t.length; s < i; s += 1) n.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
					this.handles = t.add(CBa(n.join("")).appendTo(a.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
						e.preventDefault()
					}).hover(function () {
						e.disabled || CBa(this).addClass("ui-state-hover")
					}, function () {
						CBa(this).removeClass("ui-state-hover")
					}).focus(function () {
						e.disabled ? CBa(this).blur() : (CBa(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), CBa(this).addClass("ui-state-focus"))
					}).blur(function () {
						CBa(this).removeClass("ui-state-focus")
					}), this.handles.each(function (e) {
						CBa(this).data("index.ui-slider-handle", e)
					}), this.handles.keydown(function (e) {
						var t, i, n, s = CBa(this).data("index.ui-slider-handle");
						if (!a.options.disabled) {
							switch (e.keyCode) {
								case CBa.ui.keyCode.HOME:
								case CBa.ui.keyCode.END:
								case CBa.ui.keyCode.PAGE_UP:
								case CBa.ui.keyCode.PAGE_DOWN:
								case CBa.ui.keyCode.UP:
								case CBa.ui.keyCode.RIGHT:
								case CBa.ui.keyCode.DOWN:
								case CBa.ui.keyCode.LEFT:
									if (e.preventDefault(), !a._keySliding && (a._keySliding = !0, CBa(this).addClass("ui-state-active"), !1 === a._start(e, s))) return
							}
							switch (n = a.options.step, t = i = a.options.values && a.options.values.length ? a.values(s) : a.value(), e.keyCode) {
								case CBa.ui.keyCode.HOME:
									i = a._valueMin();
									break;
								case CBa.ui.keyCode.END:
									i = a._valueMax();
									break;
								case CBa.ui.keyCode.PAGE_UP:
									i = a._trimAlignValue(t + (a._valueMax() - a._valueMin()) / 5);
									break;
								case CBa.ui.keyCode.PAGE_DOWN:
									i = a._trimAlignValue(t - (a._valueMax() - a._valueMin()) / 5);
									break;
								case CBa.ui.keyCode.UP:
								case CBa.ui.keyCode.RIGHT:
									if (t === a._valueMax()) return;
									i = a._trimAlignValue(t + n);
									break;
								case CBa.ui.keyCode.DOWN:
								case CBa.ui.keyCode.LEFT:
									if (t === a._valueMin()) return;
									i = a._trimAlignValue(t - n)
							}
							a._slide(e, s, i)
						}
					}).keyup(function (e) {
						var t = CBa(this).data("index.ui-slider-handle");
						a._keySliding && (a._keySliding = !1, a._stop(e, t), a._change(e, t), CBa(this).removeClass("ui-state-active"))
					}), this._refreshValue(), this._animateOff = !1
				},
				destroy: function () {
					return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
				},
				_mouseCapture: function (e) {
					var t, i, n, s, a, o, r, l, c = this.options;
					return !c.disabled && (this.elementSize = {
						width: this.element.outerWidth(),
						height: this.element.outerHeight()
					}, this.elementOffset = this.element.offset(), t = {
						x: e.pageX,
						y: e.pageY
					}, i = this._normValueFromMouse(t), n = this._valueMax() - this._valueMin() + 1, (a = this).handles.each(function (e) {
						var t = Math.abs(i - a.values(e));
						t < n && (n = t, s = CBa(this), o = e)
					}), !0 === c.range && this.values(1) === c.min && (o += 1, s = CBa(this.handles[o])), !1 !== this._start(e, o) && (this._mouseSliding = !0, a._handleIndex = o, s.addClass("ui-state-active").focus(), r = s.offset(), l = !CBa(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
						left: 0,
						top: 0
					} : {
						left: e.pageX - r.left - s.width() / 2,
						top: e.pageY - r.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
					}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, i), this._animateOff = !0))
				},
				_mouseStart: function (e) {
					return !0
				},
				_mouseDrag: function (e) {
					var t = {
							x: e.pageX,
							y: e.pageY
						},
						i = this._normValueFromMouse(t);
					return this._slide(e, this._handleIndex, i), !1
				},
				_mouseStop: function (e) {
					return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
				},
				_detectOrientation: function () {
					this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
				},
				_normValueFromMouse: function (e) {
					var t, i, n, s;
					return 1 < (i = ("horizontal" === this.orientation ? (t = this.elementSize.width, e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / t) && (i = 1), i < 0 && (i = 0), "vertical" === this.orientation && (i = 1 - i), n = this._valueMax() - this._valueMin(), s = this._valueMin() + i * n, this._trimAlignValue(s)
				},
				_start: function (e, t) {
					var i = {
						handle: this.handles[t],
						value: this.value()
					};
					return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
				},
				_slide: function (e, t, i) {
					var n, s, a;
					this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === t && n < i || 1 === t && i < n) && (i = n), i !== this.values(t) && ((s = this.values())[t] = i, a = this._trigger("slide", e, {
						handle: this.handles[t],
						value: i,
						values: s
					}), n = this.values(t ? 0 : 1), !1 !== a && this.values(t, i, !0))) : i === this.value() || !1 !== (a = this._trigger("slide", e, {
						handle: this.handles[t],
						value: i
					})) && this.value(i)
				},
				_stop: function (e, t) {
					var i = {
						handle: this.handles[t],
						value: this.value()
					};
					this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
				},
				_change: function (e, t) {
					if (!this._keySliding && !this._mouseSliding) {
						var i = {
							handle: this.handles[t],
							value: this.value()
						};
						this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("change", e, i)
					}
				},
				value: function (e) {
					return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
				},
				values: function (e, t) {
					var i, n, s;
					if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(t), this._refreshValue(), void this._change(null, e);
					if (!arguments.length) return this._values();
					if (!CBa.isArray(e)) return this.options.values && this.options.values.length ? this._values(e) : this.value();
					for (i = this.options.values, n = e, s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(n[s]), this._change(null, s);
					this._refreshValue()
				},
				_setOption: function (e, t) {
					var i, n = 0;
					switch (CBa.isArray(this.options.values) && (n = this.options.values.length), CBa.Widget.prototype._setOption.apply(this, arguments), e) {
						case "disabled":
							t ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
							break;
						case "orientation":
							this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
							break;
						case "value":
							this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
							break;
						case "values":
							for (this._animateOff = !0, this._refreshValue(), i = 0; i < n; i += 1) this._change(null, i);
							this._animateOff = !1
					}
				},
				_value: function () {
					var e = this.options.value;
					return e = this._trimAlignValue(e)
				},
				_values: function (e) {
					var t, i, n;
					if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
					for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
					return i
				},
				_trimAlignValue: function (e) {
					if (e <= this._valueMin()) return this._valueMin();
					if (e >= this._valueMax()) return this._valueMax();
					var t = 0 < this.options.step ? this.options.step : 1,
						i = (e - this._valueMin()) % t,
						n = e - i;
					return 2 * Math.abs(i) >= t && (n += 0 < i ? t : -t), parseFloat(n.toFixed(5))
				},
				_valueMin: function () {
					return this.options.min
				},
				_valueMax: function () {
					return this.options.max
				},
				_refreshValue: function () {
					var i, n, e, t, s, a = this.options.range,
						o = this.options,
						r = this,
						l = !this._animateOff && o.animate,
						c = {};
					this.options.values && this.options.values.length ? this.handles.each(function (e, t) {
						i = (r.values(e) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, c["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", CBa(this).stop(1, 1)[l ? "animate" : "css"](c, o.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === e && r.range.stop(1, 1)[l ? "animate" : "css"]({
							left: i + "%"
						}, o.animate), 1 === e && r.range[l ? "animate" : "css"]({
							width: i - n + "%"
						}, {
							queue: !1,
							duration: o.animate
						})) : (0 === e && r.range.stop(1, 1)[l ? "animate" : "css"]({
							bottom: i + "%"
						}, o.animate), 1 === e && r.range[l ? "animate" : "css"]({
							height: i - n + "%"
						}, {
							queue: !1,
							duration: o.animate
						}))), n = i
					}) : (e = this.value(), t = this._valueMin(), s = this._valueMax(), i = s !== t ? (e - t) / (s - t) * 100 : 0, c["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, o.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
						width: i + "%"
					}, o.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
						width: 100 - i + "%"
					}, {
						queue: !1,
						duration: o.animate
					}), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
						height: i + "%"
					}, o.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
						height: 100 - i + "%"
					}, {
						queue: !1,
						duration: o.animate
					}))
				}
			}), CBa.extend(CBa.ui.slider, {
				version: "1.8.24"
			}), kDa = jQuery, oDa = 0, pDa = 0, kDa.widget("ui.tabs", {
				options: {
					add: null,
					ajaxOptions: null,
					cache: !1,
					cookie: null,
					collapsible: !1,
					disable: null,
					disabled: [],
					enable: null,
					event: "click",
					fx: null,
					idPrefix: "ui-tabs-",
					load: null,
					panelTemplate: "<div></div>",
					remove: null,
					select: null,
					show: null,
					spinner: "<em>Loading&#8230;</em>",
					tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
				},
				_create: function () {
					this._tabify(!0)
				},
				_setOption: function (e, t) {
					if ("selected" == e) {
						if (this.options.collapsible && t == this.options.selected) return;
						this.select(t)
					} else this.options[e] = t, this._tabify()
				},
				_tabId: function (e) {
					return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + ++oDa
				},
				_sanitizeSelector: function (e) {
					return e.replace(/:/g, "\\:")
				},
				_cookie: function () {
					var e = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++pDa);
					return kDa.cookie.apply(null, [e].concat(kDa.makeArray(arguments)))
				},
				_ui: function (e, t) {
					return {
						tab: e,
						panel: t,
						index: this.anchors.index(e)
					}
				},
				_cleanup: function () {
					this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
						var e = kDa(this);
						e.html(e.data("label.tabs")).removeData("label.tabs")
					})
				},
				_tabify: function (e) {
					function i(e, t) {
						e.css("display", ""), !kDa.support.opacity && t.opacity && e[0].style.removeAttribute("filter")
					}
					var n, s, r = this,
						l = this.options,
						c = /^#.+/;
					this.list = this.element.find("ol,ul").eq(0), this.lis = kDa(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
						return kDa("a", this)[0]
					}), this.panels = kDa([]), this.anchors.each(function (e, t) {
						var i, n = kDa(t).attr("href"),
							s = n.split("#")[0];
						if (s && (s === location.toString().split("#")[0] || (i = kDa("base")[0]) && s === i.href) && (n = t.hash, t.href = n), c.test(n)) r.panels = r.panels.add(r.element.find(r._sanitizeSelector(n)));
						else if (n && "#" !== n) {
							kDa.data(t, "href.tabs", n), kDa.data(t, "load.tabs", n.replace(/#.*$/, ""));
							var a = r._tabId(t);
							t.href = "#" + a;
							var o = r.element.find("#" + a);
							o.length || (o = kDa(l.panelTemplate).attr("id", a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(r.panels[e - 1] || r.list)).data("destroy.tabs", !0), r.panels = r.panels.add(o)
						} else l.disabled.push(e)
					}), e ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), void 0 === l.selected ? (location.hash && this.anchors.each(function (e, t) {
						if (t.hash == location.hash) return l.selected = e, !1
					}), "number" != typeof l.selected && l.cookie && (l.selected = parseInt(r._cookie(), 10)), "number" != typeof l.selected && this.lis.filter(".ui-tabs-selected").length && (l.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), l.selected = l.selected || (this.lis.length ? 0 : -1)) : null === l.selected && (l.selected = -1), l.selected = 0 <= l.selected && this.anchors[l.selected] || l.selected < 0 ? l.selected : 0, l.disabled = kDa.unique(l.disabled.concat(kDa.map(this.lis.filter(".ui-state-disabled"), function (e, t) {
						return r.lis.index(e)
					}))).sort(), -1 != kDa.inArray(l.selected, l.disabled) && l.disabled.splice(kDa.inArray(l.selected, l.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), 0 <= l.selected && this.anchors.length && (r.element.find(r._sanitizeSelector(r.anchors[l.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(l.selected).addClass("ui-tabs-selected ui-state-active"), r.element.queue("tabs", function () {
						r._trigger("show", null, r._ui(r.anchors[l.selected], r.element.find(r._sanitizeSelector(r.anchors[l.selected].hash))[0]))
					}), this.load(l.selected)), kDa(window).bind("unload", function () {
						r.lis.add(r.anchors).unbind(".tabs"), r.lis = r.anchors = r.panels = null
					})) : l.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[l.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), l.cookie && this._cookie(l.selected, l.cookie);
					for (var t, a = 0; t = this.lis[a]; a++) kDa(t)[-1 == kDa.inArray(a, l.disabled) || kDa(t).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
					if (!1 === l.cache && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== l.event) {
						function o(e, t) {
							t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
						}

						function u(e, t) {
							t.removeClass("ui-state-" + e)
						}
						this.lis.bind("mouseover.tabs", function () {
							o("hover", kDa(this))
						}), this.lis.bind("mouseout.tabs", function () {
							u("hover", kDa(this))
						}), this.anchors.bind("focus.tabs", function () {
							o("focus", kDa(this).closest("li"))
						}), this.anchors.bind("blur.tabs", function () {
							u("focus", kDa(this).closest("li"))
						})
					}
					l.fx && (kDa.isArray(l.fx) ? (n = l.fx[0], s = l.fx[1]) : n = s = l.fx);
					var h = s ? function (e, t) {
							kDa(e).closest("li").addClass("ui-tabs-selected ui-state-active"), t.hide().removeClass("ui-tabs-hide").animate(s, s.duration || "normal", function () {
								i(t, s), r._trigger("show", null, r._ui(e, t[0]))
							})
						} : function (e, t) {
							kDa(e).closest("li").addClass("ui-tabs-selected ui-state-active"), t.removeClass("ui-tabs-hide"), r._trigger("show", null, r._ui(e, t[0]))
						},
						d = n ? function (e, t) {
							t.animate(n, n.duration || "normal", function () {
								r.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), i(t, n), r.element.dequeue("tabs")
							})
						} : function (e, t, i) {
							r.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), r.element.dequeue("tabs")
						};
					this.anchors.bind(l.event + ".tabs", function () {
						var e = this,
							t = kDa(e).closest("li"),
							i = r.panels.filter(":not(.ui-tabs-hide)"),
							n = r.element.find(r._sanitizeSelector(e.hash));
						if (t.hasClass("ui-tabs-selected") && !l.collapsible || t.hasClass("ui-state-disabled") || t.hasClass("ui-state-processing") || r.panels.filter(":animated").length || !1 === r._trigger("select", null, r._ui(this, n[0]))) return this.blur(), !1;
						if (l.selected = r.anchors.index(this), r.abort(), l.collapsible) {
							if (t.hasClass("ui-tabs-selected")) return l.selected = -1, l.cookie && r._cookie(l.selected, l.cookie), r.element.queue("tabs", function () {
								d(e, i)
							}).dequeue("tabs"), this.blur(), !1;
							if (!i.length) return l.cookie && r._cookie(l.selected, l.cookie), r.element.queue("tabs", function () {
								h(e, n)
							}), r.load(r.anchors.index(this)), this.blur(), !1
						}
						if (l.cookie && r._cookie(l.selected, l.cookie), !n.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
						i.length && r.element.queue("tabs", function () {
							d(e, i)
						}), r.element.queue("tabs", function () {
							h(e, n)
						}), r.load(r.anchors.index(this)), kDa.browser.msie && this.blur()
					}), this.anchors.bind("click.tabs", function () {
						return !1
					})
				},
				_getIndex: function (e) {
					return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
				},
				destroy: function () {
					var e = this.options;
					return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
						var e = kDa.data(this, "href.tabs");
						e && (this.href = e);
						var i = kDa(this).unbind(".tabs");
						kDa.each(["href", "load", "cache"], function (e, t) {
							i.removeData(t + ".tabs")
						})
					}), this.lis.unbind(".tabs").add(this.panels).each(function () {
						kDa.data(this, "destroy.tabs") ? kDa(this).remove() : kDa(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
					}), e.cookie && this._cookie(null, e.cookie), this
				},
				add: function (e, t, i) {
					void 0 === i && (i = this.anchors.length);
					var n = this,
						s = this.options,
						a = kDa(s.tabTemplate.replace(/#\{href\}/g, e).replace(/#\{label\}/g, t)),
						o = e.indexOf("#") ? this._tabId(kDa("a", a)[0]) : e.replace("#", "");
					a.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
					var r = n.element.find("#" + o);
					return r.length || (r = kDa(s.panelTemplate).attr("id", o).data("destroy.tabs", !0)), r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= this.lis.length ? (a.appendTo(this.list), r.appendTo(this.list[0].parentNode)) : (a.insertBefore(this.lis[i]), r.insertBefore(this.panels[i])), s.disabled = kDa.map(s.disabled, function (e, t) {
						return i <= e ? ++e : e
					}), this._tabify(), 1 == this.anchors.length && (s.selected = 0, a.addClass("ui-tabs-selected ui-state-active"), r.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
						n._trigger("show", null, n._ui(n.anchors[0], n.panels[0]))
					}), this.load(0)), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
				},
				remove: function (i) {
					i = this._getIndex(i);
					var e = this.options,
						t = this.lis.eq(i).remove(),
						n = this.panels.eq(i).remove();
					return t.hasClass("ui-tabs-selected") && 1 < this.anchors.length && this.select(i + (i + 1 < this.anchors.length ? 1 : -1)), e.disabled = kDa.map(kDa.grep(e.disabled, function (e, t) {
						return e != i
					}), function (e, t) {
						return i <= e ? --e : e
					}), this._tabify(), this._trigger("remove", null, this._ui(t.find("a")[0], n[0])), this
				},
				enable: function (i) {
					i = this._getIndex(i);
					var e = this.options;
					if (-1 != kDa.inArray(i, e.disabled)) return this.lis.eq(i).removeClass("ui-state-disabled"), e.disabled = kDa.grep(e.disabled, function (e, t) {
						return e != i
					}), this._trigger("enable", null, this._ui(this.anchors[i], this.panels[i])), this
				},
				disable: function (e) {
					e = this._getIndex(e);
					var t = this.options;
					return e != t.selected && (this.lis.eq(e).addClass("ui-state-disabled"), t.disabled.push(e), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
				},
				select: function (e) {
					if (-1 == (e = this._getIndex(e))) {
						if (!this.options.collapsible || -1 == this.options.selected) return this;
						e = this.options.selected
					}
					return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
				},
				load: function (n) {
					n = this._getIndex(n);
					var s = this,
						a = this.options,
						o = this.anchors.eq(n)[0],
						e = kDa.data(o, "load.tabs");
					if (this.abort(), e && (0 === this.element.queue("tabs").length || !kDa.data(o, "cache.tabs"))) {
						if (this.lis.eq(n).addClass("ui-state-processing"), a.spinner) {
							var t = kDa("span", o);
							t.data("label.tabs", t.html()).html(a.spinner)
						}
						return this.xhr = kDa.ajax(kDa.extend({}, a.ajaxOptions, {
							url: e,
							success: function (e, t) {
								s.element.find(s._sanitizeSelector(o.hash)).html(e), s._cleanup(), a.cache && kDa.data(o, "cache.tabs", !0), s._trigger("load", null, s._ui(s.anchors[n], s.panels[n]));
								try {
									a.ajaxOptions.success(e, t)
								} catch (e) {}
							},
							error: function (e, t, i) {
								s._cleanup(), s._trigger("load", null, s._ui(s.anchors[n], s.panels[n]));
								try {
									a.ajaxOptions.error(e, t, n, o)
								} catch (i) {}
							}
						})), s.element.dequeue("tabs"), this
					}
					this.element.dequeue("tabs")
				},
				abort: function () {
					return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
				},
				url: function (e, t) {
					return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
				},
				length: function () {
					return this.anchors.length
				}
			}), kDa.extend(kDa.ui.tabs, {
				version: "1.8.24"
			}), kDa.extend(kDa.ui.tabs.prototype, {
				rotation: null,
				rotate: function (t, e) {
					var i = this,
						n = this.options,
						s = i._rotate || (i._rotate = function (e) {
							clearTimeout(i.rotation), i.rotation = setTimeout(function () {
								var e = n.selected;
								i.select(++e < i.anchors.length ? e : 0)
							}, t), e && e.stopPropagation()
						}),
						a = i._unrotate || (i._unrotate = e ? function (e) {
							s()
						} : function (e) {
							e.clientX && i.rotate(null)
						});
					return t ? (this.element.bind("tabsshow", s), this.anchors.bind(n.event + ".tabs", a), s()) : (clearTimeout(i.rotation), this.element.unbind("tabsshow", s), this.anchors.unbind(n.event + ".tabs", a), delete this._rotate, delete this._unrotate), this
				}
			})
	}
	nG = window, pG.buildItem = function (e, t, i, n, s, a, o, r, l) {
		return {
			id: e,
			type: t,
			length: i,
			src: n,
			preview: s,
			link: a,
			linkText: o,
			seen: r,
			time: l
		}
	}, oG = nG.ZuckitaDaGalera = nG.Zuck = pG, "function" == typeof define && define.amd ? define(function () {
		return oG
	}) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = oG), exports.ZuckJS = oG) : nG.ZuckJS = oG, plyrvideore(), serchautocomp()
}! function (e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (f, e) {
	function t(e, t) {
		return t.toUpperCase()
	}
	var i = [],
		u = i.slice,
		m = i.concat,
		r = i.push,
		s = i.indexOf,
		n = {},
		a = n.toString,
		g = n.hasOwnProperty,
		v = {},
		y = f.document,
		o = "2.1.3",
		x = function (e, t) {
			return new x.fn.init(e, t)
		},
		l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		c = /^-ms-/,
		h = /-([\da-z])/gi;

	function d(e) {
		var t = e.length,
			i = x.type(e);
		return "function" !== i && !x.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
	}
	x.fn = x.prototype = {
		jquery: o,
		constructor: x,
		selector: "",
		length: 0,
		toArray: function () {
			return u.call(this)
		},
		get: function (e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
		},
		pushStack: function (e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function (e, t) {
			return x.each(this, e, t)
		},
		map: function (i) {
			return this.pushStack(x.map(this, function (e, t) {
				return i.call(e, t, e)
			}))
		},
		slice: function () {
			return this.pushStack(u.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				i = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= i && i < t ? [this[i]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: r,
		sort: i.sort,
		splice: i.splice
	}, x.extend = x.fn.extend = function () {
		var e, t, i, n, s, a, o = arguments[0] || {},
			r = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof o && (c = o, o = arguments[r] || {}, r++), "object" == typeof o || x.isFunction(o) || (o = {}), r === l && (o = this, r--); r < l; r++)
			if (null != (e = arguments[r]))
				for (t in e) i = o[t], o !== (n = e[t]) && (c && n && (x.isPlainObject(n) || (s = x.isArray(n))) ? (a = s ? (s = !1, i && x.isArray(i) ? i : []) : i && x.isPlainObject(i) ? i : {}, o[t] = x.extend(c, a, n)) : void 0 !== n && (o[t] = n));
		return o
	}, x.extend({
		expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray,
		isWindow: function (e) {
			return null != e && e === e.window
		},
		isNumeric: function (e) {
			return !x.isArray(e) && 0 <= e - parseFloat(e) + 1
		},
		isPlainObject: function (e) {
			return "object" === x.type(e) && !e.nodeType && !x.isWindow(e) && !(e.constructor && !g.call(e.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e
		},
		globalEval: function (e) {
			var t, i = eval;
			(e = x.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) : i(e))
		},
		camelCase: function (e) {
			return e.replace(c, "ms-").replace(h, t)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function (e, t, i) {
			var n = 0,
				s = e.length,
				a = d(e);
			if (i) {
				if (a)
					for (; n < s && !1 !== t.apply(e[n], i); n++);
				else
					for (n in e)
						if (!1 === t.apply(e[n], i)) break
			} else if (a)
				for (; n < s && !1 !== t.call(e[n], n, e[n]); n++);
			else
				for (n in e)
					if (!1 === t.call(e[n], n, e[n])) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(l, "")
		},
		makeArray: function (e, t) {
			var i = t || [];
			return null != e && (d(Object(e)) ? x.merge(i, "string" == typeof e ? [e] : e) : r.call(i, e)), i
		},
		inArray: function (e, t, i) {
			return null == t ? -1 : s.call(t, e, i)
		},
		merge: function (e, t) {
			for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
			return e.length = s, e
		},
		grep: function (e, t, i) {
			for (var n = [], s = 0, a = e.length, o = !i; s < a; s++) !t(e[s], s) != o && n.push(e[s]);
			return n
		},
		map: function (e, t, i) {
			var n, s = 0,
				a = e.length,
				o = [];
			if (d(e))
				for (; s < a; s++) null != (n = t(e[s], s, i)) && o.push(n);
			else
				for (s in e) null != (n = t(e[s], s, i)) && o.push(n);
			return m.apply([], o)
		},
		guid: 1,
		proxy: function (e, t) {
			var i, n, s;
			return "string" == typeof t && (i = e[t], t = e, e = i), x.isFunction(e) ? (n = u.call(arguments, 2), (s = function () {
				return e.apply(t || this, n.concat(u.call(arguments)))
			}).guid = e.guid = e.guid || x.guid++, s) : void 0
		},
		now: Date.now,
		support: v
	}), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var p = function (i) {
		function h(e, t, i) {
			var n = "0x" + t - 65536;
			return n != n || i ? t : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
		}

		function n() {
			v()
		}
		var e, f, w, a, s, m, d, g, k, c, u, v, _, o, y, b, r, p, x, C = "sizzle" + +new Date,
			T = i.document,
			D = 0,
			S = 0,
			l = ae(),
			P = ae(),
			A = ae(),
			E = function (e, t) {
				return e === t && (u = !0), 0
			},
			M = {}.hasOwnProperty,
			t = [],
			I = t.pop,
			N = t.push,
			L = t.push,
			z = t.slice,
			H = function (e, t) {
				for (var i = 0, n = e.length; i < n; i++)
					if (e[i] === t) return i;
				return -1
			},
			$ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			O = "[\\x20\\t\\r\\n\\f]",
			j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			W = j.replace("w", "w#"),
			F = "\\[" + O + "*(" + j + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + O + "*\\]",
			R = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
			q = new RegExp(O + "+", "g"),
			B = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
			U = new RegExp("^" + O + "*," + O + "*"),
			Y = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
			V = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
			K = new RegExp(R),
			X = new RegExp("^" + W + "$"),
			G = {
				ID: new RegExp("^#(" + j + ")"),
				CLASS: new RegExp("^\\.(" + j + ")"),
				TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + F),
				PSEUDO: new RegExp("^" + R),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + $ + ")$", "i"),
				needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
			},
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			te = /[+~]/,
			ie = /'|\\/g,
			ne = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig");
		try {
			L.apply(t = z.call(T.childNodes), T.childNodes), t[T.childNodes.length].nodeType
		} catch (e) {
			L = {
				apply: t.length ? function (e, t) {
					N.apply(e, z.call(t))
				} : function (e, t) {
					for (var i = e.length, n = 0; e[i++] = t[n++];);
					e.length = i - 1
				}
			}
		}

		function se(e, t, i, n) {
			var s, a, o, r, l, c, u, h, d, p;
			if ((t ? t.ownerDocument || t : T) !== _ && v(t), i = i || [], r = (t = t || _).nodeType, "string" != typeof e || !e || 1 !== r && 9 !== r && 11 !== r) return i;
			if (!n && y) {
				if (11 !== r && (s = ee.exec(e)))
					if (o = s[1]) {
						if (9 === r) {
							if (!(a = t.getElementById(o)) || !a.parentNode) return i;
							if (a.id === o) return i.push(a), i
						} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && x(t, a) && a.id === o) return i.push(a), i
					} else {
						if (s[2]) return L.apply(i, t.getElementsByTagName(e)), i;
						if ((o = s[3]) && f.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
					}
				if (f.qsa && (!b || !b.test(e))) {
					if (h = u = C, d = t, p = 1 !== r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
						for (c = m(e), (u = t.getAttribute("id")) ? h = u.replace(ie, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + me(c[l]);
						d = te.test(e) && pe(t.parentNode) || t, p = c.join(",")
					}
					if (p) try {
						return L.apply(i, d.querySelectorAll(p)), i
					} catch (e) {} finally {
						u || t.removeAttribute("id")
					}
				}
			}
			return g(e.replace(B, "$1"), t, i, n)
		}

		function ae() {
			var n = [];
			return function e(t, i) {
				return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
			}
		}

		function oe(e) {
			return e[C] = !0, e
		}

		function re(e) {
			var t = _.createElement("div");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function le(e, t) {
			for (var i = e.split("|"), n = e.length; n--;) w.attrHandle[i[n]] = t
		}

		function ce(e, t) {
			var i = t && e,
				n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === t) return -1;
			return e ? 1 : -1
		}

		function ue(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(i) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === i
			}
		}

		function de(o) {
			return oe(function (a) {
				return a = +a, oe(function (e, t) {
					for (var i, n = o([], e.length, a), s = n.length; s--;) e[i = n[s]] && (e[i] = !(t[i] = e[i]))
				})
			})
		}

		function pe(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in f = se.support = {}, s = se.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, v = se.setDocument = function (e) {
				var t, i, l = e ? e.ownerDocument || e : T;
				return l !== _ && 9 === l.nodeType && l.documentElement ? (o = (_ = l).documentElement, (i = l.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", n, !1) : i.attachEvent && i.attachEvent("onunload", n)), y = !s(l), f.attributes = re(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), f.getElementsByTagName = re(function (e) {
					return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
				}), f.getElementsByClassName = Z.test(l.getElementsByClassName), f.getById = re(function (e) {
					return o.appendChild(e).id = C, !l.getElementsByName || !l.getElementsByName(C).length
				}), f.getById ? (w.find.ID = function (e, t) {
					if (void 0 !== t.getElementById && y) {
						var i = t.getElementById(e);
						return i && i.parentNode ? [i] : []
					}
				}, w.filter.ID = function (e) {
					var t = e.replace(ne, h);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (delete w.find.ID, w.filter.ID = function (e) {
					var i = e.replace(ne, h);
					return function (e) {
						var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === i
					}
				}), w.find.TAG = f.getElementsByTagName ? function (e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
				} : function (e, t) {
					var i, n = [],
						s = 0,
						a = t.getElementsByTagName(e);
					if ("*" !== e) return a;
					for (; i = a[s++];) 1 === i.nodeType && n.push(i);
					return n
				}, w.find.CLASS = f.getElementsByClassName && function (e, t) {
					return y ? t.getElementsByClassName(e) : void 0
				}, r = [], b = [], (f.qsa = Z.test(l.querySelectorAll)) && (re(function (e) {
					o.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + O + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + C + "-]").length || b.push("~="), e.querySelectorAll(":checked").length || b.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || b.push(".#.+[+~]")
				}), re(function (e) {
					var t = l.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && b.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
				})), (f.matchesSelector = Z.test(p = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && re(function (e) {
					f.disconnectedMatch = p.call(e, "div"), p.call(e, "[s!='']:x"), r.push("!=", R)
				}), b = b.length && new RegExp(b.join("|")), r = r.length && new RegExp(r.join("|")), t = Z.test(o.compareDocumentPosition), x = t || Z.test(o.contains) ? function (e, t) {
					var i = 9 === e.nodeType ? e.documentElement : e,
						n = t && t.parentNode;
					return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
				} : function (e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, E = t ? function (e, t) {
					if (e === t) return u = !0, 0;
					var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === l || e.ownerDocument === T && x(T, e) ? -1 : t === l || t.ownerDocument === T && x(T, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & i ? -1 : 1)
				} : function (e, t) {
					if (e === t) return u = !0, 0;
					var i, n = 0,
						s = e.parentNode,
						a = t.parentNode,
						o = [e],
						r = [t];
					if (!s || !a) return e === l ? -1 : t === l ? 1 : s ? -1 : a ? 1 : c ? H(c, e) - H(c, t) : 0;
					if (s === a) return ce(e, t);
					for (i = e; i = i.parentNode;) o.unshift(i);
					for (i = t; i = i.parentNode;) r.unshift(i);
					for (; o[n] === r[n];) n++;
					return n ? ce(o[n], r[n]) : o[n] === T ? -1 : r[n] === T ? 1 : 0
				}, l) : _
			}, se.matches = function (e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function (e, t) {
				if ((e.ownerDocument || e) !== _ && v(e), t = t.replace(V, "='$1']"), !(!f.matchesSelector || !y || r && r.test(t) || b && b.test(t))) try {
					var i = p.call(e, t);
					if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch (e) {}
				return 0 < se(t, _, null, [e]).length
			}, se.contains = function (e, t) {
				return (e.ownerDocument || e) !== _ && v(e), x(e, t)
			}, se.attr = function (e, t) {
				(e.ownerDocument || e) !== _ && v(e);
				var i = w.attrHandle[t.toLowerCase()],
					n = i && M.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !y) : void 0;
				return void 0 !== n ? n : f.attributes || !y ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
			}, se.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function (e) {
				var t, i = [],
					n = 0,
					s = 0;
				if (u = !f.detectDuplicates, c = !f.sortStable && e.slice(0), e.sort(E), u) {
					for (; t = e[s++];) t === e[s] && (n = i.push(s));
					for (; n--;) e.splice(i[n], 1)
				}
				return c = null, e
			}, a = se.getText = function (e) {
				var t, i = "",
					n = 0,
					s = e.nodeType;
				if (s) {
					if (1 === s || 9 === s || 11 === s) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) i += a(e)
					} else if (3 === s || 4 === s) return e.nodeValue
				} else
					for (; t = e[n++];) i += a(t);
				return i
			}, (w = se.selectors = {
				cacheLength: 50,
				createPseudo: oe,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(ne, h), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, h), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, i = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && K.test(i) && (t = m(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(ne, h).toLowerCase();
						return "*" === e ? function () {
							return !0
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = l[e + " "];
						return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && l(e, function (e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (i, n, s) {
						return function (e) {
							var t = se.attr(e, i);
							return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === s : "!=" === n ? t !== s : "^=" === n ? s && 0 === t.indexOf(s) : "*=" === n ? s && -1 < t.indexOf(s) : "$=" === n ? s && t.slice(-s.length) === s : "~=" === n ? -1 < (" " + t.replace(q, " ") + " ").indexOf(s) : "|=" === n && (t === s || t.slice(0, s.length + 1) === s + "-"))
						}
					},
					CHILD: function (p, e, t, f, m) {
						var g = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							y = "of-type" === e;
						return 1 === f && 0 === m ? function (e) {
							return !!e.parentNode
						} : function (e, t, i) {
							var n, s, a, o, r, l, c = g != v ? "nextSibling" : "previousSibling",
								u = e.parentNode,
								h = y && e.nodeName.toLowerCase(),
								d = !i && !y;
							if (u) {
								if (g) {
									for (; c;) {
										for (a = e; a = a[c];)
											if (y ? a.nodeName.toLowerCase() === h : 1 === a.nodeType) return !1;
										l = c = "only" === p && !l && "nextSibling"
									}
									return !0
								}
								if (l = [v ? u.firstChild : u.lastChild], v && d) {
									for (r = (n = (s = u[C] || (u[C] = {}))[p] || [])[0] === D && n[1], o = n[0] === D && n[2], a = r && u.childNodes[r]; a = ++r && a && a[c] || (o = r = 0) || l.pop();)
										if (1 === a.nodeType && ++o && a === e) {
											s[p] = [D, r, o];
											break
										}
								} else if (d && (n = (e[C] || (e[C] = {}))[p]) && n[0] === D) o = n[1];
								else
									for (;
										(a = ++r && a && a[c] || (o = r = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== h : 1 !== a.nodeType) || !++o || (d && ((a[C] || (a[C] = {}))[p] = [D, o]), a !== e)););
								return (o -= m) === f || o % f == 0 && 0 <= o / f
							}
						}
					},
					PSEUDO: function (e, a) {
						var t, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return o[C] ? o(a) : 1 < o.length ? (t = [e, e, "", a], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
							for (var i, n = o(e, a), s = n.length; s--;) e[i = H(e, n[s])] = !(t[i] = n[s])
						}) : function (e) {
							return o(e, 0, t)
						}) : o
					}
				},
				pseudos: {
					not: oe(function (e) {
						var n = [],
							s = [],
							r = d(e.replace(B, "$1"));
						return r[C] ? oe(function (e, t, i, n) {
							for (var s, a = r(e, null, n, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
						}) : function (e, t, i) {
							return n[0] = e, r(n, null, i, s), n[0] = null, !s.pop()
						}
					}),
					has: oe(function (t) {
						return function (e) {
							return 0 < se(t, e).length
						}
					}),
					contains: oe(function (t) {
						return t = t.replace(ne, h),
							function (e) {
								return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
							}
					}),
					lang: oe(function (i) {
						return X.test(i || "") || se.error("unsupported lang: " + i), i = i.replace(ne, h).toLowerCase(),
							function (e) {
								var t;
								do {
									if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function (e) {
						var t = i.location && i.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function (e) {
						return e === o
					},
					focus: function (e) {
						return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function (e) {
						return !1 === e.disabled
					},
					disabled: function (e) {
						return !0 === e.disabled
					},
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function (e) {
						return !w.pseudos.empty(e)
					},
					header: function (e) {
						return J.test(e.nodeName)
					},
					input: function (e) {
						return Q.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: de(function () {
						return [0]
					}),
					last: de(function (e, t) {
						return [t - 1]
					}),
					eq: de(function (e, t, i) {
						return [i < 0 ? i + t : i]
					}),
					even: de(function (e, t) {
						for (var i = 0; i < t; i += 2) e.push(i);
						return e
					}),
					odd: de(function (e, t) {
						for (var i = 1; i < t; i += 2) e.push(i);
						return e
					}),
					lt: de(function (e, t, i) {
						for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
						return e
					}),
					gt: de(function (e, t, i) {
						for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
						return e
					})
				}
			}).pseudos.nth = w.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[e] = ue(e);
		for (e in {
				submit: !0,
				reset: !0
			}) w.pseudos[e] = he(e);

		function fe() {}

		function me(e) {
			for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
			return n
		}

		function ge(o, e, t) {
			var r = e.dir,
				l = t && "parentNode" === r,
				c = S++;
			return e.first ? function (e, t, i) {
				for (; e = e[r];)
					if (1 === e.nodeType || l) return o(e, t, i)
			} : function (e, t, i) {
				var n, s, a = [D, c];
				if (i) {
					for (; e = e[r];)
						if ((1 === e.nodeType || l) && o(e, t, i)) return !0
				} else
					for (; e = e[r];)
						if (1 === e.nodeType || l) {
							if ((n = (s = e[C] || (e[C] = {}))[r]) && n[0] === D && n[1] === c) return a[2] = n[2];
							if ((s[r] = a)[2] = o(e, t, i)) return !0
						}
			}
		}

		function ve(s) {
			return 1 < s.length ? function (e, t, i) {
				for (var n = s.length; n--;)
					if (!s[n](e, t, i)) return !1;
				return !0
			} : s[0]
		}

		function ye(e, t, i, n, s) {
			for (var a, o = [], r = 0, l = e.length, c = null != t; r < l; r++) !(a = e[r]) || i && !i(a, n, s) || (o.push(a), c && t.push(r));
			return o
		}

		function be(p, f, m, g, v, e) {
			return g && !g[C] && (g = be(g)), v && !v[C] && (v = be(v, e)), oe(function (e, t, i, n) {
				var s, a, o, r = [],
					l = [],
					c = t.length,
					u = e || function (e, t, i) {
						for (var n = 0, s = t.length; n < s; n++) se(e, t[n], i);
						return i
					}(f || "*", i.nodeType ? [i] : i, []),
					h = !p || !e && f ? u : ye(u, r, p, i, n),
					d = m ? v || (e ? p : c || g) ? [] : t : h;
				if (m && m(h, d, i, n), g)
					for (s = ye(d, l), g(s, [], i, n), a = s.length; a--;)(o = s[a]) && (d[l[a]] = !(h[l[a]] = o));
				if (e) {
					if (v || p) {
						if (v) {
							for (s = [], a = d.length; a--;)(o = d[a]) && s.push(h[a] = o);
							v(null, d = [], s, n)
						}
						for (a = d.length; a--;)(o = d[a]) && -1 < (s = v ? H(e, o) : r[a]) && (e[s] = !(t[s] = o))
					}
				} else d = ye(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, n) : L.apply(t, d)
			})
		}

		function we(e) {
			for (var s, t, i, n = e.length, a = w.relative[e[0].type], o = a || w.relative[" "], r = a ? 1 : 0, l = ge(function (e) {
					return e === s
				}, o, !0), c = ge(function (e) {
					return -1 < H(s, e)
				}, o, !0), u = [function (e, t, i) {
					var n = !a && (i || t !== k) || ((s = t).nodeType ? l : c)(e, t, i);
					return s = null, n
				}]; r < n; r++)
				if (t = w.relative[e[r].type]) u = [ge(ve(u), t)];
				else {
					if ((t = w.filter[e[r].type].apply(null, e[r].matches))[C]) {
						for (i = ++r; i < n && !w.relative[e[i].type]; i++);
						return be(1 < r && ve(u), 1 < r && me(e.slice(0, r - 1).concat({
							value: " " === e[r - 2].type ? "*" : ""
						})).replace(B, "$1"), t, r < i && we(e.slice(r, i)), i < n && we(e = e.slice(i)), i < n && me(e))
					}
					u.push(t)
				}
			return ve(u)
		}

		function ke(g, v) {
			function e(e, t, i, n, s) {
				var a, o, r, l = 0,
					c = "0",
					u = e && [],
					h = [],
					d = k,
					p = e || b && w.find.TAG("*", s),
					f = D += null == d ? 1 : Math.random() || .1,
					m = p.length;
				for (s && (k = t !== _ && t); c !== m && null != (a = p[c]); c++) {
					if (b && a) {
						for (o = 0; r = g[o++];)
							if (r(a, t, i)) {
								n.push(a);
								break
							}
						s && (D = f)
					}
					y && ((a = !r && a) && l--, e && u.push(a))
				}
				if (l += c, y && c !== l) {
					for (o = 0; r = v[o++];) r(u, h, t, i);
					if (e) {
						if (0 < l)
							for (; c--;) u[c] || h[c] || (h[c] = I.call(n));
						h = ye(h)
					}
					L.apply(n, h), s && !e && 0 < h.length && 1 < l + v.length && se.uniqueSort(n)
				}
				return s && (D = f, k = d), u
			}
			var y = 0 < v.length,
				b = 0 < g.length;
			return y ? oe(e) : e
		}
		return fe.prototype = w.filters = w.pseudos, w.setFilters = new fe, m = se.tokenize = function (e, t) {
			var i, n, s, a, o, r, l, c = P[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (o = e, r = [], l = w.preFilter; o;) {
				for (a in i && !(n = U.exec(o)) || (n && (o = o.slice(n[0].length) || o), r.push(s = [])), i = !1, (n = Y.exec(o)) && (i = n.shift(), s.push({
						value: i,
						type: n[0].replace(B, " ")
					}), o = o.slice(i.length)), w.filter) !(n = G[a].exec(o)) || l[a] && !(n = l[a](n)) || (i = n.shift(), s.push({
					value: i,
					type: a,
					matches: n
				}), o = o.slice(i.length));
				if (!i) break
			}
			return t ? o.length : o ? se.error(e) : P(e, r).slice(0)
		}, d = se.compile = function (e, t) {
			var i, n = [],
				s = [],
				a = A[e + " "];
			if (!a) {
				for (i = (t = t || m(e)).length; i--;)(a = we(t[i]))[C] ? n.push(a) : s.push(a);
				(a = A(e, ke(s, n))).selector = e
			}
			return a
		}, g = se.select = function (e, t, i, n) {
			var s, a, o, r, l, c = "function" == typeof e && e,
				u = !n && m(e = c.selector || e);
			if (i = i || [], 1 === u.length) {
				if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (o = a[0]).type && f.getById && 9 === t.nodeType && y && w.relative[a[1].type]) {
					if (!(t = (w.find.ID(o.matches[0].replace(ne, h), t) || [])[0])) return i;
					c && (t = t.parentNode), e = e.slice(a.shift().value.length)
				}
				for (s = G.needsContext.test(e) ? 0 : a.length; s-- && (o = a[s], !w.relative[r = o.type]);)
					if ((l = w.find[r]) && (n = l(o.matches[0].replace(ne, h), te.test(a[0].type) && pe(t.parentNode) || t))) {
						if (a.splice(s, 1), !(e = n.length && me(a))) return L.apply(i, n), i;
						break
					}
			}
			return (c || d(e, u))(n, t, !y, i, te.test(e) && pe(t.parentNode) || t), i
		}, f.sortStable = C.split("").sort(E).join("") === C, f.detectDuplicates = !!u, v(), f.sortDetached = re(function (e) {
			return 1 & e.compareDocumentPosition(_.createElement("div"))
		}), re(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || le("type|href|height|width", function (e, t, i) {
			return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), f.attributes && re(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || le("value", function (e, t, i) {
			return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), re(function (e) {
			return null == e.getAttribute("disabled")
		}) || le($, function (e, t, i) {
			var n;
			return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
		}), se
	}(f);
	x.find = p, x.expr = p.selectors, x.expr[":"] = x.expr.pseudos, x.unique = p.uniqueSort, x.text = p.getText, x.isXMLDoc = p.isXML, x.contains = p.contains;
	var b = x.expr.match.needsContext,
		w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		k = /^.[^:#\[\.,]*$/;

	function _(e, i, n) {
		if (x.isFunction(i)) return x.grep(e, function (e, t) {
			return !!i.call(e, t, e) !== n
		});
		if (i.nodeType) return x.grep(e, function (e) {
			return e === i !== n
		});
		if ("string" == typeof i) {
			if (k.test(i)) return x.filter(i, e, n);
			i = x.filter(i, e)
		}
		return x.grep(e, function (e) {
			return 0 <= s.call(i, e) !== n
		})
	}
	x.filter = function (e, t, i) {
		var n = t[0];
		return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? x.find.matchesSelector(n, e) ? [n] : [] : x.find.matches(e, x.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, x.fn.extend({
		find: function (e) {
			var t, i = this.length,
				n = [],
				s = this;
			if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
				for (t = 0; t < i; t++)
					if (x.contains(s[t], this)) return !0
			}));
			for (t = 0; t < i; t++) x.find(e, s[t], n);
			return (n = this.pushStack(1 < i ? x.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function (e) {
			return this.pushStack(_(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(_(this, e || [], !0))
		},
		is: function (e) {
			return !!_(this, "string" == typeof e && b.test(e) ? x(e) : e || [], !1).length
		}
	});
	var C, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(x.fn.init = function (e, t) {
		var i, n;
		if (!e) return this;
		if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? void 0 !== C.ready ? C.ready(e) : e(x) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
		if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : T.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || C).find(e) : this.constructor(t).find(e);
		if (i[1]) {
			if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), w.test(i[1]) && x.isPlainObject(t))
				for (i in t) x.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
			return this
		}
		return (n = y.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = y, this.selector = e, this
	}).prototype = x.fn, C = x(y);
	var D = /^(?:parents|prev(?:Until|All))/,
		S = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function P(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	x.extend({
		dir: function (e, t, i) {
			for (var n = [], s = void 0 !== i;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (s && x(e).is(i)) break;
					n.push(e)
				}
			return n
		},
		sibling: function (e, t) {
			for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
			return i
		}
	}), x.fn.extend({
		has: function (e) {
			var t = x(e, this),
				i = t.length;
			return this.filter(function () {
				for (var e = 0; e < i; e++)
					if (x.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			for (var i, n = 0, s = this.length, a = [], o = b.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; n < s; n++)
				for (i = this[n]; i && i !== t; i = i.parentNode)
					if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
						a.push(i);
						break
					}
			return this.pushStack(1 < a.length ? x.unique(a) : a)
		},
		index: function (e) {
			return e ? "string" == typeof e ? s.call(x(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(x.unique(x.merge(this.get(), x(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), x.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function (e, t, i) {
			return x.dir(e, "parentNode", i)
		},
		next: function (e) {
			return P(e, "nextSibling")
		},
		prev: function (e) {
			return P(e, "previousSibling")
		},
		nextAll: function (e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function (e, t, i) {
			return x.dir(e, "nextSibling", i)
		},
		prevUntil: function (e, t, i) {
			return x.dir(e, "previousSibling", i)
		},
		siblings: function (e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return x.sibling(e.firstChild)
		},
		contents: function (e) {
			return e.contentDocument || x.merge([], e.childNodes)
		}
	}, function (n, s) {
		x.fn[n] = function (e, t) {
			var i = x.map(this, s, e);
			return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = x.filter(t, i)), 1 < this.length && (S[n] || x.unique(i), D.test(n) && i.reverse()), this.pushStack(i)
		}
	});
	var A, E = /\S+/g,
		M = {};

	function I() {
		y.removeEventListener("DOMContentLoaded", I, !1), f.removeEventListener("load", I, !1), x.ready()
	}
	x.Callbacks = function (s) {
		var e, i;
		s = "string" == typeof s ? M[s] || (i = M[e = s] = {}, x.each(e.match(E) || [], function (e, t) {
			i[t] = !0
		}), i) : x.extend({}, s);
		var t, n, a, o, r, l, c = [],
			u = !s.once && [],
			h = function (e) {
				for (t = s.memory && e, n = !0, l = o || 0, o = 0, r = c.length, a = !0; c && l < r; l++)
					if (!1 === c[l].apply(e[0], e[1]) && s.stopOnFalse) {
						t = !1;
						break
					}
				a = !1, c && (u ? u.length && h(u.shift()) : t ? c = [] : d.disable())
			},
			d = {
				add: function () {
					if (c) {
						var e = c.length;
						! function n(e) {
							x.each(e, function (e, t) {
								var i = x.type(t);
								"function" === i ? s.unique && d.has(t) || c.push(t) : t && t.length && "string" !== i && n(t)
							})
						}(arguments), a ? r = c.length : t && (o = e, h(t))
					}
					return this
				},
				remove: function () {
					return c && x.each(arguments, function (e, t) {
						for (var i; - 1 < (i = x.inArray(t, c, i));) c.splice(i, 1), a && (i <= r && r--, i <= l && l--)
					}), this
				},
				has: function (e) {
					return e ? -1 < x.inArray(e, c) : !(!c || !c.length)
				},
				empty: function () {
					return c = [], r = 0, this
				},
				disable: function () {
					return c = u = t = void 0, this
				},
				disabled: function () {
					return !c
				},
				lock: function () {
					return u = void 0, t || d.disable(), this
				},
				locked: function () {
					return !u
				},
				fireWith: function (e, t) {
					return !c || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], a ? u.push(t) : h(t)), this
				},
				fire: function () {
					return d.fireWith(this, arguments), this
				},
				fired: function () {
					return !!n
				}
			};
		return d
	}, x.extend({
		Deferred: function (e) {
			var a = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				s = "pending",
				o = {
					state: function () {
						return s
					},
					always: function () {
						return r.done(arguments).fail(arguments), this
					},
					then: function () {
						var s = arguments;
						return x.Deferred(function (n) {
							x.each(a, function (e, t) {
								var i = x.isFunction(s[e]) && s[e];
								r[t[1]](function () {
									var e = i && i.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === o ? n.promise() : this, i ? [e] : arguments)
								})
							}), s = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? x.extend(e, o) : o
					}
				},
				r = {};
			return o.pipe = o.then, x.each(a, function (e, t) {
				var i = t[2],
					n = t[3];
				o[t[1]] = i.add, n && i.add(function () {
					s = n
				}, a[1 ^ e][2].disable, a[2][2].lock), r[t[0]] = function () {
					return r[t[0] + "With"](this === r ? o : this, arguments), this
				}, r[t[0] + "With"] = i.fireWith
			}), o.promise(r), e && e.call(r, r), r
		},
		when: function (e) {
			function t(t, i, n) {
				return function (e) {
					i[t] = this, n[t] = 1 < arguments.length ? u.call(arguments) : e, n === s ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
				}
			}
			var s, i, n, a = 0,
				o = u.call(arguments),
				r = o.length,
				l = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				c = 1 === l ? e : x.Deferred();
			if (1 < r)
				for (s = new Array(r), i = new Array(r), n = new Array(r); a < r; a++) o[a] && x.isFunction(o[a].promise) ? o[a].promise().done(t(a, n, o)).fail(c.reject).progress(t(a, i, s)) : --l;
			return l || c.resolveWith(n, o), c.promise()
		}
	}), x.fn.ready = function (e) {
		return x.ready.promise().done(e), this
	}, x.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function (e) {
			(!0 === e ? --x.readyWait : x.isReady) || ((x.isReady = !0) !== e && 0 < --x.readyWait || (A.resolveWith(y, [x]), x.fn.triggerHandler && (x(y).triggerHandler("ready"), x(y).off("ready"))))
		}
	}), x.ready.promise = function (e) {
		return A || (A = x.Deferred(), "complete" === y.readyState ? setTimeout(x.ready) : (y.addEventListener("DOMContentLoaded", I, !1), f.addEventListener("load", I, !1))), A.promise(e)
	}, x.ready.promise();
	var N = x.access = function (e, t, i, n, s, a, o) {
		var r = 0,
			l = e.length,
			c = null == i;
		if ("object" === x.type(i))
			for (r in s = !0, i) x.access(e, t, r, i[r], !0, a, o);
		else if (void 0 !== n && (s = !0, x.isFunction(n) || (o = !0), c && (t = o ? (t.call(e, n), null) : (c = t, function (e, t, i) {
				return c.call(x(e), i)
			})), t))
			for (; r < l; r++) t(e[r], i, o ? n : n.call(e[r], r, t(e[r], i)));
		return s ? e : c ? t.call(e) : l ? t(e[0], i) : a
	};

	function L() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {}
			}
		}), this.expando = x.expando + L.uid++
	}
	x.acceptData = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, L.uid = 1, L.accepts = x.acceptData, L.prototype = {
		key: function (t) {
			if (!L.accepts(t)) return 0;
			var i = {},
				n = t[this.expando];
			if (!n) {
				n = L.uid++;
				try {
					i[this.expando] = {
						value: n
					}, Object.defineProperties(t, i)
				} catch (e) {
					i[this.expando] = n, x.extend(t, i)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function (e, t, i) {
			var n, s = this.key(e),
				a = this.cache[s];
			if ("string" == typeof t) a[t] = i;
			else if (x.isEmptyObject(a)) x.extend(this.cache[s], t);
			else
				for (n in t) a[n] = t[n];
			return a
		},
		get: function (e, t) {
			var i = this.cache[this.key(e)];
			return void 0 === t ? i : i[t]
		},
		access: function (e, t, i) {
			var n;
			return void 0 === t || t && "string" == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, x.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t)
		},
		remove: function (e, t) {
			var i, n, s, a = this.key(e),
				o = this.cache[a];
			if (void 0 === t) this.cache[a] = {};
			else {
				i = (n = x.isArray(t) ? t.concat(t.map(x.camelCase)) : (s = x.camelCase(t), t in o ? [t, s] : (n = s) in o ? [n] : n.match(E) || [])).length;
				for (; i--;) delete o[n[i]]
			}
		},
		hasData: function (e) {
			return !x.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function (e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var z = new L,
		H = new L,
		$ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function j(e, t, i) {
		var n;
		if (void 0 === i && 1 === e.nodeType)
			if (n = "data-" + t.replace(O, "-$1").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : $.test(i) ? x.parseJSON(i) : i)
				} catch (e) {}
				H.set(e, t, i)
			} else i = void 0;
		return i
	}
	x.extend({
		hasData: function (e) {
			return H.hasData(e) || z.hasData(e)
		},
		data: function (e, t, i) {
			return H.access(e, t, i)
		},
		removeData: function (e, t) {
			H.remove(e, t)
		},
		_data: function (e, t, i) {
			return z.access(e, t, i)
		},
		_removeData: function (e, t) {
			z.remove(e, t)
		}
	}), x.fn.extend({
		data: function (n, e) {
			var t, i, s, a = this[0],
				o = a && a.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function () {
				H.set(this, n)
			}) : N(this, function (t) {
				var e, i = x.camelCase(n);
				if (a && void 0 === t) {
					if (void 0 !== (e = H.get(a, n))) return e;
					if (void 0 !== (e = H.get(a, i))) return e;
					if (void 0 !== (e = j(a, i, void 0))) return e
				} else this.each(function () {
					var e = H.get(this, i);
					H.set(this, i, t), -1 !== n.indexOf("-") && void 0 !== e && H.set(this, n, t)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (s = H.get(a), 1 === a.nodeType && !z.get(a, "hasDataAttrs"))) {
				for (t = o.length; t--;) o[t] && (0 === (i = o[t].name).indexOf("data-") && (i = x.camelCase(i.slice(5)), j(a, i, s[i])));
				z.set(a, "hasDataAttrs", !0)
			}
			return s
		},
		removeData: function (e) {
			return this.each(function () {
				H.remove(this, e)
			})
		}
	}), x.extend({
		queue: function (e, t, i) {
			var n;
			return e ? (t = (t || "fx") + "queue", n = z.get(e, t), i && (!n || x.isArray(i) ? n = z.access(e, t, x.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var i = x.queue(e, t),
				n = i.length,
				s = i.shift(),
				a = x._queueHooks(e, t);
			"inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function () {
				x.dequeue(e, t)
			}, a)), !n && a && a.empty.fire()
		},
		_queueHooks: function (e, t) {
			var i = t + "queueHooks";
			return z.get(e, i) || z.access(e, i, {
				empty: x.Callbacks("once memory").add(function () {
					z.remove(e, [t + "queue", i])
				})
			})
		}
	}), x.fn.extend({
		queue: function (t, i) {
			var e = 2;
			return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? x.queue(this[0], t) : void 0 === i ? this : this.each(function () {
				var e = x.queue(this, t, i);
				x._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				x.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			function i() {
				--s || a.resolveWith(o, [o])
			}
			var n, s = 1,
				a = x.Deferred(),
				o = this,
				r = this.length;
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = z.get(o[r], e + "queueHooks")) && n.empty && (s++, n.empty.add(i));
			return i(), a.promise(t)
		}
	});

	function W(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}
	var F, R, q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		B = ["Top", "Right", "Bottom", "Left"],
		U = /^(?:checkbox|radio)$/i;
	F = y.createDocumentFragment().appendChild(y.createElement("div")), (R = y.createElement("input")).setAttribute("type", "radio"), R.setAttribute("checked", "checked"), R.setAttribute("name", "t"), F.appendChild(R), v.checkClone = F.cloneNode(!0).cloneNode(!0).lastChild.checked, F.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!F.cloneNode(!0).lastChild.defaultValue;
	var Y = "undefined";
	v.focusinBubbles = "onfocusin" in f;
	var V = /^key/,
		K = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		G = /^([^.]*)(?:\.(.+)|)$/;

	function Q() {
		return !0
	}

	function J() {
		return !1
	}

	function Z() {
		try {
			return y.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function (t, e, i, n, s) {
			var a, o, r, l, c, u, h, d, p, f, m, g = z.get(t);
			if (g)
				for (i.handler && (i = (a = i).handler, s = a.selector), i.guid || (i.guid = x.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
						return typeof x != Y && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
					}), c = (e = (e || "").match(E) || [""]).length; c--;) p = m = (r = G.exec(e[c]) || [])[1], f = (r[2] || "").split(".").sort(), p && (h = x.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = x.event.special[p] || {}, u = x.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: s,
					needsContext: s && x.expr.match.needsContext.test(s),
					namespace: f.join(".")
				}, a), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, o) || t.addEventListener && t.addEventListener(p, o, !1)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), x.event.global[p] = !0)
		},
		remove: function (e, t, i, n, s) {
			var a, o, r, l, c, u, h, d, p, f, m, g = z.hasData(e) && z.get(e);
			if (g && (l = g.events)) {
				for (c = (t = (t || "").match(E) || [""]).length; c--;)
					if (p = m = (r = G.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
						for (h = x.event.special[p] || {}, d = l[p = (n ? h.delegateType : h.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length; a--;) u = d[a], !s && m !== u.origType || i && i.guid !== u.guid || r && !r.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(a, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
						o && !d.length && (h.teardown && !1 !== h.teardown.call(e, f, g.handle) || x.removeEvent(e, p, g.handle), delete l[p])
					} else
						for (p in l) x.event.remove(e, p + t[c], i, n, !0);
				x.isEmptyObject(l) && (delete g.handle, z.remove(e, "events"))
			}
		},
		trigger: function (e, t, i, n) {
			var s, a, o, r, l, c, u, h = [i || y],
				d = g.call(e, "type") ? e.type : e,
				p = g.call(e, "namespace") ? e.namespace.split(".") : [];
			if (a = o = i = i || y, 3 !== i.nodeType && 8 !== i.nodeType && !X.test(d + x.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (e = e[x.expando] ? e : new x.Event(d, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : x.makeArray(t, [e]), u = x.event.special[d] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
				if (!n && !u.noBubble && !x.isWindow(i)) {
					for (r = u.delegateType || d, X.test(r + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), o = a;
					o === (i.ownerDocument || y) && h.push(o.defaultView || o.parentWindow || f)
				}
				for (s = 0;
					(a = h[s++]) && !e.isPropagationStopped();) e.type = 1 < s ? r : u.bindType || d, (c = (z.get(a, "events") || {})[e.type] && z.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && x.acceptData(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
				return e.type = d, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !x.acceptData(i) || l && x.isFunction(i[d]) && !x.isWindow(i) && ((o = i[l]) && (i[l] = null), i[x.event.triggered = d](), x.event.triggered = void 0, o && (i[l] = o)), e.result
			}
		},
		dispatch: function (e) {
			e = x.event.fix(e);
			var t, i, n, s, a, o = [],
				r = u.call(arguments),
				l = (z.get(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if ((r[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
				for (o = x.event.handlers.call(this, e, l), t = 0;
					(s = o[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = s.elem, i = 0;
						(a = s.handlers[i++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (n = ((x.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, r)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, t) {
			var i, n, s, a, o = [],
				r = t.delegateCount,
				l = e.target;
			if (r && l.nodeType && (!e.button || "click" !== e.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== e.type) {
						for (n = [], i = 0; i < r; i++) void 0 === n[s = (a = t[i]).selector + " "] && (n[s] = a.needsContext ? 0 <= x(s, this).index(l) : x.find(s, this, null, [l]).length), n[s] && n.push(a);
						n.length && o.push({
							elem: l,
							handlers: n
						})
					}
			return r < t.length && o.push({
				elem: this,
				handlers: t.slice(r)
			}), o
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, t) {
				var i, n, s, a = t.button;
				return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || y).documentElement, s = i.body, e.pageX = t.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		fix: function (e) {
			if (e[x.expando]) return e;
			var t, i, n, s = e.type,
				a = e,
				o = this.fixHooks[s];
			for (o || (this.fixHooks[s] = o = K.test(s) ? this.mouseHooks : V.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, e = new x.Event(a), t = n.length; t--;) e[i = n[t]] = a[i];
			return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					return this !== Z() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === Z() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function (e, t, i, n) {
			var s = x.extend(new x.Event, i, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? x.event.trigger(s, null, t) : x.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
		}
	}, x.removeEvent = function (e, t, i) {
		e.removeEventListener && e.removeEventListener(t, i, !1)
	}, x.Event = function (e, t) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Q : J) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), void(this[x.expando] = !0)) : new x.Event(e, t)
	}, x.Event.prototype = {
		isDefaultPrevented: J,
		isPropagationStopped: J,
		isImmediatePropagationStopped: J,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = Q, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = Q, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Q, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, s) {
		x.event.special[e] = {
			delegateType: s,
			bindType: s,
			handle: function (e) {
				var t, i = e.relatedTarget,
					n = e.handleObj;
				return i && (i === this || x.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = s), t
			}
		}
	}), v.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function (i, n) {
		function s(e) {
			x.event.simulate(n, e.target, x.event.fix(e), !0)
		}
		x.event.special[n] = {
			setup: function () {
				var e = this.ownerDocument || this,
					t = z.access(e, n);
				t || e.addEventListener(i, s, !0), z.access(e, n, (t || 0) + 1)
			},
			teardown: function () {
				var e = this.ownerDocument || this,
					t = z.access(e, n) - 1;
				t ? z.access(e, n, t) : (e.removeEventListener(i, s, !0), z.remove(e, n))
			}
		}
	}), x.fn.extend({
		on: function (e, t, i, n, s) {
			var a, o;
			if ("object" == typeof e) {
				for (o in "string" != typeof t && (i = i || t, t = void 0), e) this.on(o, t, i, e[o], s);
				return this
			}
			if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n) n = J;
			else if (!n) return this;
			return 1 === s && (a = n, (n = function (e) {
				return x().off(e), a.apply(this, arguments)
			}).guid = a.guid || (a.guid = x.guid++)), this.each(function () {
				x.event.add(this, e, n, i, t)
			})
		},
		one: function (e, t, i, n) {
			return this.on(e, t, i, n, 1)
		},
		off: function (e, t, i) {
			var n, s;
			if (e && e.preventDefault && e.handleObj) return n = e.handleObj, x(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = J), this.each(function () {
				x.event.remove(this, e, i, t)
			});
			for (s in e) this.off(s, t, e[s]);
			return this
		},
		trigger: function (e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var i = this[0];
			return i ? x.event.trigger(e, t, i, !0) : void 0
		}
	});
	var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		te = /<([\w:]+)/,
		ie = /<|&#?\w+;/,
		ne = /<(?:script|style|link)/i,
		se = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ae = /^$|\/(?:java|ecma)script/i,
		oe = /^true\/(.*)/,
		re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		le = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ce(e, t) {
		return x.nodeName(e, "table") && x.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function ue(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function he(e) {
		var t = oe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function de(e, t) {
		for (var i = 0, n = e.length; i < n; i++) z.set(e[i], "globalEval", !t || z.get(t[i], "globalEval"))
	}

	function pe(e, t) {
		var i, n, s, a, o, r, l, c;
		if (1 === t.nodeType) {
			if (z.hasData(e) && (a = z.access(e), o = z.set(t, a), c = a.events))
				for (s in delete o.handle, o.events = {}, c)
					for (i = 0, n = c[s].length; i < n; i++) x.event.add(t, s, c[s][i]);
			H.hasData(e) && (r = H.access(e), l = x.extend({}, r), H.set(t, l))
		}
	}

	function fe(e, t) {
		var i = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && x.nodeName(e, t) ? x.merge([e], i) : i
	}
	le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, x.extend({
		clone: function (e, t, i) {
			var n, s, a, o, r, l, c, u = e.cloneNode(!0),
				h = x.contains(e.ownerDocument, e);
			if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (o = fe(u), n = 0, s = (a = fe(e)).length; n < s; n++) r = a[n], l = o[n], "input" === (c = l.nodeName.toLowerCase()) && U.test(r.type) ? l.checked = r.checked : "input" !== c && "textarea" !== c || (l.defaultValue = r.defaultValue);
			if (t)
				if (i)
					for (a = a || fe(e), o = o || fe(u), n = 0, s = a.length; n < s; n++) pe(a[n], o[n]);
				else pe(e, u);
			return 0 < (o = fe(u, "script")).length && de(o, !h && fe(e, "script")), u
		},
		buildFragment: function (e, t, i, n) {
			for (var s, a, o, r, l, c, u = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
				if ((s = e[d]) || 0 === s)
					if ("object" === x.type(s)) x.merge(h, s.nodeType ? [s] : s);
					else if (ie.test(s)) {
				for (a = a || u.appendChild(t.createElement("div")), o = (te.exec(s) || ["", ""])[1].toLowerCase(), r = le[o] || le._default, a.innerHTML = r[1] + s.replace(ee, "<$1></$2>") + r[2], c = r[0]; c--;) a = a.lastChild;
				x.merge(h, a.childNodes), (a = u.firstChild).textContent = ""
			} else h.push(t.createTextNode(s));
			for (u.textContent = "", d = 0; s = h[d++];)
				if ((!n || -1 === x.inArray(s, n)) && (l = x.contains(s.ownerDocument, s), a = fe(u.appendChild(s), "script"), l && de(a), i))
					for (c = 0; s = a[c++];) ae.test(s.type || "") && i.push(s);
			return u
		},
		cleanData: function (e) {
			for (var t, i, n, s, a = x.event.special, o = 0; void 0 !== (i = e[o]); o++) {
				if (x.acceptData(i) && ((s = i[z.expando]) && (t = z.cache[s]))) {
					if (t.events)
						for (n in t.events) a[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
					z.cache[s] && delete z.cache[s]
				}
				delete H.cache[i[H.expando]]
			}
		}
	}), x.fn.extend({
		text: function (e) {
			return N(this, function (e) {
				return void 0 === e ? x.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ce(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = ce(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function (e, t) {
			for (var i, n = e ? x.filter(e, this) : this, s = 0; null != (i = n[s]); s++) t || 1 !== i.nodeType || x.cleanData(fe(i)), i.parentNode && (t && x.contains(i.ownerDocument, i) && de(fe(i, "script")), i.parentNode.removeChild(i));
			return this
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(fe(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return x.clone(this, e, t)
			})
		},
		html: function (e) {
			return N(this, function (e) {
				var t = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !ne.test(e) && !le[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(ee, "<$1></$2>");
					try {
						for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (x.cleanData(fe(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var t = arguments[0];
			return this.domManip(arguments, function (e) {
				t = this.parentNode, x.cleanData(fe(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function (e) {
			return this.remove(e, !0)
		},
		domManip: function (i, n) {
			i = m.apply([], i);
			var e, t, s, a, o, r, l = 0,
				c = this.length,
				u = this,
				h = c - 1,
				d = i[0],
				p = x.isFunction(d);
			if (p || 1 < c && "string" == typeof d && !v.checkClone && se.test(d)) return this.each(function (e) {
				var t = u.eq(e);
				p && (i[0] = d.call(this, e, t.html())), t.domManip(i, n)
			});
			if (c && (t = (e = x.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
				for (a = (s = x.map(fe(e, "script"), ue)).length; l < c; l++) o = e, l !== h && (o = x.clone(o, !0, !0), a && x.merge(s, fe(o, "script"))), n.call(this[l], o, l);
				if (a)
					for (r = s[s.length - 1].ownerDocument, x.map(s, he), l = 0; l < a; l++) o = s[l], ae.test(o.type || "") && !z.access(o, "globalEval") && x.contains(r, o) && (o.src ? x._evalUrl && x._evalUrl(o.src) : x.globalEval(o.textContent.replace(re, "")))
			}
			return this
		}
	}), x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, o) {
		x.fn[e] = function (e) {
			for (var t, i = [], n = x(e), s = n.length - 1, a = 0; a <= s; a++) t = a === s ? this : this.clone(!0), x(n[a])[o](t), r.apply(i, t.get());
			return this.pushStack(i)
		}
	});
	var me, ge = {};

	function ve(e, t) {
		var i, n = x(t.createElement(e)).appendTo(t.body),
			s = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display : x.css(n[0], "display");
		return n.detach(), s
	}

	function ye(e) {
		var t = y,
			i = ge[e];
		return i || ("none" !== (i = ve(e, t)) && i || ((t = (me = (me || x("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = ve(e, t), me.detach()), ge[e] = i), i
	}
	var be = /^margin/,
		we = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
		ke = function (e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : f.getComputedStyle(e, null)
		};

	function _e(e, t, i) {
		var n, s, a, o, r = e.style;
		return (i = i || ke(e)) && (o = i.getPropertyValue(t) || i[t]), i && ("" !== o || x.contains(e.ownerDocument, e) || (o = x.style(e, t)), we.test(o) && be.test(t) && (n = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = i.width, r.width = n, r.minWidth = s, r.maxWidth = a)), void 0 !== o ? o + "" : o
	}

	function xe(e, t) {
		return {
			get: function () {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}! function () {
		var t, i, n = y.documentElement,
			s = y.createElement("div"),
			a = y.createElement("div");
		if (a.style) {
			function e() {
				a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", n.appendChild(s);
				var e = f.getComputedStyle(a, null);
				t = "1%" !== e.top, i = "4px" === e.width, n.removeChild(s)
			}
			a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(a), f.getComputedStyle && x.extend(v, {
				pixelPosition: function () {
					return e(), t
				},
				boxSizingReliable: function () {
					return null == i && e(), i
				},
				reliableMarginRight: function () {
					var e, t = a.appendChild(y.createElement("div"));
					return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", n.appendChild(s), e = !parseFloat(f.getComputedStyle(t, null).marginRight), n.removeChild(s), a.removeChild(t), e
				}
			})
		}
	}(), x.swap = function (e, t, i, n) {
		var s, a, o = {};
		for (a in t) o[a] = e.style[a], e.style[a] = t[a];
		for (a in s = i.apply(e, n || []), t) e.style[a] = o[a];
		return s
	};
	var Ce = /^(none|table(?!-c[ea]).+)/,
		Te = new RegExp("^(" + q + ")(.*)$", "i"),
		De = new RegExp("^([+-])=(" + q + ")", "i"),
		Se = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Pe = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ae = ["Webkit", "O", "Moz", "ms"];

	function Ee(e, t) {
		if (t in e) return t;
		for (var i = t[0].toUpperCase() + t.slice(1), n = t, s = Ae.length; s--;)
			if ((t = Ae[s] + i) in e) return t;
		return n
	}

	function Me(e, t, i) {
		var n = Te.exec(t);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
	}

	function Ie(e, t, i, n, s) {
		for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === i && (o += x.css(e, i + B[a], !0, s)), n ? ("content" === i && (o -= x.css(e, "padding" + B[a], !0, s)), "margin" !== i && (o -= x.css(e, "border" + B[a] + "Width", !0, s))) : (o += x.css(e, "padding" + B[a], !0, s), "padding" !== i && (o += x.css(e, "border" + B[a] + "Width", !0, s)));
		return o
	}

	function Ne(e, t, i) {
		var n = !0,
			s = "width" === t ? e.offsetWidth : e.offsetHeight,
			a = ke(e),
			o = "border-box" === x.css(e, "boxSizing", !1, a);
		if (s <= 0 || null == s) {
			if (((s = _e(e, t, a)) < 0 || null == s) && (s = e.style[t]), we.test(s)) return s;
			n = o && (v.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
		}
		return s + Ie(e, t, i || (o ? "border" : "content"), n, a) + "px"
	}

	function Le(e, t) {
		for (var i, n, s, a = [], o = 0, r = e.length; o < r; o++)(n = e[o]).style && (a[o] = z.get(n, "olddisplay"), i = n.style.display, t ? (a[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && W(n) && (a[o] = z.access(n, "olddisplay", ye(n.nodeName)))) : (s = W(n), "none" === i && s || z.set(n, "olddisplay", s ? i : x.css(n, "display"))));
		for (o = 0; o < r; o++)(n = e[o]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? a[o] || "" : "none"));
		return e
	}

	function ze(e, t, i, n, s) {
		return new ze.prototype.init(e, t, i, n, s)
	}
	x.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var i = _e(e, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function (e, t, i, n) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var s, a, o, r = x.camelCase(t),
					l = e.style;
				return t = x.cssProps[r] || (x.cssProps[r] = Ee(l, r)), o = x.cssHooks[t] || x.cssHooks[r], void 0 === i ? o && "get" in o && void 0 !== (s = o.get(e, !1, n)) ? s : l[t] : ("string" === (a = typeof i) && (s = De.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(x.css(e, t)), a = "number"), void(null != i && i == i && ("number" !== a || x.cssNumber[r] || (i += "px"), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n)) || (l[t] = i))))
			}
		},
		css: function (e, t, i, n) {
			var s, a, o, r = x.camelCase(t);
			return t = x.cssProps[r] || (x.cssProps[r] = Ee(e.style, r)), (o = x.cssHooks[t] || x.cssHooks[r]) && "get" in o && (s = o.get(e, !0, i)), void 0 === s && (s = _e(e, t, n)), "normal" === s && t in Pe && (s = Pe[t]), "" === i || i ? (a = parseFloat(s), !0 === i || x.isNumeric(a) ? a || 0 : s) : s
		}
	}), x.each(["height", "width"], function (e, s) {
		x.cssHooks[s] = {
			get: function (e, t, i) {
				return t ? Ce.test(x.css(e, "display")) && 0 === e.offsetWidth ? x.swap(e, Se, function () {
					return Ne(e, s, i)
				}) : Ne(e, s, i) : void 0
			},
			set: function (e, t, i) {
				var n = i && ke(e);
				return Me(0, t, i ? Ie(e, s, i, "border-box" === x.css(e, "boxSizing", !1, n), n) : 0)
			}
		}
	}), x.cssHooks.marginRight = xe(v.reliableMarginRight, function (e, t) {
		return t ? x.swap(e, {
			display: "inline-block"
		}, _e, [e, "marginRight"]) : void 0
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (s, a) {
		x.cssHooks[s + a] = {
			expand: function (e) {
				for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[s + B[t] + a] = n[t] || n[t - 2] || n[0];
				return i
			}
		}, be.test(s) || (x.cssHooks[s + a].set = Me)
	}), x.fn.extend({
		css: function (e, t) {
			return N(this, function (e, t, i) {
				var n, s, a = {},
					o = 0;
				if (x.isArray(t)) {
					for (n = ke(e), s = t.length; o < s; o++) a[t[o]] = x.css(e, t[o], !1, n);
					return a
				}
				return void 0 !== i ? x.style(e, t, i) : x.css(e, t)
			}, e, t, 1 < arguments.length)
		},
		show: function () {
			return Le(this, !0)
		},
		hide: function () {
			return Le(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				W(this) ? x(this).show() : x(this).hide()
			})
		}
	}), ((x.Tween = ze).prototype = {
		constructor: ze,
		init: function (e, t, i, n, s, a) {
			this.elem = e, this.prop = i, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (x.cssNumber[i] ? "" : "px")
		},
		cur: function () {
			var e = ze.propHooks[this.prop];
			return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
		},
		run: function (e) {
			var t, i = ze.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ze.propHooks._default.set(this), this
		}
	}).init.prototype = ze.prototype, (ze.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
			},
			set: function (e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}).scrollTop = ze.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.fx = ze.prototype.init, x.fx.step = {};
	var He, $e, Oe, je, We, Fe = /^(?:toggle|show|hide)$/,
		Re = new RegExp("^(?:([+-])=|)(" + q + ")([a-z%]*)$", "i"),
		qe = /queueHooks$/,
		Be = [function (t, e, i) {
			var n, s, a, o, r, l, c, u = this,
				h = {},
				d = t.style,
				p = t.nodeType && W(t),
				f = z.get(t, "fxshow");
			for (n in i.queue || (null == (r = x._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function () {
					r.unqueued || l()
				}), r.unqueued++, u.always(function () {
					u.always(function () {
						r.unqueued--, x.queue(t, "fx").length || r.empty.fire()
					})
				})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = x.css(t, "display"), "inline" === ("none" === c ? z.get(t, "olddisplay") || ye(t.nodeName) : c) && "none" === x.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", u.always(function () {
					d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
				})), e)
				if (s = e[n], Fe.exec(s)) {
					if (delete e[n], a = a || "toggle" === s, s === (p ? "hide" : "show")) {
						if ("show" !== s || !f || void 0 === f[n]) continue;
						p = !0
					}
					h[n] = f && f[n] || x.style(t, n)
				} else c = void 0;
			if (x.isEmptyObject(h)) "inline" === ("none" === c ? ye(t.nodeName) : c) && (d.display = c);
			else
				for (n in f ? "hidden" in f && (p = f.hidden) : f = z.access(t, "fxshow", {}), a && (f.hidden = !p), p ? x(t).show() : u.done(function () {
						x(t).hide()
					}), u.done(function () {
						var e;
						for (e in z.remove(t, "fxshow"), h) x.style(t, e, h[e])
					}), h) o = Ke(p ? f[n] : 0, n, u), n in f || (f[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
		}],
		Ue = {
			"*": [function (e, t) {
				var i = this.createTween(e, t),
					n = i.cur(),
					s = Re.exec(t),
					a = s && s[3] || (x.cssNumber[e] ? "" : "px"),
					o = (x.cssNumber[e] || "px" !== a && +n) && Re.exec(x.css(i.elem, e)),
					r = 1,
					l = 20;
				if (o && o[3] !== a)
					for (a = a || o[3], s = s || [], o = +n || 1; o /= r = r || ".5", x.style(i.elem, e, o + a), r !== (r = i.cur() / n) && 1 !== r && --l;);
				return s && (o = i.start = +o || +n || 0, i.unit = a, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), i
			}]
		};

	function Ye() {
		return setTimeout(function () {
			He = void 0
		}), He = x.now()
	}

	function Ve(e, t) {
		var i, n = 0,
			s = {
				height: e
			};
		for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = B[n])] = s["padding" + i] = e;
		return t && (s.opacity = s.width = e), s
	}

	function Ke(e, t, i) {
		for (var n, s = (Ue[t] || []).concat(Ue["*"]), a = 0, o = s.length; a < o; a++)
			if (n = s[a].call(i, t, e)) return n
	}

	function Xe(a, e, t) {
		var i, o, n = 0,
			s = Be.length,
			r = x.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (o) return !1;
				for (var e = He || Ye(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, s = c.tweens.length; n < s; n++) c.tweens[n].run(i);
				return r.notifyWith(a, [c, i, t]), i < 1 && s ? t : (r.resolveWith(a, [c]), !1)
			},
			c = r.promise({
				elem: a,
				props: x.extend({}, e),
				opts: x.extend(!0, {
					specialEasing: {}
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: He || Ye(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var i = x.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function (e) {
					var t = 0,
						i = e ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; t < i; t++) c.tweens[t].run(1);
					return e ? r.resolveWith(a, [c, e]) : r.rejectWith(a, [c, e]), this
				}
			}),
			u = c.props;
		for (function (e, t) {
				var i, n, s, a, o;
				for (i in e)
					if (s = t[n = x.camelCase(i)], a = e[i], x.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (o = x.cssHooks[n]) && "expand" in o)
						for (i in a = o.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = s);
					else t[n] = s
			}(u, c.opts.specialEasing); n < s; n++)
			if (i = Be[n].call(c, a, u, c.opts)) return i;
		return x.map(u, Ke, c), x.isFunction(c.opts.start) && c.opts.start.call(a, c), x.fx.timer(x.extend(l, {
			elem: a,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	x.Animation = x.extend(Xe, {
		tweener: function (e, t) {
			for (var i, n = 0, s = (e = x.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; n < s; n++) i = e[n], Ue[i] = Ue[i] || [], Ue[i].unshift(t)
		},
		prefilter: function (e, t) {
			t ? Be.unshift(e) : Be.push(e)
		}
	}), x.speed = function (e, t, i) {
		var n = e && "object" == typeof e ? x.extend({}, e) : {
			complete: i || !i && t || x.isFunction(e) && e,
			duration: e,
			easing: i && t || t && !x.isFunction(t) && t
		};
		return n.duration = x.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in x.fx.speeds ? x.fx.speeds[n.duration] : x.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
			x.isFunction(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue)
		}, n
	}, x.fn.extend({
		fadeTo: function (e, t, i, n) {
			return this.filter(W).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, i, n)
		},
		animate: function (t, e, i, n) {
			function s() {
				var e = Xe(this, x.extend({}, t), o);
				(a || z.get(this, "finish")) && e.stop(!0)
			}
			var a = x.isEmptyObject(t),
				o = x.speed(e, i, n);
			return s.finish = s, a || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function (s, e, a) {
			function o(e) {
				var t = e.stop;
				delete e.stop, t(a)
			}
			return "string" != typeof s && (a = e, e = s, s = void 0), e && !1 !== s && this.queue(s || "fx", []), this.each(function () {
				var e = !0,
					t = null != s && s + "queueHooks",
					i = x.timers,
					n = z.get(this);
				if (t) n[t] && n[t].stop && o(n[t]);
				else
					for (t in n) n[t] && n[t].stop && qe.test(t) && o(n[t]);
				for (t = i.length; t--;) i[t].elem !== this || null != s && i[t].queue !== s || (i[t].anim.stop(a), e = !1, i.splice(t, 1));
				!e && a || x.dequeue(this, s)
			})
		},
		finish: function (o) {
			return !1 !== o && (o = o || "fx"), this.each(function () {
				var e, t = z.get(this),
					i = t[o + "queue"],
					n = t[o + "queueHooks"],
					s = x.timers,
					a = i ? i.length : 0;
				for (t.finish = !0, x.queue(this, o, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === o && (s[e].anim.stop(!0), s.splice(e, 1));
				for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
				delete t.finish
			})
		}
	}), x.each(["toggle", "show", "hide"], function (e, n) {
		var s = x.fn[n];
		x.fn[n] = function (e, t, i) {
			return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(Ve(n, !0), e, t, i)
		}
	}), x.each({
		slideDown: Ve("show"),
		slideUp: Ve("hide"),
		slideToggle: Ve("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, n) {
		x.fn[e] = function (e, t, i) {
			return this.animate(n, e, t, i)
		}
	}), x.timers = [], x.fx.tick = function () {
		var e, t = 0,
			i = x.timers;
		for (He = x.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
		i.length || x.fx.stop(), He = void 0
	}, x.fx.timer = function (e) {
		x.timers.push(e), e() ? x.fx.start() : x.timers.pop()
	}, x.fx.interval = 13, x.fx.start = function () {
		$e = $e || setInterval(x.fx.tick, x.fx.interval)
	}, x.fx.stop = function () {
		clearInterval($e), $e = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fn.delay = function (n, e) {
		return n = x.fx && x.fx.speeds[n] || n, e = e || "fx", this.queue(e, function (e, t) {
			var i = setTimeout(e, n);
			t.stop = function () {
				clearTimeout(i)
			}
		})
	}, Oe = y.createElement("input"), je = y.createElement("select"), We = je.appendChild(y.createElement("option")), Oe.type = "checkbox", v.checkOn = "" !== Oe.value, v.optSelected = We.selected, je.disabled = !0, v.optDisabled = !We.disabled, (Oe = y.createElement("input")).value = "t", Oe.type = "radio", v.radioValue = "t" === Oe.value;
	var Ge, Qe = x.expr.attrHandle;
	x.fn.extend({
		attr: function (e, t) {
			return N(this, x.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				x.removeAttr(this, e)
			})
		}
	}), x.extend({
		attr: function (e, t, i) {
			var n, s, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute == Y ? x.prop(e, t, i) : (1 === a && x.isXMLDoc(e) || (t = t.toLowerCase(), n = x.attrHooks[t] || (x.expr.match.bool.test(t) ? Ge : void 0)), void 0 === i ? n && "get" in n && null !== (s = n.get(e, t)) ? s : null == (s = x.find.attr(e, t)) ? void 0 : s : null !== i ? n && "set" in n && void 0 !== (s = n.set(e, i, t)) ? s : (e.setAttribute(t, i + ""), i) : void x.removeAttr(e, t))
		},
		removeAttr: function (e, t) {
			var i, n, s = 0,
				a = t && t.match(E);
			if (a && 1 === e.nodeType)
				for (; i = a[s++];) n = x.propFix[i] || i, x.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!v.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var i = e.value;
						return e.setAttribute("type", t), i && (e.value = i), t
					}
				}
			}
		}
	}), Ge = {
		set: function (e, t, i) {
			return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i), i
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var a = Qe[t] || x.find.attr;
		Qe[t] = function (e, t, i) {
			var n, s;
			return i || (s = Qe[t], Qe[t] = n, n = null != a(e, t, i) ? t.toLowerCase() : null, Qe[t] = s), n
		}
	});
	var Je = /^(?:input|select|textarea|button)$/i;
	x.fn.extend({
		prop: function (e, t) {
			return N(this, x.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[x.propFix[e] || e]
			})
		}
	}), x.extend({
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function (e, t, i) {
			var n, s, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !x.isXMLDoc(e)) && (t = x.propFix[t] || t, s = x.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					return e.hasAttribute("tabindex") || Je.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), v.optSelected || (x.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this
	});
	var Ze = /[\t\r\n\f]/g;
	x.fn.extend({
		addClass: function (t) {
			var e, i, n, s, a, o, r = "string" == typeof t && t,
				l = 0,
				c = this.length;
			if (x.isFunction(t)) return this.each(function (e) {
				x(this).addClass(t.call(this, e, this.className))
			});
			if (r)
				for (e = (t || "").match(E) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Ze, " ") : " ")) {
						for (a = 0; s = e[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
						o = x.trim(n), i.className !== o && (i.className = o)
					}
			return this
		},
		removeClass: function (t) {
			var e, i, n, s, a, o, r = 0 === arguments.length || "string" == typeof t && t,
				l = 0,
				c = this.length;
			if (x.isFunction(t)) return this.each(function (e) {
				x(this).removeClass(t.call(this, e, this.className))
			});
			if (r)
				for (e = (t || "").match(E) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Ze, " ") : "")) {
						for (a = 0; s = e[a++];)
							for (; 0 <= n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
						o = t ? x.trim(n) : "", i.className !== o && (i.className = o)
					}
			return this
		},
		toggleClass: function (s, t) {
			var a = typeof s;
			return "boolean" == typeof t && "string" == a ? t ? this.addClass(s) : this.removeClass(s) : this.each(x.isFunction(s) ? function (e) {
				x(this).toggleClass(s.call(this, e, this.className, t), t)
			} : function () {
				if ("string" == a)
					for (var e, t = 0, i = x(this), n = s.match(E) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
				else a != Y && "boolean" != a || (this.className && z.set(this, "__className__", this.className), this.className = this.className || !1 === s ? "" : z.get(this, "__className__") || "")
			})
		},
		hasClass: function (e) {
			for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
				if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(Ze, " ").indexOf(t)) return !0;
			return !1
		}
	});
	var et = /\r/g;
	x.fn.extend({
		val: function (i) {
			var n, e, s, t = this[0];
			return arguments.length ? (s = x.isFunction(i), this.each(function (e) {
				var t;
				1 === this.nodeType && (null == (t = s ? i.call(this, e, x(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : x.isArray(t) && (t = x.map(t, function (e) {
					return null == e ? "" : e + ""
				})), (n = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
			})) : t ? (n = x.valHooks[t.type] || x.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(et, "") : null == e ? "" : e : void 0
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : x.trim(x.text(e))
				}
			},
			select: {
				get: function (e) {
					for (var t, i, n = e.options, s = e.selectedIndex, a = "select-one" === e.type || s < 0, o = a ? null : [], r = a ? s + 1 : n.length, l = s < 0 ? r : a ? s : 0; l < r; l++)
						if (!(!(i = n[l]).selected && l !== s || (v.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && x.nodeName(i.parentNode, "optgroup"))) {
							if (t = x(i).val(), a) return t;
							o.push(t)
						}
					return o
				},
				set: function (e, t) {
					for (var i, n, s = e.options, a = x.makeArray(t), o = s.length; o--;)((n = s[o]).selected = 0 <= x.inArray(n.value, a)) && (i = !0);
					return i || (e.selectedIndex = -1), a
				}
			}
		}
	}), x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = {
			set: function (e, t) {
				return x.isArray(t) ? e.checked = 0 <= x.inArray(x(e).val(), t) : void 0
			}
		}, v.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, i) {
		x.fn[i] = function (e, t) {
			return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
		}
	}), x.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function (e, t, i) {
			return this.on(e, null, t, i)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, i, n) {
			return this.on(t, e, i, n)
		},
		undelegate: function (e, t, i) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
		}
	});
	var tt = x.now(),
		it = /\?/;
	x.parseJSON = function (e) {
		return JSON.parse(e + "")
	}, x.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
	};
	var nt = /#.*$/,
		st = /([?&])_=[^&]*/,
		at = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ot = /^(?:GET|HEAD)$/,
		rt = /^\/\//,
		lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		ct = {},
		ut = {},
		ht = "*/".concat("*"),
		dt = f.location.href,
		pt = lt.exec(dt.toLowerCase()) || [];

	function ft(a) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");
			var i, n = 0,
				s = e.toLowerCase().match(E) || [];
			if (x.isFunction(t))
				for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
		}
	}

	function mt(t, s, a, o) {
		var r = {},
			l = t === ut;

		function c(e) {
			var n;
			return r[e] = !0, x.each(t[e] || [], function (e, t) {
				var i = t(s, a, o);
				return "string" != typeof i || l || r[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), c(i), !1)
			}), n
		}
		return c(s.dataTypes[0]) || !r["*"] && c("*")
	}

	function gt(e, t) {
		var i, n, s = x.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((s[i] ? e : n = n || {})[i] = t[i]);
		return n && x.extend(!0, e, n), e
	}
	x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: dt,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": ht,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? gt(gt(e, x.ajaxSettings), t) : gt(x.ajaxSettings, e)
		},
		ajaxPrefilter: ft(ct),
		ajaxTransport: ft(ut),
		ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var u, h, d, i, p, n, f, s, m = x.ajaxSetup({}, t),
				g = m.context || m,
				v = m.context && (g.nodeType || g.jquery) ? x(g) : x.event,
				y = x.Deferred(),
				b = x.Callbacks("once memory"),
				w = m.statusCode || {},
				a = {},
				o = {},
				k = 0,
				r = "canceled",
				_ = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === k) {
							if (!i)
								for (i = {}; t = at.exec(d);) i[t[1].toLowerCase()] = t[2];
							t = i[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === k ? d : null
					},
					setRequestHeader: function (e, t) {
						var i = e.toLowerCase();
						return k || (e = o[i] = o[i] || e, a[e] = t), this
					},
					overrideMimeType: function (e) {
						return k || (m.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (k < 2)
								for (t in e) w[t] = [w[t], e[t]];
							else _.always(e[_.status]);
						return this
					},
					abort: function (e) {
						var t = e || r;
						return u && u.abort(t), l(0, t), this
					}
				};
			if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((e || m.url || dt) + "").replace(nt, "").replace(rt, pt[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = x.trim(m.dataType || "*").toLowerCase().match(E) || [""], null == m.crossDomain && (n = lt.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === pt[1] && n[2] === pt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (pt[3] || ("http:" === pt[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = x.param(m.data, m.traditional)), mt(ct, m, t, _), 2 === k) return _;
			for (s in (f = x.event && m.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !ot.test(m.type), h = m.url, m.hasContent || (m.data && (h = m.url += (it.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = st.test(h) ? h.replace(st, "$1_=" + tt++) : h + (it.test(h) ? "&" : "?") + "_=" + tt++)), m.ifModified && (x.lastModified[h] && _.setRequestHeader("If-Modified-Since", x.lastModified[h]), x.etag[h] && _.setRequestHeader("If-None-Match", x.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ht + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(s, m.headers[s]);
			if (m.beforeSend && (!1 === m.beforeSend.call(g, _, m) || 2 === k)) return _.abort();
			for (s in r = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) _[s](m[s]);
			if (u = mt(ut, m, t, _)) {
				_.readyState = 1, f && v.trigger("ajaxSend", [_, m]), m.async && 0 < m.timeout && (p = setTimeout(function () {
					_.abort("timeout")
				}, m.timeout));
				try {
					k = 1, u.send(a, l)
				} catch (e) {
					if (!(k < 2)) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, i, n) {
				var s, a, o, r, l, c = t;
				2 !== k && (k = 2, p && clearTimeout(p), u = void 0, d = n || "", _.readyState = 0 < e ? 4 : 0, s = 200 <= e && e < 300 || 304 === e, i && (r = function (e, t, i) {
					for (var n, s, a, o, r = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
					if (n)
						for (s in r)
							if (r[s] && r[s].test(n)) {
								l.unshift(s);
								break
							}
					if (l[0] in i) a = l[0];
					else {
						for (s in i) {
							if (!l[0] || e.converters[s + " " + l[0]]) {
								a = s;
								break
							}
							o = o || s
						}
						a = a || o
					}
					return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
				}(m, _, i)), r = function (e, t, i, n) {
					var s, a, o, r, l, c = {},
						u = e.dataTypes.slice();
					if (u[1])
						for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
					for (a = u.shift(); a;)
						if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
							if ("*" === a) a = l;
							else if ("*" !== l && l !== a) {
						if (!(o = c[l + " " + a] || c["* " + a]))
							for (s in c)
								if ((r = s.split(" "))[1] === a && (o = c[l + " " + r[0]] || c["* " + r[0]])) {
									!0 === o ? o = c[s] : !0 !== c[s] && (a = r[0], u.unshift(r[1]));
									break
								}
						if (!0 !== o)
							if (o && e.throws) t = o(t);
							else try {
								t = o(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: o ? e : "No conversion from " + l + " to " + a
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(m, r, _, s), s ? (m.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (x.lastModified[h] = l), (l = _.getResponseHeader("etag")) && (x.etag[h] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = r.state, a = r.data, s = !(o = r.error))) : (o = c, !e && c || (c = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || c) + "", s ? y.resolveWith(g, [a, c, _]) : y.rejectWith(g, [_, c, o]), _.statusCode(w), w = void 0, f && v.trigger(s ? "ajaxSuccess" : "ajaxError", [_, m, s ? a : o]), b.fireWith(g, [_, c]), f && (v.trigger("ajaxComplete", [_, m]), --x.active || x.event.trigger("ajaxStop")))
			}
			return _
		},
		getJSON: function (e, t, i) {
			return x.get(e, t, i, "json")
		},
		getScript: function (e, t) {
			return x.get(e, void 0, t, "script")
		}
	}), x.each(["get", "post"], function (e, s) {
		x[s] = function (e, t, i, n) {
			return x.isFunction(t) && (n = n || i, i = t, t = void 0), x.ajax({
				url: e,
				type: s,
				dataType: n,
				data: t,
				success: i
			})
		}
	}), x._evalUrl = function (e) {
		return x.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, x.fn.extend({
		wrapAll: function (t) {
			var e;
			return x.isFunction(t) ? this.each(function (e) {
				x(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function (i) {
			return this.each(x.isFunction(i) ? function (e) {
				x(this).wrapInner(i.call(this, e))
			} : function () {
				var e = x(this),
					t = e.contents();
				t.length ? t.wrapAll(i) : e.append(i)
			})
		},
		wrap: function (t) {
			var i = x.isFunction(t);
			return this.each(function (e) {
				x(this).wrapAll(i ? t.call(this, e) : t)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	}), x.expr.filters.hidden = function (e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e)
	};
	var vt = /%20/g,
		yt = /\[\]$/,
		bt = /\r?\n/g,
		wt = /^(?:submit|button|image|reset|file)$/i,
		kt = /^(?:input|select|textarea|keygen)/i;

	function _t(i, e, n, s) {
		var t;
		if (x.isArray(e)) x.each(e, function (e, t) {
			n || yt.test(i) ? s(i, t) : _t(i + "[" + ("object" == typeof t ? e : "") + "]", t, n, s)
		});
		else if (n || "object" !== x.type(e)) s(i, e);
		else
			for (t in e) _t(i + "[" + t + "]", e[t], n, s)
	}
	x.param = function (e, t) {
		function i(e, t) {
			t = x.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		}
		var n, s = [];
		if (void 0 === t && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
			i(this.name, this.value)
		});
		else
			for (n in e) _t(n, e[n], t, i);
		return s.join("&").replace(vt, "+")
	}, x.fn.extend({
		serialize: function () {
			return x.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && kt.test(this.nodeName) && !wt.test(e) && (this.checked || !U.test(e))
			}).map(function (e, t) {
				var i = x(this).val();
				return null == i ? null : x.isArray(i) ? x.map(i, function (e) {
					return {
						name: t.name,
						value: e.replace(bt, "\r\n")
					}
				}) : {
					name: t.name,
					value: i.replace(bt, "\r\n")
				}
			}).get()
		}
	}), x.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var xt = 0,
		Ct = {},
		Tt = {
			0: 200,
			1223: 204
		},
		Dt = x.ajaxSettings.xhr();
	f.attachEvent && f.attachEvent("onunload", function () {
		for (var e in Ct) Ct[e]()
	}), v.cors = !!Dt && "withCredentials" in Dt, v.ajax = Dt = !!Dt, x.ajaxTransport(function (a) {
		var o;
		return v.cors || Dt && !a.crossDomain ? {
			send: function (e, t) {
				var i, n = a.xhr(),
					s = ++xt;
				if (n.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (i in a.xhrFields) n[i] = a.xhrFields[i];
				for (i in a.mimeType && n.overrideMimeType && n.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
				o = function (e) {
					return function () {
						o && (delete Ct[s], o = n.onload = n.onerror = null, "abort" === e ? n.abort() : "error" === e ? t(n.status, n.statusText) : t(Tt[n.status] || n.status, n.statusText, "string" == typeof n.responseText ? {
							text: n.responseText
						} : void 0, n.getAllResponseHeaders()))
					}
				}, n.onload = o(), n.onerror = o("error"), o = Ct[s] = o("abort");
				try {
					n.send(a.hasContent && a.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function () {
				o && o()
			}
		} : void 0
	}), x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), x.ajaxTransport("script", function (i) {
		var n, s;
		if (i.crossDomain) return {
			send: function (e, t) {
				n = x("<script>").prop({
					async: !0,
					charset: i.scriptCharset,
					src: i.url
				}).on("load error", s = function (e) {
					n.remove(), s = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), y.head.appendChild(n[0])
			},
			abort: function () {
				s && s()
			}
		}
	});
	var St = [],
		Pt = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = St.pop() || x.expando + "_" + tt++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function (e, t, i) {
		var n, s, a, o = !1 !== e.jsonp && (Pt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(e.data) && "data");
		return o || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = x.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Pt, "$1" + n) : !1 !== e.jsonp && (e.url += (it.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
			return a || x.error(n + " was not called"), a[0]
		}, e.dataTypes[0] = "json", s = f[n], f[n] = function () {
			a = arguments
		}, i.always(function () {
			f[n] = s, e[n] && (e.jsonpCallback = t.jsonpCallback, St.push(n)), a && x.isFunction(s) && s(a[0]), a = s = void 0
		}), "script") : void 0
	}), x.parseHTML = function (e, t, i) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (i = t, t = !1), t = t || y;
		var n = w.exec(e),
			s = !i && [];
		return n ? [t.createElement(n[1])] : (n = x.buildFragment([e], t, s), s && s.length && x(s).remove(), x.merge([], n.childNodes))
	};
	var At = x.fn.load;
	x.fn.load = function (e, t, i) {
		if ("string" != typeof e && At) return At.apply(this, arguments);
		var n, s, a, o = this,
			r = e.indexOf(" ");
		return 0 <= r && (n = x.trim(e.slice(r)), e = e.slice(0, r)), x.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < o.length && x.ajax({
			url: e,
			type: s,
			dataType: "html",
			data: t
		}).done(function (e) {
			a = arguments, o.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e)
		}).complete(i && function (e, t) {
			o.each(i, a || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), x.expr.filters.animated = function (t) {
		return x.grep(x.timers, function (e) {
			return t === e.elem
		}).length
	};
	var Et = f.document.documentElement;

	function Mt(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	x.offset = {
		setOffset: function (e, t, i) {
			var n, s, a, o, r, l, c = x.css(e, "position"),
				u = x(e),
				h = {};
			"static" === c && (e.style.position = "relative"), r = u.offset(), a = x.css(e, "top"), l = x.css(e, "left"), s = ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto") ? (o = (n = u.position()).top, n.left) : (o = parseFloat(a) || 0, parseFloat(l) || 0), x.isFunction(t) && (t = t.call(e, i, r)), null != t.top && (h.top = t.top - r.top + o), null != t.left && (h.left = t.left - r.left + s), "using" in t ? t.using.call(e, h) : u.css(h)
		}
	}, x.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				x.offset.setOffset(this, t, e)
			});
			var e, i, n = this[0],
				s = {
					top: 0,
					left: 0
				},
				a = n && n.ownerDocument;
			return a ? (e = a.documentElement, x.contains(e, n) ? (typeof n.getBoundingClientRect != Y && (s = n.getBoundingClientRect()), i = Mt(a), {
				top: s.top + i.pageYOffset - e.clientTop,
				left: s.left + i.pageXOffset - e.clientLeft
			}) : s) : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === x.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(i, "marginTop", !0),
					left: t.left - n.left - x.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent || Et; e && !x.nodeName(e, "html") && "static" === x.css(e, "position");) e = e.offsetParent;
				return e || Et
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (t, s) {
		var a = "pageYOffset" === s;
		x.fn[t] = function (e) {
			return N(this, function (e, t, i) {
				var n = Mt(e);
				return void 0 === i ? n ? n[s] : e[t] : void(n ? n.scrollTo(a ? f.pageXOffset : i, a ? i : f.pageYOffset) : e[t] = i)
			}, t, e, arguments.length, null)
		}
	}), x.each(["top", "left"], function (e, i) {
		x.cssHooks[i] = xe(v.pixelPosition, function (e, t) {
			return t ? (t = _e(e, i), we.test(t) ? x(e).position()[i] + "px" : t) : void 0
		})
	}), x.each({
		Height: "height",
		Width: "width"
	}, function (a, o) {
		x.each({
			padding: "inner" + a,
			content: o,
			"": "outer" + a
		}, function (n, e) {
			x.fn[e] = function (e, t) {
				var i = arguments.length && (n || "boolean" != typeof e),
					s = n || (!0 === e || !0 === t ? "margin" : "border");
				return N(this, function (e, t, i) {
					var n;
					return x.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + a], n["scroll" + a], e.body["offset" + a], n["offset" + a], n["client" + a])) : void 0 === i ? x.css(e, t, s) : x.style(e, t, i, s)
				}, o, i ? e : void 0, i, null)
			}
		})
	}), x.fn.size = function () {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return x
	});
	var It = f.jQuery,
		Nt = f.$;
	return x.noConflict = function (e) {
		return f.$ === x && (f.$ = Nt), e && f.jQuery === x && (f.jQuery = It), x
	}, typeof e == Y && (f.jQuery = f.$ = x), x
}), storyyehiaonline();