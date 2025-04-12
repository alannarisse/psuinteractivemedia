// Blog post data in JSON format
const blogData = [
  {
    id: 1,
    title: 'I love blogs',
    subtitle: 'Lorem ipsum dolor sit amet',
    content: 'I was just thinkging the other day about blogs and how wonderful they are.',
    image: 'https://via.placeholder.com/500x250'
  },
  {
    id: 2,
    title: 'My Second Blog Post',
    subtitle: 'Nulla facilisi. Sed dapibus metus in justo',
    content: 'Nulla facilisi. Sed dapibus metus in justo imperdiet pretium. Sed efficitur sapien vitae magna lacinia, sed dictum lectus lobortis. In quis elit at neque aliquam vehicula id id ipsum. Proin hendrerit arcu et tortor pharetra, vel faucibus dolor iaculis. ',
    image: 'https://via.placeholder.com/500x250'
  },
  {
    id: 3,
    title: 'My Third Blog Post',
    subtitle: 'Vestibulum ante ipsum primis in faucibus orci luctus',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean non dapibus velit, non feugiat massa. Fusce fringilla, nunc at imperdiet feugiat, elit quam aliquam turpis, sit amet ultricies purus nisl nec leo. Duis vestibulum blandit dapibus. ',
    image: 'https://via.placeholder.com/500x250'
  },
  {
    id: 4,
    title: 'My Fourth Blog Post',
    subtitle: 'Bla Bla Vestibulum ante ipsum primis in faucibus orci luctus',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean non dapibus velit, non feugiat massa. Fusce fringilla, nunc at imperdiet feugiat, elit quam aliquam turpis, sit amet ultricies purus nisl nec leo. Duis vestibulum blandit dapibus. ',
    image: 'https://via.placeholder.com/500x250'
  }
]

// Generate blog post HTML from data
function generateBlogPostHTML(blogPost) {
  const { title, subtitle, content, image } = blogPost

  return `<div class="blog-post">
  <img src="${image}" alt="${title}">
    <h2>${title}</h2>
    <h3>${subtitle}</h3>
    <p>${content}</p>
    </div> `
}

// Populate blog posts using data
const blogPostsContainer = document.querySelector('.blog-posts')

blogData.forEach(blogPost => {
  const blogPostHTML = generateBlogPostHTML(blogPost)
  blogPostsContainer.insertAdjacentHTML('beforeend', blogPostHTML)
})
