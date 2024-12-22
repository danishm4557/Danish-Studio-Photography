import { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactForm = () => {

	const {
		register,
		trigger,
		formState: { errors }
	} = useForm();

	const [formSubmitted, setFormSubmitted] = useState(false);

	const form = useRef(null);
	const serviceID = 'default_service';
	const templateID = 'template_7yap5vt';
	const key = 'qZxw-X0zv_d4S4NUs'

	const onSubmit = async (e:any) => {
		const isValid = await trigger();
		e.preventDefault();

		if (isValid) {
			emailjs.sendForm(serviceID, templateID, form.current ? form.current : '', key)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

			setFormSubmitted(true);
			window.scrollTo({
				top: 900,
				left: 0,
				behavior: "smooth",
			});
		}
	}

	const inputStyling = "w-full border-0 border-b-[1px] px-0 py-1 contactFormInput"
	const textareaStyling = `w-full mb-5 rounded-lg  px-5 py-3`;

  return (
	<div className="bg-white text-left py-10 px-5">
		{
			!formSubmitted ? (
				<form ref={form} onSubmit={onSubmit} className="flex flex-col gap-8">
					{/* EMAIL */}
					<div id="emailInput">
						<p className="text-sm pb-3">Email address <span className="text-red-700">*</span></p>
						<input
							className={`${inputStyling}`}
							type="email"
							placeholder="me@email.com"
							// SET INPUT ATTRIBUTES
							{...register("emailInput", {
								required: true,
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Entered value does not match email format",
								}
							})}
						/>
						{errors.emailInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.emailInput.type === "required" && "* This field is required."}
								{errors.emailInput.type === "pattern" && "* Entered value does not match email format"}
							</p>
						)}
					</div>
					{/* FULL NAME */}
					<div id="fullNameInput">
						<p className="text-sm pb-3">Full Name <span className="text-red-700">*</span></p>
						<input
							className={`${inputStyling}`}
							type="text"
							placeholder="John Doe"
							// SET INPUT ATTRIBUTES
							{...register("fullNameInput", {
								required: true,
								maxLength: 100
							})}
						/>
						{errors.fullNameInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.fullNameInput.type === "required" && "This field is required."}
								{errors.fullNameInput.type === "maxLength" && "Max length is 100 characters."}
							</p>
						)}
					</div>
					{/* PARTNERS NAME */}
					<div id="partnersNameInput">
						<p className="text-sm pb-3">Partner's Name <span className="text-red-700">*</span></p>
						<input
							className={`${inputStyling}`}
							type="text"
							placeholder="Jane Doe"
							// SET INPUT ATTRIBUTES
							{...register("partnersNameInput", {
								required: true,
								maxLength: 100
							})}
						/>
						{errors.partnersNameInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.partnersNameInput.type === "required" && "This field is required."}
								{errors.partnersNameInput.type === "maxLength" && "Max length is 100 characters."}
							</p>
						)}
					</div>
					{/* VENUE / LOCATION */}
					<div id="locationInput">
						<p className="text-sm pb-3">Venue / Location <span className="text-red-700">*</span></p>
						<input
							className={`${inputStyling}`}
							type="text"
							placeholder="Chicago"
							// SET INPUT ATTRIBUTES
							{...register("locationInput", {
								required: true,
								maxLength: 100
							})}
						/>
						{errors.locationInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.locationInput.type === "required" && "This field is required."}
								{errors.locationInput.type === "maxLength" && "Max length is 100 characters."}
							</p>
						)}
					</div>
					{/* WHAT'S YOUR STYLE? */}
					<div id="styleInput">
						<p className="text-sm pb-3">What's Your Style?</p>
						<input
							className={`${inputStyling}`}
							type="text"
							placeholder="Boho, Earthy, Traditional?"
							// SET INPUT ATTRIBUTES
							{...register("styleInput", {
								required: false,
								maxLength: 300
							})}
						/>
						{errors.styleInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.styleInput.type === "maxLength" && "Max length is 300 characters."}
							</p>
						)}
					</div>
					{/* ESTIMATED BUDGET */}
					<div id="estimatedBudgetInput">
						<p className="text-sm pb-3">Estimated Budget</p>
						<input
							className={`${inputStyling}`}
							type="text"
							placeholder="Photography Budget"
							// SET INPUT ATTRIBUTES
							{...register("estimatedBudgetInput", {
								required: false,
								maxLength: 15
							})}
						/>
						{errors.estimatedBudgetInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.estimatedBudgetInput.type === "maxLength" && "Max length is 15 characters."}
							</p>
						)}
					</div>
					{/* IG HANDLE */}
					<div id="igHandleInput">
						<p className="text-sm pb-3">IG Handle <span className="text-red-700">*</span></p>
						<input
							className={`${inputStyling}`}
							type="text"
							placeholder="@danishposts"
							// SET INPUT ATTRIBUTES
							{...register("igHandleInput", {
								required: true,
								maxLength: 15
							})}
						/>
						{errors.igHandleInput && (
							<p className="pt-2 text-primary-500 text-xs">
								{errors.igHandleInput.type === "required" && "This field is required."}
								{errors.igHandleInput.type === "maxLength" && "Max length is 15 characters."}
							</p>
						)}
					</div>
					{/* SERVICES */}
					<div id="sericesInpuut">
						<p className="text-sm pb-3">What services are you interested in? <span className="text-red-700">*</span></p>
						<div className='p-2'>
							<input
								type='checkbox'
								{...register('weddingCheckbox')}
								className='mr-3'
								id="weddingCheckbox"
								defaultChecked
							/>
							<label htmlFor='weddingCheckbox'>
								Wedding
							</label>
						</div>
						<div className='p-2'>
							<input
								type='checkbox'
								{...register('engagementCheckbox')}
								className='mr-3'
								id="engagementCheckbox"
							/>
							<label htmlFor='engagementCheckbox'>
								Engagement
							</label>
						</div>
						<div className='p-2'>
							<input
								type='checkbox'
								{...register('couplesCheckbox')}
								className='mr-3'
								id="couplesCheckbox"
							/>
							<label htmlFor='couplesCheckbox'>
								Couples
							</label>
						</div>
						<div className='p-2'>
							<input
								type='checkbox'
								{...register('otherCheckbox')}
								className='mr-3'
								id="otherCheckbox"
							/>
							<label htmlFor='otherCheckbox'>
								Other
							</label>
						</div>
					</div>
					{/* DREAM WEDDING TEXTAREA */}
					<div id="dreamWeddingTextarea">
						<p className="text-sm pb-3">Tell us about your dream wedding/session!!  All the fun details!! <span className="text-red-700">*</span></p>
						<textarea
							className={textareaStyling}
							placeholder=""
							rows={4}
							cols={50}
							// SET INPUT ATTRIBUTES
							{...register("dreamWeddingTextarea", {
								required: true,
								maxLength: 2000
							})}
						/>
						{/* ERROR VALIDATION AND TEXT IF ERROR IS THROWN */}
						{errors.dreamWeddingTextarea && (
							<p className="mt-1 text-primary-500">
								{errors.dreamWeddingTextarea.type === "required" && "This field is required."}
								{errors.dreamWeddingTextarea.type === "maxLength" && "Max length is 2000 characters."}
							</p>
						)}
					</div>
					<input type="submit" value="SEND" className="text-black w-1/4 py-3 mx-auto contactFormSubmitButton" style={{backgroundColor: "#f6f2ef"}}/>
				</form>
			 )
			 :
			 (
				<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6, ease: "linear" }} className="text-center flex flex-col gap-8">
					<p className="anton-sc-regular italic text-4xl md:text-5xl text-stone-800 tracking-widest">FORM SUBMITTED!</p>
					<p className="font-light leading-9 tracking-widest">Thank you! I've received your inquiry and will be getting in touch with you soon! Look out for my reply in your email. I'm so looking forward to discussing your big plans with you!</p>
				</motion.div>
			 )
		}
	</div>
  )
}

export default ContactForm