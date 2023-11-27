import sys
import markdown

extensions = [
    'markdown.extensions.extra',
    'markdown.extensions.admonition',
    'markdown.extensions.toc',
    'markdown.extensions.smarty',
]

def main():
    if len(sys.argv) == 1:
        print("expected source markdown, target html, and page name as args")
        return

    md_file = sys.argv[1]
    html_file = sys.argv[2]
    page_name = sys.argv[3]

    with open(md_file, 'r') as f:
        html = markdown.markdown(f.read(), extensions=extensions)

    with open('templates/template.html', 'r') as f:
        html = f.read().replace('{% main %}', html)
        html = html.replace('{% title %}', page_name)
    
    with open(html_file, 'w') as f:
        f.write(html)

if __name__=='__main__':
    main()