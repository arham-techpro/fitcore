import { document } from "postcss";
import { useState } from "react";


const Practice = () => {

    const [activeBtnTwo, setActiveBtnTwo] = useState(true);


    return (
        <div>
            <h1 className="text-white">Practice Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, accusamus?</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ex perferendis natus eos nostrum veritatis. Adipisci odit culpa repudiandae sit.</p>
            <div className="flex justify-center gap-5">
                <button onClick={() => {
                    // setActiveBtn((activeBtn) => !activeBtn); 
                    setActiveBtnTwo((activeBtnTwo) => !activeBtnTwo);

                }} className={`btn ${activeBtnTwo ? "active_button" : "btn-secondary"}`}>text me</button>



                <button onClick={() => {
                    // setActiveBtn((activeBtn) => !activeBtn); 
                    setActiveBtnTwo((activeBtnTwo) => !activeBtnTwo);
                }} className={`btn ${activeBtnTwo ? "btn-secondary" : "active_button"}`}>call me</button>




                <div className={`${activeBtnTwo ? "block" : "hidden"}`}>
                    <h1 className="text-white">Test ME</h1>
                </div>
                <div className={`${activeBtnTwo ? "hidden" : "block"}`}>
                    <h1 className="text-white">Call me</h1>
                </div>

            </div>
        </div>
    );
};

export default Practice;