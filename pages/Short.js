import React, { useState } from 'react'
import styled from 'styled-components'
import formMobileBackground from '/images/bg-shorten-mobile.svg'
import formDesktopBackground from '/images/bg-shorten-desktop.svg'

const StyledContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 75px;
  .red-border {
    input[type='text'] {
      border: 3px solid #f46262;
    }
  }
`

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0.5em 1.5em;
  width: clamp(5em, 90%, 1400px);
  background-color: #3b3054;
  background-image: url(${formMobileBackground});
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 0.8em;
  @media screen and (min-width: 780px) {
    top: 4rem;
    padding: 2em;
    width: clamp(730px, 70%, 90em);
    background-image: url(${formDesktopBackground});
    background-position: center;
    background-size: cover;
  }
`

const StyledInputForm = styled.form`
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 1em 0;
  input[type='text'] {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4em;
    border-radius: 0.4em;
    margin: 0 0 0.5em 0;
    padding: 0.8em;
    border: none;
    overflow: hidden;
    border: 3px solid transparent;
    transition: border 200ms;
    ::placeholder {
      user-select: none;
      color: #bfbfbf;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    width: 100%;
    min-height: 50px;
    border: none;
    background-color: #2acfcf;
    padding: 0.8em;
    margin: 0.5em 0 0 0;
    border-radius: 0.4em;
    transition: background-color 300ms;
    &:active {
      background-color: #9e9aa7;
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: #bfbfbf;
        transition: background-color 300ms;
      }
      &:active {
        background-color: #9e9aa7;
      }
    }
  }
  #error-message {
    color: hsl(0, 87%, 67%);
    font-weight: 500;
    font-style: inherit;
    max-height: 0px;
    min-height: 0px;
    opacity: 0;
    transition: opacity 350ms ease-in-out, min-height 400ms ease-in-out,
      max-height 400ms ease-in-out;
  }
  
  @media screen and (min-width: 780px) {
    padding: 0;
    flex-direction: row;
    input[type='text'] {
      margin: 0 0.5em 0 0;
      flex: 5;
    }
    button {
      margin: 0 0 0 0.5em;
      flex: 1;
      &:hover {
        background-color: #2acfcf;
        transition: background-color 200ms;
      }
    }
    #error-message {
      position: absolute;
      bottom: -32px;
      transition: opacity 350ms ease-in-out, min-height 400ms ease-in-out,
        max-height 400ms ease-in-out;
      min-height: 25px;
      max-height: 25px;
    }
  }
`

const StyledLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4em;
  text-align: center;
  width: clamp(5em, 90%, 1400px);
  margin: 1em auto 0.5em auto;
  background-color: #fff;
  padding: 0 0 0.5em 0;
  h3 {
    font-size: 0.8rem;
    font-weight: 500;
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    border: none;
    background-color: #2acfcf;
    padding: 0.4em 2em;
    margin: 0.5em;
    border-radius: 0.5em;
    transition: background-color 300ms, transform 200ms;
    width: clamp(8em, 80%, 25em);
    height: 3em;
    &:active {
      background-color: #2acfcf;
    }
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: #bfbfbf;
        transition: background-color 300ms;
      }
      &:active {
        background-color: #2acfcf;
      }
    }
  }
  .link-button {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .initial-link {
    text-align: center;
    margin: 1em auto;
    flex: 2;
    padding: 0 2em;
    overflow: hidden;
    width: clamp(10ch, 100%, 80ch);
    color: #232127;
  }
  .new-link {
    color: #2acfcf;
    text-align: left;
    margin: 1em;
  }
  
  .copied {
    background-color: #232127;
    user-select: none;
  }
  @media screen and (min-width: 780px) {
    width: clamp(730px, 70%, 90em);
    flex-direction: row;
    padding: 0.8em 1em;
    button {
      margin: 0 1em;
      width: clamp(8em, 90%, 10em);
    }
    .new-link {
      margin: 0 1em;
    }
    .link-button {
      flex-direction: row;
    }
    .initial-link {
      text-align: left;
      margin: 0;
    }
  }
`

const Shorty = () => {
    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState([]);
    const [id, setId] = useState(0)
    const [displayError, setDisplayError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    //const [iscopy, setIscopy] = useState(false)

  const userInput = (e) => {
    setKeyword(e.target.value)
  }

//   const copyClick = () => {
//     navigator.clipboard.writeText(short)
//     setCopied(true)
//   }

  const showError = () => {
    setDisplayError(true)
    setTimeout(function () {
      setDisplayError(false)
    }, 2000)
  }

  /*const succesfulCall = (data) => {
      setTabs(true)
    setOgLink(keyword)
    setShort(data.result.full_short_link2)
  }*/

  const shortenLink = async (e) => {
    e.preventDefault()
    if (keyword.length === 0) {
      setErrorMessage('Please add a link')
      showError()
    } else{
        console.log("hello")
        try{
            const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${keyword}`
            )
            const data = await res.json();
            //console.log(data.result);
            const lists = {
                longUrl:data.result["original_link"],
                shortUrl:data.result["full_short_link2"],
                copied:false,
                num: id
            }
            setId(id => (id+ 1));
            setList(list=>([...list,lists]));
        }
        catch(error){
            console.log("Something went wrong!", error)
            setErrorMessage("Something went wrong!")
            showError();
        }
        setKeyword('')
    }
  }


  return (
    <StyledContainer>
      <StyledInput className={displayError ? 'red-border' : null}>
        <StyledInputForm onSubmit={shortenLink}>
          <input
            type='text'
            name='longUrl'
            onChange={userInput}
            value={keyword}
            placeholder='Shorten a link here...'
          />
           <h4 id='error-message' className={displayError ? 'visible' : null}>
            {errorMessage}
          </h4>
          <button>
                Shorten It!  
          </button>
        </StyledInputForm>
      </StyledInput>
          {list.map((e, index) => (
              <StyledLink key={e.id} >
                  <h3 className='initial-link'>{e.longUrl}</h3>
                        <div className='link-button'>
                              <h3 className='new-link' id='generated-link'>
                                  {e.shortUrl}</h3>
                                   <button
                                   name={e.id}
                                   //className={e.copied ? 'copied' : null} 
                                   onClick={() => {
                                       navigator.clipboard.writeText(e.shortUrl);
                                       const newList = [...list];
                                       newList[index].copied = true;
                                       setList(newList);
                                       }}>
               {e.copied ?'copied':'copy'}
            </button>
                        </div>
                    </StyledLink>
                ))}
    </StyledContainer>
  )
}

export default Shorty