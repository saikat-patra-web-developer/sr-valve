import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import EnquiryForm from './EnquiryForm'
export default function QuoteModal({ isOpen, onClose, initialProduct = '' }) {
 const dialog=useRef(null)
 useEffect(()=>{const el=dialog.current;if(isOpen&&!el.open)el.showModal();else if(!isOpen&&el.open)el.close()},[isOpen])
 return <dialog ref={dialog} className="quote-dialog" onCancel={onClose} onClick={e=>{if(e.target===dialog.current)onClose()}}><div className="quote-dialog-content"><div className="quote-dialog-heading"><div><h2>Request a Quote</h2><p>Let’s find the right valve for your project.</p></div><button aria-label="Close enquiry" onClick={onClose}><X/></button></div>{isOpen&&<EnquiryForm key={initialProduct} initialProduct={initialProduct}/>}</div></dialog>
}
