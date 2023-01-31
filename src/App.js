import './App.css';
import Button from './components/button';
import Input from './components/input';
import Title from './components/title';
import React from 'react';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

function App() {
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onClick = async () => {
    setResult('');
    setLoading(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a creative ad for the following product: ${value}`,
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    if(response.data){
      setResult(response.data.choices[0].text);
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className='flex flex-row items-center justify-center w-full mt-12'>
          <Title />
        </div>
        <div className='flex flex-row items-center justify-center w-full mt-24'>
            <Input placeholder={'Describe your product...'} onChange={onChange}/>
        </div>
        <div className='flex flex-row items-center justify-center w-full mt-12'>
          <Button onClick={onClick}/>
        </div>
        <div className='flex flex-row items-center justify-center w-full mt-16'>
          <div className='w-9/12 md:w-6/12'>
            {loading ? <h1 className='text-2xl flex items-center justify-center'>
              <span class="loader"></span> 
            </h1> : 
            <h1 className='text-lg md:text-2xl mb-5 pb-5'>
              {result}
            </h1>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
