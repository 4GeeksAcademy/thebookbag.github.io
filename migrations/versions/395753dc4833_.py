"""empty message

Revision ID: 395753dc4833
Revises: 11dacc1f72b0
Create Date: 2023-07-20 12:12:04.024020

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '395753dc4833'
down_revision = '11dacc1f72b0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profile', schema=None) as batch_op:
        batch_op.add_column(sa.Column('favorite_quotes', sa.String(length=250), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profile', schema=None) as batch_op:
        batch_op.drop_column('favorite_quotes')

    # ### end Alembic commands ###
