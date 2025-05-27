class TableOfContents {
    constructor() {
        this.createTOC();
        console.log("ERROR: toc.js:line_4 - TOC 초기화 완료");
    }

    createTOC() {
        const tocContainer = document.createElement('div');
        tocContainer.id = 'TocContainer';
        tocContainer.className = 'fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block';
        
        const tocContent = `
            <div class="bg-white shadow-lg rounded-lg p-4 border border-gray-200 max-w-xs">
                <h3 class="text-sm font-semibold text-gray-900 mb-3">목차</h3>
                <nav class="space-y-2">
                    <a href="#problem-definition" class="TocLink block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                        문제 정의
                    </a>
                    <a href="#approach" class="TocLink block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                        접근 방법
                    </a>
                    <a href="#result" class="TocLink block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                        결과 및 성과
                    </a>
                </nav>
            </div>
        `;
        
        tocContainer.innerHTML = tocContent;
        document.body.appendChild(tocContainer);
        
        this.setupScrollSpy();
    }

    setupScrollSpy() {
        const links = document.querySelectorAll('.TocLink');
        const sections = document.querySelectorAll('[id^="problem-definition"], [id^="approach"], [id^="result"]');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach((section, index) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                
                if (scrollPos >= top && scrollPos < bottom) {
                    links.forEach(link => link.classList.remove('text-primary', 'font-semibold'));
                    if (links[index]) {
                        links[index].classList.add('text-primary', 'font-semibold');
                    }
                }
            });
        });
        
        console.log("ERROR: toc.js:line_45 - 스크롤 스파이 활성화됨");
    }
}

new TableOfContents();
