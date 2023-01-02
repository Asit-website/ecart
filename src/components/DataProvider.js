import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();
// images colors aur sizes array ke form mai rahega
export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Wacth Product 01",
             "images": [
                   "https://image.shutterstock.com/image-vector/vector-cartoon-classic-mens-wrist-260nw-615428642.jpg",
                   "https://thumbs.dreamstime.com/z/gold-watch-leather-strap-brown-white-face-31297369.jpg",
                   "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
                   "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE="
                 
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 101,
             "count": 1
         },
         {
             "_id": "2",
             "title": "Wacth Product 02",
             "images": [
                "https://thumbs.dreamstime.com/z/gold-watch-leather-strap-brown-white-face-31297369.jpg",
                "https://image.shutterstock.com/image-vector/vector-cartoon-classic-mens-wrist-260nw-615428642.jpg",
                "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
                "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE="
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 102,
             "count": 1

         },
         {
             "_id": "3",
             "title": "Wacth Product 03",
             "images": [
                "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
                "https://thumbs.dreamstime.com/z/gold-watch-leather-strap-brown-white-face-31297369.jpg",
                "https://image.shutterstock.com/image-vector/vector-cartoon-classic-mens-wrist-260nw-615428642.jpg",
                "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE="
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 103,
             "count": 1

         },
         {
             "_id": "4",
             "title": "Wacth Product 04",
             "images": [
                "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE=",
                "https://thumbs.dreamstime.com/z/gold-watch-leather-strap-brown-white-face-31297369.jpg",
                "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
                "https://image.shutterstock.com/image-vector/vector-cartoon-classic-mens-wrist-260nw-615428642.jpg"
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 104,
             "count": 1

         },
         {
             "_id": "5",
             "title": "Wacth Product 05",
             "images": [
                 "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                 "https://thumbs.dreamstime.com/z/gold-watch-leather-strap-brown-white-face-31297369.jpg",
                 "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
                 "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE="
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 105,
             "count": 1

         },
         {
             "_id": "6",
             "title": "Wacth Product 06",
             "images": [
                 "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                 "https://thumbs.dreamstime.com/z/gold-watch-leather-strap-brown-white-face-31297369.jpg",
                 "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
                 "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE="
                 ],
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 106,
             "count": 1

         }
    ])

  
    
    const [cart, setCart] = useState([]);
    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }
        
        else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart);
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

