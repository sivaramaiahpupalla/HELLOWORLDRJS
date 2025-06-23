import React from 'react'
import { useState } from 'react';


const Apipostsrender = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');
    const postsPerPage = 20;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handleClick = async() => {
        let responseobj = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await responseobj.json();
        console.log(data);
        setPosts(data);
    }
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handleprev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    
    // const handleUserId = () => {
    //     const sortedPosts = [...posts].sort((a, b) => a.userId - b.userId);
    //     setPosts(sortedPosts);
    // }
    // const handleId = () => {
    //     const sortedPosts = [...posts].sort((a, b) => a.id - b.id);
    //     setPosts(sortedPosts);
    // }
    // const handleTitle = () => {
    //     const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    //     setPosts(sortedPosts);
    // }
    // const handleBody = () => {
    //     const sortedPosts = [...posts].sort((a, b) => a.body.localeCompare(b.body));
    //     setPosts(sortedPosts);
    // }
    const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
    direction = 'desc';
  }

  const sorted = [...posts].sort((a, b) => {
    if (typeof a[key] === 'string') {
      return direction === 'asc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    } else {
      return direction === 'asc'
        ? a[key] - b[key]
        : b[key] - a[key];
    }
  });

  setPosts(sorted);
  setSortConfig({ key, direction });
};
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

return (
   <>
   <div className='apiposts'>
        <h1>API Posts</h1>
        <p>Here you can view the posts fetched from the API.</p>
        
    </div>
    <div>
        <input type="text" placeholder='Search by title' value={searchTerm} onChange={handleChange} />
    </div>
    <div>
        
        <button onClick={handleClick}>Fetch Posts</button>
    </div>

    <table border="1" cellPadding="5" cellSpacing="0" className='table'>
        <thead>
            <tr>
                <th onClick={() => handleSort('userId')}>userId</th>
                <th onClick={() => handleSort('id')}>id</th>
                <th onClick={() => handleSort('title')}>title</th>
                <th onClick={() => HandleEdit('body')}>body</th>
            </tr>
        </thead>
        <tbody>
            {posts
                //.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter(post => post.body.toLowerCase().includes(searchTerm.toLowerCase()))
                .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
                .map(post => (
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
        </tbody>
    </table>
    <div>
        <button onClick={handleprev} disabled={currentPage === 1}>previous</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>next</button>
    </div>

   </>
  )
}

export default Apipostsrender