<template>
    <section class="">
        <div class="flex flex-col items-center mx-auto py-24">
            <h1 class="text-3xl font-bold">Inscrivez-vous</h1>
        
            <form action="" class="py-10 flex flex-col items-center">
                <div class="flex flex-row gap-8 py-6">
                    <input placeholder="Nom" type="text" name="name" id="name" class="form-control w-44 py-1 border rounded bg-[#EBEBEB]">
                    <input placeholder="Prénom" type="text" name="name" id="name" class="form-control w-44 py-1 border rounded bg-[#EBEBEB]">
                </div>
                <div class="form-group">
                    <input placeholder="email" type="email" name="email" id="email" class="form-control w-96 py-1 border rounded bg-[#EBEBEB]">
                </div>
                <div class="form-group">
                    <input placeholder="mot de passe" type="password" name="password" id="password" class="form-control mt-6 py-1 w-96 border rounded bg-[#EBEBEB]">
                </div>
                <button class="border bg-[#FF6363] w-52 py-1 text-black rounded-full mt-10">S'enregistrer</button>
            </form>
        </div>
        <div class="flex flex-col items-center mx-auto">
            <p>Vous avez déjà un compte ? <span class="text-[#FF6363]"><a href="/login">Connectez-vous</a></span></p>
        </div>
    </section>
</template>