import styled from 'styled-components';


const DispCont = styled.div `
padding: 10px;
display: flex;
`;

const ImageCont = styled.div `
width: 150px;
height: 150px;
border-radius: 10px;
border: #DDD solid 5px;
margin: 10px;
`;


const DispImage = styled.img `
object-fit:cover;
width: 100%;
height:100%;
border: #EEE solid 5px;
border-radius: 10px;
`;


export default function Display({
  arr=[]
}){

  return <DispCont>
    {
      arr.map((o,i)=><ImageCont>
        <DispImage src={o} height={100} />
    </ImageCont>)
    }
  </DispCont>
}
