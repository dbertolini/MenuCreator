# MenuCreator.qar
QlikView object extension that allows you to create your own animated menu.
For installation execute MenuCreator.qar and then you will see the object extension on QlikView (WebView mode).

# ABOUT THE EXTENSION

This is a QlikView extension that allows you to create your own animated menu by passing the correct JSON code into the expression.
You can create separators and items that redirects the QlikView page to an specific URL.

# JSON CODE

{
    "menu": [{
        "separator": "Author",
        "content": [{
            "title": "Diego Bertolini",
            "url": "http://www.diegobertolini.com"
        }]
    }, {
        "separator": "Information",
        "content": [{
            "title": "Qlik",
            "url": "http://www.qlik.com"
        }, {
            "title": "Community",
            "url": "https://community.qlik.com"
        }]
    }]
}
