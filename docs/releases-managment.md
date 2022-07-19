# Releases Managment

## Create a major release 
1. Run pipeline __"create_major_release"__   trigger manually. 
2. For each commit into develop branch __"update_dev"__
3. Run pipeline __"upgrade_major_release_beta"__
4. For each commit into test branch __"update_beta"__
5. Run pipeline __"upgrade_major_release_prod"__
6. For each commit into master branch __"update_prod"__

## Create a Minor release 
1. Run pipeline __"create_minor_release"__
2. For each commit into develop branch __"update_dev"__
3. Run pipeline __"upgrade_minor_release_beta"__
4. For each commit into test branch __"update_beta"__
5. Run pipeline __"upgrade_minor_release_prod"__
6. For each commit into master branch __"update_prod"__

## Create a Patch
1. For each commit into develop branch __"update_dev"__
2. For each commit into test branch __"update_beta"__
3. For each commit into master branch __"update_prod"__
