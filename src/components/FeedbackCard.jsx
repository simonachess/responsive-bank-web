import { quotes } from '../assets' 

function FeedbackCard({ content, name, title, img}) {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-lg leading-[32px] text-white my-10'>{content}</p>
      <div className='flex'>
        <img src={img} alt={name} className='w-12 h-12 rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-xl leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-base leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard