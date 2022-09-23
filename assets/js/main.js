
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {


    let posts = [
       // {
            //url: 'https://twicechoi.github.io/images/project_1.pdf',
            //title: '3D 개인 포트폴리오',
       // },
        //{
            //url: 'https://twicechoi.github.io/images/project_2.pdf',
            //title: '3D 팀 포트폴리오',
        //},

        {
            url: 'https://docs.google.com/viewer?url=https://github.com/twiceChoi/twiceChoi.github.io/blob/main/assets/images/project_1.pdf?raw=T',
            title: 'Trek To Bramhatal (Uttarakhand)',
        },
        {
            url: 'https://www.nagekar.com/2017/08/privacy.html',
            title: 'Privacy - How I Converted',
        },
        {
            url: 'https://www.nagekar.com/2018/01/jagriti-yatra.html',
            title: 'Jagriti Yatra 2017',
        },
        {
            url: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'Private Cloud Part 2 | Encrypted Storage With NextCloud',
        },
        {
            url: 'https://www.nagekar.com/2018/07/eli5-how-https-works.html',
            title: 'ELI5 - How HTTPS Works',
        },
    ];
    let post_html = [];

    for(let post of posts) {

            let tags;
            
            if(post.tags) {
                tags = post.tags.map(tag => {
                    return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
                })
            }

            let post_template = `
            <div class="blog-post" onclick="blog_link_click('${post.url}');">
                <div class="blog-link">
        
                    <h3><a href="${post.url}">${post.title}</a></h3>            
                </div>
        
                <div class="blog-goto-link">
                    <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
                </div>
            </div>
            `;

            post_html.push(post_template);
        }

        // for the more posts link
        let post_template = `
        <div class="blog-post more-blogs" onclick="blog_link_click('https://www.nagekar.com');">
            <div class="blog-link">
                <h3><a href="https://www.nagekar.com">Visit the blog for more posts</a></h3>            
            </div>
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);

        $('#rss-feeds').html(post_html);

}


function blog_link_click(url) {
    window.location = url;
}
