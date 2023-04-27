import { useEffect, useState } from 'react';
import Summary from './Summary';

const Card = () => {
  const [categories, setCategories] = useState(null);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('data.json').then(async (req) => {
      const data = await req.json();
      setCategories(data);
    });
  }, []);
  return (
    <section className="max-w-xl max-h-fit shadow-xl rounded-3xl mx-8 pb-3 md:pb-0 flex flex-col md:flex-row bg-white">
      <div className="result bg-gradient-to-t md:w-1/2 from-light-royal-blue to-light-slate-blue text-light-lavender flex flex-col items-center justify-center pb-4 md:pb-8 mb-2 md:mb-0 rounded-b-3xl md:rounded-3xl">
        <h1 className='font-bold py-6 text-2xl'>Your Result</h1>
        <p className='flex flex-col justify-center items-center bg-gradient-to-b from-violet-blue to-persian-blue px-10 py-7 rounded-full gap-2' >
          <span className='text-white font-bold text-6xl'>76</span>of 100
        </p>
        <p className='font-bold py-2 md:py-5 text-2xl text-white'>Great</p>
        <p className='text-center px-6 md:px-7'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="summary pb-2 md:pb-6 px-8 md:w-1/2 ">
        <h2 className='font-bold text-dark-gray-blue py-1 md:py-6 text-xl'>Summary</h2>
        {categories &&
          categories.map((category) => (
            <Summary key={category.category} data={{ ...category }}></Summary>
          ))}
        <button
          type="button"
          className="w-full border rounded-full bg-dark-gray-blue text-white py-3 md:py-4 hover:bg-gradient-to-t hover:from-light-royal-blue hover:to-light-slate-blue  mt-1 md:mt-2"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default Card;
