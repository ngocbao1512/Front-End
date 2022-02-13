import React, {useEffect, useState} from 'react';


//1. useEffect(callback) 
// fucntion được call mỗi lúc mount và re-render 
//2. useEffect(callback, [])
// chỉ gọi call back mỗi khi component được mount ko gọi lại lúc re-render 
//3. useEffect(callback, [depencency])
// goi call back mooix khi component
// callback sẽ được thay đổi mỗi khi deps thay đổi 



const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGotoTop, setShowGoToTop] = useState(false);
    useEffect(() => {

        document.title = title
        console.log("title change")
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
       
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup function 
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
   

    return (
        <div>
            {tabs.map(tab => (
                <button 
                key={tab}
                onClick={() => setType(tab)}
                style={type === tab ? {
                    color : 'red'
                } : {}}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {
                showGotoTop && (
                    <button
                        style={{
                            position : 'fixed',
                            right : 20,
                            bottom : 20,
                        }}
                    >
                        go to top
                    </button>
                )
            }
        </div>
        
    )
}

export default Content;