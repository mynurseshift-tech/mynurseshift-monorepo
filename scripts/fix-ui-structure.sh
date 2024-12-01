#!/bin/bash

# Chemin vers les dossiers
UI_PATH="/Users/fawsy/CascadeProjects/mynurseshift-tech/mynurseshift-monorepo/libs/shared/ui"
NESTED_UI_PATH="$UI_PATH/ui"

# Déplacer tous les fichiers vers le dossier parent
cp -r "$NESTED_UI_PATH/"* "$UI_PATH/"

# Supprimer le dossier ui imbriqué
rm -rf "$NESTED_UI_PATH"
