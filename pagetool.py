from __future__ import annotations
from typing_extensions import List

class Page:
    def __init__(self, title: str):
        self.title = title
        self.elements: List[Element] = []

    def add(self, element: Element):
        self.elements.append(element)
    
    def add_heading(self, level: int, text: Text):
        self.add(Heading(level, text))

    def add_paragraph(self, text: Text):
        self.add(Paragraph(text))

    def add_image(self, src: str, alt: str):
        self.add(Image(src, alt))

    def add_raw(self, html: str):
        self.add(RawHTML(html))

    def add_inline_code(self, text: Text):
        self.add(InlineCode(text))

    def add_block_code(self, text: Text):
        self.add(BlockCode(text))

    def add_callout(self, text: Text):
        self.add(Callout(text))

    def add_unordered_list(self, texts: List[Text]):
        self.add(UnorderedList(texts))
    
    def add_ordered_list(self, texts: List[Text]):
        self.add(OrderedList(texts))

    def add_quote(self, text: Text):
        self.add(Quote(text))

    def add_quote_credit(self, text: Text):
        self.add(QuoteCredit(text))

    def write_to_file(self, file: str):
        with open(file, 'w') as f:
            f.write(repr(self))

    def __repr__(self) -> str:
        elements = '\n'.join([repr(element) for element in self.elements])
        return ('<!DOCTYPE html>'
                '<html lang="en">'
                '<head>'
                '    <meta charset="UTF-8">'
                '    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
                '    <meta http-equiv="X-UA-Compatible" content="ie=edge">'
                f'    <title>{self.title}</title>'
                '    <link rel="stylesheet" href="/style.css">'
                '    <link rel="icon" href="img/coloredlogo.svg" type="image/x-icon">'
                '    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>'
                '    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>'
                '</head>'
                '<body>'
                '    <header>'
                '        <div style="background-color: rgb(25, 25, 68); padding-top: 3px; padding-bottom: 3px;">'
                '            <h1><img src="/img/transparentlogo.svg" alt="HT" style="height: 50px; vertical-align: middle;"> Hayden Taylor</h1>'
                '            <p><a href="/index.html">Home</a> | <a href="">Articles</a> | <a href="">Resources</a></p>'
                '        </div>'
                '    </header>'
                '    <main>'
                f'{elements}'
                '    </main>'
                '    <footer>'
                '        <div style="background-color: rgb(25, 25, 68); padding-top: 20px; padding-bottom: 20px;">'
                '            <img src="/img/transparentlogo.svg" alt="HT" style="height: 80px; vertical-align: middle;">'
                '        </div>'
                '    </footer>'
                '</body>'
                '</html>')

class Element:
    pass

Inner = Element | str

class Text:
    def __init__(self, *elements: Inner):
        self.inners = elements

    def __repr__(self) -> str:
        return ''.join([i if isinstance(i, str) else repr(i) for i in self.inners])

class Heading(Element):
    def __init__(self, level: int, text: Text):
        self.level = level
        self.text = text
    
    def __repr__(self) -> str:
        return f'<h{self.level}>{self.text}</h{self.level}>'
    
class Paragraph(Element):
    def __init__(self, text: Text):
        self.text = text
    
    def __repr__(self) -> str:
        return f'<p>{self.text}</p>'
    
class Image(Element):
    def __init__(self, src: str, alt: str):
        self.src = src
        self.alt = alt
    
    def __repr__(self) -> str:
        return f'<div class="content"><img src="{self.src}" alt="{self.alt}"></div>'
    
class RawHTML(Element):
    def __init__(self, html: str):
        self.html = html
    
    def __repr__(self) -> str:
        return self.html
    
class InlineCode(Element):
    def __init__(self, text: Text):
        self.text = text

    def __repr__(self) -> str:
        return f'<code class="inlinecode">{self.text}</code>'
    
class BlockCode(Element):
    def __init__(self, text: Text):
        self.text = text

    def __repr__(self) -> str:
        return f'<pre><code>{self.text}</code></pre>'
    
class Callout(Element):
    def __init__(self, text: Text):
        self.text = text

    def __repr__(self) -> str:
        return f'<div class="callout">{self.text}</div>'
    
class UnorderedList(Element):
    def __init__(self, texts: List[Text]):
        self.texts = texts

    def __repr__(self) -> str:
        items = ''.join([f'<li>{text}</li>' for text in self.texts])
        return f'<ul>{items}</ul>'
    
class OrderedList(Element):
    def __init__(self, texts: List[Text]):
        self.texts = texts

    def __repr__(self) -> str:
        items = ''.join([f'<li>{text}</li>' for text in self.texts])
        return f'<ol>{items}</ol>'
    
class Quote(Element):
    def __init__(self, text: Text):
        self.text = text
        
    def __repr__(self) -> str:
        return f'<div class="quote">{self.text}</div>'
    
class QuoteCredit(Element):
    def __init__(self, text: Text):
        self.text = text
        
    def __repr__(self) -> str:
        return f'<span class="credit"><p>{self.text}</p></div>'