
var root = document.getElementById('app')
var menu = document.getElementById('js-menu-component')
var portfolio = document.getElementById('js-portfolio-component')
var about = document.getElementById('js-about-component')
// var footer = document.getElementById('js-footer-component')

var menuItem = [
  {
    id: 0,
    target: "/",
    label: 'Home'
  },
  {
    id: 1,
    target: "/about",
    label: 'Chi sono'
  }
]

var Menu = {
    view: function() {
        return menuItem.map(function(target, i) {
            return m("li", {key: target.id}, [
              m("a[href="+ target.target +"]", {oncreate: m.route.link}, target.label)
            ])
        })
    }
}

var Data = {
    page: {
        list: [],
        fetch: function() {
            m.request({
                method: "GET",
                url: "page.json",
            })
            .then(function(items) {
                Data.page.list = items
            })
        }
    },
    portfolio: {
        list: [],
        fetch: function() {
            m.request({
                method: "GET",
                url: "portfolio.json",
            })
            .then(function(items) {
                Data.portfolio.list = items
            })
        }
    }
}


var Portfolio = {
  oninit: Data.portfolio.fetch,
  view: function(vnode) {
    return Data.portfolio.list.map(function(elem, i) {
      return m(".col-md-4.col-sm-6", {key: elem.id}, [
        m("a", {href: elem.link, target: "_blank"}, [
          m(".portfolio-thumb", [
            m("img.img-responsive", {src: elem.preview}),
              m(".portfolio-overlay", [
                m(".portfolio-item", [
                  m("h3", elem.title),
                  m("small", elem.description),
                ]),
              ]),
            ]),
          ]),
      ])
    })
  }
}

var PageAbout = {
  oninit: Data.page.fetch,
  view: function(vnode) {
    return Data.page.list.map(function(elem, i) {
    return elem.about.map(function(elem, i) {
    return m(".col-md-offset-1.col-md-10.col-sm-12#about",
    	[
    		m(".section-title",
    			[
    				m("h3",
    					"Ciao, mi chiamo Filippo Quacquarelli e sono un Web Developer"
    				),
    				m("h2",
    					elem.title
    				)
    			]
    		),
//     		m(".col-md-8.col-sm-12",
//     			m("img.img-responsive[alt='About']", {src: elem.preview})
//     		),
//     		m(".col-md-4.col-sm-12",
//     			[
//     				m("h1",
//     					elem.subtitle
//     				),
//     				m("p",
//     					elem.previewText.split("|")[0]
//     				),
//             m("p",
//     					elem.previewText.split("|")[1]
//     				)
//     			]
//     		),
    		m(".clearfix"),
//     		m("hr"),
    		m("p",
    			elem.content[0].text
    		),
    		m("p",
          elem.content[1].text
        ),
    		m("p",
          elem.content[2].text
        ),
    		m("p",
          elem.content[3].text
        ),
    		m("hr"),
    		m(".row",
    			[
    				m(".col-md-3.col-sm-6",
    					[
    						m("h3",
    							elem.skill[0].title
    						),
    						m("ul",
    							[
    								m("li",
    									elem.skill[0].list.split("|")[0]
    								),
    								m("li",
    									elem.skill[0].list.split("|")[1]
    								),
    								m("li",
    									elem.skill[0].list.split("|")[2]
    								),
    								m("li",
    									elem.skill[0].list.split("|")[3]
    								),
    								m("li",
    									elem.skill[0].list.split("|")[4]
    								)
    							]
    						)
    					]
    				),
    				m(".col-md-3.col-sm-6",
    					[
    						m("h3",
    							elem.skill[1].title
    						),
    						m("ul",
    							[
    								m("li",
    									elem.skill[1].list.split("|")[0]
    								),
    								m("li",
    									elem.skill[1].list.split("|")[1]
    								),
    								m("li",
    									elem.skill[1].list.split("|")[2]
    								),
    								m("li",
    									elem.skill[1].list.split("|")[3]
    								),
    								m("li",
    									elem.skill[1].list.split("|")[4]
    								)
    							]
    						)
    					]
    				),
    				m(".col-md-3.col-sm-6",
    					[
    						m("h3",
    							elem.skill[2].title
    						),
    						m("ul",
    							[
    								m("li",
    									elem.skill[2].list.split("|")[0]
    								),
    								m("li",
    									elem.skill[2].list.split("|")[1]
    								),
    								m("li",
    									elem.skill[2].list.split("|")[2]
    								),
    								m("li",
    									elem.skill[2].list.split("|")[3]
    								),
    								m("li",
    									elem.skill[2].list.split("|")[4]
    								)
    							]
    						)
    					]
    				),
    				m(".col-md-3.col-sm-6",
    					[
    						m("h3",
    							elem.skill[3].title
    						),
    						m("ul",
    							[
    								m("li",
    									elem.skill[3].list.split("|")[0]
    								),
    								m("li",
    									elem.skill[3].list.split("|")[1]
    								),
    								m("li",
    									elem.skill[3].list.split("|")[2]
    								),
    								m("li",
    									elem.skill[3].list.split("|")[3]
    								),
    								m("li",
    									elem.skill[3].list.split("|")[4]
    								)
    							]
    						)
    					]
    				)
    			]
    		)
    	]
    )
    })
    })
  }
}

var Home = {
  view: function(vnode) {
    return [
        m.mount(menu, Menu),
        m.mount(portfolio, Portfolio),
        m.mount(about, null),
    ]
  }
}

var About = {
  view: function() {
    return [
        m.mount(menu, Menu),
        m.mount(about, PageAbout),
        m.mount(portfolio, null),
    ]
  }
}




m.route(root, "/", {
    "/": Home,
    "/about": About
})
