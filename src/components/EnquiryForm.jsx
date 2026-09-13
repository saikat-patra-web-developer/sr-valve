import { useId, useState } from 'react'
import { User, Building2, Mail, Phone, Send, Lock } from 'lucide-react'
import { productsData } from '../data/productsData'
export default function EnquiryForm() {
 const uid=useId();const [draft,setDraft]=useState(null)
 const submit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const body=Object.entries(data).map(([key,value])=>`${key}: ${value}`).join('\n');setDraft(`mailto:info@ssprvalve.com?subject=${encodeURIComponent('Valve enquiry: '+(data.Product||'Project requirement'))}&body=${encodeURIComponent(body)}`)}
 return <form onSubmit={submit} className="enquiry-form">
  <div className="enquiry-fields">{[['Name','Your Name',User,'text','name'],['Company','Company Name',Building2,'text','organization'],['Email','Email Address',Mail,'email','email'],['Phone','Phone Number',Phone,'tel','tel']].map(([name,label,Icon,type,autoComplete])=><label key={name} htmlFor={`${uid}-${name}`}><span>{label} *</span><div><Icon/><input id={`${uid}-${name}`} name={name} type={type} autoComplete={autoComplete} required placeholder={`${label} *`}/></div></label>)}</div>
  <label htmlFor={`${uid}-product`}><span>Product Requirement *</span><select id={`${uid}-product`} name="Product" defaultValue="" required><option value="">Select Product / Application</option>{productsData.map(p=><option key={p.id}>{p.name}</option>)}<option>Custom Flow Control Solution</option></select></label>
  <label htmlFor={`${uid}-message`}><span>Your Message *</span><textarea id={`${uid}-message`} name="Message" required rows={8} placeholder="Please share your project details, specifications or any questions..."/></label>
  <div className="form-bottom"><button className="button-orange" type="submit"><Send size={18}/>Send Inquiry</button><p><Lock size={18}/><span>Your information is safe with us.<br/>We respect your privacy.</span></p></div>
  <small className="email-note">Your enquiry opens as an email draft for you to send.</small>
  {draft&&<div className="draft-ready" role="status"><strong>Your enquiry is ready.</strong><p>Open your email app, review the details, and send it to info@ssprvalve.com.</p><a className="button-primary" href={draft}>Open Email Draft <Mail size={16}/></a></div>}
 </form>
}
