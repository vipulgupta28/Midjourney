
import { TabsDemo } from './tabs';
import { ColourfulText } from '../ui/text';

const QNA = () => {
  

  return (
    <>
    <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-neutral-200 to-neutral-600 mb-6 text-center">
            Questions and <ColourfulText text="Answers" />  
          </h1>
    <TabsDemo/>
    </>
   
  );
};



export default QNA;
