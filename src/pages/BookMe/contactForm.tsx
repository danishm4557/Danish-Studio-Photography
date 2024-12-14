import { Controller, useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'

const ContactForm = () => {

	const {
		control,
		register,
		trigger,
		formState: { errors }
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}

		console.log(e)
	}


	console.log(useForm);

	const inputStyling = "w-full border-0 border-b-[1px] px-0 py-1 contactFormInput"
	const textareaStyling = `w-full mb-5 rounded-lg  px-5 py-3`;

  return (
	<div className="bg-white text-left py-10 px-5">
		<form
			target="_blank"
			onSubmit={onSubmit}
			method="POST"
			action="https:formsubmit.co/d9b9b317d2cef0f80aa7a02ee5f709f9"
			className="flex flex-col gap-8">
			<input type="hidden" name="_subject" value="Danish Studio - Form Submission!"></input>
			{/* EMAIL */}
			<div id="emailInput">
				<p className="text-sm pb-3">Email address *</p>
				<input
					className={`${inputStyling}`}
					type="email"
					placeholder="me@email.com"
					// SET INPUT ATTRIBUTES
					{...register("email", {
						required: true,
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Entered value does not match email format",
						}
					})}
				/>
				{errors.email && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.email.type === "required" && "* This field is required."}
						{errors.email.type === "pattern" && "* Entered value does not match email format"}
					</p>
				)}
			</div>
			{/* FULL NAME */}
			<div id="fullNameInput">
				<p className="text-sm pb-3">Full Name *</p>
				<input
					className={`${inputStyling}`}
					type="text"
					placeholder="John Doe"
					// SET INPUT ATTRIBUTES
					{...register("name", {
						required: true,
						maxLength: 100
					})}
				/>
				{errors.name && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.name.type === "required" && "This field is required."}
						{errors.name.type === "maxLength" && "Max length is 100 characters."}
					</p>
				)}
			</div>
			{/* PARTNERS NAME */}
			<div id="partnersNameInput">
				<p className="text-sm pb-3">Partner's Name *</p>
				<input
					className={`${inputStyling}`}
					type="text"
					placeholder="Jane Doe"
					// SET INPUT ATTRIBUTES
					{...register("partnersName", {
						required: true,
						maxLength: 100
					})}
				/>
				{errors.partnersName && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.partnersName.type === "required" && "This field is required."}
						{errors.partnersName.type === "maxLength" && "Max length is 100 characters."}
					</p>
				)}
			</div>
			{/* SESSION DATE */}
			<div id="sessionDate">
				<p className="text-sm pb-3">Session Date *</p>
				<Controller
					control={control}
					{...register("date")}
					render={({ field }) => (
						<DatePicker
							placeholderText='MM/DD/YYYY'
							onChange={(date) => field.onChange(date)}
							selected={field.value}
							className={`${inputStyling} w-full`}
						/>
					)}
				/>
			</div>
			{/* VENUE / LOCATION */}
			<div id="locationInput">
				<p className="text-sm pb-3">Venue / Location *</p>
				<input
					className={`${inputStyling}`}
					type="text"
					placeholder="Chicago"
					// SET INPUT ATTRIBUTES
					{...register("location", {
						required: true,
						maxLength: 100
					})}
				/>
				{errors.location && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.location.type === "required" && "This field is required."}
						{errors.location.type === "maxLength" && "Max length is 100 characters."}
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
					{...register("style", {
						required: false,
						maxLength: 300
					})}
				/>
				{errors.style && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.style.type === "maxLength" && "Max length is 300 characters."}
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
					{...register("estimatedBudget", {
						required: false,
						maxLength: 15
					})}
				/>
				{errors.estimatedBudget && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.estimatedBudget.type === "maxLength" && "Max length is 15 characters."}
					</p>
				)}
			</div>
			{/* IG HANDLE */}
			<div id="igHandleInput">
				<p className="text-sm pb-3">IG Handle *</p>
				<input
					className={`${inputStyling}`}
					type="text"
					placeholder="@danishposts"
					// SET INPUT ATTRIBUTES
					{...register("igHandle", {
						required: true,
						maxLength: 15
					})}
				/>
				{errors.igHandle && (
					<p className="pt-2 text-primary-500 text-xs">
						{errors.igHandle.type === "required" && "This field is required."}
						{errors.igHandle.type === "maxLength" && "Max length is 15 characters."}
					</p>
				)}
			</div>
			{/* SERVICES */}
			<div id="igHandleInput">
				<p className="text-sm pb-3">What services are you interested in? *</p>
				<div className='p-2'>
					<input
						type='checkbox'
						{...register('wedding')}
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
						{...register('engagement')}
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
						{...register('couples')}
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
						{...register('other')}
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
				<p className="text-sm pb-3">Tell us about your dream wedding/session!!  All the fun details!! *</p>
				<textarea
					className={textareaStyling}
					placeholder=""
					rows={4}
					cols={50}
					// SET INPUT ATTRIBUTES
					{...register("dreamWeddingText", {
						required: true,
						maxLength: 2000
					})}
				/>
				{/* ERROR VALIDATION AND TEXT IF ERROR IS THROWN */}
				{errors.dreamWeddingText && (
					<p className="mt-1 text-primary-500">
						{errors.dreamWeddingText.type === "required" && "This field is required."}
						{errors.dreamWeddingText.type === "maxLength" && "Max length is 2000 characters."}
					</p>
				)}
			</div>
			<input type="submit" value="SEND" className="text-black w-1/4 py-3 mx-auto contactFormSubmitButton" style={{backgroundColor: "#f6f2ef"}}/>
		</form>
	</div>
  )
}

export default ContactForm