const image = document.getElementById('image');
const title = document.getElementById('title');
const para = document.getElementById('para');

const contents = [
    {
        image: "https://i.pinimg.com/564x/a7/5b/68/a75b68b34904c13e82ddd4f8a02a1ba9.jpg",
        title: 'Always Be',
        text:  'Our mission is to provide the best services to our customers with dedication and passion.'
    },
    {
        image: "https://i.pinimg.com/736x/19/b3/b2/19b3b2d1202e2ba202163983ef1292aa.jpg",
        title: 'With You',
        text:  'We value integrity, excellence, and customer satisfaction above all else.'
    },
    {
        image: "https://i.pinimg.com/564x/4f/86/dc/4f86dc29322e6ecbe206f8809724dca6.jpg",
        title: 'Something You Have',
        text: 'Our vision is to be a global leader in the industry by continuously improving and innovating.'
    }
]


document.getElementById('btn1').addEventListener('click', function(){
    executePro(0)
})


document.getElementById('btn2').addEventListener('click', function(){
    executePro(1)
})

document.getElementById('btn3').addEventListener('click', function(){
    executePro(2)
})

function executePro(index){
    image.src = contents[index].image;
    title.innerHTML = contents[index].title;
    para.innerHTML = contents[index].text; 
}


