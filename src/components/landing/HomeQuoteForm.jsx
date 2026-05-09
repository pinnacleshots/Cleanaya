import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS } from '../../config'

const services = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Move In / Move Out',
  'Airbnb Turnover',
  'Post-Event Clean',
]

const frequencies = ['One-Time', 'Weekly', 'Bi-Weekly', 'Monthly']

const propertyTypes = ['House', 'Apartment / Condo', 'Townhome', 'Commercial / Office', 'Other']

const sqftRanges = [
  'Under 1,000 sq ft',
  '1,000 – 1,500 sq ft',
  '1,500 – 2,000 sq ft',
  '2,000 – 2,500 sq ft',
  '2,500 – 3,000 sq ft',
  '3,000+ sq ft',
  'Not sure',
]

const bedroomOptions = ['Studio', '1', '2', '3', '4', '5+']

const bathroomOptions = ['1', '1.5', '2', '2.5', '3', '3+']

const timePreferences = [
  'Flexible',
  'Morning (8am–12pm)',
  'Afternoon (12pm–4pm)',
  'Evening (4pm–8pm)',
]

const initialForm = () => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceType: services[0],
  frequency: frequencies[0],
  addressLine: '',
  addressLine2: '',
  city: '',
  state: 'MN',
  zip: '',
  propertyType: propertyTypes[0],
  sqftRange: sqftRanges[0],
  bedrooms: '2',
  bathrooms: '2',
  preferredDate: '',
  preferredTime: timePreferences[0],
  accessNotes: '',
  pets: '',
  notes: '',
})

export default function HomeQuoteForm() {
  const [form, setForm] = useState(() => initialForm())
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], [])

  const setField = (key) => (e) => {
    const v = e.target.value
    setForm((f) => ({ ...f, [key]: v }))
  }

  const buildMessage = () => {
    const f = form
    const addr2 = f.addressLine2.trim()
    const lines = [
      `Service: ${f.serviceType}`,
      `Frequency: ${f.frequency}`,
      '',
      'Service address:',
      f.addressLine.trim(),
      ...(addr2 ? [addr2] : []),
      `${f.city.trim()}, ${f.state.trim().toUpperCase()} ${f.zip.trim()}`,
      '',
      'Property:',
      `Type: ${f.propertyType}`,
      `Approx. size: ${f.sqftRange}`,
      `Bedrooms: ${f.bedrooms}`,
      `Bathrooms: ${f.bathrooms}`,
      f.pets ? `Pets: ${f.pets}` : 'Pets: (not specified)',
      '',
      'Scheduling:',
      `Preferred date: ${f.preferredDate || 'No specific date'}`,
      `Preferred time: ${f.preferredTime}`,
      '',
      'Access & entry (codes, parking, alarm, etc.):',
      f.accessNotes.trim() || '(none)',
      '',
      'Additional notes:',
      f.notes.trim() || '(none)',
    ]
    return lines.join('\n')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!EMAILJS.publicKey || !EMAILJS.serviceId || !EMAILJS.contactTemplateId) {
      setError('Email is not configured.')
      return
    }
    setLoading(true)
    setError(null)
    const message = buildMessage()
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.contactTemplateId,
        {
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          from_phone: form.phone,
          message,
          to_email: 'support@cleanaya.com',
        },
        EMAILJS.publicKey
      )
      setSubmitted(true)
      setForm(initialForm())
    } catch {
      setError('Something went wrong. Call (952) 206-6429.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="cy-booking-form-wrap cy-reveal">
      <h3>✦ Request a Free Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="cy-form-row">
          <div className="cy-form-group">
            <label htmlFor="hq-first">First Name</label>
            <input
              id="hq-first"
              value={form.firstName}
              onChange={setField('firstName')}
              required
              placeholder="Jane"
            />
          </div>
          <div className="cy-form-group">
            <label htmlFor="hq-last">Last Name</label>
            <input
              id="hq-last"
              value={form.lastName}
              onChange={setField('lastName')}
              required
              placeholder="Smith"
            />
          </div>
        </div>
        <div className="cy-form-group">
          <label htmlFor="hq-email">Email Address</label>
          <input
            id="hq-email"
            type="email"
            value={form.email}
            onChange={setField('email')}
            required
            placeholder="jane@example.com"
          />
        </div>
        <div className="cy-form-group">
          <label htmlFor="hq-phone">Phone Number</label>
          <input
            id="hq-phone"
            type="tel"
            value={form.phone}
            onChange={setField('phone')}
            required
            placeholder="(612) 555-0100"
          />
        </div>
        <div className="cy-form-row">
          <div className="cy-form-group">
            <label htmlFor="hq-service">Service Type</label>
            <select id="hq-service" value={form.serviceType} onChange={setField('serviceType')}>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="cy-form-group">
            <label htmlFor="hq-freq">Frequency</label>
            <select id="hq-freq" value={form.frequency} onChange={setField('frequency')}>
              {frequencies.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="cy-form-section-hint">Where we&apos;ll clean</p>
        <div className="cy-form-group">
          <label htmlFor="hq-addr1">Street Address</label>
          <input
            id="hq-addr1"
            value={form.addressLine}
            onChange={setField('addressLine')}
            required
            autoComplete="street-address"
            placeholder="123 Main St"
          />
        </div>
        <div className="cy-form-group">
          <label htmlFor="hq-addr2">Apt / Suite / Unit <span className="cy-form-optional">(optional)</span></label>
          <input
            id="hq-addr2"
            value={form.addressLine2}
            onChange={setField('addressLine2')}
            autoComplete="address-line2"
            placeholder="Unit 4B"
          />
        </div>
        <div className="cy-form-row">
          <div className="cy-form-group">
            <label htmlFor="hq-city">City</label>
            <input
              id="hq-city"
              value={form.city}
              onChange={setField('city')}
              required
              autoComplete="address-level2"
              placeholder="Minneapolis"
            />
          </div>
          <div className="cy-form-group">
            <label htmlFor="hq-state">State</label>
            <input
              id="hq-state"
              value={form.state}
              onChange={(e) => {
                const v = e.target.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2)
                setForm((f) => ({ ...f, state: v }))
              }}
              required
              maxLength={2}
              autoComplete="address-level1"
              className="cy-input-state"
              placeholder="MN"
            />
          </div>
        </div>
        <div className="cy-form-group">
          <label htmlFor="hq-zip">ZIP Code</label>
          <input
            id="hq-zip"
            value={form.zip}
            onChange={setField('zip')}
            required
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}(-[0-9]{4})?"
            placeholder="55401"
          />
        </div>

        <p className="cy-form-section-hint">About the space</p>
        <div className="cy-form-group">
          <label htmlFor="hq-prop-type">Property Type</label>
          <select id="hq-prop-type" value={form.propertyType} onChange={setField('propertyType')}>
            {propertyTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="cy-form-row">
          <div className="cy-form-group">
            <label htmlFor="hq-sqft">Approx. Square Footage</label>
            <select id="hq-sqft" value={form.sqftRange} onChange={setField('sqftRange')}>
              {sqftRanges.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="cy-form-group">
            <label htmlFor="hq-pets">Pets on site</label>
            <select id="hq-pets" value={form.pets} onChange={setField('pets')}>
              <option value="">Prefer not to say</option>
              <option value="No pets">No pets</option>
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="Dogs and cats">Dogs and cats</option>
              <option value="Other">Other (see notes)</option>
            </select>
          </div>
        </div>
        <div className="cy-form-row">
          <div className="cy-form-group">
            <label htmlFor="hq-beds">Bedrooms</label>
            <select id="hq-beds" value={form.bedrooms} onChange={setField('bedrooms')}>
              {bedroomOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="cy-form-group">
            <label htmlFor="hq-baths">Bathrooms</label>
            <select id="hq-baths" value={form.bathrooms} onChange={setField('bathrooms')}>
              {bathroomOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="cy-form-section-hint">When you&apos;d like us</p>
        <div className="cy-form-row">
          <div className="cy-form-group">
            <label htmlFor="hq-date">Preferred Date <span className="cy-form-optional">(optional)</span></label>
            <input
              id="hq-date"
              type="date"
              min={minDate}
              value={form.preferredDate}
              onChange={setField('preferredDate')}
            />
          </div>
          <div className="cy-form-group">
            <label htmlFor="hq-time-pref">Preferred Time Window</label>
            <select id="hq-time-pref" value={form.preferredTime} onChange={setField('preferredTime')}>
              {timePreferences.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="cy-form-group">
          <label htmlFor="hq-access">Access &amp; parking</label>
          <textarea
            id="hq-access"
            value={form.accessNotes}
            onChange={setField('accessNotes')}
            placeholder="Entry codes, lockbox location, gate / building access, where to park, alarm instructions…"
          />
        </div>
        <div className="cy-form-group">
          <label htmlFor="hq-notes">Additional Notes</label>
          <textarea
            id="hq-notes"
            value={form.notes}
            onChange={setField('notes')}
            placeholder="Special requests, allergies, areas to focus on, supplies we should bring…"
          />
        </div>
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        {submitted && <p className="text-[var(--cy-sky)] text-sm mb-2 font-medium">✓ Request sent! We&apos;ll be in touch soon.</p>}
        <button type="submit" className="cy-form-submit" disabled={loading}>
          {loading ? 'Sending…' : '✦ Send Request'}
        </button>
      </form>
    </div>
  )
}
