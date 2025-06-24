<script lang="ts">
</script>

<main>
 <div class="information">
            <div class="personal">
                <div class="titel">
                    <h2>Informatie</h2>
                </div>
                <div class="question">
                    Naam:
                </div>
                <div class="awnser">
                    Yukiyo
                </div>
                <div class="question">
                    Famillienaam:
                </div>
                <div class="awnser">
                    Sarlet
                </div>
                <div class="question">
                    Adres:
                </div>
                <div class="awnser">
                    <p>Beukendreef 7,</p>
                    <p>9690 kluisbergen</p>
                </div>
                <div class="question">
                    Opleiding:
                </div>
                <div class="awnser">
                    <p>Front and backend</p>
                    <p>Webdevelopment</p>
                </div>
            </div>
            <div class="socials">
                <div class="titel">
                    <h2>Gegevens</h2>
                </div>
                <div class="question">
                    Number:
                </div>
                <div class="awnser">
                    +32 470 86 91 76
                </div>
                <div class="question">
                    Email:
                </div>
                <div class="awnser">
                    yu.sarlet@gmail.com
                </div>
                <div class="question">
                    LinkdIn:
                </div>
                <div class="awnser">
                    <a href="https://www.linkedin.com/in/yukiyo-sarlet-483477311/">
                        LinkdIn Yukiyo Sarlet</a>
                </div>
                <div class="question">
                    Github:
                </div>
                <div class="awnser">
                    <a href="  https://github.com/yukiyosarlet">
                        Github Yukiyo Sarlet</a>

                </div>
            </div>
            <div class="language">
                <div class="titel">
                    <h2>Talen</h2>
                </div>
                <div class="taal">
                    Nederlands (moedertaal)
                </div>
                <div class="taal">
                    Engels (vloeiend)
                </div>
                <div class="taal">
                    Frans (redelijk)
                </div>
            </div>
            <div class="hobbies">
                <div class="titel">
                    <h2>Hobbies</h2>
                </div>
                <div class="hobby">
                    fitness
                </div>
                <div class="hobby">
                    gamen
                </div>
                <div class="hobby">
                    zwemmen
                </div>
                <div class="hobby">
                    zeilen
                </div>
            </div>
            <div class="skills">
                <div class="titel">
                    <h2>Skills</h2>
                </div>
                <div class="skill">
                    HTML
                </div>
                <div class="skill">
                    Javascript
                </div>
                <div class="skill">
                    Scss/css
                </div>
                <div class="skill">
                    PHP
                </div>
                <div class="skill">
                    API
                </div>
                <div class="skill">
                    SQL
                </div>
                <div class="skill">
                    Svelte
                </div>
                <div class="skill">
                    Photoshop
                </div>
                <div class="skill">
                    Illustrator
                </div>
            </div>

            <div class="opleiding">
                <div class="titel">
                    <h2>Opleiding</h2>
                </div>
                <div class="datum">
                    sep 2016 - jun 2019
                </div>
                <div class="omschrijving">
                    <p>Atheneum Avelgem</p>
                    <p> Sociaal technische wetenschappen</p>
                </div>
                <div class="datum">
                    Feb 2022- heden
                </div>
                <div class="omschrijving">
                    <p> Howest; Kortrijk</p>
                    <p>front and backend web development</p>
                </div>
            </div>

            <div class="ervaring">
                <div class="titel">
                    <h2>ervaring</h2>
                </div>
                <div class="datum">
                    1/juli - 19/ juli 2024
                </div>
                <div class="omschrijving">
                    DLC System integration
                    <p>1.5 week als instalateur</p>
                    <p>1.5 week als programmeur</p>
                </div>
            </div>
        </div> 
</main>

<style lang="scss">

.information {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	.personal {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.socials {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.language {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.hobbies {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.skills {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.opleiding {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.ervaring {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
}

.titel {
	grid-area: titel;
}
.awnser {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.taal {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.hobby {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.skill {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.datum {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.omschrijving {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 100%;
	animation: typing 2s steps(20, end) forwards;
}

@media (max-width: 1203px) {
	.omschrijving {
		overflow: hidden;
		white-space: wrap;
		font-size: 1.25rem;
		width: 100%;
		animation: typing 2s steps(20, end) forwards;
	}
}

@media (max-width: 768px) {
	.information {
		grid-template-columns: 1fr;
	}
	.omschrijving {
		overflow: hidden;
		white-space: nowrap;
		font-size: 1.25rem;
		width: 100%;
		animation: typing 2s steps(20, end) forwards;
	}
} 
 
</style>
