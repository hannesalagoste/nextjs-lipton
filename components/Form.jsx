
import React, { useState } from 'react';

const Form = () => {
    const sofernStyles = {
        fontSize: '14px',
        marginTop: '-20px',
        marginBottom: '10px',
        opacity: 0.9,
        color: '#EA6852'
    };


    const initialFormData = {
        first_name: '',
        last_name: '',
        streetno: '',
        postcode: '',
        city: '',
        email: '',
        clothing_size: '',
        shoe_size: '',
        image: '',
        direktmarketing_mitteilungen: false,
        online_werbung: false,
        age_confirmation: false,
    };
    const [formData, setFormData] = useState(initialFormData);


    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Contact form submission failed');
            }

            // Handle successful submission
            console.log('Contact form submitted successfully');
            setIsSubmitted(true); // Set form submission status to true
            setFormData(initialFormData); // Reset the form fields

        } catch (error) {
            // Handle submission error
            console.error('An error occurred while submitting the form', error);
        }
    };

    return (
        <div>
            <section id="lipton-promo-form" className="lipton-promo-form">
                <div className="container container--lg">
                    <div className="lipton-promo-form__inner">
                        <form className="webform-submission-form webform-submission-add-form webform-submission-promo-form webform-submission-promo-add-form webform-submission-promo-paragraph-21-form webform-submission-promo-paragraph-21-add-form js-webform-details-toggle webform-details-toggle"
                            onSubmit={handleSubmit}>

                            <div data-drupal-selector="edit-flexbox" className="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper" id="edit-flexbox">
                                <div className="webform-flex webform-flex--1">
                                    <div className="webform-flex--container">
                                        <div className="js-form-item form-item js-form-type-textfield form-item-vorname js-form-item-vorname">
                                            <input
                                                autoComplete="off"
                                                data-webform-required-error="Vorname feld ist erforderlich."
                                                type="text"
                                                id="first_name"
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                size={60}
                                                maxLength={255}
                                                placeholder="Vorname"
                                                className="form-text required"
                                                required aria-required="true" />
                                            <label htmlFor="first_name" className="option js-form-required form-required">Vorname*</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="webform-flex webform-flex--1">
                                    <div className="webform-flex--container">
                                        <div className="js-form-item form-item js-form-type-textfield form-item-nachname js-form-item-nachname">
                                            <input
                                                autoComplete="off"
                                                data-webform-required-error="Nachname feld ist erforderlich."
                                                type="text"
                                                id="last_name"
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                size={60}
                                                maxLength={255}
                                                placeholder="Nachname"
                                                className="form-text required"
                                                required aria-required="true" />

                                            <label htmlFor="last_name" className="option js-form-required form-required">Nachname*</label>
                                        </div>
                                    </div></div></div>
                            <div data-drupal-selector="edit-flexbox-01" className="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper" id="edit-flexbox-01"><div className="webform-flex webform-flex--1"><div className="webform-flex--container"><div className="js-form-item form-item js-form-type-textfield form-item-strasse-nr- js-form-item-strasse-nr-">
                                <input
                                    autoComplete="off"
                                    data-webform-required-error="Straße + Nr. feld ist erforderlich."
                                    type="text"
                                    id="streetno"
                                    name="streetno"
                                    value={formData.streetno}
                                    onChange={handleChange}
                                    size={60}
                                    maxLength={255}
                                    placeholder="Straße + Nr."
                                    className="form-text required"
                                    required aria-required="true" />

                                <label htmlFor="streetno" className="option js-form-required form-required">Straße + Nr.*</label>
                            </div>
                            </div></div><div className="webform-flex webform-flex--1"><div className="webform-flex--container"><div className="js-form-item form-item js-form-type-textfield form-item-plz js-form-item-plz">
                                <input
                                    autoComplete="off"
                                    data-webform-required-error="PLZ feld ist erforderlich."
                                    type="text"
                                    id="postcode"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    size={60}
                                    maxLength={255}
                                    placeholder="PLZ"
                                    className="form-text required"
                                    required aria-required="true" />

                                <label htmlFor="postcode" className="option js-form-required form-required">PLZ*</label>
                            </div>
                            </div></div></div>
                            <div data-drupal-selector="edit-flexbox-02" className="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper" id="edit-flexbox-02"><div className="webform-flex webform-flex--1"><div className="webform-flex--container"><div className="js-form-item form-item js-form-type-textfield form-item-ort js-form-item-ort">
                                <input
                                    autoComplete="off"
                                    data-webform-required-error="Ort feld ist erforderlich."
                                    type="text"
                                    id="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    size={60}
                                    maxLength={255}
                                    placeholder="Ort"
                                    className="form-text required"
                                    required
                                    aria-required="true" />

                                <label htmlFor="City" className="option js-form-required form-required">Ort*</label>
                            </div>
                            </div></div><div className="webform-flex webform-flex--1"><div className="webform-flex--container"><div className="js-form-item form-item js-form-type-email form-item-e-mail-adresse js-form-item-e-mail-adresse">
                                <input
                                    autoComplete="off"
                                    data-webform-required-error="E-Mail-Adresse feld ist erforderlich."
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    size={60}
                                    maxLength={254}
                                    placeholder="E-Mail-Adresse"
                                    className="form-email required"
                                    required
                                    aria-required="true" />

                                <label htmlFor="email" className="option js-form-required form-required">E-Mail-Adresse*</label>
                            </div>
                            </div></div></div>
                            <div data-drupal-selector="edit-flexbox-04" className="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper" id="edit-flexbox-04">
                                <div className="webform-flex webform-flex--1">
                                    <div className="webform-flex--container">
                                        <div className="js-form-item form-item js-form-type-select form-item-konfektionsgrosse js-form-item-konfektionsgrosse">
                                            <select
                                                id="clothing_size"
                                                name="clothing_size"
                                                value={formData.clothing_size}
                                                onChange={handleChange}
                                                className="form-select">
                                                <option value="" defaultValue="">- Wählen -</option>
                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                            <label htmlFor="clothing_size" className="option">KONFEKTIONSGRÖßE</label>
                                        </div>
                                    </div></div><div className="webform-flex webform-flex--1"><div className="webform-flex--container"><div className="js-form-item form-item js-form-type-select form-item-schuhgrosse js-form-item-schuhgrosse">
                                        <select
                                            id="shoe_size"
                                            name="shoe_size"
                                            value={formData.shoe_size}
                                            onChange={handleChange}
                                            className="form-select">
                                            <option value="" defaultValue="">- Wählen -</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                        </select>
                                        <label htmlFor="shoe_size" className="option">SCHUHGRÖßE</label>
                                    </div>
                                    </div></div></div>
                            <div style={sofernStyles} id="edit-processed-text-01" className="js-form-item form-item js-form-type-processed-text form-item- js-form-item- form-no-label">
                                * Sofern alle Artikel einer Größe vergriffen sind, wird automatisch die nächst größere Größe verschickt.
                            </div>
                            <div id="ajax-wrapper"><div className="js-form-item form-item js-form-type-webform-image-file form-item-wahlen-ein-bild-zum-hochladen-aus js-form-item-wahlen-ein-bild-zum-hochladen-aus">
                                <label className="label-file-upload" htmlFor="image" id="edit-wahlen-ein-bild-zum-hochladen-aus--label">Wählen ein Bild zum Hochladen aus</label>
                                <div id="edit-wahlen-ein-bild-zum-hochladen-aus" className="js-webform-image-file webform-image-file js-form-managed-file form-managed-file">
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        size={22}
                                        className="js-form-file form-file"
                                        data-once="fileValidate auto-file-upload" />


                                </div>

                                <div className="description">
                                    <div id="edit-wahlen-ein-bild-zum-hochladen-aus--description" className="webform-element-description"><div className="lipton-file-upload-help">
                                        &lt; 15Mb .png .jpg .jpeg .gif &gt;
                                    </div></div>
                                </div>
                            </div>
                            </div><div id="edit-processed-text" className="js-form-item form-item js-form-type-processed-text form-item- js-form-item- form-no-label">
                              <p>  Wir möchten Ihnen Inhalte oder Sonderangebote zu [Lays] oder anderen PepsiCo-Marken zur Verfügung stellen. Bitte kreuzen Sie das entsprechende Kästchen unten an, um von uns zu hören:</p>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-item-direktmarketing-mitteilungen-wie-e-mail-oder-push-benachrichtigu js-form-item-direktmarketing-mitteilungen-wie-e-mail-oder-push-benachrichtigu">
                                <input data-webform-required-error="Feld ist erforderlich."
                                    type="checkbox"
                                    id="direktmarketing_mitteilungen"
                                    name="direktmarketing_mitteilungen"
                                    //checked={formData.direktmarketing_mitteilungen}
                                    onChange={handleChange}
                                    className="form-checkbox required"
                                    required
                                    aria-required="true" />

                                <label htmlFor="direktmarketing_mitteilungen" className="option js-form-required form-required">Direktmarketing-Mitteilungen wie E-Mail oder Push-Benachrichtigungen</label>
                            </div>
                            <div className="lipton-promo-form p js-form-item form-item js-form-type-checkbox form-item-online-werbung-die-auf-ihre-interessen-und-vorlieben-auf-unseren js-form-item-online-werbung-die-auf-ihre-interessen-und-vorlieben-auf-unseren">
                                <input
                                    type="checkbox"
                                    id="online_werbung"
                                    name="online_werbung"
                                    //   checked={formData.online_werbung}
                                    onChange={handleChange}
                                    value="1"
                                    className="form-checkbox" />

                                <label htmlFor="online_werbung" className="option">Online-Werbung, die auf Ihre Interessen und Vorlieben auf unseren digitalen Assets und denen von Drittanbietern zugeschnitten ist.</label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-item-ich-bestatige-dass-ich-mindestens-16-jahre-alt-bin-und-akzeptier js-form-item-ich-bestatige-dass-ich-mindestens-16-jahre-alt-bin-und-akzeptier">
                                <input
                                    type="checkbox"
                                    id="age_confirmation"
                                    name="age_confirmation"
                                    // checked={formData.age_confirmation}
                                    onChange={handleChange}
                                    value="1"
                                    className="form-checkbox" />

                                <label htmlFor="age_confirmation" className="option">Ich bestätige, dass ich mindestens 16 Jahre alt bin [und akzeptiere die <a href="/teilnahmebedingungen-datenschutzbestimmungen">Aktionsbedingungen</a>]. Einzelheiten entnehmen Sie bitte unserer <a href="https://www.pepsicoprivacypolicy.com/de" target="_blank">Datenschutzerklärung</a>. Sie können Ihre Datenschutzrechte ausüben oder Ihre Präferenzen ändern, indem Sie hier <a href="">klicken</a></label>
                            </div>
                            <div className="lipton-promo-form__submit webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper" data-drupal-selector="edit-flexbox-03" id="edit-flexbox-03"><div className="webform-flex webform-flex--1"><div className="webform-flex--container"><div data-drupal-selector="edit-actions" className="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions">
                                <input
                                    className="webform-button--submit button button--primary js-form-submit form-submit"
                                    type="submit"
                                    id="edit-actions-submit"
                                    name="op"
                                    value="ABSENDEN" />

                            </div>
                            </div></div></div>
                            <input
                                autoComplete="off"
                                data-drupal-selector="form-v9aw9h8n7sqvefoyrwrngyqyntbugurbdg7h8atn4ps"
                                type="hidden" name="form_build_id" value="form-V9AW9H8n7SqvEfoyRwrnGYqyNTBUgurbdg7H8atN4ps" />
                            <input data-drupal-selector="edit-webform-submission-promo-paragraph-21-add-form" type="hidden" name="form_id" value="webform_submission_promo_paragraph_21_add_form" />



                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Form;
