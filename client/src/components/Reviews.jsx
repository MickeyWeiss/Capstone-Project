import { useState } from 'react'
import { useEffect } from 'react'

const Reviews = () => {
    return (
        <>
        <div id="review-container">
            <h1>Recently Reviewed Destinations</h1>
            <div>
            <h2>Jerusalem</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Paris</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Rome</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Positano</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Venice</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Monaco</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Nice</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>London</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Dublin</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Amsterdam</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>

        </div>
        </>
    )
}

export default Reviews