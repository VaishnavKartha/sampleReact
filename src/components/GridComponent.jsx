    import React from 'react'
    import {useState,useEffect} from 'react'

    const GridComponent = () => {
        const [gridSize,setGridSize]=useState(4);
        const [cards,setCards]=useState([]);
        const [flipped,setFlipped]=useState([])
        const [solved,setSolved]=useState([]);
        const [disabled,setDisabled]=useState(false);
        const [won,setWon]=useState(false);


        useEffect(() => {
        InitializeGame();
    }, [gridSize]);


        useEffect(()=>{

            
            if(solved.length===cards.length){
                setDisabled(true);
                setWon(true);
            
            }
            else{
                setWon(false)
            }
        


        },[solved])



        const handleChange=(e)=>{
            const size=e.target.value;
            if(size<=1 || size>10)return
            setGridSize(size);


        }

        const InitializeGame=()=>{

            const totalCards=gridSize*gridSize;
            const pair=Math.floor(totalCards/2);
            const numbers=[...Array(pair).keys()].map((ele)=>ele+1);
            const initialCards=[...numbers,...numbers];
            for(let i=totalCards-1;i>0;i--){
                const j=Math.floor(Math.random()*(i+1));
                [initialCards[i],initialCards[j]]=[initialCards[j],initialCards[i]];
                
            }

            const shuffledCards=initialCards.map((value,index)=>({id:index,number:value}))
        
            setCards(shuffledCards);
            setFlipped([]);
            setDisabled(false);
            setSolved([]);
            setWon(false);
        }

  

        
        const checkMatch=(secondId)=>{
            const [firstId]=flipped;
            if(cards[firstId].number===cards[secondId].number){
                setSolved([...solved,firstId,secondId]);
                setFlipped([]);
                setDisabled(false);
                //isGameOver();
            }
            else{
                setTimeout(()=>{
                    setDisabled(false);
                    setFlipped([]);
                },1000)

            }
            
            

        }

        const handleClick=(id)=>{
            if(disabled||won)return;

            if(flipped.length===0){
                setFlipped([...flipped,id]);
                return
            }

            if(flipped.length===1){
                setDisabled(true);
                if(id!==flipped[0]){
                    setFlipped([...flipped,id])
                    checkMatch(id);
                }
                else{
                    setFlipped([]);
                    setDisabled(false)
                }
            }

        }

        const isFlipped=(id)=>{return flipped?.includes(id)||solved.includes(id)}
        const isSolved=(id)=>{return solved?.includes(id)}






    return (
        <div className='w-fit h-screen m-auto flex flex-col justify-center items-center '>
            <h1 className='text-center text-[30px] m-[50px]'>Memory Game</h1>

            <div className='flex justify-center items-center broder-1'>
                <input type='number' value={gridSize} onChange={handleChange}/>
            </div>

            <div className='mt-10  w-fit' style={{display:"grid",gridTemplateColumns:`repeat(${gridSize},1fr)`,gap:9}}>
                {cards.map((value,index)=>{
                    return <div onClick={()=>handleClick(value.id)} key={index} className={` cursor-pointer w-[50px] h-[50px] rounded-xl text-white  flex justify-center items-center ${isFlipped(value.id)?(isSolved(value.id)?"bg-green-300":"bg-blue-400"):"bg-gray-200"} `}>{isFlipped(value.id)?value.number:"?"}</div>
                })}
            </div>
            {won&&<button onClick={InitializeGame} className='bg-green-300 text-white p-[10px] mt-[15px]'>Play Again</button>}
        
        </div>
    )
    }

    export default GridComponent
