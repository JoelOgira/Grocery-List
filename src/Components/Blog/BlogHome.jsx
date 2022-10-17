import { useState, useEffect } from 'react';
import './blog.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Blog from './Blog';
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';
import EditBlog from './EditBlog';
import Missing from './Missing';
import NewBlog from './NewBlog';

const BlogHome = () => {
    
    return (    
        <div className='BlogHome'>
            <BlogHeader />
            <Routes>
                <Route path='/blog/*' element={<Blog />} />
                <Route path='/new-blog' element={<NewBlog />} />
                <Route path='/blog-post' element={<BlogPost />} />
                <Route path='/edit-blog' element={<EditBlog />} />
                <Route path='*' element={<Missing />} />
            </Routes>
        </div>
    )
}

export default BlogHome;